<template>
  <div class="homepage-hero">
    <div class="container">
      <a :href="app.astanaHubUrl" target="_blank" rel="noopener noreferrer">
        <UiBadge class="homepage-hero__badge">
          Участник Astana Hub
        </UiBadge>
      </a>

      <h1 class="homepage-hero__title">
        Сервис умных закупок <br>
        и эффективного управления продажами на <b>Kaspi.kz</b>
      </h1>

      <div class="homepage-hero__subtitle">
        Помогаем выгодно закупать товары, автоматизировать продажи и сохранять конкурентоспособность
      </div>

      <div class="homepage-hero__actions desktop-only">
        <UiButton type="secondary" href="#hero-cards">
          Узнать подробности
        </UiButton>

        <InfoButton />
      </div>

      <NuxtImg height="650" class="homepage-hero__image desktop-only" src="/hero-desktop.png" draggable="false" format="webp" />
      <NuxtImg height="650" class="homepage-hero__image mobile-only" src="/hero-mobile.png" draggable="false" format="webp" />

      <div class="homepage-hero__actions mobile-only">
        <UiButton type="secondary" href="#hero-cards">
          Узнать подробности
        </UiButton>

        <InfoButton />
      </div>

      <div id="hero-cards" class="homepage-hero__cards">
        <div class="homepage-hero-card">
          <IDuoThumbsUp class="homepage-hero-card__icon" />

          <div class="homepage-hero-card__title">
            Удобно
          </div>

          <div class="homepage-hero-card__description">
            Автоматическое обновление цен в реальном времени
          </div>
        </div>

        <div class="homepage-hero-card">
          <IDuoLightning class="homepage-hero-card__icon" />

          <div class="homepage-hero-card__title">
            Быстро
          </div>

          <div class="homepage-hero-card__description">
            Простота интеграции с Kaspi.kz
          </div>
        </div>

        <div class="homepage-hero-card">
          <IDuoFlipChart class="homepage-hero-card__icon" />

          <div class="homepage-hero-card__title">
            Выгодно
          </div>

          <div class="homepage-hero-card__description">
            Увеличение продаж за счет конкурентных цен
          </div>
        </div>

        <div class="homepage-hero-card">
          <IDuoGroupChat class="homepage-hero-card__icon" />

          <div class="homepage-hero-card__title">
            Без проблем
          </div>

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
  text-align: center;

  &__badge {
    margin-bottom: 24px;

    @include mobile {
      margin-bottom: 16px;
    }
  }

  &__title {
    @include font(36px, 600, 46px);

    text-transform: uppercase;

    @include mobile {
      @include font(18px, 600, 23px);
    }

    strong {
      font-weight: 800;
    }

    b {
      color: $color-green-500;
    }
  }

  &__subtitle {
    @include font(24px, 400, 31px);

    color: $color-gray-700;
    margin-top: 24px;

    @include mobile {
      @include font(14px, 400, 18px);

      margin-top: 16px;
    }
  }

  &__image {
    @include mobile {
      height: auto;
      margin-top: 32px;
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    padding-block: 16px;
    margin-top: 24px;

    @include mobile {
      flex-direction: column;
      align-items: unset;
      gap: 16px;
      padding: 0;
      margin-top: 32px;
    }
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 60px;
    padding-inline: 78px;

    @include mobile {
      display: flex;
      flex-direction: column;
      gap: 24px;
      margin-top: 24px;
      padding: 0;
    }
  }
}

.homepage-hero-card {
  text-align: left;

  @include mobile {
    display: grid;
    grid-template-columns: 24px 1fr;
    padding: 16px;
    border-radius: 12px;
    background-color: $color-gray-200;
    column-gap: 12px;
    row-gap: 16px;
  }

  &__icon {
    font-size: 40px;

    @include mobile {
      font-size: 24px;
    }
  }

  &__title {
    @include font(22px, 600, 26px);

    margin-top: 24px;

    @include mobile {
      @include font(20px, 600, 24px);

      flex: 1;
      margin-top: 0;
    }
  }

  &__description {
    @include font(16px, 300, 19px);

    margin-top: 24px;

    @include mobile {
      @include font(12px, 300, 14px);

      margin-top: 0;
      grid-column: span 2;
    }
  }
}
</style>
