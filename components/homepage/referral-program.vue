<template>
  <div class="referral-program">
    <div class="container">
      <div class="referral-program__inner">
        <div class="referral-program__header">
          <NuxtImg class="mobile-only" src="/referral-program-bg-mobile.png" height="80px" format="webp" draggable="false" alt="" />

          <h2 class="referral-program__title">
            Реферальная программа
          </h2>
        </div>

        <div class="referral-program__rule" aria-hidden="true" />

        <p class="referral-program__description">
          Получайте вознаграждение за пополнение пользователей,<br>
          которые зарегистрируются и воспользуется нашим сервисом
        </p>

        <ul class="referral-program__list">
          <li>Получите свою уникальную ссылку в личном кабинете</li>
          <li>Поделитесь ею с друзьями, коллегами или в соцсетях</li>
          <li>Зарабатывайте. Больше друзей – больше бонусов!</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const img = useImage()

const desktopBg = computed(() => {
  return `url('${img('/referral-program-bg.png', { height: '375px', format: 'webp' })}')`
})
</script>

<style lang="scss">
.referral-program {
  &__inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 56px 64px;
    border-radius: $radius-card;
    min-height: 360px;
    color: $color-white;
    background-color: $color-charcoal;
    position: relative;
    overflow: hidden;

    @include desktop {
      background-image: v-bind(desktopBg);
      background-repeat: no-repeat;
      background-position: center right 48px;
      background-size: contain;
    }

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg, rgba($color-charcoal, 0.96) 0%, rgba($color-charcoal, 0.88) 48%, rgba($color-charcoal, 0.55) 100%);
      pointer-events: none;

      @include mobile {
        background: rgba($color-charcoal, 0.92);
      }
    }

    > * {
      position: relative;
    }

    @include mobile {
      padding: 24px 16px;
      min-height: unset;
    }
  }

  &__header {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  &__title {
    @include font(40px, 300, 1.15);

    letter-spacing: -0.03em;

    @include mobile {
      @include font(26px, 300, 1.2);
    }
  }

  &__rule {
    width: 80px;
    height: 2px;
    margin-top: 16px;
    background: $color-quantum-green;
  }

  &__description {
    @include font(16px, 400, 1.55);

    margin-top: 20px;
    color: rgba($color-white, 0.82);
    max-width: 42ch;

    @include mobile {
      @include font(14px, 400, 1.5);

      margin-top: 16px;
    }
  }

  &__list {
    @include font(15px, 400, 1.4);

    list-style: none;
    margin-top: 28px;
    padding-left: 0;

    @include mobile {
      @include font(13px, 400, 1.4);

      margin-top: 20px;
    }

    li {
      position: relative;
      display: flex;
      align-items: center;
      gap: 14px;
      counter-increment: referral-program-item;

      &:not(:last-child) {
        margin-bottom: 16px;

        &::after {
          content: '';
          position: absolute;
          left: 15px;
          top: 34px;
          height: 12px;
          border-left: 1px dashed rgba($color-quantum-glow, 0.7);
        }
      }

      &::before {
        @include font(13px, 500, 32px);

        display: block;
        content: counter(referral-program-item);
        height: 32px;
        width: 32px;
        flex-shrink: 0;
        text-align: center;
        background-color: $color-quantum-green;
        color: $color-white;
        border-radius: 8px;
      }
    }
  }
}
</style>
