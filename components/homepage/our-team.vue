<template>
  <HomepageSection
    class="team"
    eyebrow="О нас"
    title="Наша команда"
  >
    <div class="team__grid">
      <HomepageOurTeamMember
        avatar-url="/our-team/nurbek.png"
        name="Нурбек Зейнуллаев"
        position="Со-основатель / CEO"
      >
        <li>15+ лет предпринимательского опыта</li>
        <li>Эксперт в инвестициях и технологиях</li>
        <li>Специализация: стратегическое развитие бизнеса</li>
      </HomepageOurTeamMember>

      <HomepageOurTeamMember
        avatar-url="/our-team/timur.png"
        name="Тимур Сергеев"
        position="Со-основатель / CTO"
      >
        <li>10+ лет управления проектами</li>
        <li>Опыт в IT и крупных федеральных проектах</li>
        <li>Работал в российских и американских корпорациях</li>
      </HomepageOurTeamMember>

      <HomepageOurTeamMember
        avatar-url="/our-team/abdulla.png"
        name="Абдулла Садаев"
        position="Со-основатель / CFO"
      >
        <li>Магистр наук (Wageningen/Aarhus)</li>
        <li>8 лет в управлении межднародными проектами в Cargill</li>
        <li>Эксперт по финансовым моделям и рискам</li>
      </HomepageOurTeamMember>

      <HomepageOurTeamMember
        avatar-url="/our-team/ruslan.png"
        name="Руслан Кошкаров"
        position="CCO"
      >
        <li>5+ лет в продажах</li>
        <li>Более 1000 успешных сделок</li>
        <li>Опыт работы с международными IT-компаниями</li>
      </HomepageOurTeamMember>
    </div>
  </HomepageSection>
</template>

<style lang="scss">
.team {
  &__grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: $grid-gap;

    @include narrow {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @include mobile {
      display: flex;
      grid-template-columns: none;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      scroll-padding-inline: $page-gutter-mobile;
      margin-inline: -#{$page-gutter-mobile};
      padding-inline: $page-gutter-mobile;
      scrollbar-width: none;

      &::-webkit-scrollbar {
        display: none;
      }

      > * {
        flex: 0 0 min(72%, 260px);
        scroll-snap-align: start;
      }
    }
  }
}
</style>
