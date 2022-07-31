import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MoviesView from "../views/MoviesView.vue";
import FAQView from "../views/FAQView.vue";
import ContactView from "../views/ContactView.vue";
import AccountView from "../views/AccountView.vue";
import RegistrasiView from "../views/RegistrasiView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/movies",
    name: "MoviesView",
    component: MoviesView,
  },
  {
    path: "/faq",
    name: "FAQView",
    component: FAQView,
  },
  {
    path: "/contact",
    name: "ContactView",
    component: ContactView,
  },
  {
    path: "/acoount",
    name: "AccountView",
    component: AccountView,
  },
  {
    path: "/registrasi",
    name: "RegistrasiView",
    component: RegistrasiView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
