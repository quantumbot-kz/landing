import { promises as fs } from 'node:fs'
import {
  cleanupSVG,
  deOptimisePaths,
  parseColors,
  runSVGO,
  SVG,
} from '@iconify/tools'
// parseColors stays in use for the mono collection below.
import { createResolver } from '@nuxt/kit'
import IconsResolver from 'unplugin-icons/resolver'
import ViteComponents from 'unplugin-vue-components/vite'

const { resolve } = createResolver(import.meta.url)

const baseUrl = import.meta.env.URL || 'https://www.quantumbot.kz'

const siteTitle = 'Quantum - бот цен и автоматизация продаж на Kaspi.kz'
const siteDescription = 'Kaspi bot и аналитика для продавцов Kaspi.kz в Казахстане: автокорректировка цен, предзаказ, закупки с Wildberries и регистрация товаров в НКТ. 3 дня бесплатно.'

const DUO_SECONDARY_TONES = /#E7EAF3|#CFD5F0/gi
const DUO_PRIMARY_TONES = /#056E62|#008574|#46AEA2/gi
const DUO_SECONDARY_COLOR = '#BFDED6'

export default defineNuxtConfig({
  devtools: { enabled: true },

  // ssr: false,
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru-KZ',
      },
      title: siteTitle,
      meta: [
        {
          name: 'description',
          content: siteDescription,
        },
        {
          name: 'robots',
          content: 'index, follow, max-image-preview:large',
        },
        {
          property: 'og:title',
          content: siteTitle,
        },
        {
          property: 'og:description',
          content: siteDescription,
        },
        {
          property: 'og:url',
          content: `${baseUrl}/`,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:site_name',
          content: 'Quantum',
        },
        {
          property: 'og:locale',
          content: 'ru_KZ',
        },
        {
          property: 'og:image',
          content: `${baseUrl}/og-image.png`,
        },
        {
          property: 'og:image:width',
          content: '1200',
        },
        {
          property: 'og:image:height',
          content: '630',
        },
        {
          property: 'og:image:alt',
          content: 'Интерфейс Quantum: автокорректировка цен на Kaspi.kz',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:title',
          content: siteTitle,
        },
        {
          name: 'twitter:description',
          content: siteDescription,
        },
        {
          name: 'twitter:image',
          content: `${baseUrl}/og-image.png`,
        },
        {
          name: 'theme-color',
          content: '#ffffff',
        },
      ],
      link: [
        {
          rel: 'icon',
          href: '/favicon.ico',
          sizes: 'any',
        },
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/favicon.svg',
        },
        {
          rel: 'apple-touch-icon',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'manifest',
          href: '/site.webmanifest',
        },
        // Break font discovery chain (HTML → CSS → woff2). Display weight first;
        // Cyrillic still uses system-ui (Public Sans has no Cyrillic).
        {
          rel: 'preload',
          href: '/fonts/public-sans-300-latin.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: 'anonymous',
        },
        {
          rel: 'preload',
          href: '/fonts/public-sans-300-latin-ext.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: 'anonymous',
        },
      ],
      script: [
        {
          innerHTML: `(function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=111122100', 'ym');
        
            ym(111122100, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});`,
        },
      ],
    },
  },

  modules: [
    '@nuxt/image',
    [
      'unplugin-icons/nuxt',
      {
        customCollections: {
          mono: async (name: string) => {
            const filename = `./assets/icons/mono/${name}.svg`
            const content = await fs.readFile(filename, 'utf8')
            const svg = new SVG(content)

            cleanupSVG(svg)
            parseColors(svg, {
              defaultColor: 'currentColor',
              callback: () => {
                return 'currentColor'
              },
            })
            runSVGO(svg)
            deOptimisePaths(svg)

            return svg.toMinifiedString({
              width: '1em',
              height: '1em',
            })
          },
          duo: async (name: string) => {
            const filename = `./assets/icons/duo/${name}.svg`
            const source = await fs.readFile(filename, 'utf8')

            // The source set ships a pale blue secondary tone that is all but
            // invisible on white and off-palette. Primary strokes follow
            // currentColor; the secondary tone maps onto the brand mint.
            const content = source
              .replace(DUO_SECONDARY_TONES, DUO_SECONDARY_COLOR)
              .replace(DUO_PRIMARY_TONES, 'currentColor')

            const svg = new SVG(content)

            cleanupSVG(svg)
            runSVGO(svg)
            deOptimisePaths(svg)

            return svg.toMinifiedString({
              width: '1em',
              height: '1em',
            })
          },
        },
      },
    ],
    '@nuxt/scripts',
  ],

  $production: {
    scripts: {
      registry: {
        // Defer pixel until after hydration so it does not compete with LCP.
        metaPixel: {
          id: '2310206252799727',
          trigger: 'onNuxtReady',
        },
      },
    },
  },

  image: {
    // quality: 100 kept analytics-bg.png near its 4.6 MB source weight after
    // conversion; 82 is visually indistinguishable at these sizes.
    quality: 82,
    densities: [1, 2],
    format: ['webp'],
  },

  css: [resolve('./styles/index.scss'), 'vue-final-modal/style.css'],

  vite: {
    plugins: [
      ViteComponents({
        resolvers: [
          IconsResolver({
            customCollections: ['mono', 'duo'],
          }),
        ],
        dts: true,
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          additionalData: `
            @use "${resolve('./styles/mixins')}" as *;
            @use "${resolve('./styles/variables')}" as *;
          `,
        },
      },
    },
  },

  compatibilityDate: '2024-11-23',
})
