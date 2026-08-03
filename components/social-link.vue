<template>
  <a class="social-link" target="_blank" rel="noopener noreferrer">
    <slot />
  </a>
</template>

<style lang="scss">
.social-link {
  display: inline-flex;
  color: $color-slate;
  transition: color 0.2s ease;

  &:hover,
  &:focus-visible {
    color: $color-quantum-green;
  }
}
</style>
