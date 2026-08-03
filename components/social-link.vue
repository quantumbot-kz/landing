<template>
  <a class="social-link" target="_blank" rel="noopener noreferrer">
    <slot />
  </a>
</template>

<style lang="scss">
.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: $color-slate;
  transition: color 0.2s ease;
  // Icons are ~20px; the padding brings the hit area to the 44px minimum.
  padding: 12px;
  margin: -12px;
  border-radius: $radius-control;

  &:hover,
  &:focus-visible {
    color: $color-quantum-green;
  }
}
</style>
