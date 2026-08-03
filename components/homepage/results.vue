<template>
  <HomepageSection
    class="results"
    title="Результаты наших клиентов"
    description="Усредненные улучшения, которые отмечают наши клиенты"
  >
    <div class="results__cards">
      <div class="result-card">
        <p class="result-card__text">
          <strong>Увеличение продаж</strong>
        </p>
        <p class="result-card__sub">
          + 100%
        </p>

        <NuxtImg class="result-card__image" src="/results/1.png" height="110px" loading="lazy" draggable="false" format="webp" />
      </div>

      <div class="result-card">
        <p class="result-card__text">
          <strong>Увеличение прибыли</strong>
        </p>
        <p class="result-card__sub">
          на 15%
        </p>

        <NuxtImg class="result-card__image" src="/results/2.png" height="110px" loading="lazy" draggable="false" format="webp" />
      </div>

      <div class="result-card">
        <p class="result-card__text">
          <strong>+30% конверсия</strong>
          заказов
        </p>
        <p class="result-card__sub">
          заказов
        </p>

        <NuxtImg class="result-card__image" src="/results/3.png" height="110px" loading="lazy" draggable="false" format="webp" />
      </div>

      <div class="result-card">
        <p class="result-card__text">
          <strong>Экономия 10+ часов</strong>
        </p>
        <p class="result-card__sub">
          в неделю на ручном <br> мониторинге
        </p>

        <NuxtImg class="result-card__image" src="/results/4.png" height="110px" loading="lazy" draggable="false" format="webp" />
      </div>
    </div>

    <div class="results__contact-us results-contact-us">
      <div class="results-contact-us__left">
        <IDuoThunderMove class="results-contact-us__icon" />

        <div class="results-contact-us__title">
          Хотите таких же результатов?
        </div>

        <div class="results-contact-us__description">
          Подключите наш сервис уже сегодня и начните увеличивать свои продажи на Kaspi.kz
        </div>
      </div>

      <InfoButton class="results-contact-us__action" />
    </div>
  </HomepageSection>
</template>

<script setup lang="ts">
import InfoButton from '~/components/info-button.vue'
</script>

<style lang="scss">
.results {
  &__cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;

    @include mobile {
      grid-template-columns: 1fr;
    }
  }

  &__contact-us {
    margin-top: 32px;

    @include desktop {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
    }
  }
}

.result-card {
  position: relative;
  padding: 24px;
  background-color: $color-white;
  border: 1px solid $color-hairline;
  border-radius: $radius-card;
  overflow: hidden;

  @include desktop {
    min-height: 200px;
  }

  @include mobile {
    display: grid;
    grid-template-columns: 50px 1fr;
    grid-template-rows: auto 1fr;
    column-gap: 16px;
    padding: 16px;
  }

  &__text {
    @include font(16px, 500, 1.35);

    color: $color-ink;

    @include mobile {
      @include font(15px, 500, 1.35);

      grid-row: 1;
      grid-column: 2;
    }
  }

  &__sub {
    @include font(28px, 300, 1.2);

    letter-spacing: -0.02em;
    margin-top: 8px;
    color: $color-quantum-green;

    @include mobile {
      @include font(22px, 300, 1.2);

      grid-column: 2;
      grid-row: 2;
    }
  }

  &__image {
    @include desktop {
      position: absolute;
      bottom: 12px;
      right: 16px;
      opacity: 0.9;
    }

    @include mobile {
      height: auto;
      grid-column: 1;
      grid-row: span 2;
    }
  }
}

.results-contact-us {
  background-color: $color-mint-wash;
  border-radius: $radius-card;
  padding: 28px 32px;

  @include mobile {
    padding: 20px 16px;
  }

  &__left {
    display: grid;
    grid-template-columns: 48px 1fr;
    column-gap: 16px;
    row-gap: 8px;
  }

  &__icon {
    font-size: 48px;
    color: $color-quantum-green;

    @include desktop {
      grid-row: span 2;
    }
  }

  &__title {
    @include font(22px, 500, 1.3);

    color: $color-ink;

    @include mobile {
      @include font(18px, 500, 1.3);

      align-self: center;
    }
  }

  &__description {
    @include font(15px, 400, 1.5);

    color: $color-carbon;

    @include mobile {
      @include font(14px, 400, 1.45);

      grid-column: span 2;
    }
  }

  &__action {
    @include mobile {
      margin-top: 20px;
    }
  }
}
</style>
