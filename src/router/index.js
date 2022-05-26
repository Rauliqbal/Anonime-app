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

   {
      path: "/anime/boruto-next-generations",

      component: () => import("../views/animeview/Boruto.vue"),
   },

   {
      path: "/anime/spy-x-family",

      component: () => import("../views/animeview/Spyfamily.vue"),
   },

   {
      path: "/anime/shingeki-no-kyoujin-final-season",

      component: () => import("../views/animeview/Shingeki.vue"),
   },

   {
      path: "/anime/aoashi",

      component: () => import("../views/animeview/Aoashi.vue"),
   },
];

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes,
});

export default router;
