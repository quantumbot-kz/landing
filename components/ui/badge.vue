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
  @include font(12px, 500, 1);

  display: inline-block;
  border-radius: 8px;
  padding: 6px 10px;
  color: $color-carbon;
  background-color: $color-linen;
  letter-spacing: 0.02em;

  @include mobile {
    @include font(11px, 500, 1);
  }
}
</style>
