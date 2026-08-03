<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__top">
        <div class="footer__brand">
          <NuxtImg src="/logo.svg" alt="QuantumBot" class="footer__logo" draggable="false" />

          <div class="footer__socials">
            <SocialLink :href="app.instagramUrl" aria-label="Instagram">
              <IMonoInstagram />
            </SocialLink>
            <SocialLink :href="app.telegramUrl" aria-label="Telegram">
              <IMonoTelegram />
            </SocialLink>
            <SocialLink :href="app.whatsappUrl" aria-label="WhatsApp">
              <IMonoWhatsapp />
            </SocialLink>
          </div>

          <a
            class="footer__affiliation"
            :href="app.astanaHubUrl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Участник Astana Hub
          </a>
        </div>

        <nav class="footer__column" aria-label="Разделы сайта">
          <p class="footer__column-title">
            Разделы
          </p>

          <a href="#products">Продукты</a>
          <a href="#how-it-works">Как работает</a>
          <a href="#analytics">Аналитика</a>
          <a href="#tariffs">Тарифы</a>
          <a href="#faq">Вопросы</a>
        </nav>

        <div class="footer__column">
          <p class="footer__column-title">
            Контакты
          </p>

          <a :href="`mailto:${app.email}`">{{ app.email }}</a>
          <a :href="`tel:${app.phoneNumber}`">{{ app.phoneNumber }}</a>
          <a :href="app.docsUrl" target="_blank" rel="noopener noreferrer">Документация</a>
        </div>

        <div class="footer__column">
          <p class="footer__column-title">
            Документы
          </p>

          <a href="/documents/privacy-policy.pdf" target="_blank">Политика конфиденциальности</a>
          <a href="/documents/policy.pdf" target="_blank">Публичная оферта</a>
          <a href="/documents/payment-policy.pdf" target="_blank">Политика оплаты</a>
        </div>
      </div>

      <p class="footer__copyright">
        © {{ copyrightYears }} ТОО Quantum Technology. Все права защищены
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const app = useAppConfig()

const COPYRIGHT_START_YEAR = 2024
const currentYear = new Date().getFullYear()
const copyrightYears = currentYear > COPYRIGHT_START_YEAR
  ? `${COPYRIGHT_START_YEAR}-${currentYear}`
  : String(COPYRIGHT_START_YEAR)
</script>

<style lang="scss">
.footer {
  margin-top: $section-gap;
  padding-block: clamp(40px, 5vw, 72px) 40px;
  border-top: 1px solid $color-hairline;

  &__top {
    display: grid;
    gap: clamp(28px, 3vw, 40px);

    @include from($bp-md) {
      grid-template-columns: minmax(0, 1.4fr) repeat(3, minmax(0, 1fr));
      column-gap: 32px;
    }
  }

  &__logo {
    height: 22px;
    width: auto;
  }

  &__socials {
    display: flex;
    align-items: center;
    gap: 22px;
    margin-top: 28px;
    font-size: 20px;
  }

  // Affiliation belongs to the brand block, not to the contact list.
  &__affiliation {
    @include text(caption);

    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 20px;
    color: $color-slate;

    &::before {
      content: '';
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: $color-quantum-green;
    }

    &:hover,
    &:focus-visible {
      color: $color-ink;
    }
  }

  &__column {
    display: grid;
    align-content: start;
    gap: 12px;

    a {
      @include text(body-sm);

      color: $color-carbon;

      &:hover,
      &:focus-visible {
        color: $color-ink;
      }
    }
  }

  &__column-title {
    @include eyebrow;

    color: $color-slate;
    margin-bottom: 4px;
  }

  &__copyright {
    @include text(caption);

    margin-top: clamp(36px, 4vw, 56px);
    padding-top: 24px;
    border-top: 1px solid $color-hairline;
    color: $color-slate;
  }
}
</style>
