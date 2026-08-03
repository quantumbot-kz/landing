<template>
  <HomepageSection
    id="tariffs"
    class="tariff"
    eyebrow="Цены"
    title="Тарифы QuantumBot"
    description="Подписка на бот автокорректировки цен на Kaspi.kz - выберите объём товаров под ваш магазин"
  >
    <div class="tariff__grid">
      <HomepageTariffCard title="Seller" price-per-month="19 990">
        Идеально для небольших или узкоспециализированных магазинов

        <template #list>
          <HomepageTariffCardListItem>
            Автокорректировка цен до <strong>50 товаров</strong>
          </HomepageTariffCardListItem>
          <HomepageTariffCardListItem>Настройка предзаказа</HomepageTariffCardListItem>
          <HomepageTariffCardListItem>Поддержка 24/7</HomepageTariffCardListItem>
          <HomepageTariffCardListItem>Не конкурировать со своими магазинами</HomepageTariffCardListItem>
          <HomepageTariffCardListItem>Высокая скорость обновления цен</HomepageTariffCardListItem>
        </template>
      </HomepageTariffCard>

      <HomepageTariffCard title="Seller Pro" price-per-month="39 990">
        Подойдет тем, кто активно торгует на Kaspi

        <template #list>
          <HomepageTariffCardListItem>
            Автокорректировка цен до <strong>300 товаров</strong>
          </HomepageTariffCardListItem>
          <HomepageTariffCardListItem>Настройка предзаказа</HomepageTariffCardListItem>
          <HomepageTariffCardListItem>Поддержка 24/7</HomepageTariffCardListItem>
          <HomepageTariffCardListItem>Не конкурировать со своими магазинами</HomepageTariffCardListItem>
          <HomepageTariffCardListItem>Высокая скорость обновления цен</HomepageTariffCardListItem>
        </template>
      </HomepageTariffCard>

      <HomepageTariffCard title="Seller Ultimate" price-per-month="54 990" popular>
        Для крупных игроков и магазинов с большим ассортиментом товаров

        <template #list>
          <HomepageTariffCardListItem>
            Автокорректировка цен до <strong>3500 товаров</strong>
          </HomepageTariffCardListItem>
          <HomepageTariffCardListItem>Настройка предзаказа</HomepageTariffCardListItem>
          <HomepageTariffCardListItem hot>
            Приоритетная поддержка 24/7
          </HomepageTariffCardListItem>
          <HomepageTariffCardListItem>Не конкурировать со своими магазинами</HomepageTariffCardListItem>
          <HomepageTariffCardListItem hot>
            Турбо скорость обновления цен
          </HomepageTariffCardListItem>
          <HomepageTariffCardListItem>Детальная аналитика продаж на Kaspi.kz</HomepageTariffCardListItem>
        </template>
      </HomepageTariffCard>

      <HomepageTariffCard title="Seller Supreme" price-per-month="79 990">
        Для профессионалов с огромным ассортиментом

        <template #list>
          <HomepageTariffCardListItem>
            Автокорректировка цен до <strong>7000 товаров</strong>
          </HomepageTariffCardListItem>
          <HomepageTariffCardListItem>Настройка предзаказа</HomepageTariffCardListItem>
          <HomepageTariffCardListItem hot>
            Персональный менеджер
          </HomepageTariffCardListItem>
          <HomepageTariffCardListItem>Не конкурировать со своими магазинами</HomepageTariffCardListItem>
          <HomepageTariffCardListItem hot>
            Турбо скорость обновления цен
          </HomepageTariffCardListItem>
          <HomepageTariffCardListItem>Детальная аналитика продаж на Kaspi.kz</HomepageTariffCardListItem>
        </template>
      </HomepageTariffCard>
    </div>
  </HomepageSection>
</template>

<style lang="scss">
.tariff {
  &__grid {
    display: grid;
    gap: $grid-gap;
    grid-template-columns: repeat(2, minmax(0, 1fr));

    // Four columns only where a card still has room to breathe.
    @media (min-width: 1200px) {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    // Native scroll-snap replaces the carousel library that existed only for
    // this breakpoint.
    @include mobile {
      display: flex;
      grid-template-columns: none;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      scroll-padding-inline: $page-gutter-mobile;
      margin-inline: -#{$page-gutter-mobile};
      padding-inline: $page-gutter-mobile;
      padding-bottom: 4px;
      scrollbar-width: none;

      &::-webkit-scrollbar {
        display: none;
      }

      > * {
        flex: 0 0 min(84%, 300px);
        scroll-snap-align: start;
      }
    }
  }
}
</style>
