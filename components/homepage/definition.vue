<template>
  <HomepageSection
    id="what-is-kaspi-bot"
    class="definition"
    eyebrow="Определение"
    title="Что такое каспи бот"
    description="Сервис, который сам меняет цены на Kaspi.kz по вашим правилам."
  >
    <div class="definition__prose">
      <p>
        Каспи бот Quantum — сервис для автоматического управления ценами на Kaspi.kz.
        Бот для каспи магазина круглосуточно отслеживает цены конкурентов и выполняет
        автоснижение или автоповышение по вашей стратегии.
      </p>
      <p>
        Вы задаёте минимальные цены и выбираете товары для автокорректировки.
        Quantum обновляет цены от 1 минуты и помогает управлять предзаказом по складам.
        Подписка стоит от 19 990 ₸ в месяц, после регистрации — 3 дня бесплатно.
      </p>
      <ul class="definition__bullets">
        <li>Обновление цен от 1 минуты</li>
        <li>Автоснижение при изменении цен конкурентов</li>
        <li>Автоповышение, когда рынок позволяет вернуть маржу</li>
        <li>Умный предзаказ по складам</li>
        <li>Настройка, чтобы не конкурировать со своими магазинами</li>
      </ul>
      <p>
        <NuxtLink to="/kaspi-bot/" class="definition__link">
          Как настроить демпинг и автоповышение цен на Kaspi
        </NuxtLink>
      </p>
    </div>
  </HomepageSection>
</template>

<style lang="scss">
.definition {
  &__prose {
    max-width: 68ch;
    display: grid;
    gap: 16px;

    p {
      @include text(body);

      color: $color-carbon;
    }
  }

  &__bullets {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    gap: 10px;
  }

  &__bullets li {
    @include text(body);

    position: relative;
    padding-left: 18px;
    color: $color-ink;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0.55em;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: $color-quantum-green;
    }
  }

  &__link {
    @include text(body);

    color: $color-quantum-green;
    font-weight: 500;

    &:hover,
    &:focus-visible {
      color: $color-ink;
    }
  }
}
</style>
