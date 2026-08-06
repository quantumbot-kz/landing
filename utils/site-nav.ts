/** Main-page section anchors — root-prefixed so they work from pillar pages. */
export const siteNavLinks = [
  { href: '/#how-it-works', label: 'Как работает' },
  { href: '/#products', label: 'Продукты' },
  { href: '/#analytics', label: 'Аналитика' },
  { href: '/#tariffs', label: 'Тарифы' },
  { href: '/#faq', label: 'Вопросы' },
  { href: '/#team', label: 'Команда' },
] as const

/** SEO pillar pages linked from footer and related blocks. */
export const sitePillarLinks = [
  { href: '/kaspi-bot/', label: 'Каспи бот' },
  { href: '/analitika-kaspi/', label: 'Аналитика Kaspi' },
] as const

