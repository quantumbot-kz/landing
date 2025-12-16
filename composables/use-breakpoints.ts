import { useMediaQuery } from '@vueuse/core'

export default function useBreakpoints() {
  const isMobile = useMediaQuery('(max-width: 480px)')
  const isDesktop = computed(() => !isMobile.value)

  return {
    isMobile,
    isDesktop,
  }
}
