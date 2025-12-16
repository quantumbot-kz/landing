<template>
  <div :class="[cn.b()]">
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { AccordionActiveId, AccordionModelValue } from './types'
import { castArray } from 'lodash-es'

import { provide, ref, watch } from 'vue'
import { accordionContextKey } from './constants'

export interface Props {
  multiple?: boolean
  modelValue?: AccordionModelValue
}

defineOptions({
  name: 'UiAccordion',
})

const props = withDefaults(defineProps<Props>(), {
  multiple: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: Props['modelValue']]
}>()

const cn = useClassname('ui-accordion')

const activeItems = ref(castArray(props.modelValue))

function setActiveItems(_activeItems: AccordionActiveId[]) {
  activeItems.value = _activeItems
  const value = !props.multiple ? activeItems.value[0] : activeItems.value

  emit('update:modelValue', value)
}

function handleItemClick(id: AccordionActiveId) {
  if (!props.multiple) {
    setActiveItems([activeItems.value[0] === id ? '' : id])
  }
  else {
    const _activeItems = [...activeItems.value]
    const index = _activeItems.indexOf(id)

    if (index > -1)
      _activeItems.splice(index, 1)
    else
      _activeItems.push(id)

    setActiveItems(_activeItems)
  }
}

function isActive(id: AccordionActiveId) {
  return activeItems.value.includes(id)
}

watch(
  () => props.modelValue,
  value => (activeItems.value = castArray(value)),
  { deep: true },
)

provide(accordionContextKey, {
  activeItems,
  handleItemClick,
  isActive,
})
</script>

<style lang="scss">
@use 'styles';
</style>
