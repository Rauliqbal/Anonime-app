import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
   {
      path: "/",
      name: "home",
      component: Home,
   },
   {
      path: "/list",
      name: "list",
      component: () => import("../views/List.vue"),
   },

   {
      path: "/anime/one-piece",

      component: () => import("../views/animeview/Onepiece.vue"),
   },

   {
      path: "/anime/captain-tsubasa",

      component: () => import("../views/animeview/Captaintsubasa.vue"),
   },
];

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes,
});

export default router;
