import { promises as fs } from 'node:fs'
import {
  cleanupSVG,
  deOptimisePaths,
  parseColors,
  runSVGO,
  SVG,
} from '@iconify/tools'
import { createResolver } from '@nuxt/kit'
import IconsResolver from 'unplugin-icons/resolver'
import ViteComponents from 'unplugin-vue-components/vite'

const { resolve } = createResolver(import.meta.url)

const baseUrl = import.meta.env.URL || 'https://quantumbot.kz'

export default defineNuxtConfig({
  devtools: { enabled: true },

  // ssr: false,
  pages: false,
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
      },
      title: 'Quantum - бот для автоматизации цен на Kaspi.kz',
      meta: [
        {
          name: 'description',
          content: 'Интеллектуальный сервис для продавцов на Kaspi.kz, который автоматически корректирует цены на товары, помогая оптимизировать продажи и улучшить позиции в выдаче.',
        },
        {
          property: 'og:title',
          content: 'Quantum - бот для автоматизации цен на Kaspi.kz',
        },
        {
          property: 'og:description',
          content: 'Интеллектуальный сервис для продавцов на Kaspi.kz, который автоматически корректирует цены на товары, помогая оптимизировать продажи и улучшить позиции в выдаче.',
        },
        {
          property: 'og:url',
          content: baseUrl,
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
          property: 'og:image',
          content: `${baseUrl}/web-app-manifest-192x192.png`,
        },
        {
          name: 'theme-color',
          content: '#ffffff',
        },
      ],
      link: [
        {
          rel: 'manifest',
          href: '/site.webmanifest',
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
        
            ym(111122100, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});`
        }
      ]
    },
  },

  modules: [
    '@nuxtjs/google-fonts',
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
            const content = await fs.readFile(filename, 'utf8')
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
        metaPixel: {
          id: '2310206252799727',
        },
      },
    },
  },

  googleFonts: {
    families: {
      'Public Sans': [300, 400, 500],
    },
  },

  image: {
    quality: 100,
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
