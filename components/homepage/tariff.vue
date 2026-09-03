<template>
  <HomepageSection
    id="tariffs"
    class="tariff"
    eyebrow="Цены"
    title="Тарифы Quantum"
    description="Подписка на бот автокорректировки цен на Kaspi.kz - выберите объём товаров под ваш магазин"
  >
    <div
      class="tariff__billing"
      role="group"
      aria-label="Период оплаты"
    >
      <button
        type="button"
        class="tariff__billing-option"
        :class="{ 'tariff__billing-option--active': billingPeriod === 'month' }"
        :aria-pressed="billingPeriod === 'month'"
        @click="billingPeriod = 'month'"
      >
        Месяц
      </button>

      <button
        type="button"
        class="tariff__billing-option"
        :class="{ 'tariff__billing-option--active': billingPeriod === 'year' }"
        :aria-pressed="billingPeriod === 'year'"
        @click="billingPeriod = 'year'"
      >
        Год
        <span class="tariff__billing-save">−{{ maxYearlySavingsPercent }}%</span>
      </button>
    </div>

    <div class="tariff__grid">
      <HomepageTariffCard
        v-for="plan in plans"
        :key="plan.title"
        :title="plan.title"
        :price="plan.prices[billingPeriod]"
        :original-price="billingPeriod === 'year' ? formatPrice(parsePrice(plan.prices.month) * 12) : undefined"
        :period="periodLabel"
        :popular="plan.popular"
      >
        {{ plan.description }}

        <template #list>
          <HomepageTariffCardListItem
            v-for="(feature, index) in plan.features"
            :key="`${plan.title}-${index}`"
            :hot="'hot' in feature ? feature.hot : false"
          >
            <template v-if="'emphasis' in feature">
              {{ feature.before }}<strong>{{ feature.emphasis }}</strong>{{ feature.after }}
            </template>
            <template v-else>
              {{ feature.text }}
            </template>
          </HomepageTariffCardListItem>
        </template>
      </HomepageTariffCard>
    </div>

    <div class="tariff__addons">
      <h3 class="tariff__addons-title">
        Расширения
      </h3>

      <p class="tariff__addons-text">
        Подключаются отдельно. Работа с НКТ уже входит в Ultimate и Supreme - на младших тарифах её можно докупить
      </p>

      <div class="tariff__addons-grid">
        <HomepageTariffCard
          v-for="addon in addons"
          :key="addon.title"
          :title="addon.title"
          :price="addon.price"
          :badge="addon.badge"
          period="в месяц"
          action-label="Подключить"
        >
          {{ addon.description }}
        </HomepageTariffCard>
      </div>
    </div>
  </HomepageSection>
</template>

<script setup lang="ts">
type BillingPeriod = 'month' | 'year'

type TariffFeature =
  | { text: string, hot?: boolean }
  | { before: string, emphasis: string, after?: string, hot?: boolean }

const billingPeriod = ref<BillingPeriod>('month')

const periodLabel = computed(() =>
  billingPeriod.value === 'month' ? 'в месяц' : 'в год',
)

const parsePrice = (value: string) => Number(value.replace(/\s/g, ''))

const formatPrice = (value: number) => value.toLocaleString('ru-RU').replace(/\u00A0/g, ' ')

