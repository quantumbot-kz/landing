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
            '@type': 'SoftwareApplication',
            '@id': `${siteUrl}/#app`,
            name: 'QuantumBot',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web',
            url: app.appUrl,
            description: 'Сервис автоматизации продаж на Kaspi.kz: автокорректировка цен, предзаказ, аналитика, закупки с Wildberries и регистрация в НКТ.',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'KZT',
              description: '3 дня бесплатной подписки',
              url: app.appUrl,
            },
            provider: { '@id': `${siteUrl}/#organization` },
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
