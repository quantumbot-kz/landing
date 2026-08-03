<template>
  <HomepageSection
    class="results"
    surface="band"
    eyebrow="Цифры"
    title="Результаты наших клиентов"
    description="Усредненные улучшения, которые отмечают наши клиенты"
  >
    <dl class="results__metrics">
      <div v-for="metric in metrics" :key="metric.label" class="results__metric">
        <dt class="results__value">
          {{ metric.value }}
        </dt>

        <dd class="results__label">
          {{ metric.label }}

          <span v-if="metric.note" class="results__note">{{ metric.note }}</span>
        </dd>
      </div>
    </dl>

    <div class="results__cta">
      <div class="results__cta-copy">
        <p class="results__cta-title">
          Хотите таких же результатов?
        </p>

        <p class="results__cta-text">
          Подключите наш сервис уже сегодня и начните увеличивать свои продажи на Kaspi.kz
        </p>
      </div>

      <UiButton
        class="results__cta-action"
        :href="app.appUrl"
        rel="noopener noreferrer"
      >
        Начать бесплатно
      </UiButton>
    </div>
  </HomepageSection>
</template>

<script setup lang="ts">
const app = useAppConfig()

// One shape for every metric — value, label, optional qualifier. The previous
// markup put prose in the large-number slot on two of four cards.
const metrics = [
  { value: '+100%', label: 'Увеличение продаж' },
  { value: '+15%', label: 'Увеличение прибыли' },
  { value: '+30%', label: 'Конверсия заказов' },
  { value: '10+', label: 'Часов экономии', note: 'в неделю на ручном мониторинге' },
]
</script>

<style lang="scss">
.results {
  &__metrics {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1px;
    margin: 0;
    background-color: $color-hairline;
    border: 1px solid $color-hairline;
    border-radius: $radius-card;
    overflow: hidden;

    @include narrow {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @include mobile {
      grid-template-columns: minmax(0, 1fr);
    }
  }

  &__metric {
    padding: clamp(20px, 2.4vw, 32px);
    background-color: $color-white;
  }

  &__value {
    @include text(metric);

    color: $color-quantum-green;
    font-variant-numeric: tabular-nums;
  }

  &__label {
    @include text(body);

    display: grid;
    gap: 2px;
    margin: 10px 0 0;
    color: $color-ink;
  }

  &__note {
    @include text(caption);

    color: $color-slate;
  }

  &__cta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: clamp(20px, 3vw, 40px);
    margin-top: $grid-gap;
    padding: clamp(20px, 2.4vw, 32px);
    background-color: $color-white;
    border: 1px solid $color-mint-line;
    border-radius: $radius-card;

    @include compact {
      flex-direction: column;
      align-items: stretch;
    }
  }

  &__cta-title {
    @include text(h3);

    color: $color-ink;
  }

  &__cta-text {
    @include text(body-sm);

    margin-top: 6px;
    color: $color-slate;
    max-width: 56ch;
  }

  &__cta-action.ui-button {
    flex-shrink: 0;

    @include compact {
      width: 100%;
    }
  }
}
</style>
