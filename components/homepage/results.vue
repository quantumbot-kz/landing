<template>
  <HomepageSection
    id="results"
    class="results"
    surface="band"
    eyebrow="Цифры"
    title="Что отмечают клиенты после подключения"
    description="Ориентиры по эффекту из обратной связи продавцов Kaspi.kz. Итог зависит от категории, конкуренции и настроек минимумов - не гарантия результата"
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

    <ul class="results__reviews">
      <li
        v-for="review in reviews"
        :key="review.src"
        class="results__review"
      >
        <NuxtImg
          class="results__review-image"
          :src="review.src"
          :alt="review.alt"
          :width="review.width"
          :height="review.height"
          fit="inside"
          sizes="sm:220px md:200px lg:200px"
          format="webp"
          loading="lazy"
          draggable="false"
        />
      </li>
    </ul>

    <div class="results__cta">
      <div class="results__cta-copy">
        <p class="results__cta-title">
          Проверьте на своём ассортименте
        </p>

        <p class="results__cta-text">
          3 дня бесплатной подписки после регистрации - без обязательств и скрытых условий
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

// One shape for every metric - value, label, optional qualifier. The previous
// markup put prose in the large-number slot on two of four cards.
const metrics = [
  { value: 'до +100%', label: 'Рост продаж', note: 'в отдельных категориях' },
  { value: 'до +15%', label: 'Рост прибыли', note: 'при стабильной марже' },
  { value: 'до +30%', label: 'Конверсия заказов', note: 'при конкурентной цене' },
  { value: 'до 10 ч', label: 'Экономия времени', note: 'в неделю без ручного мониторинга' },
]

const reviews = [
  {
    src: '/reviews/review-1.png',
    width: 879,
    height: 1832,
    alt: 'Кабинет продавца Kaspi.kz: продажи за день свыше 5,5 млн ₸ и показатель качества «Отлично»',
  },
  {
    src: '/reviews/review-2.png',
    width: 879,
    height: 1832,
    alt: 'Кабинет продавца Kaspi.kz: продажи за день свыше 215 тыс. ₸ и показатель качества «Отлично»',
  },
  {
    src: '/reviews/review-3.png',
    width: 879,
    height: 1832,
    alt: 'Кабинет продавца Kaspi.kz: продажи за день свыше 1,6 млн ₸ и показатель качества «Отлично»',
  },
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

  &__reviews {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: clamp(20px, 3vw, 40px);
    margin: clamp(28px, 3.4vw, 48px) auto 0;
    padding: 0;
    list-style: none;
    justify-items: center;
    max-width: 720px;

    @include mobile {
      display: flex;
      grid-template-columns: none;
      max-width: none;
      gap: 28px;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      scroll-padding-inline: $page-gutter-mobile;
      margin-inline: -#{$page-gutter-mobile};
      padding-inline: $page-gutter-mobile;
      // Trailing inset so the last card can snap with air after it.
      padding-block: 2px;
      scrollbar-width: none;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

  &__review {
    width: 100%;
    max-width: 200px;
    min-width: 0;

    @include mobile {
      // One full phone + peek of the next — same scroll affordance as team cards.
      flex: 0 0 min(72%, 240px);
      max-width: none;
      scroll-snap-align: start;
    }
  }

  &__review-image {
    display: block;
    width: 100%;
    height: auto;
  }

  &__cta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: clamp(20px, 3vw, 40px);
    margin-top: clamp(28px, 3.4vw, 48px);
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
