<template>
  <main class="pillar">
    <section class="pillar__hero">
      <div class="container">
        <p class="pillar__eyebrow">
          {{ content.eyebrow }}
        </p>

        <h1 class="pillar__title">
          <template v-if="content.h1Accent && content.h1.includes(content.h1Accent)">
            {{ content.h1.slice(0, content.h1.indexOf(content.h1Accent)) }}<span>{{ content.h1Accent }}</span>{{ content.h1.slice(content.h1.indexOf(content.h1Accent) + content.h1Accent.length) }}
          </template>
          <template v-else>
            {{ content.h1 }}
          </template>
        </h1>

        <p class="pillar__lead">
          {{ content.lead }}
        </p>

        <div class="pillar__actions">
          <UiButton :href="app.appUrl" rel="noopener noreferrer">
            Начать бесплатно
          </UiButton>
          <UiButton type="secondary" href="/#tariffs">
            Смотреть тарифы
          </UiButton>
        </div>

        <p class="pillar__hint">
          {{ content.ctaHint }}
        </p>
      </div>
    </section>

    <section
      v-for="(section, index) in content.sections"
      :key="section.title"
      class="pillar__section"
      :class="{ 'pillar__section--band': index % 2 === 1 }"
    >
      <div class="container">
        <h2 class="pillar__section-title">
          {{ section.title }}
        </h2>

        <div class="pillar__prose">
          <p v-for="(paragraph, pIndex) in section.paragraphs" :key="pIndex">
            {{ paragraph }}
          </p>

          <ul v-if="section.bullets?.length" class="pillar__bullets">
            <li v-for="bullet in section.bullets" :key="bullet">
              {{ bullet }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <HomepageSection
      class="pillar__faq"
      surface="band"
      eyebrow="Поддержка"
      title="Вопросы и ответы"
    >
      <UiAccordion aria-label="Часто задаваемые вопросы">
        <UiAccordionItem
          v-for="item in content.faq"
          :key="item.question"
          :title="item.question"
        >
          {{ item.answer }}
        </UiAccordionItem>
      </UiAccordion>
    </HomepageSection>

    <section class="pillar__related">
      <div class="container">
        <p class="pillar__related-label">
          Также по теме
        </p>
        <nav class="pillar__related-nav" aria-label="Связанные страницы">
          <NuxtLink
            v-for="link in content.related"
            :key="link.href"
            :to="link.href"
            class="pillar__related-link"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>
      </div>
    </section>

    <HomepageAnyQuestions />
  </main>
</template>

<script setup lang="ts">
import type { PillarPageContent } from '~/utils/seo/pillar-pages'

const props = defineProps<{
  content: PillarPageContent
}>()

const app = useAppConfig()
const siteUrl = app.baseUrl.replace(/\/$/, '')
const pageUrl = `${siteUrl}${props.content.path}`
const dateModified = '2026-08-06'
const service = props.content.schemaService

const graph: Record<string, unknown>[] = [
  {
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: props.content.title,
    description: props.content.description,
    inLanguage: 'ru-KZ',
    isPartOf: { '@id': `${siteUrl}/#website` },
    dateModified,
    publisher: { '@id': `${siteUrl}/#organization` },
    ...(service ? { about: { '@id': `${pageUrl}#service` } } : {}),
  },
  {
    '@type': 'BreadcrumbList',
    '@id': `${pageUrl}#breadcrumb`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Quantum',
        item: `${siteUrl}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: props.content.eyebrow,
        item: pageUrl,
      },
    ],
  },
  {
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    mainEntity: props.content.faq.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  },
]

if (service) {
  graph.push({
    '@type': ['Service', 'SoftwareApplication'],
    '@id': `${pageUrl}#service`,
    name: service.name,
    ...(service.alternateName?.length ? { alternateName: service.alternateName } : {}),
    description: service.description,
    url: pageUrl,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    provider: { '@id': `${siteUrl}/#organization` },
    areaServed: {
      '@type': 'Country',
      name: 'Kazakhstan',
    },
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: service.lowPrice,
      highPrice: service.highPrice,
      priceCurrency: 'KZT',
      offerCount: 4,
      url: `${siteUrl}/#tariffs`,
    },
  })
}

useSeoMeta({
  title: props.content.title,
  description: props.content.description,
  ogTitle: props.content.title,
  ogDescription: props.content.description,
  ogUrl: pageUrl,
  twitterTitle: props.content.title,
  twitterDescription: props.content.description,
})

useHead({
  link: [
    { rel: 'canonical', href: pageUrl },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': graph,
      }),
    },
  ],
})
</script>

<style lang="scss">
.pillar {
  display: flex;
  flex-direction: column;
  gap: $section-gap;

  &__hero {
    padding-top: clamp(40px, 6vw, 88px);
    padding-bottom: clamp(32px, 4vw, 56px);
    text-align: center;
  }

  &__eyebrow {
    @include eyebrow;

    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: $color-slate;

    &::before {
      content: '';
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: $color-quantum-green;
    }
  }

  &__title {
    @include text(display);

    color: $color-ink;
    max-width: 22ch;
    margin: clamp(20px, 2.4vw, 28px) auto 0;
    text-wrap: balance;

    span {
      color: $color-quantum-green;
      font-weight: 400;
    }
  }

  &__lead {
    @include text(lead);

    color: $color-slate;
    margin: clamp(16px, 1.8vw, 22px) auto 0;
    max-width: 54ch;
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
    margin-top: clamp(24px, 3vw, 32px);
  }

  &__hint {
    @include text(caption);

    color: $color-slate;
    margin-top: 14px;
  }

  &__section {
    &--band {
      padding-block: $section-pad;
      background-color: $color-linen;
      border-block: 1px solid $color-hairline;
    }
  }

  &__section-title {
    @include text(h2);

    color: $color-ink;
    max-width: 28ch;
    text-wrap: balance;
  }

  &__prose {
    margin-top: $block-gap;
    max-width: 68ch;
    display: grid;
    gap: 16px;

    p {
      @include text(body);

      color: $color-carbon;
    }
  }

  &__bullets {
    margin: 8px 0 0;
    padding: 0;
    list-style: none;
    display: grid;
    gap: 10px;

    li {
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
  }

  &__related {
    padding-block: 8px;
  }

  &__related-label {
    @include eyebrow;

    color: $color-slate;
    margin-bottom: 16px;
  }

  &__related-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 12px 24px;
  }

  &__related-link {
    @include text(body);

    color: $color-quantum-green;
    font-weight: 500;

    &:hover,
    &:focus-visible {
      color: $color-ink;
    }
  }

  &__faq {
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
}
</style>
