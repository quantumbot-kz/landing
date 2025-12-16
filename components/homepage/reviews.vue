<template>
  <HomepageSection
    class="reviews"
    title="Отзывы"
    description="Честно о нас"
  >
    <div class="reviews__inner">
      <div class="reviews-navigation-card desktop-only">
        <div class="reviews-navigation-card__arrows">
          <button class="reviews-navigation-card__arrow" type="button" @click="move('<')">
            <IMonoChevronLeft />
          </button>
          <button class="reviews-navigation-card__arrow" type="button" @click="move('>')">
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
          <NuxtImg class="reviews__review" :src="`/reviews/${i}.png`" height="416" format="webp" draggable="false" />
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
  gap: 40,
  autoWidth: true,
  focus: 0,
  omitEnd: true,
  arrows: false,
  pagination: false,
  padding: { right: 40 },
  type: 'loop',
  breakpoints: {
    480: {
      padding: 0,
      gap: 16,
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
    background-color: $color-gray-300;
    border-radius: 12px;

    @include desktop {
      display: grid;
      grid-template-columns: 270px 1fr;
      gap: 24px;
      padding: 40px 0 40px 40px;
    }

    @include mobile {
      padding: 16px;
    }
  }

  &__title {
    @include font(32px, 700, 38px);

    color: $color-gray-700;
  }

  &__subtitle {
    @include font(14px, 400, 17px);

    color: $color-gray-600;
    margin-bottom: 24px;
  }

  &__review {
    border-radius: 15px;
  }

  &__action {
    margin-top: 24px;
  }
}

.reviews-navigation-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: $color-gray-200;
  border: 1px solid $color-gray-400;
  border-radius: 15px;
  padding: 24px;

  &__arrows {
    display: flex;
    gap: 8px;
  }

  &__arrow {
    cursor: pointer;
    color: $color-gray-700;
    transition: color $transition-duration $transition-easing;
    font-size: 24px;
    background: none;
    border: none;
    padding: 0;

    &:hover,
    &:focus {
      color: $color-green-400;
    }

    &:active {
      color: $color-green-500;
    }
  }

  &__title {
    @include font(48px, 700, 58px);

    color: $color-gray-700;
  }

  &__subtitle {
    @include font(20px, 400, 24px);

    color: $color-gray-600;
  }
}
</style>
