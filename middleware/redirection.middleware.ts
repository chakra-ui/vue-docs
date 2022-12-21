export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path === "/") navigateTo("/dashboard");
  else navigateTo(to.path);
});
