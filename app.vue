<template>
  <AppHeader />

  <main>
    <HomepageHero />
    <HomepageResults />
    <HomepageHowItWorks />
    <HomepageAnalytics />
<!--    <HomepageTariff />-->
    <HomepageReferralProgram />
    <HomepageReviews />
    <HomepageFaq />
    <HomepageOurTeam />
    <HomepageAnyQuestions />
  </main>

  <AppFooter />

  <ScrollToTop />
</template>

<style lang="scss">
main {
  padding-top: 32px;

  @include mobile {
    padding-top: 16px;
  }

  > * {
    &:not(:last-child) {
      margin-bottom: 100px;

      @include mobile {
        margin-bottom: 24px;
      }
    }
  }
}
</style>
