import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import DashBoard from "../layouts/DashBoard.vue";
import About from "../views/About.vue";
import Product from "../views/Product.vue";
import categoryRoutes from "../views/category/category-route";


const routes = [
  {
    path: "/",
    name: "DashBoard",
    component: DashBoard,
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
        //   component: () =>
        // import(/* webpackChunkName: "about" */ "../views/Home.vue"), // reacyloading
      },
      {
        path: "about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: About,
      },
      {
        path: "product",
        name: "Product",
        component: Product,
      },
      ...categoryRoutes,
    ],
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: "active", // active hilight
});

export default router;
