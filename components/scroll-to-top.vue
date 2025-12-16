<template>
  <Transition name="scroll-to-top">
    <button v-show="y > 100" class="scroll-to-top desktop-only" type="button" @click="y = 0">
      <IMonoArrowUp />
    </button>
  </Transition>
</template>

<script lang="ts" setup>
import { useWindowScroll } from '@vueuse/core'

const { y } = useWindowScroll()
</script>

<style lang="scss">
.scroll-to-top {
  position: fixed;
  right: 60px;
  bottom: 60px;
  border-radius: 16px;
  color: $color-gray-700;
  width: 64px;
  height: 64px;
  transition: $transition-duration $transition-easing;
  transition-property: background-color, color;
  z-index: 1000;
  background-color: $color-gray-300;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: $color-black;
    background-color: $color-gray-400;
  }
}

.scroll-to-top-leave-active,
.scroll-to-top-enter-active {
  transition: transform $transition-duration $transition-easing;
}

.scroll-to-top-enter-from,
.scroll-to-top-leave-to {
  transform: scale(0);
}
</style>
