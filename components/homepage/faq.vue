<template>
  <div class="faq">
    <div class="container">
      <div class="faq__inner">
        <div class="faq__title">
          Вопросы и ответы
        </div>

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
    border-radius: 12px;
    padding: 40px;
    background-color: $color-gray-200;

    @include mobile {
      padding: 16px;
    }
  }

  &__title {
    @include font(32px, 900, 45px);

    text-transform: uppercase;
    margin-bottom: 40px;

    @include mobile {
      @include font(20px, 900, 28px);

      margin-bottom: 24px;
    }
  }
}
</style>
