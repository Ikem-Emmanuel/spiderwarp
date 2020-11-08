import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/auth/Login";

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'UserDashboard',
    component: () => import(/* webpackChunkName: "userDashboard" */ '../views/user/UserDashboard')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
