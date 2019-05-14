import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        footerShow:true
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      meta: {
        footerShow:true
      }
    },
    {
      path: '/gameview',
      name: 'gameview',
      component: () => import('./views/gameView.vue'),
      meta: {
        footerShow:true
      }
    },
    {
      path: '/gamedetail',
      name: 'gamedetail',
      component: () => import('./views/gameDetail.vue'),
      meta: {
        footerShow:false
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login.vue'),
      meta: {
        footerShow:false
      }
    },
    {
      path: '/gamesearch',
      name: 'gamesearch',
      component: () => import('./views/gameSearch.vue'),
      meta: {
        footerShow:false
      }
    },
    {
      path: '/gamescore',
      name: 'gamescore',
      component: () => import('./views/gameScore.vue'),
      meta: {
        footerShow:false
      }
    }
  ]
})
