import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'

import { Grid, GridItem } from 'vant';
import { Icon } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { DropdownMenu, DropdownItem } from 'vant';
import { Button } from 'vant';
import { NavBar } from 'vant';
import { Skeleton } from 'vant';
import { TreeSelect } from 'vant';

Vue.use(TreeSelect);
Vue.use(Skeleton);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Icon);
Vue.use(Button);
Vue.use(NavBar);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
