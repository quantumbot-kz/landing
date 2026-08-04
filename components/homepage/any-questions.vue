<template>
  <div id="contacts" class="contact">
    <div class="container">
      <div class="contact__inner">
        <div class="contact__copy">
          <p class="contact__eyebrow">
            Контакты
          </p>

          <p class="contact__title">
            Остались вопросы?
          </p>
        </div>

        <dl class="contact__channels">
          <div class="contact__channel">
            <dt>Напишите нам</dt>
            <dd>
              <a :href="`mailto:${app.email}`">{{ app.email }}</a>
            </dd>
          </div>

          <div class="contact__channel">
            <dt>Позвоните нам</dt>
            <dd>
              <a :href="`tel:${app.phoneNumber}`">{{ app.phoneNumber }}</a>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const app = useAppConfig()
</script>

<style lang="scss">
.contact {
  &__inner {
    display: grid;
    gap: clamp(24px, 3vw, 48px);
    padding: clamp(28px, 3.4vw, 56px);
    border-radius: $radius-panel;
    background-color: $color-charcoal;
    color: $color-white;

    @include wide {
      grid-template-columns: minmax(0, 1fr) auto;
      align-items: center;
      column-gap: 64px;
    }
  }

  &__eyebrow {
    @include eyebrow;

    display: flex;
    align-items: center;
    gap: 8px;
    color: rgba($color-white, 0.55);
    margin-bottom: 14px;

    &::before {
      content: '';
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: $color-quantum-glow;
    }
  }

  &__title {
    @include text(h2);

    color: $color-white;
    text-wrap: balance;
    max-width: 22ch;
  }

  &__channels {
    display: grid;
    gap: 20px;
    margin: 0;

    @include from($bp-md) {
      grid-auto-flow: column;
      gap: 48px;
    }
  }

  &__channel {
    dt {
      @include text(caption);

      color: rgba($color-white, 0.55);
    }

    dd {
      @include text(h4);

      margin: 6px 0 0;
    }

    a {
      color: $color-white;

      &:hover,
      &:focus-visible {
        color: $color-quantum-glow;
      }
    }
  }
}
</style>
