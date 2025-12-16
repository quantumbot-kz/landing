<template>
  <li class="tariff-card-list-item">
    <svg
      v-if="hot"
      class="tariff-card-list-item__hot"
      width="16"
      height="16"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style="vertical-align: middle;"
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.56606 1.95038C9.63306 1.12274 9.31294 1.01479 8.85508 1.70321L4.25408 8.62123C3.94901 9.07994 4.14962 9.4518 4.70039 9.4518H7.203C7.75456 9.4518 8.17042 9.88968 8.13006 10.4547L7.80896 14.9501C7.74972 15.7795 8.05021 15.8709 8.47381 15.1649L13.1901 7.30439C13.4727 6.83352 13.2538 6.4518 12.703 6.4518H10.2004C9.64882 6.4518 9.2382 6.00082 9.28189 5.46102L9.56606 1.95038Z" fill="#FF9E0C" />
    </svg>

    <slot />
  </li>
</template>

<script lang="ts" setup>
defineProps<{
  hot?: boolean
}>()
</script>

<style lang="scss">
.tariff-card-list-item {
  @include font(16px, 400, 20px);

  color: var(--tariff-card-list-item-color, $color-gray-700);
  position: relative;
  padding-left: 43px;
  padding-top: 3px;
  min-height: 25px;

  @include mobile {
    @include font(11px, 400, 14px);

    min-height: unset;
    padding-left: 24px;
    padding-top: 0;
  }

  &:not(:last-child) {
    margin-bottom: 27px;

    @include mobile {
      margin-bottom: 18px;
    }
  }

  &::before {
    position: absolute;
    left: 0px;
    top: 0;
    content: '';
    display: block;
    mask-image: url(/checkmark.svg);
    mask-size: cover;
    width: 24px;
    height: 25px;
    background-color: var(--tariff-card-list-item-checkmark-color, #3ed37a);

    @include mobile {
      width: 16px;
      height: 17px;
    }
  }
}
</style>
