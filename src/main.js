import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入mint-ui组件库
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import { Swipe, SwipeItem } from 'mint-ui';

//引入element-ui组件库
import ElementUI from 'element-ui'; 
import 'element-ui/lib/theme-chalk/index.css'; 
Vue.use(ElementUI); 

//引入VUE-UI组件库
import ViewUI from "view-design"
import 'view-design/dist/styles/iview.css'
Vue.use(ViewUI);

//引入视频播放器
import VideoPlayer from 'vue-video-player'
Vue.use(VideoPlayer)
require('vue-video-player/src/custom-theme.css')


import http from './http.js'
Vue.prototype.$http = http;
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
