<template>
  <Transition name="scroll-to-top">
    <button v-show="y > 100" class="scroll-to-top desktop-only" type="button" aria-label="Наверх" @click="y = 0">
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
  right: 32px;
  bottom: 32px;
  border-radius: $radius-secondary;
  color: $color-carbon;
  width: 48px;
  height: 48px;
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease;
  z-index: 1000;
  background-color: $color-white;
  border: 1px solid $color-hairline;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;

  &:hover,
  &:focus-visible {
    color: $color-quantum-green;
    border-color: $color-quantum-green;
  }
}

.scroll-to-top-leave-active,
.scroll-to-top-enter-active {
  transition:
    transform 0.2s ease,
    opacity 0.2s ease;
}

.scroll-to-top-enter-from,
.scroll-to-top-leave-to {
  transform: scale(0.85);
  opacity: 0;
}
</style>
