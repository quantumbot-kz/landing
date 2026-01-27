<template>
  <HomepageSection
    class="tariff"
    title="Тарифы"
    description="Выберите тариф, подходящий под потребности Вашего бизнеса"
  >
    <Splide class="tariff__carousel" :options="splideOptions">
      <SplideSlide>
        <HomepageTariffCard title="Seller" price-per-month="19 990">
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
        <HomepageTariffCard title="Seller Pro" price-per-month="39 990" popular>
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
        <HomepageTariffCard title="Seller Ultimate" price-per-month="54 990">
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

      <SplideSlide>
        <HomepageTariffCard title="Seller Supreme" price-per-month="79 990">
          Для профессионалов с огромным ассортиментом

          <template #list>
            <HomepageTariffCardListItem>
              Автокорректировка цен <br>
              до <strong>7000 товаров</strong>
            </HomepageTariffCardListItem>
            <HomepageTariffCardListItem>Настройка предзаказа</HomepageTariffCardListItem>
            <HomepageTariffCardListItem hot>
              <strong>Персональный менеджер</strong>
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
        grid-template-columns: repeat(4, minmax(220px, 1fr));
        gap: 20px;
      }

      .splide__slide {
        width: auto !important;
        min-width: 0;
      }

      .tariff-card {
        padding: 24px;
      }

      .tariff-card__title {
        font-size: clamp(22px, 1.6vw, 26px);
      }

      .tariff-card__price {
        font-size: clamp(34px, 2.4vw, 46px);
        line-height: 1.05;
      }

      .tariff-card__price sub {
        font-size: clamp(14px, 1vw, 20px);
      }
    }

    @include mobile {
      margin-inline: -16px;
    }
  }
}
</style>