const plans: {
  title: string
  description: string
  popular?: boolean
  prices: Record<BillingPeriod, string>
  features: TariffFeature[]
}[] = [
  {
    title: 'Seller',
    description: 'Идеально для небольших или узкоспециализированных магазинов',
    prices: { month: '19 990', year: '144 990' },
    features: [
      { before: 'Автокорректировка цен до ', emphasis: '50 товаров' },
      { text: 'Настройка предзаказа' },
      { text: 'Поддержка 24/7' },
      { text: 'Не конкурировать со своими магазинами' },
      { text: 'Высокая скорость обновления цен' },
    ],
  },
  {
    title: 'Seller Pro',
    description: 'Подойдет тем, кто активно торгует на Kaspi',
    prices: { month: '39 990', year: '294 990' },
    features: [
      { before: 'Автокорректировка цен до ', emphasis: '300 товаров' },
      { text: 'Настройка предзаказа' },
      { text: 'Поддержка 24/7' },
      { text: 'Не конкурировать со своими магазинами' },
      { text: 'Высокая скорость обновления цен' },
    ],
  },
  {
    title: 'Seller Ultimate',
    description: 'Для крупных игроков и магазинов с большим ассортиментом товаров',
    popular: true,
    prices: { month: '54 990', year: '409 990' },
    features: [
      { before: 'Автокорректировка цен до ', emphasis: '3500 товаров' },
      { text: 'Настройка предзаказа' },
      { text: 'Приоритетная поддержка 24/7', hot: true },
      { text: 'Не конкурировать со своими магазинами' },
      { text: 'Турбо скорость обновления цен', hot: true },
      { text: 'Детальная аналитика продаж на Kaspi.kz' },
      { text: 'Работа с НКТ включена', hot: true },
    ],
  },
  {
    title: 'Seller Supreme',
    description: 'Для профессионалов с огромным ассортиментом',
    prices: { month: '79 990', year: '569 990' },
    features: [
      { before: 'Автокорректировка цен до ', emphasis: '7000 товаров' },
      { text: 'Настройка предзаказа' },
      { text: 'Персональный менеджер', hot: true },
      { text: 'Не конкурировать со своими магазинами' },
      { text: 'Турбо скорость обновления цен', hot: true },
      { text: 'Детальная аналитика продаж на Kaspi.kz' },
      { text: 'Работа с НКТ включена', hot: true },
    ],
  },
]

// Versus 12× monthly: max discount is on Supreme (~40.6% → 41%).
const maxYearlySavingsPercent = computed(() =>
  Math.max(
    ...plans.map((plan) => {
      const monthlyTotal = parsePrice(plan.prices.month) * 12
      const yearly = parsePrice(plan.prices.year)
      return Math.round((1 - yearly / monthlyTotal) * 100)
    }),
  ),
)

const addons: {
  title: string
  description: string
  price: string
  badge?: string
}[] = [
  {
    title: 'Работа с маркетплейсами',
    description: 'Закупки с Wildberries, расчёт прибыли на Kaspi и алерты, когда закупка становится невыгодной',
    price: 'от 24 990',
  },
  {
    title: 'Создатель карточек из товаров с Wildberries',
    description: 'Создание карточек на Kaspi.kz на основе товаров с Wildberries и Ozon с помощью AI',
    price: 'от 6 690',
    badge: 'New',
  },
  {
    title: 'Работа с НКТ',
    description: 'Регистрация товаров в Национальном каталоге. Можно докупить к Seller и Seller Pro - в Ultimate и Supreme уже включена',
    price: 'от 19 990',
  },
]
</script>

<style lang="scss">
.tariff {
  .section__body {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  &__billing {
    display: inline-flex;
    align-self: center;
    align-items: center;
    gap: 4px;
    margin: 0 0 clamp(24px, 3vw, 36px);
    padding: 4px;
    border: 1px solid $color-hairline;
    border-radius: $radius-control;
    background-color: $color-white;
  }

  &__billing-option {
    @include text(body-sm);

    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    min-width: 96px;
    padding: 8px 16px;
    border: 0;
    border-radius: calc(#{$radius-control} - 2px);
    background: transparent;
    color: $color-slate;
    cursor: pointer;
    transition:
      background-color 0.2s ease,
      color 0.2s ease;

    &:hover,
    &:focus-visible {
      color: $color-ink;
    }

    &--active {
      background-color: $color-mint-wash;
      color: $color-ink;
      font-weight: 500;
    }
  }

  &__billing-save {
    @include text(caption);

    padding: 2px 7px;
    border-radius: $radius-pill;
    background-color: $color-quantum-green;
    color: $color-white;
    font-weight: 500;
    letter-spacing: 0.02em;
    font-variant-numeric: tabular-nums;
  }

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

  &__addons {
    margin-top: clamp(40px, 5vw, 64px);
    padding-top: clamp(32px, 4vw, 48px);
    border-top: 1px solid $color-hairline;
  }

  &__addons-title {
    @include text(h3);

    color: $color-ink;
    text-align: center;
  }

  &__addons-text {
    @include text(body-sm);

    margin: 8px auto 0;
    color: $color-slate;
    text-align: center;
    max-width: 52ch;
  }

  &__addons-grid {
    display: grid;
    gap: $grid-gap;
    margin-top: clamp(24px, 3vw, 36px);
    grid-template-columns: repeat(3, minmax(0, 1fr));

    @include narrow {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @include mobile {
      grid-template-columns: minmax(0, 1fr);
    }
  }
}
</style>
