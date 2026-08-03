<template>
  <section
    class="section"
    :class="[`section--${surface}`, { 'section--centered': centered }]"
  >
    <div class="container">
      <header class="section__head">
        <div class="section__headings">
          <p v-if="eyebrow" class="section__eyebrow">
            {{ eyebrow }}
          </p>

          <h2 class="section__title">
            {{ title }}
          </h2>
        </div>

        <p v-if="description" class="section__description">
          {{ description }}
        </p>
      </header>

      <div class="section__body">
        <slot />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  eyebrow?: string
  description?: string
  surface?: 'plain' | 'band'
  centered?: boolean
}>(), {
  surface: 'plain',
  centered: false,
})
</script>

<style lang="scss">
.section {
  &--band {
    padding-block: $section-pad;
    background-color: $color-linen;
    border-block: 1px solid $color-hairline;
  }

  &__head {
    display: grid;
    gap: 16px;

    // Heading left, supporting line right: the split removes the orphaned words
    // a centred, character-capped heading produced in Russian.
    @include wide {
      grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
      align-items: end;
      column-gap: 48px;
    }
  }

  &__eyebrow {
    @include eyebrow;

    display: flex;
    align-items: center;
    gap: 8px;
    color: $color-slate;
    margin-bottom: 14px;

    &::before {
      content: '';
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: $color-quantum-green;
    }
  }

  &__title {
    @include text(h2);

    color: $color-ink;
    text-wrap: balance;
    max-width: 22ch;
  }

  &__description {
    @include text(lead);

    color: $color-slate;
    max-width: 46ch;

    @include wide {
      padding-bottom: 4px;
    }
  }

  &__body {
    margin-top: $block-gap;
  }

  &--centered {
    .section__head {
      grid-template-columns: none;
      justify-items: center;
      text-align: center;
    }

    .section__eyebrow {
      justify-content: center;
    }

    .section__title,
    .section__description {
      margin-inline: auto;
    }
  }
}
</style>
