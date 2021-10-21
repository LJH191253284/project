import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import Hot from '../views/Hot.vue'
import PlayList from '../views/PlayList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { showNavBar: true },
  },
 
  {
    path:'/search',
    name:'Search',
    component:Search,
    meta:{showNavBar:true},
  },

  {
    path:'/hot',
    name:'Hot',
    component:Hot,
    meta:{showNavBar:true},
  },

  {
    path:'/playlist',
    name:'Playlist',
    component:PlayList,
  }

]

const router = new VueRouter({
  routes
})

export default router
