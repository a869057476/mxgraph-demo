/*
 * @Descripttion: 
 * @version: 
 * @Author: huangwei
 * @Date: 2021-02-15 19:08:51
 * @LastEditors: huangwei
 * @LastEditTime: 2021-02-15 21:33:35
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('@/views/home'),
        name: 'home',
        meta: { title: '首页' }
      },
      {
        path: 'mxgraphTest',
        component: () => import('@/views/mxgraphTest'),
        name: 'mxgraphTest',
        meta: { title: 'mxgraphTest' }
      },
      {
        path: 'mxgraphView',
        component: () => import('@/views/mxgraphView'),
        name: 'mxgraphView',
        meta: { title: 'mxgraphView' }
      },
      {
        path: 'mxgraphEdit',
        component: () => import('@/views/mxgraphEdit'),
        name: 'mxgraphEdit',
        meta: { title: 'mxgraphEdit' }
      }
    ]
  }
]

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

export default router
