<template>
  <HomepageSection
    id="how-it-works"
    class="how-it-works"
    title="Как работает наш сервис"
    description="Четыре простых шага для увеличения ваших продаж"
  >
    <div class="how-it-works__cards">
      <div class="how-it-works-card">
        <div class="how-it-works-card__step">Шаг 1</div>
        <div class="how-it-works-card__title">Подключение</div>
        <div class="how-it-works-card__description">
          Подключите свой аккаунт Kaspi.kz к нашему сервису
        </div>
      </div>

      <div class="how-it-works-card">
        <div class="how-it-works-card__step">Шаг 2</div>
        <div class="how-it-works-card__title">Настройка</div>
        <div class="how-it-works-card__description">
          Настройте минимальные цены для товаров
        </div>
      </div>

      <div class="how-it-works-card">
        <div class="how-it-works-card__step">Шаг 3</div>
        <div class="how-it-works-card__title">Мониторинг</div>
        <div class="how-it-works-card__description">
          Наш сервис автоматически мониторит конкурентов и обновляет цены
        </div>
      </div>

      <div class="how-it-works-card">
        <div class="how-it-works-card__step">Шаг 4</div>
        <div class="how-it-works-card__title">Прирост</div>
        <div class="how-it-works-card__description">
          Получите кратный прирост продаж и прибыли
        </div>
      </div>
    </div>

    <div class="how-it-works-demo">
      <div class="how-it-works-demo__copy">
        <div class="how-it-works-demo__title">
          Демо видео о продукте
        </div>

        <ul class="how-it-works-demo__list">
          <li>Оцените интерфейс приложения для ПК и мобильных девайсов</li>
          <li>Ознакомьтесь с примером добавления товара на предзаказ</li>
          <li>Просмотрите пример добавления товаров и управления ими через приложение</li>
        </ul>

        <UiButton class="how-it-works-demo__action" :href="app.appUrl" rel="noopener noreferrer">
          Попробовать бесплатно
        </UiButton>
      </div>

      <iframe
        class="how-it-works-demo__video"
        :src="app.videoUrl"
        title="Демо видео о продукте"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        loading="lazy"
      />
    </div>
  </HomepageSection>
</template>

<script setup lang="ts">
const app = useAppConfig()
</script>

<style lang="scss">
.how-it-works {
  &__cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;

    @include mobile {
      grid-template-columns: 1fr;
    }
  }
}

.how-it-works-card {
  padding: 24px 20px;
  background-color: $color-white;
  border: 1px solid $color-hairline;
  border-radius: $radius-card;
  text-align: left;

  &__step {
    @include font(12px, 500, 1);

    display: inline-block;
    padding: 6px 10px;
    border-radius: 8px;
    background: $color-quantum-green;
    color: $color-white;
    margin-bottom: 16px;
  }

  &__title {
    @include font(20px, 500, 1.3);

    color: $color-ink;
    padding-bottom: 10px;
    border-bottom: 2px solid $color-hairline;
  }

  &__description {
    @include font(14px, 400, 1.5);

    color: $color-slate;
    margin-top: 12px;
  }
}

.how-it-works-demo {
  margin-top: 48px;
  padding: 32px;
  background-color: $color-linen;
  border-radius: $radius-card;
  border: 1px solid $color-hairline;

  @include desktop {
    display: grid;
    grid-template-columns: 1fr 1.1fr;
    gap: 40px;
    align-items: center;
  }

  @include mobile {
    padding: 16px;
    margin-top: 32px;
  }

  &__title {
    @include font(32px, 300, 1.2);

    letter-spacing: -0.02em;
    color: $color-ink;

    @include mobile {
      @include font(22px, 300, 1.2);

      margin-bottom: 16px;
    }
  }

  &__video {
    width: 100%;
    aspect-ratio: 16 / 9;
    border: 0;
    border-radius: $radius-image;
    background: $color-charcoal;

    @include mobile {
      margin-top: 20px;
    }
  }

  &__list {
    @include font(15px, 400, 1.6);

    color: $color-carbon;
    margin: 20px 0 0;
    padding-left: 1.1em;

    @include mobile {
      @include font(13px, 400, 1.55);

      margin-top: 16px;
    }
  }

  &__action {
    margin-top: 28px;

    @include mobile {
      width: 100%;
      margin-top: 20px;
    }
  }
}
</style>
