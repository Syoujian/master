/*
 * @说明:
 * @版本: 2.0
 * @姓名: Ashely
 * @Date: 2020-03-04 11:08:42
 * @最后编辑: Ashely
 * @LastEditTime: 2020-03-08 20:51:41
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/views/Main'
import Equip from '@/views/Equip'
import Digital from '@/views/Digital'
import Furniture from '@/views/Furniture'
import Makeup from '@/views/Makeup'
import Seckill from '@/views/Seckill'
import Detail from '@/views/Detail'
import Car from '@/views/Car'

import Search from '@/views/Search'

import Login from '@/views/Login'
import Register from '@/views/Register'
import Findpwd from '@/views/Findpwd'
import Member from '@/views/Member'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main
  },
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
  },
  {
    path: '/detail/:zq',
    component: Detail
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/findpwd',
    component: Findpwd
  },
  {
    path: '/car',
    component: Car
  },
  {
    path: '/search',
    component: Search
  }, {
    path: '/member',
    component: Member
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
