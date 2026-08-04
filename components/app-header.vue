<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <a class="header__brand" href="#top" aria-label="Quantum - на главную">
          <NuxtImg src="/logo.svg" alt="Quantum" class="header__logo" draggable="false" />
        </a>

        <nav class="header__nav" aria-label="Основная навигация">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
          >
            {{ link.label }}
          </a>
        </nav>

        <div class="header__actions">
          <PhoneNumber class="header__phone" />

          <a class="header__sign-in" :href="app.appUrl" rel="noopener noreferrer">
            Войти
          </a>

          <UiButton
            :href="app.appUrl"
            rel="noopener noreferrer"
            class="header__cta"
          >
            Начать бесплатно
          </UiButton>
        </div>

        <button
          class="header__burger"
          type="button"
          :aria-expanded="menuOpen"
          aria-controls="mobile-menu"
          :aria-label="menuOpen ? 'Закрыть меню' : 'Открыть меню'"
          @click="menuOpen = !menuOpen"
        >
          <span class="header__burger-box" :class="{ 'is-open': menuOpen }">
            <span />
            <span />
          </span>
        </button>
      </div>
    </div>

    <UiCollapseTransition>
      <div v-show="menuOpen" id="mobile-menu" class="header__menu">
        <div class="container">
          <nav class="header__menu-nav" aria-label="Мобильная навигация">
            <a
              v-for="link in navLinks"
              :key="link.href"
              :href="link.href"
              @click="menuOpen = false"
            >
              {{ link.label }}
            </a>
          </nav>

          <div class="header__menu-footer">
            <PhoneNumber />

            <div class="header__menu-socials">
              <SocialLink :href="app.instagramUrl" aria-label="Instagram">
                <IMonoInstagram />
              </SocialLink>
              <SocialLink :href="app.telegramUrl" aria-label="Telegram">
                <IMonoTelegram />
              </SocialLink>
              <SocialLink :href="app.whatsappUrl" aria-label="WhatsApp">
                <IMonoWhatsapp />
              </SocialLink>
            </div>
          </div>

          <div class="header__menu-actions">
            <UiButton
              :href="app.appUrl"
              rel="noopener noreferrer"
              class="header__menu-cta"
            >
              Начать бесплатно
            </UiButton>

            <UiButton
              :href="app.appUrl"
              rel="noopener noreferrer"
              type="secondary"
              class="header__menu-cta"
            >
              Войти
            </UiButton>
          </div>
        </div>
      </div>
    </UiCollapseTransition>
  </header>
</template>

<script lang="ts" setup>
import { siteNavLinks } from '~/utils/site-nav'

const app = useAppConfig()

const navLinks = siteNavLinks

const menuOpen = ref(false)

watch(menuOpen, (open) => {
  if (import.meta.client)
    document.body.style.overflow = open ? 'hidden' : ''
})

onBeforeUnmount(() => {
  if (import.meta.client)
    document.body.style.overflow = ''
})

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape')
    menuOpen.value = false
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>

<style lang="scss">
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: rgba($color-white, 0.86);
  backdrop-filter: blur(16px) saturate(1.4);
  border-bottom: 1px solid $color-hairline;

  &__inner {
    display: flex;
    align-items: center;
    gap: 32px;
    height: 72px;

    @include until($bp-header) {
      height: 64px;
      gap: 16px;
    }
  }

  &__brand {
    display: flex;
    flex-shrink: 0;

    &:focus-visible {
      outline-offset: 6px;
    }
  }

  &__logo {
    height: 22px;
    width: auto;

    @include until($bp-header) {
      height: 20px;
    }
  }

  &__nav {
    display: flex;
    align-items: center;
    gap: 20px;
    flex-wrap: nowrap;
    flex: 1 1 auto;
    min-width: 0;
    justify-content: center;

    @include until($bp-header) {
      display: none;
    }

    a {
      @include text(body-sm);

      flex-shrink: 0;
      color: $color-carbon;
      position: relative;
      // Keeps the pointer target at 24px minimum without changing the visual size.
      padding-block: 6px;
      white-space: nowrap;

      &::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 1px;
        background-color: currentcolor;
        opacity: 0;
        transition: opacity 0.2s ease;
      }

      &:hover,
      &:focus-visible {
        color: $color-ink;

        &::after {
          opacity: 1;
        }
      }
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-left: auto;

    @include until($bp-header) {
      display: none;
    }
  }

  &__phone {
    @include until($bp-xl) {
      display: none;
    }
  }

  &__sign-in {
    @include text(body-sm);

    color: $color-carbon;

    &:hover,
    &:focus-visible {
      color: $color-ink;
    }
  }

  &__cta.ui-button {
    min-height: 40px;
    padding: 10px 20px;
    font-size: 14px;
  }

  &__burger {
    display: none;
    margin-left: auto;
    width: 44px;
    height: 44px;
    padding: 0;
    background: none;
    border: 1px solid $color-hairline;
    border-radius: $radius-control;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    color: $color-ink;

    @include until($bp-header) {
      display: flex;
    }
  }

  &__burger-box {
    display: block;
    position: relative;
    width: 18px;
    height: 12px;

    span {
      position: absolute;
      left: 0;
      width: 100%;
      height: 1.5px;
      border-radius: 2px;
      background-color: currentcolor;
      transition:
        transform 0.24s ease,
        top 0.24s ease;

      &:first-child {
        top: 0;
      }

      &:last-child {
        top: 10.5px;
      }
    }

    &.is-open span {
      top: 5px;

      &:first-child {
        transform: rotate(45deg);
      }

      &:last-child {
        transform: rotate(-45deg);
      }
    }
  }

  &__menu {
    border-top: 1px solid $color-hairline;
    background-color: $color-white;
    overflow: hidden;

    @include from($bp-header) {
      display: none !important;
    }

    > .container {
      padding-block: 20px 24px;
    }
  }

  &__menu-nav {
    display: grid;

    a {
      @include text(h4);

      color: $color-ink;
      padding-block: 14px;
      border-bottom: 1px solid $color-hairline;
    }
  }

  &__menu-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    flex-wrap: wrap;
    padding-block: 20px;
  }

  &__menu-socials {
    display: flex;
    align-items: center;
    gap: 18px;
    font-size: 20px;
    color: $color-carbon;
  }

  &__menu-actions {
    display: grid;
    gap: 10px;
  }

  &__menu-cta.ui-button {
    width: 100%;
  }
}
</style>
