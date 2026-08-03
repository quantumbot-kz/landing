<template>
  <AppHeader />

  <main>
    <HomepageHero />
    <HomepageResults />
    <HomepageHowItWorks />
    <HomepageAnalytics />
    <HomepageTariff />
    <HomepageFaq />
    <HomepageOurTeam />
    <HomepageAnyQuestions />
  </main>

  <AppFooter />

  <ScrollToTop />
</template>

<style lang="scss">
main {
  display: flex;
  flex-direction: column;
  gap: $section-gap;
}
</style>
