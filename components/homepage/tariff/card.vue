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
      <span class="tariff-card__amount">₸ {{ pricePerMonth }}</span>
      <span class="tariff-card__period">/месяц</span>
    </div>

    <UiButton
      class="tariff-card__action"
      :type="popular ? 'primary' : 'secondary'"
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

  display: flex;
  flex-direction: column;
  padding: 28px;
  border-radius: $radius-card;
  border: 1px solid $color-hairline;
  background-color: $color-white;
  height: 100%;

  @include mobile {
    width: 260px;
    padding: 16px;
  }

  &--popular {
    background-color: $color-mint-wash;
    border-color: $color-quantum-green;
  }

  &__title {
    @include font(24px, 500, 1.2);

    color: $color-ink;

    @include mobile {
      @include font(20px, 500, 1.2);
    }
  }

  &__description {
    @include font(14px, 400, 1.45);

    color: $color-slate;
    // 3 lines — longest copy in the row; keeps price/CTA/list on one baseline
    min-height: calc(1.45em * 3);
    margin-top: 8px;

    @include mobile {
      @include font(12px, 400, 1.4);

      min-height: calc(1.4em * 3);
    }
  }

  &__price {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
    margin-top: 28px;
    color: $color-ink;

    @include mobile {
      margin-top: 16px;
      gap: 4px;
    }
  }

  &__amount {
    @include font(40px, 300, 1.05);

    letter-spacing: -0.03em;

    @include mobile {
      @include font(32px, 300, 1.05);
    }
  }

  &__period {
    @include font(14px, 400, 1);

    color: $color-slate;
  }

  &__action.ui-button {
    margin-top: 24px;
    width: 100%;
    // Primary/secondary differ (52 vs 48); unify so feature lists share a baseline
    min-height: 48px;
    padding: 14px 12px;
    border-radius: $radius-pill;
    font-size: 14px;
    white-space: nowrap;

    @include mobile {
      margin-top: 16px;
      min-height: 40px;
      font-size: 12px;
      padding: 10px 14px;
    }
  }

  &__list {
    margin-top: 28px;
    list-style: none;
    padding: 0;

    @include mobile {
      margin-top: 16px;
    }

    #{$self}--popular & {
      --tariff-card-list-item-checkmark-color: #{$color-quantum-green};
    }
  }
}
</style>
