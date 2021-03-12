import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/what-we-do',
    name: 'WhatWeDo',
    component: () => import('../views/WhatWeDo.vue')
  },
  {
    path: '/the-digital-divide',
    name: 'TheDigitalDivide',
    component: () => import('../views/TheDigitalDivide.vue')
  },
  {
    path: '/get-involved',
    name: 'GetInvolved',
    component: () => import('../views/GetInvolved.vue')
  },
  {
    path: '/our-network',
    name: 'OurNetwork',
    component: () => import('../views/OurNetwork.vue')
  },
  {
    path: '/insights',
    name: 'Insights',
    component: () => import('../views/Insights.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
