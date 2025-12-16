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
          content: '#F9FAFF',
        },
      ],
      link: [
        {
          rel: 'manifest',
          href: '/site.webmanifest',
        },
      ],
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
          id: '992723452252630',
        },
      },
    },
  },

  googleFonts: {
    families: {
      Onest: [300, 400, 500, 600, 700, 800, 900],
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
