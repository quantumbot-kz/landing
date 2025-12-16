import type { Ref } from 'vue'

export type AccordionActiveId = string | number
export type AccordionModelValue = AccordionActiveId | AccordionActiveId[]

export interface AccordionContext {
  activeItems: Ref<AccordionActiveId[]>
  handleItemClick: (id: AccordionActiveId) => void
  isActive: (id: AccordionActiveId) => boolean
}
