<template>
  <div class="any-questions">
    <div class="container">
      <div class="any-questions__inner">
        <div class="any-questions__left">
          <IDuoMail class="any-questions__icon" />

          <div>
            <div class="any-questions__title">
              Остались вопросы?
            </div>

            <a class="any-questions__link" :href="`mailto:${app.email}`">
              {{ app.email }}
            </a>
          </div>
        </div>

        <div class="any-questions__right">
          <p class="any-questions__call-us">
            Позвоните нам
          </p>

          <PhoneNumber class="any-questions__phone-number" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const app = useAppConfig()
</script>

<style lang="scss">
.any-questions {
  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 56px 60px;
    border-radius: 12px;
    background-color: $color-gray-200;

    @include mobile {
      flex-direction: column;
      align-items: unset;
      gap: 24px;
      padding: 24px 16px;
    }
  }

  &__left {
    display: flex;
    align-items: center;
    gap: 32px;

    @include mobile {
      gap: 12px;
    }
  }

  &__icon {
    flex-shrink: 0;
    font-size: 69px;
  }

  &__title {
    @include font(32px, 600, 41px);

    color: $color-black;
    text-transform: uppercase;

    @include mobile {
      @include font(20px, 600, 24px);

      text-transform: unset;
    }
  }

  &__link {
    @include font(16px, 400, 20px);

    color: $color-gray-600;

    @include mobile {
      @include font(14px, 300, 17px);
    }
  }

  &__right {
  }

  &__call-us {
    color: $color-gray-600;
    margin-bottom: 8px;
  }

  &__phone-number {
    @include font(20px, 700, 26px, 'phone-number', true);

    @include mobile {
      @include font(16px, 700, 20px, 'phone-number', true);
    }
  }
}
</style>
