import { createRouter, createWebHistory } from "vue-router";
import home from "./views/home.vue";

const routerHistory = createWebHistory();

const router = createRouter({
  linkExactActiveClass: "vue-school-active-class",
  history: routerHistory,
  routes: [ 
    {
      path: "/",
      component: home
    },
    {
      path: "/about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "AboutModule" */ "./views/about.vue")
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
