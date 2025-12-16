import antfu from '@antfu/eslint-config'

export default antfu({
  overrides: {
    vue: {
      'vue/block-order': ['error', {
        order: ['template', 'script', 'style'],
      }],
    },
  },
  formatters: {
    css: true,
  },
})
