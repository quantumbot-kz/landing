<template>
  <HomepageSection
    id="faq"
    class="faq"
    surface="band"
    eyebrow="Поддержка"
    title="Вопросы и ответы"
  >
    <div class="faq__items">
      <UiAccordion aria-label="Часто задаваемые вопросы">
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
  </HomepageSection>
</template>

<style lang="scss">
// Heading column left, answers right. A single 840px stack left the band's right
// half empty and made the section read as unfinished.
.faq {
  @include wide {
    > .container {
      display: grid;
      grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
      column-gap: 64px;
      align-items: start;
    }

    .section__head {
      display: block;
      position: sticky;
      top: 104px;
    }

    .section__body {
      margin-top: 0;
    }
  }
}
</style>
