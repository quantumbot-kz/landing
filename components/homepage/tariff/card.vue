<template>
  <div
    class="tariff-card"
    :class="{
      'tariff-card--popular': popular,
    }"
  >
    <div class="tariff-card__title">
      {{ title }}
    </div>

    <div class="tariff-card__description">
      <slot />
    </div>

    <div class="tariff-card__price">
      ₸ {{ pricePerMonth }}<sub>/месяц</sub>
    </div>

    <UiButton
      class="tariff-card__action"
      :type="popular ? 'promo' : 'primary'"
      :href="app.appUrl"
      rel="noopener noreferrer"
    >
      Попробовать 3 дня бесплатно
    </UiButton>

    <ul class="tariff-card__list">
      <slot name="list" />
    </ul>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string
  pricePerMonth: string
  popular?: boolean
}>()

const app = useAppConfig()
</script>

<style lang="scss">
.tariff-card {
  $self: &;

  padding: 40px;
  border-radius: 12px;
  border: 1px solid $color-gray-500;
  background-color: $color-gray-200;
  height: 100%;

  @include mobile {
    width: 260px;
    padding: 16px;
  }

  &--popular {
    position: relative;
    color: $color-white;
    background-color: $color-green-500;
    border-width: 0;

    @include desktop {
      box-shadow: 0px 40px 50px 0px #056e6266;
    }

    &::before {
      pointer-events: none;
      inset: 0;
      content: '';
      display: block;
      position: absolute;
      background-image: url(/strips.png);
      background-size: cover;
      opacity: 0.05;
    }
  }

  &__title {
    @include font(30px, 700, 1);

    @include mobile {
      @include font(20px, 700, 26px);
    }
  }

  &__description {
    @include font(17px, 400, 22px);

    color: $color-gray-700;
    min-height: 44px;

    @include mobile {
      @include font(12px, 400, 15px);

      min-height: 30px;
    }

    #{$self}--popular & {
      color: $color-gray-400;
    }
  }

  &__price {
    @include font(55px, 600, 39px);

    height: 39px;
    margin-top: 40px;

    @include mobile {
      @include font(37px, 700, 26px);

      height: 26px;
      margin-top: 16px;
    }

    sub {
      @include font(20px, 600, 26px);

      color: $color-gray-700;
      vertical-align: unset;
      bottom: 0.3em;
      margin-left: 8px;

      #{$self}--popular & {
        color: $color-gray-400;
      }

      @include mobile {
        @include font(13px, 600, 17px);

        height: 26px;
      }
    }
  }

  &__action {
    margin-top: 40px;

    @include mobile {
      width: 100%;
      margin-top: 16px;
      height: 32px;
      font-size: 11px;
      padding: 0;
      border-radius: 8px;
    }
  }

  &__list {
    margin-top: 40px;
    list-style: none;
    padding: 0;

    @include mobile {
      margin-top: 16px;
    }

    #{$self}--popular & {
      --tariff-card-list-item-color: #{$color-white};
      --tariff-card-list-item-checkmark-color: #{$color-lemon-500};
    }
  }
}
</style>
