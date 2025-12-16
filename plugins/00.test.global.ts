export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.$nuxt.$router.beforeEach((to, from) => {
    console.log('beforeEach', to)
  })
})
