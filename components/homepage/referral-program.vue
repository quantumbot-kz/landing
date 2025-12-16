<template>
  <div class="referral-program">
    <div class="container">
      <div class="referral-program__inner">
        <div class="referral-program__header">
          <NuxtImg class="mobile-only" src="/referral-program-bg-mobile.png" height="80px" format="webp" draggable="false" />

          <div class="referral-program__title">
            Реферальная программа
          </div>
        </div>

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
const app = useAppConfig()
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
    padding: 16px 100px;
    border-radius: 12px;
    height: 407px;
    color: $color-white;

    @include desktop {
      background-image: v-bind(desktopBg), linear-gradient(260.36deg, #21dac2 0%, #008574 86.86%);
      background-repeat: no-repeat;
      background-position:
        center right 100px,
        center;
    }

    @include mobile {
      background-color: $color-green-400;
      background-image: none;
      padding: 16px;
      height: unset;
    }
  }

  &__header {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  &__title {
    @include font(32px, 700, 45px);

    @include mobile {
      @include font(20px, 700, 28px);
    }
  }

  &__description {
    @include font(18px, 400, 32px);

    margin-top: 24px;

    @include mobile {
      @include font(12px, 400, 22px);

      margin-top: 16px;
    }
  }

  &__list {
    @include font(15px, 600, 15px);

    list-style: none;
    margin-top: 24px;
    padding-left: 0;

    @include mobile {
      @include font(12px, 600, 15px);

      margin-top: 16px;
    }

    li {
      position: relative;
      display: flex;
      align-items: center;
      gap: 16px;
      counter-increment: referral-program-item;

      &:not(:last-child) {
        margin-bottom: 21px;

        &::after {
          content: '';
          position: absolute;
          left: 16px;
          top: 36px;
          height: 13px;
          border-left: 1px dashed $color-lemon-500;
        }
      }

      &::before {
        @include font(16px, 600, 32px);

        display: block;
        content: counter(referral-program-item);
        height: 32px;
        width: 32px;
        flex-shrink: 0;
        text-align: center;
        background-color: $color-lemon-500;
        color: $color-black;
        border-radius: 8px;
      }
    }
  }
}
</style>
