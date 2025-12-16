<template>
  <Transition :name="ns.b()" v-on="bindings">
    <slot />
  </Transition>
</template>

<script lang="ts" setup>
import type { RendererElement } from 'vue'

defineOptions({
  name: 'UiCollapseTransition',
})

const emit = defineEmits<{
  expanded: []
  collapsed: []
}>()

const ns = useClassname('ui-collapse-transition')

const bindings = {
  beforeEnter(el: RendererElement) {
    if (!el.dataset)
      el.dataset = {}

    el.dataset.oldPaddingTop = el.style.paddingTop
    el.dataset.oldPaddingBottom = el.style.paddingBottom
    el.dataset.elExistsHeight = el.style.height ?? undefined
    el.style.maxHeight = 0
    el.style.paddingTop = 0
    el.style.paddingBottom = 0
  },

  enter(el: RendererElement) {
    requestAnimationFrame(() => {
      el.dataset.oldOverflow = el.style.overflow
      if (el.dataset.elExistsHeight)
        el.style.maxHeight = el.dataset.elExistsHeight

      else if (el.scrollHeight !== 0)
        el.style.maxHeight = `${el.scrollHeight}px`

      else
        el.style.maxHeight = 0

      el.style.paddingTop = el.dataset.oldPaddingTop
      el.style.paddingBottom = el.dataset.oldPaddingBottom
      el.style.overflow = 'hidden'
    })
  },

  afterEnter(el: RendererElement) {
    el.style.maxHeight = ''
    el.style.overflow = el.dataset.oldOverflow

    emit('expanded')
  },

  enterCancelled(el: RendererElement) {
    reset(el)
  },

  beforeLeave(el: RendererElement) {
    if (!el.dataset)
      el.dataset = {}
    el.dataset.oldPaddingTop = el.style.paddingTop
    el.dataset.oldPaddingBottom = el.style.paddingBottom
    el.dataset.oldOverflow = el.style.overflow

    el.style.maxHeight = `${el.scrollHeight}px`
    el.style.overflow = 'hidden'
  },

  leave(el: RendererElement) {
    if (el.scrollHeight !== 0) {
      el.style.maxHeight = 0
      el.style.paddingTop = 0
      el.style.paddingBottom = 0
    }
  },

  afterLeave(el: RendererElement) {
    reset(el)

    emit('collapsed')
  },

  leaveCancelled(el: RendererElement) {
    reset(el)
  },
}

function reset(el: RendererElement) {
  el.style.maxHeight = ''
  el.style.overflow = el.dataset.oldOverflow
  el.style.paddingTop = el.dataset.oldPaddingTop
  el.style.paddingBottom = el.dataset.oldPaddingBottom
}
</script>

<style lang="scss">
@use 'styles';
</style>
