<template>
  <li class="tariff-feature" :class="{ 'tariff-feature--accent': hot }">
    <span class="tariff-feature__mark" aria-hidden="true">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M2.5 7.4 5.4 10.3 11.5 4.2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </span>

    <span class="tariff-feature__text">
      <slot />
    </span>
  </li>
</template>

<script lang="ts" setup>
defineProps<{
  hot?: boolean
}>()
</script>

<style lang="scss">
.tariff-feature {
  @include text(body-sm);

  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: var(--tariff-feature-color, $color-carbon);

  &:not(:last-child) {
    margin-bottom: 12px;
  }

  // Neutral by default. Twenty-two green ticks per row spent the accent on
  // rows that carry no meaning; green now marks the popular plan only.
  &__mark {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 18px;
    height: 18px;
    margin-top: 0.15em;
    border-radius: 50%;
    background-color: var(--tariff-feature-mark-bg, $color-linen);
    color: var(--tariff-feature-mark-color, $color-slate);
  }

  // Differentiating features read through weight, not a second brand colour.
  &--accent &__text {
    color: $color-ink;
    font-weight: 500;
  }
}
</style>
