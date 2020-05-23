import Vue from 'vue'
import VueRouter from 'vue-router'
import { ROUTES_PATH } from '@/constants/routes'

Vue.use(VueRouter)

const routes = [
  {
    path: ROUTES_PATH.HOME.path,
    name: ROUTES_PATH.HOME.name,
    component: () => import('@/views/home/Home.vue'),
  },
  {
    path: ROUTES_PATH.MY_SESSIONS.path,
    name: ROUTES_PATH.MY_SESSIONS.name,
    component: () =>
      import(
        /* webpackChunkName: "about" */ '@/views/mySessions/MySessions.vue'
      ),
  },
  {
    path: ROUTES_PATH.CREATE_SESSION.path,
    name: ROUTES_PATH.CREATE_SESSION.name,
    component: () => import('@/views/createSession/index.vue'),
  },
]

const router = new VueRouter({
  routes,
})

export default router
