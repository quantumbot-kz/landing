<template>
  <div class="our-team-member">
    <div class="our-team-member__avatar">
      <NuxtImg :src="avatarUrl" width="200" height="200" format="webp" draggable="false" />
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
  width: 220px;

  &__avatar {
    margin-bottom: 32px;
    text-align: center;
  }

  &__name {
    @include font(18px, 700, 28px);

    text-align: center;
  }

  &__position {
    @include font(14px, 500, 25px);

    margin-top: 8px;
    text-align: center;
    color: #6236f5;
  }

  &__experience {
    @include font(12px, 400, 18px);

    list-style: disc;
    color: #787a82;
    margin-top: 16px;
  }
}
</style>
