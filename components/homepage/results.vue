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
    gap: 32px;

    @include mobile {
      display: flex;
      flex-direction: column;
    }
  }

  &__contact-us {
    margin-top: 40px;

    @include desktop {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    @include mobile {
      margin-top: 32px;
    }
  }
}

.result-card {
  position: relative;
  padding: 24px;
  background-color: $color-gray-300;
  border-radius: 12px;

  @include desktop {
    height: 200px;
  }

  @include mobile {
    display: grid;
    grid-template-columns: 50px 1fr;
    grid-template-rows: auto 1fr;
    column-gap: 24px;
    padding: 16px;
  }

  &__text {
    @include font(18px, 800, 25px);

    text-transform: uppercase;

    @include mobile {
      @include font(15px, 800, 21px);

      grid-row: 1;
      grid-column: 2;
    }
  }

  &__sub {
    @include font(18px, 500, 25px);

    @include mobile {
      @include font(15px, 500, 21px);

      grid-column: 2;
      grid-row: 2;
    }
  }

  &__image {
    @include desktop {
      position: absolute;
      bottom: 12px;
      right: 24px;
    }

    @include mobile {
      height: auto;
      grid-column: 1;
      grid-row: span 2;
    }
  }
}

.results-contact-us {
  background-color: $color-gray-200;
  border-radius: 12px;
  padding: 32px 40px;

  @include mobile {
    padding: 16px;
  }

  &__left {
    display: grid;
    grid-template-columns: 59px 1fr;
    column-gap: 24px;

    @include mobile {
      column-gap: 12px;
      row-gap: 16px;
    }
  }

  &__icon {
    font-size: 59px;

    @include desktop {
      grid-row: span 2;
    }
  }

  &__title {
    @include font(22px, 700, 31px);

    @include mobile {
      @include font(20px, 600, 24px);

      align-self: center;
    }
  }

  &__description {
    @include font(20px, 300, 28px);

    @include mobile {
      @include font(14px, 300, 17px);

      grid-column: span 2;
    }
  }

  &__action {
    @include mobile {
      margin-top: 24px;
    }
  }
}
</style>
