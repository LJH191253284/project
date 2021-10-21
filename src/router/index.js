import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import detail from '../views/detail.vue'
import my from '../views/My.vue'
import signln from '../views/signln'
import register from '../views/register'
import jingji from '../views/jingjiDetail'
import followList from '../views/followList'
import searchAgent from '../views/searchAgent'
import ershoufang from '../views/ershoufang'
import Search from '../views/search'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    component: detail
  },
  {
    path: '/my',
    name: 'My',
    component: my
  },

  {
    path:'/signln',
    component:signln
  },

  {
    path:'/register',
    component:register
  },
  {
    path:'/jingji',
    component:jingji
  },
  {
    path:'/followList',
    component:followList
  },
  {
    path:'/searchAgent',
    component:searchAgent
  },
  {
    path:'/ershoufang',
    component:ershoufang
  },
  
  {
    path:'/search',
    component:Search
  },



]

const router = new VueRouter({
  routes
})

export default router
