<template>
  <AppHeader />

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

  <AppFooter />

  <ScrollToTop />
</template>

<script setup lang="ts">
import { homepageFaqItems } from '~/utils/homepage-faq'

const app = useAppConfig()
const siteUrl = app.baseUrl.replace(/\/$/, '')
const videoId = app.videoUrl.split('/').pop() || 'gQkEWI9Cwuw'
const dateModified = '2026-08-03'

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            '@id': `${siteUrl}/#organization`,
            name: 'QuantumBot',
            legalName: 'ТОО Quantum Technology',
            url: `${siteUrl}/`,
            logo: `${siteUrl}/logo.svg`,
            email: app.email,
            telephone: app.phoneNumber,
            sameAs: [
              app.instagramUrl.split('?')[0],
              app.telegramUrl,
              app.youtubeUrl,
              app.astanaHubUrl,
            ],
          },
          {
            '@type': 'WebSite',
            '@id': `${siteUrl}/#website`,
            url: `${siteUrl}/`,
            name: 'QuantumBot',
            inLanguage: 'ru-KZ',
            publisher: { '@id': `${siteUrl}/#organization` },
          },
          {
            '@type': 'WebPage',
            '@id': `${siteUrl}/#webpage`,
            url: `${siteUrl}/`,
            name: 'QuantumBot - бот цен и автоматизация продаж на Kaspi.kz',
            description: 'Сервис для продавцов Kaspi.kz в Казахстане: автокорректировка цен, предзаказ, аналитика, закупки с Wildberries и регистрация товаров в НКТ.',
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
            name: 'QuantumBot',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web',
            url: app.appUrl,
            description: 'Сервис автоматизации продаж на Kaspi.kz: автокорректировка цен, предзаказ, аналитика, закупки с Wildberries и регистрация в НКТ. После регистрации доступны 3 дня бесплатной подписки.',
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
            name: 'Демо видео о сервисе QuantumBot',
            description: 'Обзор интерфейса QuantumBot: управление товарами, ценами и предзаказами на Kaspi.kz.',
            thumbnailUrl: `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
            embedUrl: app.videoUrl,
            contentUrl: `https://www.youtube.com/watch?v=${videoId}`,
            uploadDate: '2025-10-13',
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
