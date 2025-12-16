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

      <SplideSlide>
        <HomepageOurTeamMember
          avatar-url="/our-team/ruslan.png"
          name="Арман Оразов"
          position="Key Account Manager"
        >
          <li>6+ лет в клиентском сервисе</li>
          <li>Опыт в IT и обучении пользователей</li>
          <li>Специализация: системы поддержки</li>
        </HomepageOurTeamMember>
      </SplideSlide>

      <SplideSlide>
        <HomepageOurTeamMember
          avatar-url="/our-team/anton.png"
          name="Антон Келлер"
          position="Product designer"
        >
          <li>6 лет в продуктовом дизайне</li>
          <li>Победитель Ozon fintech contest</li>
          <li>Эксперт по эвристическому методу оценки интерфейсов</li>
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
        gap: 16px;
      }
    }

    @include mobile {
      margin-inline: -16px;
    }
  }
}
</style>
