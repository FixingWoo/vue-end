import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/login",
      component: () => import("@/views/TheLogin.vue"),
    },
    {
      path: "/signup",
      component: () => import("@/views/SignUp.vue"),
    },
    {
      path: "/main",
      component: () => import("@/views/MainPage.vue"),
    },
    {
      path: "/add",
      component: () => import("@/views/PostAddPage.vue"),
    },
    {
      path: "*",
      component: () => import("@/views/NotFoundPage.vue"),
    },
  ],
});
