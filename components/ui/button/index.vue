<template>
  <Component
    :is="as"
    :class="[
      cn.b(),
      cn.m(type),
      cn.is('one-icon-only', oneIconOnly),
      cn.has('icon', hasIcon),
      cn.is('disabled', disabled),
    ]"
    :disabled="disabled"
    v-bind="attributes"
    @click="handleClick"
  >
    <span
      v-if="hasLeftIcon && displayIcon"
      :class="[cn.e('icon'), cn.em('icon', 'left')]"
    >
      <slot name="left-icon" />
    </span>

    <span
      v-if="!iconOnly"
      :class="[cn.e('content')]"
    ><slot /></span>

    <span
      v-if="hasRightIcon && displayIcon"
      :class="[cn.e('icon'), cn.em('icon', 'right')]"
    >
      <slot name="right-icon" />
    </span>
  </Component>
</template>

<script setup lang="ts">
import type { ButtonHTMLAttributes } from 'vue'

export interface Props {
  type?: 'primary' | 'secondary' | 'promo'
  nativeType?: ButtonHTMLAttributes['type']
  disabled?: boolean
}

defineOptions({
  name: 'UiButton',
})

const props = withDefaults(defineProps<Props>(), {
  type: 'primary',
  nativeType: 'button',
  disabled: false,
})

const emit = defineEmits<{
  click: [e: Event]
}>()

const slots = useSlots()
const attrs = useAttrs()

const cn = useClassname('ui-button')

const as = computed(() => (attrs.href ? 'a' : 'button'))
const attributes = computed(() => {
  if (as.value === 'button') {
    return {
      type: props.nativeType,
      ...attrs,
    }
  }

  return attrs
})

const hasLeftIcon = computed(() => !!slots['left-icon'])
const hasRightIcon = computed(() => !!slots['right-icon'])
const hasIcon = computed(() => hasLeftIcon.value || hasRightIcon.value)
const oneIconOnly = computed(
  () =>
    ((hasLeftIcon.value && !hasRightIcon.value)
      || (!hasLeftIcon.value && hasRightIcon.value))
    && !slots.default,
)

const iconOnly = computed(
  () => hasIcon.value && !slots.default,
)

const displayIcon = computed(() => hasIcon.value)

function handleClick(event: Event) {
  if (props.disabled) {
    event.stopPropagation()
    event.preventDefault()
  }
  else {
    emit('click', event)
  }
}
</script>

<style lang="scss">
@use 'styles';
</style>
