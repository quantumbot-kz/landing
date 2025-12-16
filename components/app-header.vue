<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <NuxtImg src="/logo.svg" alt="one2one" class="header__logo desktop-only" draggable="false" />
        <NuxtImg src="/logo-compact.svg" alt="one2one" class="header__logo mobile-only" draggable="false" />

        <hr class="header__divider desktop-only">

        <a href="#how-it-works" class="header__demo desktop-only">
          <IMonoPlay />
          <span>Демо видео о продукте</span>
        </a>

        <div class="header__socials">
          <SocialLink :href="app.instagramUrl">
            <IMonoInstagram />
          </SocialLink>
          <SocialLink :href="app.telegramUrl">
            <IMonoTelegram />
          </SocialLink>
          <SocialLink :href="app.whatsappUrl">
            <IMonoWhatsapp />
          </SocialLink>
        </div>

        <hr class="header__divider">

        <PhoneNumber />

        <UiButton :href="app.appUrl" rel="noopener noreferrer" class="header__sign-in">
          Войти
        </UiButton>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
const app = useAppConfig()
</script>

<style lang="scss">
.header {
  position: sticky;
  top: 0;
  background-color: $color-gray-200;
  z-index: 100;

  &__inner {
    display: flex;
    align-items: center;
    height: 80px;
    padding: 16px 24px;
    justify-content: flex-start;

    @include mobile {
      padding: 12px 0;
      height: unset;
    }
  }

  &__logo {
    height: 21px;

    @include mobile {
      height: 16px;
    }
  }

  &__divider {
    height: 21px;
    width: 1px;
    border: none;
    background-color: $color-gray-400;
    margin-inline: 24px;

    @include mobile {
      margin-inline: 12px;
    }
  }

  &__demo {
    @include font(12px, 500, 15px);

    display: flex;
    align-items: center;
    gap: 8px;
    color: $color-gray-700;

    > svg {
      font-size: 24px;
      color: $color-green-500;
    }
  }

  &__socials {
    display: flex;
    align-items: center;
    gap: 24px;
    margin-left: auto;
    font-size: 24px;

    @include mobile {
      font-size: 16px;
      gap: 16px;
    }
  }

  &__sign-in {
    height: 40px;
    padding-block: 9px;
    margin-left: 24px;

    @include mobile {
      @include font(12px, 500, 15px);

      height: 32px;
      padding: 7.5px 15px;
      margin-left: 12px;
    }
  }
}
</style>
