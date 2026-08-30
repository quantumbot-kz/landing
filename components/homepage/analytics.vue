<template>
  <HomepageSection
    id="analytics"
    class="analytics"
    eyebrow="Данные"
    title="Аналитика каспи: продажи и товары магазина"
    description="Каспи аналитика в кабинете Quantum — заказы, выручка, средний чек и конкуренция по товарам. Подробнее на странице аналитики каспи"
  >
    <div class="analytics__grid">
      <div class="analytics__visual">
        <NuxtImg
          src="/analytics-bg.png"
          width="2888"
          height="1716"
          sizes="sm:100vw md:100vw lg:560px"
          format="webp"
          draggable="false"
          loading="lazy"
          alt="Каспи аналитика Quantum: график заказов, выручки и среднего чека магазина на Kaspi.kz"
        />
      </div>

      <div class="analytics__panel">
        <p class="analytics__panel-title">
          Что вы узнаете
        </p>

        <dl class="analytics__list">
          <div v-for="item in insights" :key="item.term" class="analytics__item">
            <dt class="analytics__term">
              {{ item.term }}
            </dt>
            <dd class="analytics__definition">
              {{ item.definition }}
            </dd>
          </div>
        </dl>

        <NuxtLink to="/analitika-kaspi/" class="analytics__more">
          Аналитика каспи — подробно
        </NuxtLink>
      </div>
    </div>
  </HomepageSection>
</template>

<script setup lang="ts">
const insights = [
  { term: 'Выручка', definition: 'анализ доходности по категориям и товарам' },
  { term: 'Средний чек', definition: 'оценка покупательской способности' },
  { term: 'Количество заказов', definition: 'динамика продаж за выбранный период' },
  { term: 'Популярные категории', definition: 'какие товары продаются лучше всего' },
  { term: 'Конкуренция', definition: 'число продавцов в каждом товаре' },
]
</script>

<style lang="scss">
.analytics {
  &__grid {
    display: grid;
    gap: clamp(24px, 3vw, 48px);
    align-items: center;

    @include wide {
      grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
    }
  }

  &__visual {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 0;

    img {
      display: block;
      width: 100%;
      height: auto;
      border: 1px solid $color-hairline;
      border-radius: $radius-image;
      background-color: $color-white;
    }
  }

  &__panel {
    padding: clamp(20px, 2.4vw, 32px);
    background-color: $color-white;
    border: 1px solid $color-hairline;
    border-radius: $radius-card;
  }

  &__panel-title {
    @include eyebrow;

    color: $color-slate;
    padding-bottom: 14px;
    border-bottom: 1px solid $color-hairline;
  }

  &__list {
    margin: 0;
  }

  &__item {
    padding-block: 14px;

    &:not(:last-child) {
      border-bottom: 1px solid $color-hairline;
    }
  }

  &__term {
    @include text(body);

    font-weight: 500;
    color: $color-ink;
  }

  &__definition {
    @include text(body-sm);

    margin: 2px 0 0;
    color: $color-slate;
  }

  &__more {
    @include text(body-sm);

    display: inline-block;
    margin-top: 18px;
    font-weight: 500;
    color: $color-quantum-green;

    &:hover,
    &:focus-visible {
      color: $color-ink;
    }
  }
}
</style>
