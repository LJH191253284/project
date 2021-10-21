import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'

// import 'vant/lib/index.css'
import { Button } from 'vant';
Vue.use(Button);
import { NavBar } from 'vant';
Vue.use(NavBar);
import { Icon } from 'vant';
Vue.use(Icon);
import { Search } from 'vant';
Vue.use(Search);
import { SwipeCell } from 'vant';
Vue.use(SwipeCell);
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe);
Vue.use(SwipeItem);





Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
