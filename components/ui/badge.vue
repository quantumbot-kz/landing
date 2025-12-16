<template>
  <div :class="cn.b()">
    <slot />
  </div>
</template>

<script lang="ts" setup>
const cn = useClassname('ui-badge')
</script>

<style lang="scss">
.ui-badge {
  @include font(15px, 500, 15px);

  display: inline-block;
  border-radius: 3px;
  padding: 4px 8px;
  color: $color-gray-700;
  background-color: $color-gray-400;

  @include mobile {
    @include font(10px, 500, 15px);
  }
}
</style>
