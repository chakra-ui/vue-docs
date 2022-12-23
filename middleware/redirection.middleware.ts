export default defineNuxtRouteMiddleware((to, _from) => {
  if (to.path === '/') {
    navigateTo('/getting-started')
  } else {
    navigateTo(to.path)
  }
})
