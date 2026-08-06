<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
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
            name: 'Quantum',
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
            name: 'Quantum',
            inLanguage: 'ru-KZ',
            publisher: { '@id': `${siteUrl}/#organization` },
          },
        ],
      }),
    },
  ],
})
</script>
