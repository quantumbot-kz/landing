<template>
  <HomepageSection
    class="analytics"
    title="Аналитика продаж"
    description="на Kaspi.kz"
  >
    <div class="analytics__inner">
      <NuxtImg
        class="analytics__background desktop-only"
        src="/analytics-bg.png"
        height="420px"
        format="webp"
        draggable="false"
        alt=""
      />

      <div class="analytics__content">
        <div class="analytics__header">
          <NuxtImg class="mobile-only" src="/analytics-bg.png" height="76px" format="webp" draggable="false" alt="" />

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

<style lang="scss">
.analytics {
  &__inner {
    position: relative;
    display: flex;
    align-items: center;
    min-height: 380px;
    padding: 40px 48px;
    border-radius: $radius-card;
    border: 1px solid $color-hairline;
    background-color: $color-linen;
    overflow: hidden;

    @include mobile {
      padding: 16px;
      min-height: unset;
    }
  }

  &__background {
    position: absolute;
    left: 24px;
    top: 50%;
    transform: translateY(-50%);
    max-height: 320px;
    width: auto;
    opacity: 0.95;
  }

  &__content {
    position: relative;
    width: min(560px, 100%);
    margin-left: auto;
    background: rgba($color-white, 0.92);
    border: 1px solid $color-hairline;
    border-radius: $radius-card;
    padding: 28px;

    @include mobile {
      width: 100%;
      margin-left: 0;
      padding: 16px;
      background: $color-white;
    }
  }

  &__header {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 20px;
  }

  &__title {
    @include font(18px, 400, 1.5);

    color: $color-ink;

    @include mobile {
      @include font(14px, 400, 1.45);
    }
  }

  &__list-title {
    @include font(14px, 500, 1.4);

    color: $color-ink;
    margin-bottom: 8px;
  }

  &__list {
    @include font(14px, 400, 1.7);

    color: $color-slate;
    margin: 0;
    padding-left: 1.1em;

    @include mobile {
      @include font(13px, 400, 1.6);
    }
  }
}
</style>
