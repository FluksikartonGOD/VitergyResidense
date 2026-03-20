export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path !== from.path) {
    to.meta.pageTransition = { name: 'cube', mode: '' }
  }
})
