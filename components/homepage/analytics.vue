<template>
  <HomepageSection
    id="analytics"
    class="analytics"
    surface="band"
    eyebrow="Данные"
    title="Аналитика продаж на Kaspi.kz"
    description="Получите полную картину по продажам на Kaspi.kz с помощью нашего сервиса! Наша аналитика – на 100% точная"
  >
    <div class="analytics__grid">
      <div class="analytics__visual">
        <NuxtImg
          src="/analytics-bg.png"
          width="1400"
          height="1108"
          sizes="sm:100vw md:100vw lg:520px"
          format="webp"
          draggable="false"
          loading="lazy"
          alt="Дашборд аналитики продаж QuantumBot"
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

  // The asset is a cut-out isometric device render with its own shadow, so a card
  // frame around it would read as a box inside a box. It sits on the band directly.
  &__visual {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      display: block;
      width: 100%;
      height: auto;
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
}
</style>
