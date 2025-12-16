<template>
  <HomepageSection
    class="analytics"
    title="Аналитика продаж "
    description="на Kaspi.kz"
  >
    <div class="analytics__inner">
      <NuxtImg class="analytics__background desktop-only" src="/analytics-bg.png" height="763px" format="webp" draggable="false" />

      <div class="analytics__content">
        <div class="analytics__header">
          <NuxtImg class="mobile-only" src="/analytics-bg.png" height="76px" format="webp" draggable="false" />

          <div class="analytics__title">
            Получите полную картину по продажам на Kaspi.kz с помощью нашего сервиса! Наша аналитика – на 100% точная
          </div>
        </div>

        <div class="analytics__list-title">
          Что вы узнаете?
        </div>
        <ul class="analytics__list">
          <li>Выручка – анализ доходности по категориям и товарам</li>
          <li>Средний чек – оценка покупательской способности</li>
          <li>Количество заказов – динамика продаж за выбранный период</li>
          <li>Популярные категории – какие товары продаются лучше всего</li>
          <li>Конкуренция – число продавцов в каждом товаре</li>
        </ul>
      </div>
    </div>
  </HomepageSection>
</template>

<script setup>
const app = useAppConfig()
const img = useImage()
</script>

<style lang="scss">
.analytics {
  &__inner {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 400px;
    padding: 24px 100px;
    border-radius: 12px;
    background-color: $color-gray-200;

    @include mobile {
      padding: 16px;
      height: unset;
    }
  }

  &__background {
    position: absolute;
    max-height: unset;
    max-width: unset;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  &__content {
    width: 610px;
    margin-left: auto;

    @include mobile {
      width: unset;
    }
  }

  &__header {
    display: flex;
    align-items: center;
    gap: 24px;
    margin-bottom: 24px;

    @include mobile {
      align-items: flex-start;
    }
  }

  &__title {
    @include font(20px, 500, 28px);

    @include mobile {
      @include font(14px, 500, 20px);
    }
  }

  &__list-title {
    @include font(16px, 700, 29px);

    color: $color-gray-700;

    @include mobile {
      @include font(12px, 400, 22px);
    }
  }

  &__list {
    @include font(16px, 400, 29px);

    color: $color-gray-700;

    @include mobile {
      @include font(12px, 400, 22px);
    }
  }

  &__action {
    margin-top: 24px;

    @include mobile {
      width: 100%;
    }
  }
}
</style>
