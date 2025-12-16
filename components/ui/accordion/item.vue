<template>
  <div :class="[cn.b(), cn.is('focused', focused), cn.is('active', isActive)]">
    <button
      :class="[cn.e('head')]"
      type="button"
      @focus="focused = true"
      @blur="focused = false"
      @click="handleClick"
      @keydown.space.enter.stop.prevent="handleClick"
    >
      <slot name="title">
        <h3 :class="[cn.e('title')]">
          {{ title }}
        </h3>
      </slot>
      <Component :is="isActive ? IMonoMinus : IMonoPlus" :class="cn.e('icon')" />
    </button>

    <UiCollapseTransition>
      <div
        v-show="isActive"
        :class="[cn.e('wrapper')]"
      >
        <div :class="[cn.e('content')]">
          <slot />
        </div>
      </div>
    </UiCollapseTransition>
  </div>
</template>

<script setup lang="ts">
import IMonoMinus from '~icons/mono/minus'
import IMonoPlus from '~icons/mono/plus'

import { computed, inject, ref } from 'vue'
import UiCollapseTransition from '~/components/ui/collapse-transition/index.vue'
import { accordionContextKey } from './constants'

export interface Props {
  id?: string | number
  title?: string
}

defineOptions({
  name: 'UiAccordionItem',
})

const props = withDefaults(defineProps<Props>(), {
  id: () => useId(),
  title: '',
})

const accordion = inject(accordionContextKey)

const cn = useClassname('ui-accordion-item')

const focused = ref(false)

const isActive = computed(() => accordion?.isActive(props.id) ?? false)

function handleClick() {
  accordion?.handleItemClick(props.id)
}
</script>
