<template>
  <div class="homepage-hero">
    <div class="container">
      <a
        class="homepage-hero__badge-link"
        :href="app.astanaHubUrl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <UiBadge class="homepage-hero__badge">
          Участник Astana Hub
        </UiBadge>
      </a>

      <h1 class="homepage-hero__title">
        Сервис умных закупок и эффективного управления продажами на <span>Kaspi.kz</span>
      </h1>

      <p class="homepage-hero__subtitle">
        Помогаем выгодно закупать товары, автоматизировать продажи и сохранять конкурентоспособность
      </p>

      <div class="homepage-hero__actions">
        <InfoButton />

        <UiButton type="secondary" href="#hero-cards">
          Узнать подробности
        </UiButton>
      </div>

      <div class="homepage-hero__media">
        <NuxtImg
          class="homepage-hero__image desktop-only"
          src="/hero-desktop.png"
          height="650"
          draggable="false"
          format="webp"
          alt="Интерфейс QuantumBot"
        />
        <NuxtImg
          class="homepage-hero__image mobile-only"
          src="/hero-mobile.png"
          height="650"
          draggable="false"
          format="webp"
          alt="Интерфейс QuantumBot"
        />
      </div>

      <div id="hero-cards" class="homepage-hero__cards">
        <div class="homepage-hero-card">
          <IDuoThumbsUp class="homepage-hero-card__icon" />
          <div class="homepage-hero-card__title">Удобно</div>
          <div class="homepage-hero-card__description">
            Автоматическое обновление цен в реальном времени
          </div>
        </div>

        <div class="homepage-hero-card">
          <IDuoLightning class="homepage-hero-card__icon" />
          <div class="homepage-hero-card__title">Быстро</div>
          <div class="homepage-hero-card__description">
            Простота интеграции с Kaspi.kz
          </div>
        </div>

        <div class="homepage-hero-card">
          <IDuoFlipChart class="homepage-hero-card__icon" />
          <div class="homepage-hero-card__title">Выгодно</div>
          <div class="homepage-hero-card__description">
            Увеличение продаж за счет конкурентных цен
          </div>
        </div>

        <div class="homepage-hero-card">
          <IDuoGroupChat class="homepage-hero-card__icon" />
          <div class="homepage-hero-card__title">Без проблем</div>
          <div class="homepage-hero-card__description">
            Поддержка 24/7
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const app = useAppConfig()
</script>

<style lang="scss">
.homepage-hero {
  padding-top: 64px;
  text-align: center;

  @include mobile {
    padding-top: 32px;
  }

  &__badge-link {
    display: inline-block;
    margin-bottom: 24px;

    &:hover {
      color: inherit;
    }
  }

  &__title {
    @include font(56px, 300, 1.1);

    letter-spacing: -0.036em;
    color: $color-ink;
    max-width: min(34ch, 100%);
    margin-inline: auto;
    text-wrap: balance;

    @include mobile {
      @include font(28px, 300, 1.15);

      letter-spacing: -0.02em;
      max-width: none;
    }

    span {
      color: $color-quantum-green;
      font-weight: 400;
    }
  }

  &__subtitle {
    @include font(18px, 400, 1.5);

    color: $color-slate;
    margin-top: 20px;
    max-width: 42ch;
    margin-inline: auto;

    @include mobile {
      @include font(15px, 400, 1.5);

      margin-top: 16px;
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-top: 32px;

    @include mobile {
      flex-direction: column;
      align-items: stretch;
      gap: 12px;
      margin-top: 24px;
    }
  }

  &__media {
    margin-top: 48px;

    @include mobile {
      margin-top: 32px;
    }
  }

  &__image {
    width: 100%;
    max-width: 980px;
    height: auto;
    border-radius: $radius-image;
    border: 1px solid $color-hairline;

    @include mobile {
      margin-top: 0;
    }
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-top: 40px;
    text-align: left;

    @include mobile {
      grid-template-columns: 1fr;
      gap: 12px;
      margin-top: 24px;
    }
  }
}

.homepage-hero-card {
  padding: 20px;
  border: 1px solid $color-hairline;
  border-radius: $radius-card;
  background: $color-white;

  @include mobile {
    display: grid;
    grid-template-columns: 24px 1fr;
    column-gap: 12px;
    row-gap: 8px;
    padding: 16px;
  }

  &__icon {
    font-size: 28px;
    color: $color-quantum-green;

    @include mobile {
      font-size: 22px;
    }
  }

  &__title {
    @include font(18px, 500, 1.3);

    margin-top: 16px;
    color: $color-ink;

    @include mobile {
      @include font(16px, 500, 1.3);

      margin-top: 0;
      align-self: center;
    }
  }

  &__description {
    @include font(14px, 400, 1.5);

    margin-top: 8px;
    color: $color-slate;

    @include mobile {
      @include font(13px, 400, 1.45);

      margin-top: 0;
      grid-column: span 2;
    }
  }
}
</style>
