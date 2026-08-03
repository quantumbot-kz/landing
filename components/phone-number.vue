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
    font-size: 20px;
    flex-shrink: 0;
    color: $color-quantum-green;

    @include mobile {
      display: none;
    }
  }

  &__number {
    @include text(body-sm, 500);

    color: $color-ink;

    &:hover {
      color: $color-quantum-green;
    }
  }
}
</style>
