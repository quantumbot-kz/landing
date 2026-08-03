<template>
  <HomepageSection
    class="reviews"
    title="Отзывы"
    description="Честно о нас"
  >
    <div class="reviews__inner">
      <div class="reviews-navigation-card desktop-only">
        <div class="reviews-navigation-card__arrows">
          <button class="reviews-navigation-card__arrow" type="button" aria-label="Предыдущий отзыв" @click="move('<')">
            <IMonoChevronLeft />
          </button>
          <button class="reviews-navigation-card__arrow" type="button" aria-label="Следующий отзыв" @click="move('>')">
            <IMonoChevronRight />
          </button>
        </div>

        <div>
          <div class="reviews-navigation-card__title">
            1000+
          </div>

          <div class="reviews-navigation-card__subtitle">
            селлеров уже выбирают нас
          </div>
        </div>

        <InfoButton class="reviews-navigation-card__action" />
      </div>

      <div class="mobile-only">
        <div class="reviews__title">
          1000+
        </div>

        <div class="reviews__subtitle">
          селлеров уже выбирают нас
        </div>
      </div>

      <Splide ref="splideEl" class="reviews__carousel" :options="splideOptions">
        <SplideSlide v-for="i in 6" :key="i">
          <NuxtImg class="reviews__review" :src="`/reviews/${i}.png`" height="416" format="webp" draggable="false" :alt="`Отзыв ${i}`" />
        </SplideSlide>
      </Splide>

      <InfoButton class="reviews__action mobile-only" />
    </div>
  </HomepageSection>
</template>

<script setup lang="ts">
import type { Options as SplideOptions } from '@splidejs/vue-splide'
import { Splide, SplideSlide } from '@splidejs/vue-splide'

const splideEl = ref()

const splideOptions = computed(() => ({
  gap: 16,
  autoWidth: true,
  focus: 0,
  omitEnd: true,
  arrows: false,
  pagination: false,
  padding: { right: 24 },
  type: 'loop',
  breakpoints: {
    480: {
      padding: 0,
      gap: 12,
    },
  },
} as SplideOptions))

function move(dir: '<' | '>'): void {
  splideEl.value.go(dir)
}
</script>

<style lang="scss">
.reviews {
  &__inner {
    background-color: $color-linen;
    border: 1px solid $color-hairline;
    border-radius: $radius-card;

    @include desktop {
      display: grid;
      grid-template-columns: 260px 1fr;
      gap: 24px;
      padding: 32px 0 32px 32px;
    }

    @include mobile {
      padding: 16px;
    }
  }

  &__title {
    @include font(36px, 300, 1.1);

    letter-spacing: -0.03em;
    color: $color-ink;
  }

  &__subtitle {
    @include font(14px, 400, 1.4);

    color: $color-slate;
    margin-bottom: 20px;
  }

  &__review {
    border-radius: $radius-image;
    border: 1px solid $color-hairline;
  }

  &__action {
    margin-top: 20px;
  }
}

.reviews-navigation-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  background-color: $color-white;
  border: 1px solid $color-hairline;
  border-radius: $radius-card;
  padding: 24px;

  &__arrows {
    display: flex;
    gap: 8px;
  }

  &__arrow {
    cursor: pointer;
    color: $color-carbon;
    transition: color 0.2s ease, background-color 0.2s ease;
    font-size: 20px;
    background: $color-linen;
    border: 1px solid $color-hairline;
    border-radius: $radius-secondary;
    width: 40px;
    height: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;

    &:hover,
    &:focus-visible {
      color: $color-quantum-green;
      border-color: $color-quantum-green;
    }
  }

  &__title {
    @include font(48px, 300, 1);

    letter-spacing: -0.036em;
    color: $color-ink;
  }

  &__subtitle {
    @include font(16px, 400, 1.4);

    color: $color-slate;
    margin-top: 8px;
  }
}
</style>
