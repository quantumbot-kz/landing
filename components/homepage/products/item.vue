<template>
  <article
    class="product"
    :class="{ 'product--reversed': reversed }"
  >
    <div class="product__copy">
      <p class="product__kind">
        {{ kind }}
      </p>

      <h3 class="product__title">
        {{ title }}
      </h3>

      <p class="product__subtitle">
        {{ subtitle }}
      </p>

      <ul class="product__list">
        <li v-for="benefit in benefits" :key="benefit">
          {{ benefit }}
        </li>
      </ul>

      <UiButton
        class="product__cta"
        :type="ctaType"
        :href="ctaHref"
        :rel="isExternal ? 'noopener noreferrer' : undefined"
      >
        {{ ctaLabel }}
      </UiButton>
    </div>

    <div class="product__media">
      <NuxtImg
        v-if="image"
        class="product__image"
        :src="image"
        :alt="imageAlt"
        width="960"
        height="600"
        sizes="sm:100vw md:100vw lg:560px"
        format="webp"
        loading="lazy"
        draggable="false"
      />

      <div
        v-else
        class="product__placeholder"
        role="img"
        :aria-label="imageAlt"
      >
        <span class="product__placeholder-label">
          Скриншот интерфейса
        </span>
        <span class="product__placeholder-hint">
          {{ title }}
        </span>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  kind: string
  title: string
  subtitle: string
  benefits: string[]
  ctaLabel: string
  ctaHref: string
  ctaType?: 'primary' | 'secondary'
  image?: string
  imageAlt: string
  reversed?: boolean
}>(), {
  ctaType: 'secondary',
  reversed: false,
})

const isExternal = computed(() => /^https?:\/\//.test(props.ctaHref))
</script>

<style lang="scss">
.product {
  display: grid;
  gap: clamp(24px, 3vw, 48px);
  align-items: center;

  @include wide {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.05fr);
  }

  &--reversed {
    @include wide {
      .product__copy {
        order: 2;
      }

      .product__media {
        order: 1;
      }
    }
  }

  &__kind {
    @include eyebrow;

    color: $color-slate;
  }

  &__title {
    @include text(h3);

    margin-top: 12px;
    color: $color-ink;
    text-wrap: balance;
    max-width: 28ch;
  }

  &__subtitle {
    @include text(lead);

    margin-top: 10px;
    color: $color-slate;
    max-width: 42ch;
  }

  &__list {
    @include text(body-sm);

    display: grid;
    gap: 10px;
    margin: 20px 0 0;
    padding: 0;
    list-style: none;
    color: $color-carbon;

    li {
      position: relative;
      padding-left: 22px;

      &::before {
        content: '';
        position: absolute;
        left: 2px;
        top: 0.55em;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        border: 1px solid $color-quantum-green;
      }
    }
  }

  &__cta.ui-button {
    margin-top: 28px;

    @include compact {
      width: 100%;
    }
  }

  &__image {
    display: block;
    width: 100%;
    height: auto;
  }

  &__placeholder {
    display: grid;
    place-content: center;
    gap: 6px;
    aspect-ratio: 16 / 10;
    padding: clamp(24px, 4vw, 48px);
    text-align: center;
    border-radius: $radius-panel;
    border: 1px dashed $color-fog;
    background-color: $color-white;
  }

  &__placeholder-label {
    @include text(body-sm);

    font-weight: 500;
    color: $color-carbon;
  }

  &__placeholder-hint {
    @include text(caption);

    color: $color-slate;
    max-width: 28ch;
    margin-inline: auto;
  }
}
</style>
