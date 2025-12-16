<template>
  <HomepageSection
    class="tariff"
    title="Тарифы"
    description="Выберите тариф, подходящий под потребности Вашего бизнеса"
  >
    <Splide class="tariff__carousel" :options="splideOptions">
      <SplideSlide>
        <HomepageTariffCard title="Seller" price-per-month="10 000">
          Идеально для небольших <br class="desktop-only">
          или <br class="mobile-only">
          узкоспециализированных магазинов

          <template #list>
            <HomepageTariffCardListItem>
              Автокорректировка цен <br>
              до <strong>50 товаров</strong>
            </HomepageTariffCardListItem>
            <HomepageTariffCardListItem>Настройка предзаказа</HomepageTariffCardListItem>
            <HomepageTariffCardListItem>Поддержка 24/7</HomepageTariffCardListItem>
            <HomepageTariffCardListItem>Не конкурировать со своими магазинами</HomepageTariffCardListItem>
            <HomepageTariffCardListItem>Высокая скорость обновления цен</HomepageTariffCardListItem>
          </template>
        </HomepageTariffCard>
      </SplideSlide>

      <SplideSlide>
        <HomepageTariffCard title="Seller Pro" price-per-month="20 000" popular>
          Подойдет тем, кто активно торгует на Kaspi

          <template #list>
            <HomepageTariffCardListItem>
              Автокорректировка цен <br>
              до <strong>300 товаров</strong>
            </HomepageTariffCardListItem>
            <HomepageTariffCardListItem>Настройка предзаказа</HomepageTariffCardListItem>
            <HomepageTariffCardListItem>Поддержка 24/7</HomepageTariffCardListItem>
            <HomepageTariffCardListItem>Не конкурировать со своими магазинами</HomepageTariffCardListItem>
            <HomepageTariffCardListItem>Высокая скорость обновления цен</HomepageTariffCardListItem>
          </template>
        </HomepageTariffCard>
      </SplideSlide>

      <SplideSlide>
        <HomepageTariffCard title="Seller Ultimate" price-per-month="30 000">
          Для крупных игроков и магазинов с большим ассортиментом товаров

          <template #list>
            <HomepageTariffCardListItem>
              Автокорректировка цен <br>
              до <strong>3500 товаров</strong>
            </HomepageTariffCardListItem>
            <HomepageTariffCardListItem>Настройка предзаказа</HomepageTariffCardListItem>
            <HomepageTariffCardListItem hot>
              <strong>Приоритетная</strong> Поддержка 24/7
            </HomepageTariffCardListItem>
            <HomepageTariffCardListItem>Не конкурировать со своими магазинами</HomepageTariffCardListItem>
            <HomepageTariffCardListItem hot>
              <strong>Турбо</strong> скорость обновления цен
            </HomepageTariffCardListItem>
            <HomepageTariffCardListItem>Детальная аналитика продаж на Kaspi.kz</HomepageTariffCardListItem>
          </template>
        </HomepageTariffCard>
      </SplideSlide>
    </Splide>
  </HomepageSection>
</template>

<script lang="ts" setup>
import type { Options as SplideOptions } from '@splidejs/splide'
import { Splide, SplideSlide } from '@splidejs/vue-splide'

const splideOptions = computed(() => ({
  gap: 22,
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
.tariff {
  &__carousel {
    @include desktop {
      .splide__track {
        overflow: visible;
      }

      .splide__list {
        display: grid !important;
        grid-template-columns: repeat(3, 1fr);
        gap: 32px;
      }
    }

    @include mobile {
      margin-inline: -16px;
    }
  }
}
</style>
