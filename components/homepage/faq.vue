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
        <UiAccordionItem
          v-for="item in homepageFaqItems"
          :key="item.question"
          :title="item.question"
        >
          {{ item.answer }}
        </UiAccordionItem>
      </UiAccordion>
    </div>
  </HomepageSection>
</template>

<script setup lang="ts">
import { homepageFaqItems } from '~/utils/homepage-faq'
</script>

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
