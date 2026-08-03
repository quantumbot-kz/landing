<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__documents">
          <a href="/documents/privacy-policy.pdf" target="_blank">Политика конфиденциальности</a>
          <a href="/documents/policy.pdf" target="_blank">Публичная оферта</a>
          <a href="/documents/payment-policy.pdf" target="_blank">Политика оплаты</a>
        </div>

        <div class="footer__copyright">
          @ {{ copyrightYears }} ТОО Quantum Technology. Все права защищены
        </div>

        <div class="footer__socials">
          <SocialLink :href="app.instagramUrl">
            <IMonoInstagram />
          </SocialLink>
          <SocialLink :href="app.telegramUrl">
            <IMonoTelegram />
          </SocialLink>
          <SocialLink :href="app.whatsappUrl">
            <IMonoWhatsapp />
          </SocialLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const app = useAppConfig()

const COPYRIGHT_START_YEAR = 2024
const currentYear = new Date().getFullYear()
const copyrightYears = currentYear > COPYRIGHT_START_YEAR
  ? `${COPYRIGHT_START_YEAR}–${currentYear}`
  : String(COPYRIGHT_START_YEAR)
</script>

<style lang="scss">
.footer {
  padding: 48px 0 56px;
  margin-top: 64px;
  border-top: 1px solid $color-hairline;

  @include mobile {
    margin-top: 40px;
    padding-bottom: 40px;
  }

  &__inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'documents copyright'
      'socials socials';
    gap: 24px;

    @include mobile {
      grid-template-areas:
        'documents documents'
        'copyright copyright'
        'socials socials';
      column-gap: 16px;
    }
  }

  &__documents {
    grid-area: documents;
    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;

    a {
      @include font(14px, 400, 1.4);

      color: $color-carbon;

      &:hover {
        color: $color-ink;
      }
    }

    @include mobile {
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
    }
  }

  &__copyright {
    @include font(14px, 400, 1.4);

    grid-area: copyright;
    justify-self: flex-end;
    color: $color-ash;

    @include mobile {
      text-align: center;
      justify-self: stretch;
    }
  }

  &__socials {
    grid-area: socials;
    display: inline-flex;
    align-items: center;
    gap: 16px;
    font-size: 20px;
    color: $color-carbon;
  }
}
</style>
