<template>
  <div class="info-button">
    <UiButton class="info-button__button" :href="app.appUrl" rel="noopener noreferrer">
      <slot>Начать бесплатно</slot>
    </UiButton>

    <Tooltip distance="8" placement="bottom-end">
      <IMonoInfo class="info-button__info-trigger desktop-only" />

      <template #popper>
        Зарегистрируйтесь и получите <br>
        3 дня бесплатной подписки для <br>
        ознакомления с сервисом
      </template>
    </Tooltip>

    <p class="info-button__hint mobile-only">
      Зарегистрируйтесь и получите 3 дня бесплатной подписки для ознакомления с сервисом
    </p>
  </div>
</template>

<script setup lang="ts">
import { Tooltip } from 'floating-vue'

const app = useAppConfig()
</script>

<style lang="scss">
.info-button {
  @include desktop {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__button {
    width: 100%;
  }

  &__info-trigger {
    flex-shrink: 0;
    font-size: 22px;
    color: $color-ash;
    outline: none;
    cursor: help;

    &:hover,
    &:focus-visible {
      color: $color-slate;
    }
  }

  &__hint {
    @include font(12px, 400, 1.4);

    text-align: center;
    margin-top: 10px;
    color: $color-slate;
  }
}
</style>
