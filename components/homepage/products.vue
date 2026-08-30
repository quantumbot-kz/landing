<template>
  <HomepageSection
    id="products"
    class="products"
    surface="band"
    eyebrow="Продукты"
    title="Инструменты Quantum для продавцов Kaspi.kz"
    description="Каспи бот, закупки с Wildberries и регистрация в НКТ — каждый модуль решает свою задачу."
  >
    <div class="products__list">
      <HomepageProductsItem
        v-for="(product, index) in products"
        :key="product.title"
        v-bind="product"
        :reversed="index % 2 === 1"
      />
    </div>
  </HomepageSection>
</template>

<script setup lang="ts">
const app = useAppConfig()

const products = [
  {
    kind: 'Ядро подписки',
    title: 'Каспи бот для автоснижения цен на Kaspi.kz',
    subtitle: 'Бот каспи для продавцов: автоснижение и автоповышение цен под конкурентов — без ручного мониторинга карточек магазина.',
    benefits: [
      'Автоснижение и автоповышение цен в реальном времени',
      'Минимальные цены и стратегия борьбы за место в выдаче',
      'Умный предзаказ по складам',
      'Аналитика продаж на Kaspi.kz на старших тарифах',
      'Подключение магазина за минуты через аккаунт с ограниченными правами',
    ],
    ctaLabel: 'Подробнее о каспи боте',
    ctaHref: '/kaspi-bot/',
    ctaType: 'primary' as const,
    image: '/products/bot.png',
    imageWidth: 2262,
    imageHeight: 1632,
    imageAlt: 'Каспи бот Quantum: автоснижение цен на Kaspi.kz',
  },

  {
    kind: 'Расширение',
    title: 'Работа с маркетплейсами',
    subtitle: 'Считайте прибыль на Kaspi с учётом цен на Wildberries и получайте алерты, когда закупка стала невыгодной.',
    benefits: [
      'Добавление товаров по ссылке с Wildberries',
      'Калькулятор чистой прибыли: закупка, комиссия и доставка Kaspi, налоги',
      'Мониторинг цены на WB и уведомления в Telegram',
      'Управление ценой парсером по заданным параметрам',
    ],
    ctaLabel: 'К тарифам',
    ctaHref: '/#tariffs',
    image: '/products/marketplaces.png',
    imageWidth: 2888,
    imageHeight: 1472,
    imageAlt: 'Модуль «Работа с маркетплейсами»: расчёт прибыли WB → Kaspi',
  },
  {
    kind: 'Расширение',
    title: 'Регистрация товаров в НКТ',
    subtitle: 'AI заполняет категорию и атрибуты, массово подаёт заявки и привязывает код к карточке на Kaspi.',
    benefits: [
      'Автоподбор категории и атрибутов с помощью AI',
      'Массовая регистрация товаров в НКТ',
      'Автопривязка кода к карточке на Kaspi',
      'Регистрация при создании карточки',
      'Отслеживание статуса заявки - обычно от минут до 24 часов',
    ],
    ctaLabel: 'Подключить',
    ctaHref: app.appUrl,
    image: '/products/nkt.png',
    imageWidth: 1686,
    imageHeight: 1162,
    imageAlt: 'Модуль НКТ: регистрация товаров в Национальном каталоге',
  },
]
</script>

<style lang="scss">
.products {
  &__list {
    display: grid;
    gap: 0;
  }

  .product + .product {
    margin-top: clamp(40px, 5vw, 72px);
    padding-top: clamp(40px, 5vw, 72px);
    border-top: 1px solid $color-hairline;
  }
}
</style>
