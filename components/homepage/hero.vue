<template>
  <div id="top" class="hero">
    <div class="container">
      <a
        class="hero__badge"
        :href="app.astanaHubUrl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="hero__badge-label">Участник</span>
        <span class="hero__badge-divider" aria-hidden="true" />
        <span class="hero__badge-name">Astana Hub</span>
      </a>

      <h1 class="hero__title">
        Сервис умных закупок и эффективного управления продажами на <span>Kaspi.kz</span>
      </h1>

      <p class="hero__subtitle">
        Бот автокорректировки цен на Kaspi.kz, умный предзаказ, закупки с Wildberries и регистрация товаров в НКТ - в одном кабинете
      </p>

      <div class="hero__actions">
        <div class="hero__buttons">
          <UiButton :href="app.appUrl" rel="noopener noreferrer">
            Начать бесплатно
          </UiButton>

          <UiButton type="secondary" href="#how-it-works">
            Узнать подробности
          </UiButton>
        </div>

        <p class="hero__hint">
          Зарегистрируйтесь и получите 3 дня бесплатной подписки для ознакомления с сервисом
        </p>
      </div>
    </div>

    <div class="hero__media">
      <div class="hero__device">
        <div class="hero__laptop">
          <video
            class="hero__screen-video"
            autoplay
            muted
            loop
            playsinline
            preload="metadata"
            poster="/hero-demo-poster.jpg?v=5"
            aria-label="Демонстрация интерфейса Quantum"
          >
            <source src="/hero-demo.mp4?v=4" type="video/mp4">
            <source src="/hero-demo.webm?v=4" type="video/webm">
          </video>

          <NuxtImg
            class="hero__laptop-frame"
            src="/hero-macbook-frame-v3.png"
            width="4096"
            height="2474"
            sizes="100vw lg:1100px"
            format="webp"
            loading="eager"
            :preload="{ fetchPriority: 'high' }"
            fetchpriority="high"
            draggable="false"
            alt=""
          />
        </div>
      </div>
    </div>

    <div class="container">
      <ul class="hero__benefits">
        <li v-for="benefit in benefits" :key="benefit.title" class="hero__benefit">
          <component :is="benefit.icon" class="hero__benefit-icon" />

          <p class="hero__benefit-title">
            {{ benefit.title }}
          </p>

          <p class="hero__benefit-text">
            {{ benefit.text }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import IDuoFlipChart from '~icons/duo/flip-chart'
import IDuoGroupChat from '~icons/duo/group-chat'
import IDuoLightning from '~icons/duo/lightning'
import IDuoThumbsUp from '~icons/duo/thumbs-up'

const app = useAppConfig()

const benefits = [
  { icon: IDuoThumbsUp, title: 'Удобно', text: 'Автоматическое обновление цен в реальном времени' },
  { icon: IDuoLightning, title: 'Быстро', text: 'Простота интеграции с Kaspi.kz' },
  { icon: IDuoFlipChart, title: 'Выгодно', text: 'Увеличение продаж за счет конкурентных цен' },
  { icon: IDuoGroupChat, title: 'Без проблем', text: 'Поддержка 24/7' },
]
</script>

<style lang="scss">
.hero {
  padding-top: clamp(40px, 6vw, 88px);
  text-align: center;

  &__badge {
    @include text(caption);

    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 8px 14px;
    border: 1px solid $color-mint-line;
    border-radius: $radius-control;
    background-color: $color-mint-wash;
    color: $color-carbon;
    transition:
      border-color 0.2s ease,
      color 0.2s ease,
      background-color 0.2s ease;

    &:hover,
    &:focus-visible {
      border-color: $color-quantum-green;
      color: $color-ink;
      background-color: $color-white;
    }
  }

  &__badge-label {
    color: $color-slate;
    letter-spacing: 0.04em;
  }

  &__badge-divider {
    width: 1px;
    height: 12px;
    background-color: $color-mint-line;
    flex-shrink: 0;
  }

  &__badge-name {
    font-weight: 500;
    color: $color-ink;
    letter-spacing: -0.01em;
  }

  &__title {
    @include text(display);

    color: $color-ink;
    max-width: 19ch;
    margin: clamp(20px, 2.4vw, 28px) auto 0;
    text-wrap: balance;

    span {
      color: $color-quantum-green;
      font-weight: 400;
    }
  }

  &__subtitle {
    @include text(lead);

    color: $color-slate;
    margin: clamp(16px, 1.8vw, 22px) auto 0;
    max-width: 52ch;
  }

  &__actions {
    display: grid;
    justify-items: center;
    gap: 14px;
    margin-top: clamp(24px, 3vw, 36px);
  }

  &__buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    @include compact {
      flex-direction: column;
      align-self: stretch;

      .ui-button {
        width: 100%;
      }
    }
  }

  &__hint {
    @include text(caption);

    color: $color-slate;
    max-width: 44ch;
  }

  &__media {
    margin-top: clamp(36px, 5vw, 64px);
    padding-inline: $page-gutter;

    @include mobile {
      padding-inline: $page-gutter-mobile;
    }
  }

  // Laptop cut-out already has a baked-in shadow - no card frame around it.
  // Same MacBook + screen video on all breakpoints (fits via page gutters).
  &__device {
    max-width: 1100px;
    margin-inline: auto;
  }

  &__laptop {
    position: relative;
    width: 100%;
    aspect-ratio: 4096 / 2474;
  }

  // Screen hole measured from the punched MacBook frame (v3).
  &__screen-video {
    position: absolute;
    left: 10.23%;
    top: 2.47%;
    width: 79.54%;
    height: 85.41%;
    object-fit: cover;
    object-position: center;
    background-color: $color-ink;
  }

  &__laptop-frame {
    position: absolute;
    inset: 0;
    z-index: 1;
    display: block;
    width: 100%;
    height: 100%;
    pointer-events: none;
    user-select: none;
  }

  &__benefits {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    list-style: none;
    margin: clamp(40px, 5vw, 72px) 0 0;
    padding: 0;
    text-align: left;
    border: 1px solid $color-hairline;
    border-radius: $radius-card;
    overflow: hidden;

    @include narrow {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @include mobile {
      grid-template-columns: minmax(0, 1fr);
    }
  }

  // One bordered container with hairline dividers, not four separate boxes.
  &__benefit {
    padding: clamp(18px, 2vw, 26px);
    border-inline-start: 1px solid $color-hairline;

    &:first-child {
      border-inline-start: 0;
    }

    @include narrow {
      &:nth-child(odd) {
        border-inline-start: 0;
      }

      &:nth-child(n + 3) {
        border-block-start: 1px solid $color-hairline;
      }
    }

    @include mobile {
      border-inline-start: 0;

      &:not(:first-child) {
        border-block-start: 1px solid $color-hairline;
      }
    }
  }

  &__benefit-icon {
    font-size: 26px;
    color: $color-quantum-green;
  }

  &__benefit-title {
    @include text(h4);

    margin-top: 14px;
    color: $color-ink;
  }

  &__benefit-text {
    @include text(body-sm);

    margin-top: 6px;
    color: $color-slate;
  }
}
</style>
