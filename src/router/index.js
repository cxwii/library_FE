import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import User from '@/components/User'
import Book from '@/components/Book'
import Jiey from '@/components/Jiey'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  {
    path: '/home',
    component: Home,
    children: [
      { path: '/home/user', component: User },
      { path: '/home/book', component: Book },
      { path: '/home/jiey', component: Jiey }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
