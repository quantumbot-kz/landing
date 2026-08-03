<template>
  <div class="homepage-section">
    <div class="container">
      <h2 class="homepage-section__title">
        {{ title }}
      </h2>

      <p v-if="description" class="homepage-section__description">
        {{ description }}
      </p>

      <div class="homepage-section__rule" aria-hidden="true" />

      <div class="homepage-section__content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description?: string
}>()
</script>

<style lang="scss">
.homepage-section {
  &__title {
    @include font(48px, 300, 1.2);

    letter-spacing: -0.03em;
    text-align: center;
    color: $color-ink;
    max-width: 18ch;
    margin-inline: auto;

    @include mobile {
      @include font(28px, 300, 1.2);

      letter-spacing: -0.02em;
      max-width: none;
    }
  }

  &__description {
    @include font(16px, 400, 1.5);

    text-align: center;
    margin-top: 12px;
    color: $color-slate;
    max-width: 48ch;
    margin-inline: auto;

    @include mobile {
      @include font(14px, 400, 1.5);
    }
  }

  &__rule {
    width: 120px;
    height: 2px;
    margin: 24px auto 0;
    background: $color-quantum-green;
    border-radius: 2px;
  }

  &__content {
    margin-top: 48px;

    @include mobile {
      margin-top: 32px;
    }
  }
}
</style>
