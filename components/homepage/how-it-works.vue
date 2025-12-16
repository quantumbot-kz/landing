<template>
  <HomepageSection
    id="how-it-works"
    class="how-it-works"
    title="Как работает наш сервис"
    description="Четыре простых шага для увеличения ваших продаж"
  >
    <div class="how-it-works__cards">
      <div class="how-it-works-card">
        <div class="how-it-works-card__title">
          Подключение
        </div>

        <div class="how-it-works-card__description">
          Подключите свой аккаунт Kaspi.kz <br>
          к нашему сервису
        </div>
      </div>

      <div class="how-it-works-card">
        <div class="how-it-works-card__title">
          Настройка
        </div>

        <div class="how-it-works-card__description">
          Настройте минимальные цены <br>
          для товаров
        </div>
      </div>

      <div class="how-it-works-card">
        <div class="how-it-works-card__title">
          Мониторинг
        </div>

        <div class="how-it-works-card__description">
          Наш сервис автоматически мониторит <br>
          конкурентов и обновляет цены
        </div>
      </div>

      <div class="how-it-works-card">
        <div class="how-it-works-card__title">
          Прирост
        </div>

        <div class="how-it-works-card__description">
          Получите кратный прирост <br>
          продаж и прибыли
        </div>
      </div>
    </div>

    <div class="how-it-works-demo">
      <div class="how-it-works-demo__title">
        Демо видео о продукте
      </div>

      <iframe
        class="how-it-works-demo__video"
        :src="app.videoUrl"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        loading="lazy"
      />

      <ul class="how-it-works-demo__list">
        <li>Оцените интерфейс приложения для ПК и мобильных девайсов</li>
        <li>Ознакомьтесь с примером добавления товара на предзаказ</li>
        <li>Просмотрите пример добавления товаров и управления ими через приложение</li>
      </ul>

      <UiButton class="how-it-works-demo__action" :href="app.appUrl" rel="noopener noreferrer">
        Попробовать бесплатно
      </UiButton>
    </div>
  </HomepageSection>
</template>

<script setup lang="ts">
const app = useAppConfig()
</script>

<style lang="scss">
.how-it-works {
  &__cards {
    gap: 40px;

    @include desktop {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }

    @include mobile {
      display: flex;
      flex-direction: column;
    }
  }
}

.how-it-works-card {
  position: relative;
  padding: 32px 16px;
  background-color: $color-gray-300;
  border-radius: 12px;
  text-align: center;
  counter-increment: how-it-works-card;

  &::before {
    @include font(24px, 600, 40px);

    content: counter(how-it-works-card);
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    padding-inline: 16px;
    border-radius: 12px;
    background-color: $color-black;
    color: $color-white;
    min-width: 46px;
  }

  @include mobile {
    padding: 24px 16px;
  }

  &__title {
    @include font(20px, 700, 24px);
  }

  &__description {
    @include font(14px, 400, 17px);

    color: $color-gray-700;
    margin-top: 10px;
  }
}

.how-it-works-demo {
  padding: 40px 100px;
  background-color: $color-gray-300;
  margin-top: 60px;
  border-radius: 12px;

  @include desktop {
    display: grid;
    justify-items: flex-start;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr auto 1fr;
    grid-template-areas:
      'title video'
      'list video'
      'action video';
    gap: 24px;
  }

  @include mobile {
    padding: 16px;
    margin-top: 32px;
  }

  &__title {
    @include font(28px, 700, 39px);

    grid-area: title;

    @include desktop {
      align-self: flex-end;
    }

    @include mobile {
      @include font(20px, 700, 28px);

      text-align: center;
      margin-bottom: 24px;
    }
  }

  &__video {
    grid-area: video;
    aspect-ratio: 16 / 9;

    @include desktop {
      justify-self: center;
      height: 270px;
    }

    @include mobile {
      width: 100%;
    }
  }

  &__list {
    @include font(16px, 400, 29px);

    color: $color-gray-700;
    grid-area: list;

    @include mobile {
      @include font(12px, 400, 22px);

      margin-top: 24px;
    }
  }

  &__action {
    grid-area: action;

    @include mobile {
      width: 100%;
      margin-top: 24px;
    }
  }
}
</style>
