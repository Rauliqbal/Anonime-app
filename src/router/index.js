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
      name: "anime",
      component: () => import("../views/animeview/Onepiece.vue"),
   },
];

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes,
});

export default router;
