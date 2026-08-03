<template>
  <div class="video-embed">
    <iframe
      v-if="active"
      class="video-embed__frame"
      :src="`${src}?autoplay=1&rel=0`"
      :title="title"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    />

    <button
      v-else
      class="video-embed__facade"
      type="button"
      :aria-label="`Смотреть видео: ${title}`"
      @click="active = true"
    >
      <img
        v-if="poster"
        class="video-embed__poster"
        :src="poster"
        alt=""
        loading="lazy"
        draggable="false"
      >

      <span class="video-embed__scrim" aria-hidden="true" />

      <span class="video-embed__play">
        <IMonoPlay />
      </span>
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  src: string
  title: string
  poster?: string
}>()

// The YouTube player and its red chrome only load once the seller asks for it.
const active = ref(false)
</script>

<style lang="scss">
.video-embed {
  position: relative;
  aspect-ratio: 16 / 9;
  border-radius: $radius-image;
  overflow: hidden;
  background-color: $color-charcoal;

  &__frame {
    display: block;
    width: 100%;
    height: 100%;
    border: 0;
  }

  &__facade {
    display: block;
    width: 100%;
    height: 100%;
    padding: 0;
    border: 0;
    background: none;
    cursor: pointer;

    &:hover .video-embed__play,
    &:focus-visible .video-embed__play {
      transform: translate(-50%, -50%) scale(1.06);
      background-color: $color-quantum-deep;
    }
  }

  &__poster {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__scrim {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(10, 10, 10, 0.28), rgba(10, 10, 10, 0.5));
  }

  &__play {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-color: $color-quantum-green;
    color: $color-white;
    font-size: 22px;
    box-shadow: $shadow-cta;
    transition:
      transform 0.2s ease,
      background-color 0.2s ease;

    @include reduced-motion {
      transition: background-color 0.2s ease;
    }
  }
}
</style>
