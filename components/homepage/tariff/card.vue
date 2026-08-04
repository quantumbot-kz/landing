<template>
  <div class="tariff-card" :class="{ 'tariff-card--popular': popular }">
    <div class="tariff-card__head">
      <span v-if="popular" class="tariff-card__flag">Популярный</span>

      <p class="tariff-card__title">
        {{ title }}
      </p>
    </div>

    <p class="tariff-card__description">
      <slot />
    </p>

    <p class="tariff-card__price">
      <span class="tariff-card__amount">₸&nbsp;{{ price }}</span>
      <span class="tariff-card__period">{{ period }}</span>
    </p>

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
  price: string
  period: string
  popular?: boolean
}>()

const app = useAppConfig()
</script>

<style lang="scss">
.tariff-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: clamp(20px, 2vw, 28px);
  border-radius: $radius-card;
  border: 1px solid $color-hairline;
  background-color: $color-white;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: $color-fog;
  }

  &--popular {
    border-color: $color-quantum-green;
    box-shadow: inset 0 0 0 1px $color-quantum-green;

    --tariff-feature-mark-bg: #{$color-mint-wash};
    --tariff-feature-mark-color: #{$color-quantum-green};

    &:hover {
      border-color: $color-quantum-green;
    }
  }

  // The flag row is always reserved, flagged or not, so every plan keeps its
  // title, price, CTA and feature list on a shared baseline.
  &__head {
    display: grid;
    justify-items: start;
    gap: 10px;
    grid-template-rows: 22px auto;
  }

  &__title {
    @include text(h3);

    grid-row: 2;
    color: $color-ink;
    // "Seller Ultimate" wraps at four columns; reserving both lines keeps the
    // row aligned instead of pushing one card's price down.
    min-height: calc(1.26em * 2);
  }

  &__flag {
    @include text(eyebrow);

    grid-row: 1;
    align-self: center;
    padding: 4px 10px;
    border-radius: $radius-pill;
    background-color: $color-quantum-green;
    color: $color-white;
    text-transform: uppercase;
  }

  &__description {
    @include text(body-sm);

    color: $color-slate;
    // Longest copy in the row is three lines; reserving them keeps every price
    // and CTA on a shared baseline without a wrapper grid.
    min-height: calc(1.55em * 3);
    margin-top: 10px;
  }

  &__price {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
    margin-top: clamp(20px, 2vw, 28px);
    color: $color-ink;
  }

  &__amount {
    @include text(price);

    font-variant-numeric: tabular-nums;
  }

  &__period {
    @include text(caption);

    color: $color-slate;
  }

  // One line, flex-centred. The previous white-space:normal + line-height:1
  // wrap left Cyrillic sitting high in the pill.
  &__action.ui-button {
    margin-top: 20px;
    width: 100%;
    height: 46px;
    min-height: 46px;
    padding: 0 10px;
    font-size: 13px;
    line-height: 1;
    white-space: nowrap;
    text-align: center;
  }

  &__list {
    margin: clamp(20px, 2vw, 26px) 0 0;
    padding-top: clamp(20px, 2vw, 26px);
    border-top: 1px solid $color-hairline;
    list-style: none;
  }
}
</style>
