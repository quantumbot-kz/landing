<template>
  <div class="phone-number">
    <IDuoPhone class="phone-number__icon" />

    <a :href="`tel:${app.phoneNumber}`" class="phone-number__number">
      {{ app.phoneNumber }}
    </a>
  </div>
</template>

<script setup lang="ts">
const app = useAppConfig()
</script>

<style lang="scss">
.phone-number {
  display: inline-flex;
  align-items: center;
  gap: 8px;

  &__icon {
    font-size: 24px;
    flex-shrink: 0;

    @include mobile {
      display: none;
    }
  }

  &__number {
    @include font(14px, 700, 18px, 'phone-number');

    color: $color-black;
  }
}
</style>
