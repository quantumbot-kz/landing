<template>
  <div class="our-team-member">
    <div class="our-team-member__avatar">
      <NuxtImg :src="avatarUrl" width="200" height="200" format="webp" draggable="false" :alt="name" />
    </div>

    <div class="our-team-member__name">
      {{ name }}
    </div>

    <div class="our-team-member__position">
      {{ position }}
    </div>

    <ul class="our-team-member__experience">
      <slot />
    </ul>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  avatarUrl: string
  name: string
  position: string
}>()
</script>

<style lang="scss">
.our-team-member {
  display: flex;
  flex-direction: column;
  width: 220px;
  padding: 16px;
  border: 1px solid $color-hairline;
  border-radius: $radius-card;
  background: $color-white;
  height: 100%;

  &__avatar {
    margin-bottom: 20px;

    img {
      display: block;
      width: 100%;
      height: auto;
      aspect-ratio: 1;
      object-fit: cover;
      border-radius: 50%;
      margin-inline: auto;
    }
  }

  &__name {
    @include font(16px, 500, 1.35);

    text-align: center;
    color: $color-ink;
    // Two lines — longest names wrap; keeps role/list baseline stable
    min-height: calc(1.35em * 2);
  }

  &__position {
    @include font(13px, 400, 1.4);

    margin-top: 6px;
    text-align: center;
    color: $color-quantum-green;
    min-height: 1.4em;
  }

  &__experience {
    @include font(12px, 400, 1.5);

    list-style: disc;
    color: $color-slate;
    margin-top: 14px;
    margin-bottom: 0;
    padding-left: 1.1em;
    flex: 1;
  }
}
</style>
