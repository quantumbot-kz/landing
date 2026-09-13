<template>
  <HomepageSection
    id="what-is-kaspi-bot"
    class="definition"
    eyebrow="Определение"
    title="Что такое каспи бот"
    description="Сервис, который сам меняет цены на Kaspi.kz в границах, которые задаёте вы."
  >
    <div class="definition__prose">
      <p>
        Каспи бот — программа для продавцов Kaspi.kz: она круглосуточно смотрит цены конкурентов
        и по вашим правилам делает автоснижение или автоповышение. То же ищут как бот каспи,
        бот для каспи или каспий бот — это один инструмент, не разные сервисы.
      </p>
      <p>
        Без бота карточки обходят руками, пока конкуренты уже обновили прайс. Quantum не опустит
        цену ниже минимума по товару, поэтому автоматизация не превращается в торговлю в минус.
        Подписка от 19 990 ₸ в месяц, после регистрации — 3 дня бесплатно.
      </p>
      <ul class="definition__bullets">
        <li>Автоснижение, когда конкурент двинул цену вниз</li>
        <li>Автоповышение, когда рынок позволяет вернуть маржу</li>
        <li>Жёсткий минимум по каждому товару</li>
        <li>Умный предзаказ по складам</li>
      </ul>
      <p>
        <NuxtLink to="/kaspi-bot/" class="definition__link">
          Как задать минимум и стратегию
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
