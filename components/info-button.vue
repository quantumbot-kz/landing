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
    gap: 8px;
  }

  &__button {
    width: 100%;
  }

  &__info-trigger {
    flex-shrink: 0;
    font-size: 24px;
    color: $color-gray-500;
    outline: none;
  }

  &__hint {
    @include font(11px, 500, 14px);

    text-align: center;
    margin-top: 8px;
    color: $color-gray-600;
  }
}
</style>
