import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MovieSearchView from "../views/MovieSearchView.vue";
import MovieFormView from "../views/MovieFormView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/movie-search",
    name: "movieSearch",
    component: MovieSearchView,
  },
  {
    path: "/movie-form/:imdbID",
    name: "movieForm",
    component: MovieFormView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
