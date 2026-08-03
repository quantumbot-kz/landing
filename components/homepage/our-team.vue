<template>
  <HomepageSection
    class="our-team"
    title="Наша команда"
  >
    <Splide class="our-team__carousel" :options="splideOptions">
      <SplideSlide>
        <HomepageOurTeamMember
          avatar-url="/our-team/nurbek.png"
          name="Нурбек Зейнуллаев"
          position="Со-основатель / CEO"
        >
          <li>15+ лет предпринимательского опыта</li>
          <li>Эксперт в инвестициях и технологиях</li>
          <li>Специализация: стратегическое развитие бизнеса</li>
        </HomepageOurTeamMember>
      </SplideSlide>

      <SplideSlide>
        <HomepageOurTeamMember
          avatar-url="/our-team/timur.png"
          name="Тимур Сергеев"
          position="Со-основатель / CTO"
        >
          <li>10+ лет управления проектами</li>
          <li>Опыт в IT и крупных федеральных проектах</li>
          <li>Работал в российских и американских корпорациях</li>
        </HomepageOurTeamMember>
      </SplideSlide>

      <SplideSlide>
        <HomepageOurTeamMember
          avatar-url="/our-team/abdulla.png"
          name="Абдулла Садаев"
          position="Со-основатель / CFO"
        >
          <li>Магистр наук (Wageningen/Aarhus)</li>
          <li>8 лет в управлении межднародными проектами в Cargill</li>
          <li>Эксперт по финансовым моделям и рискам</li>
        </HomepageOurTeamMember>
      </SplideSlide>

      <SplideSlide>
        <HomepageOurTeamMember
          avatar-url="/our-team/ruslan.png"
          name="Руслан Кошкаров"
          position="CCO"
        >
          <li>5+ лет в продажах</li>
          <li>Более 1000 успешных сделок</li>
          <li>Опыт работы с международными IT-компаниями</li>
        </HomepageOurTeamMember>
      </SplideSlide>
    </Splide>
  </HomepageSection>
</template>

<script lang="ts" setup>
import type { Options as SplideOptions } from '@splidejs/splide'
import { Splide, SplideSlide } from '@splidejs/vue-splide'

const splideOptions = computed(() => ({
  gap: 16,
  autoWidth: true,
  arrows: false,
  pagination: false,
  mediaQuery: 'min',
  padding: { right: 16, left: 16 },
  breakpoints: {
    481: {
      destroy: true,
    },
  },
} as SplideOptions))
</script>

<style lang="scss">
.our-team {
  &__carousel {
    @include desktop {
      .splide__track {
        overflow: visible;
      }

      .splide__list {
        display: flex !important;
        justify-content: center;
        align-items: stretch;
        gap: 12px;
        flex-wrap: wrap;
      }

      .splide__slide {
        display: flex;
        width: auto !important;
      }

      .our-team-member {
        height: 100%;
      }
    }

    @include mobile {
      margin-inline: -16px;
    }
  }
}
</style>
