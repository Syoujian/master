import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/views/Main'
import Equip from '@/views/Equip'
import Digital from '@/views/Digital'
import Furniture from '@/views/Furniture'
import Makeup from '@/views/Makeup'
import Seckill from '@/views/Seckill'

Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    component: Main
  },
  {
    path: '/equip',
    component: Equip
  },
  {
    path: '/digital',
    component: Digital
  },
  {
    path: '/furniture',
    component: Furniture
  },
  {
    path: '/makeup',
    component: Makeup
  },
  {
    path: '/seckill',
    component: Seckill
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
