<template>
  <div class="homepage-section">
    <div class="container">
      <div class="homepage-section__title">
        {{ title }}
      </div>

      <p v-if="description" class="homepage-section__description">
        {{ description }}
      </p>

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
    @include font(36px, 700, 46px);

    text-align: center;

    @include mobile {
      @include font(20px, 700, 26px);
    }
  }

  &__description {
    @include font(14px, 300, 17px);

    text-align: center;
    margin-top: 8px;

    @include mobile {
      @include font(13px, 300, 16px);
    }
  }

  &__content {
    margin-top: 40px;
  }
}
</style>
