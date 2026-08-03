<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <NuxtImg src="/logo.svg" alt="QuantumBot" class="header__logo desktop-only" draggable="false" />
        <NuxtImg src="/logo-compact.svg" alt="QuantumBot" class="header__logo mobile-only" draggable="false" />

        <nav class="header__nav desktop-only" aria-label="Основная навигация">
          <a href="#how-it-works">Как работает</a>
          <a href="#tariffs">Тарифы</a>
          <a href="#faq">Вопросы</a>
        </nav>

        <div class="header__socials desktop-only">
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

        <PhoneNumber class="header__phone desktop-only" />

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
  z-index: 100;
  background-color: rgba($color-white, 0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid $color-hairline;

  &__inner {
    display: flex;
    align-items: center;
    gap: 24px;
    height: 72px;

    @include mobile {
      height: 56px;
      gap: 12px;
    }
  }

  &__logo {
    height: 22px;
    flex-shrink: 0;

    @include mobile {
      height: 16px;
    }
  }

  &__nav {
    display: flex;
    align-items: center;
    gap: 28px;
    margin-left: 16px;

    a {
      @include font(14px, 400, 1);

      color: $color-carbon;

      &:hover,
      &:focus-visible {
        color: $color-ink;
      }
    }
  }

  &__socials {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-left: auto;
    font-size: 20px;
    color: $color-carbon;
  }

  &__phone {
    margin-left: 8px;
  }

  &__sign-in {
    margin-left: auto;
    height: auto;
    min-height: 40px;
    padding: 10px 20px;
    border-radius: $radius-nav;
    font-size: 14px;

    @include desktop {
      margin-left: 0;
    }

    @include mobile {
      @include font(13px, 500, 1);

      min-height: 36px;
      padding: 8px 16px;
      margin-left: auto;
    }
  }
}
</style>
