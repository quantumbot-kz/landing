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
    padding: 40px 48px;
    border-radius: $radius-card;
    background-color: $color-white;
    border: 1px solid $color-hairline;

    @include mobile {
      flex-direction: column;
      align-items: flex-start;
      gap: 24px;
      padding: 24px 16px;
    }
  }

  &__left {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &__icon {
    flex-shrink: 0;
    font-size: 48px;
    color: $color-quantum-green;
  }

  &__title {
    @include font(28px, 300, 1.2);

    letter-spacing: -0.02em;
    color: $color-ink;

    @include mobile {
      @include font(22px, 300, 1.2);
    }
  }

  &__link {
    @include font(15px, 400, 1.4);

    color: $color-slate;
    display: inline-block;
    margin-top: 6px;

    @include mobile {
      @include font(14px, 400, 1.4);
    }
  }

  &__call-us {
    color: $color-slate;
    margin-bottom: 8px;
    font-size: 14px;
  }

  &__phone-number {
    @include font(20px, 500, 1.3, 'phone-number', true);

    @include mobile {
      @include font(16px, 500, 1.3, 'phone-number', true);
    }
  }
}
</style>
