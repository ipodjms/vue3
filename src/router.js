import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";

const routerHistory = createWebHistory();

const router = createRouter({
  linkExactActiveClass: "vue-school-active-class",
  history: routerHistory,
  routes: [ 
    {
      path: "/",
      component: Home,      
      name: "home",
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "AboutModule" */ "./views/About.vue")
    },
    {
        path: "/destination/:slug",
        name: "DestinationDetails",
        props: true,
      
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "AboutModule" */ "./views/DestinationDetails.vue")
      }
  ]
});

export default router;
