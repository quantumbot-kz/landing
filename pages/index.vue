<template>
  <main>
    <HomepageHero />
    <HomepageResults />
    <HomepageHowItWorks />
    <HomepageProducts />
    <HomepageAnalytics />
    <HomepageTariff />
    <HomepageFaq />
    <HomepageOurTeam />
    <HomepageAnyQuestions />
  </main>
</template>

<script setup lang="ts">
import { homepageFaqItems } from '~/utils/homepage-faq'

const app = useAppConfig()
const siteUrl = app.baseUrl.replace(/\/$/, '')
const videoId = app.videoUrl.split('/').pop() || 'gQkEWI9Cwuw'
const dateModified = '2026-08-30'

useSeoMeta({
  title: 'Quantum — каспи бот и автоматизация цен на Kaspi.kz',
  description: 'Каспи бот для продавцов Kaspi.kz: автоснижение цен, предзаказ, аналитика каспи, закупки с Wildberries и регистрация в НКТ. 3 дня бесплатно.',
  ogUrl: `${siteUrl}/`,
})


useHead({
  link: [
    { rel: 'canonical', href: `${siteUrl}/` },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebPage',
            '@id': `${siteUrl}/#webpage`,
            url: `${siteUrl}/`,
            name: 'Quantum — каспи бот и автоматизация цен на Kaspi.kz',
            description: 'Каспи бот для продавцов Kaspi.kz: автоснижение цен, предзаказ, аналитика каспи-магазина, закупки с Wildberries и регистрация товаров в НКТ.',

            inLanguage: 'ru-KZ',
            isPartOf: { '@id': `${siteUrl}/#website` },
            about: { '@id': `${siteUrl}/#app` },
            primaryImageOfPage: {
              '@type': 'ImageObject',
              url: `${siteUrl}/og-image.png`,
              width: 1200,
              height: 630,
            },
            dateModified,
            publisher: { '@id': `${siteUrl}/#organization` },
          },
          {
            '@type': 'SoftwareApplication',
            '@id': `${siteUrl}/#app`,
            name: 'Quantum',
            alternateName: ['квантум бот', 'каспи бот', 'Quantum bot'],
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web',
            url: app.appUrl,
            description: 'Каспи бот для продавцов Kaspi.kz: автоснижение цен, предзаказ, аналитика каспи-магазина, закупки с Wildberries и регистрация в НКТ. После регистрации доступны 3 дня бесплатной подписки.',

            offers: {
              '@type': 'AggregateOffer',
              lowPrice: '19990',
              highPrice: '79990',
              priceCurrency: 'KZT',
              offerCount: 4,
              url: `${siteUrl}/#tariffs`,
              offers: [
                {
                  '@type': 'Offer',
                  name: 'Seller',
                  price: '19990',
                  priceCurrency: 'KZT',
                  url: app.appUrl,
                  description: 'Автокорректировка цен до 50 товаров. 3 дня бесплатной подписки после регистрации.',
                },
                {
                  '@type': 'Offer',
                  name: 'Seller Pro',
                  price: '39990',
                  priceCurrency: 'KZT',
                  url: app.appUrl,
                },
                {
                  '@type': 'Offer',
                  name: 'Seller Ultimate',
                  price: '54990',
                  priceCurrency: 'KZT',
                  url: app.appUrl,
                },
                {
                  '@type': 'Offer',
                  name: 'Seller Supreme',
                  price: '79990',
                  priceCurrency: 'KZT',
                  url: app.appUrl,
                },
              ],
            },
            provider: { '@id': `${siteUrl}/#organization` },
          },
          {
            '@type': 'VideoObject',
            '@id': `${siteUrl}/#demo-video`,
            name: 'Демо видео о сервисе Quantum',
            description: 'Обзор интерфейса Quantum: управление товарами, ценами и предзаказами на Kaspi.kz.',
            thumbnailUrl: `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
            embedUrl: app.videoUrl,
            contentUrl: `https://www.youtube.com/watch?v=${videoId}`,
            uploadDate: '2025-10-13T15:59:36Z',
            publisher: { '@id': `${siteUrl}/#organization` },
          },
          {
            '@type': 'FAQPage',
            '@id': `${siteUrl}/#faq`,
            mainEntity: homepageFaqItems.map(item => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
          },
        ],
      }),
    },
  ],
})
</script>

<style lang="scss">
main {
  display: flex;
  flex-direction: column;
  gap: $section-gap;
}
</style>
