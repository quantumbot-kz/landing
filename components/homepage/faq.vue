<template>
  <div id="faq" class="faq">
    <div class="container">
      <div class="faq__inner">
        <h2 class="faq__title">
          Вопросы и ответы
        </h2>
        <div class="faq__rule" aria-hidden="true" />

        <div class="faq__items">
          <UiAccordion>
            <UiAccordionItem title="Как подключить сервис к моему аккаунту Kaspi.kz?">
              Достаточно добавить аккаунт на Kaspi.kz с ограниченными правами и подключить его к нашему сервису. Весь процесс регистрации занимает 2 минуты
            </UiAccordionItem>

            <UiAccordionItem title="Какой уровень безопасности данных обеспечивает ваш сервис?">
              Мы обеспечиваем высокий уровень безопасности, используя современные методы шифрования данных. Все ваши учетные данные и информация о товарах надежно защищены и не передаются третьим лицам.
            </UiAccordionItem>

            <UiAccordionItem title="Подходит ли ваш сервис для всех категорий товаров?">
              Да, наш сервис поддерживает все категории товаров, представленных на Kaspi.kz. Вы можете регулировать цены как для небольшого ассортимента, так и для крупной базы товаров.
            </UiAccordionItem>

            <UiAccordionItem title="Как быстро я увижу результаты?">
              Многие наши клиенты отмечают увеличение продаж уже в первые минуты использования сервиса. Точные результаты зависят от конкуренции в вашей категории и динамики рынка.
            </UiAccordionItem>
          </UiAccordion>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.faq {
  &__inner {
    border-radius: $radius-card;
    padding: 48px;
    background-color: $color-linen;
    border: 1px solid $color-hairline;

    @include mobile {
      padding: 20px 16px;
    }
  }

  &__title {
    @include font(40px, 300, 1.2);

    letter-spacing: -0.03em;
    color: $color-ink;
    margin-bottom: 0;

    @include mobile {
      @include font(28px, 300, 1.2);
    }
  }

  &__rule {
    width: 80px;
    height: 2px;
    margin: 20px 0 32px;
    background: $color-quantum-green;

    @include mobile {
      margin-bottom: 24px;
    }
  }
}
</style>
