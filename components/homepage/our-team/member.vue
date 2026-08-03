<template>
  <article class="team-member">
    <div class="team-member__photo">
      <NuxtImg :src="avatarUrl" width="360" height="360" format="webp" draggable="false" :alt="name" />
    </div>

    <p class="team-member__name">
      {{ name }}
    </p>

    <p class="team-member__position">
      {{ position }}
    </p>

    <ul class="team-member__experience">
      <slot />
    </ul>
  </article>
</template>

<script lang="ts" setup>
defineProps<{
  avatarUrl: string
  name: string
  position: string
}>()
</script>

<style lang="scss">
.team-member {
  display: flex;
  flex-direction: column;

  // Square full-bleed crops on a shared surface: the portraits arrive with
  // different studio backdrops, and circular masks made the mismatch obvious.
  &__photo {
    aspect-ratio: 1;
    border-radius: $radius-card;
    overflow: hidden;
    background-color: $color-linen;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__name {
    @include text(h4);

    margin-top: 16px;
    color: $color-ink;
  }

  &__position {
    @include text(caption);

    margin-top: 2px;
    color: $color-slate;
  }

  &__experience {
    @include text(body-sm);

    display: grid;
    gap: 6px;
    list-style: none;
    color: $color-slate;
    margin: 14px 0 0;
    padding-top: 14px;
    border-top: 1px solid $color-hairline;
  }
}
</style>
