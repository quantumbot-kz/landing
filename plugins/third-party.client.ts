/**
 * Third-party tags after first paint. Head snippets and Nuxt Scripts warmup
 * were preloading Metrika/fbevents on the LCP path.
 */
export default defineNuxtPlugin(() => {
  onNuxtReady(() => {
    injectYandex()
    if (!import.meta.dev)
      injectMetaPixel()
  })
})

function injectYandex() {
  const w = window as any
  if (typeof w.ym === 'function')
    return

  w.ym = function (...args: unknown[]) {
    (w.ym.a = w.ym.a || []).push(args)
  }
  w.ym.l = Date.now()

  const script = document.createElement('script')
  script.async = true
  script.src = 'https://mc.yandex.ru/metrika/tag.js?id=111122100'
  document.head.appendChild(script)

  w.ym(111122100, 'init', {
    ssr: true,
    webvisor: true,
    clickmap: true,
    ecommerce: 'dataLayer',
    referrer: document.referrer,
    url: location.href,
    accurateTrackBounce: true,
    trackLinks: true,
  })
}

function injectMetaPixel() {
  const w = window as any
  if (typeof w.fbq === 'function')
    return

  const fbq = function (...args: unknown[]) {
    (fbq.queue as unknown[][]).push(args)
  } as ((...args: unknown[]) => void) & { queue: unknown[][], push: unknown, loaded: boolean, version: string }
  fbq.queue = []
  fbq.push = fbq
  fbq.loaded = true
  fbq.version = '2.0'
  w.fbq = fbq
  w._fbq = fbq

  const script = document.createElement('script')
  script.async = true
  script.src = 'https://connect.facebook.net/en_US/fbevents.js'
  document.head.appendChild(script)

  w.fbq('init', '2310206252799727')
  w.fbq('track', 'PageView')
}
