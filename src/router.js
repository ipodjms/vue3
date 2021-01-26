import { createRouter, createWebHistory } from 'vue-router'
import home from './views/home.vue'


const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/about',      
       // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/about.vue")      
    }
  ]
})

export default router