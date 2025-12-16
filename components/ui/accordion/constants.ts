import type { InjectionKey } from 'vue'
import type { AccordionContext } from './types'

export const accordionContextKey: InjectionKey<AccordionContext> = Symbol('UI_ACCORDION')
