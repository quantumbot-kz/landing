<template>
  <HomepageSection
    id="how-it-works"
    class="how"
    eyebrow="Процесс"
    title="Как работает QuantumBot"
    description="От подключения магазина Kaspi.kz до цен, закупок с Wildberries и регистрации в НКТ - в одном кабинете"
  >
    <ol class="how__steps">
      <li v-for="(step, index) in steps" :key="step.title" class="how__step">
        <span class="how__step-index">{{ String(index + 1).padStart(2, '0') }}</span>

        <p class="how__step-title">
          {{ step.title }}
        </p>

        <p class="how__step-text">
          {{ step.text }}
        </p>
      </li>
    </ol>

    <div class="how__demo">
      <div class="how__demo-copy">
        <h3 class="how__demo-title">
          Демо видео о сервисе
        </h3>

        <ul class="how__demo-list">
          <li>Оцените интерфейс кабинета на компьютере и телефоне</li>
          <li>Посмотрите управление товарами, ценами и предзаказами</li>
          <li>Поймите, как устроены сценарии работы в QuantumBot</li>
        </ul>

        <UiButton class="how__demo-action" :href="app.appUrl" rel="noopener noreferrer">
          Попробовать бесплатно
        </UiButton>
      </div>

      <UiVideoEmbed
        class="how__demo-video"
        :src="app.videoUrl"
        :poster="videoPoster"
        title="Демо видео о сервисе QuantumBot"
      />
    </div>
  </HomepageSection>
</template>

<script setup lang="ts">
const app = useAppConfig()

const steps = [
  {
    title: 'Подключение',
    text: 'Добавьте аккаунт Kaspi.kz с ограниченными правами - магазин подключается за несколько минут',
  },
  {
    title: 'Цены',
    text: 'Задайте минимумы и стратегию: бот корректирует цены под конкурентов и ведёт умный предзаказ',
  },
  {
    title: 'Закупки',
    text: 'Добавьте товары с Wildberries, посчитайте чистую прибыль на Kaspi и получайте алерты в Telegram',
  },
  {
    title: 'НКТ',
    text: 'Зарегистрируйте товары в Национальном каталоге: AI заполнит атрибуты, код привяжется к карточке на Kaspi',
  },
]

const videoPoster = computed(() => {
  const id = app.videoUrl.split('/').pop()
  return id ? `https://i.ytimg.com/vi/${id}/maxresdefault.jpg` : undefined
})
</script>

<style lang="scss">
.how {
  &__steps {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: clamp(20px, 2.6vw, 40px);
    list-style: none;
    margin: 0;
    padding: 0;

    @include narrow {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @include mobile {
      grid-template-columns: minmax(0, 1fr);
      gap: 0;
    }
  }

  // A hairline rule per step instead of four bordered boxes: the row reads as
  // one sequence rather than four unrelated cards.
  &__step {
    padding-top: 18px;
    border-top: 1px solid $color-hairline;

    @include mobile {
      padding-block: 18px;
    }
  }

  &__step-index {
    @include text(caption);

    display: block;
    color: $color-quantum-green;
    font-variant-numeric: tabular-nums;
    letter-spacing: 0.06em;
  }

  &__step-title {
    @include text(h4);

    margin-top: 10px;
    color: $color-ink;
  }

  &__step-text {
    @include text(body-sm);

    margin-top: 6px;
    color: $color-slate;
  }

  &__demo {
    display: grid;
    gap: clamp(24px, 3vw, 48px);
    margin-top: clamp(40px, 5vw, 72px);
    padding: clamp(20px, 2.6vw, 40px);
    background-color: $color-linen;
    border: 1px solid $color-hairline;
    border-radius: $radius-panel;

    @include wide {
      grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
      align-items: center;
    }
  }

  &__demo-title {
    @include text(h3);

    color: $color-ink;
  }

  &__demo-list {
    @include text(body-sm);

    display: grid;
    gap: 10px;
    color: $color-carbon;
    margin: 20px 0 0;
    padding: 0;
    list-style: none;

    li {
      position: relative;
      padding-left: 22px;

      &::before {
        content: '';
        position: absolute;
        left: 2px;
        top: 0.55em;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        border: 1px solid $color-quantum-green;
      }
    }
  }

  &__demo-action.ui-button {
    margin-top: 28px;

    @include compact {
      width: 100%;
    }
  }
}
</style>
