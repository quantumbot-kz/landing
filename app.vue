<template>
  <!--
    THESIS: Clean B2B SaaS editorial page — product UI proof, not promo collage; refuses uppercase/navy/lemon marketplace look.
    OWN-WORLD: Cool white + teal #008574 only; Public Sans 300/400/500; hairline cards 5px; pill CTA with green glow.
    STORY: Seller understands QuantumBot automates Kaspi pricing, believes the proof, starts free trial.
    FIRST VIEWPORT: Sticky white nav · light editorial headline · green pill CTA · product screenshot · four ghost benefit cards.
    FORM: amp style system remapped to Quantum green (user-pinned DESIGN.md).
    FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
  -->
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
  padding-top: 0;

  > * {
    &:not(:last-child) {
      margin-bottom: $section-gap;

      @include mobile {
        margin-bottom: 56px;
      }
    }
  }
}
</style>
