import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Sala from "../views/Sala.vue";
// import CriarSala from "../views/CriarSala.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/sala/:codigo",
    name: "Sala",
    component: Sala,
  },
  // {
  //   path: "/criar-sala",
  //   name: "CriarSala",
  //   component: CriarSala,
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
