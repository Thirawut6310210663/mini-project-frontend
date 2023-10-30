import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    // component: HomeView
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  }, 
  {
    path: '/manageTable',
      name: 'manageTable',
      component: () => import('../views/TableView.vue')
  },
  {
    path: '/Register',
      name: 'Register',
      component: () => import('../views/RegisterView.vue')

  },
  {
    path: '/Homepage',
      name: 'Homepage',
      component: () => import('../views/HomepageView.vue')

  },
  {
    path: '/Product',
      name: 'Product',
      component: () => import('../views/ProductView.vue')

  },
  {
    path: '/EditDelete',
      name: 'EditDelete',
      component: () => import('../views/EditDeleteView.vue')

  },
  {
    path: '/HomeAdmin',
      name: 'HomeAdmin',
      component: () => import('../views/HomeAdminView.vue')

  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router