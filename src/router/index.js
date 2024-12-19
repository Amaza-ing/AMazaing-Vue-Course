import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Movies from "../views/Movies.vue";
import CreateMovie from "../views/CreateMovie.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/movies",
      name: "movies",
      component: Movies,
    },
    {
      path: "/create",
      name: "create",
      component: CreateMovie,
    },
  ]
});

export default router;
