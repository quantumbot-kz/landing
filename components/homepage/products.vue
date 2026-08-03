<template>
  <HomepageSection
    id="products"
    class="products"
    surface="band"
    eyebrow="Продукты"
    title="Инструменты QuantumBot для Kaspi.kz"
    description="Ядро подписки и расширения — каждый решает свою задачу."
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
    title: 'Бот для автокорректировки цен на Kaspi.kz',
    subtitle: 'Автоматически держит конкурентную цену и экономит часы ручного мониторинга.',
    benefits: [
      'Автокорректировка цен под конкурентов в реальном времени',
      'Настройка минимальных цен и стратегии борьбы за место в выдаче',
      'Умный предзаказ по складам',
      'Аналитика продаж на Kaspi.kz на старших тарифах',
      'Подключение магазина за минуты через аккаунт с ограниченными правами',
    ],
    ctaLabel: 'Смотреть тарифы',
    ctaHref: '#tariffs',
    ctaType: 'primary' as const,
    image: '/products/bot.png',
    imageAlt: 'Интерфейс бота QuantumBot: автокорректировка цен на Kaspi.kz',
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
    ctaHref: '#tariffs',
    image: '/products/marketplaces.png',
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
      'Отслеживание статуса заявки — обычно от минут до 24 часов',
    ],
    ctaLabel: 'Подключить',
    ctaHref: app.appUrl,
    image: '/products/nkt.png',
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
