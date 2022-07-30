import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)
const routes = [
      {
        path: '/',
        name: '推荐',
        component: Home
      },
      {
        path: '/mine',
        name: '个人中心',
        component: () => import(/* webpackChunkName: "about" */ '../views/Mine.vue')
      },
      {
        path: '/category',
      props:true,
        name: '',
        component: () => import(/* webpackChunkName: "about" */ '../views/Category.vue')
      },
      {
        path: '/about',
      props:'',
        name: '',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        path: '/shopCart',
      props:true,
        name: '',
        component: () => import(/* webpackChunkName: "about" */ '../views/shopCart.vue')
      },
      {
        path: '/detail',
      props:true,
        name: 'detail',
        component: () => import(/* webpackChunkName: "about" */ '../views/Detail.vue')
      },  
      {
        path: '/Login',
        name: '',
        component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
      },
      {
        path: '/Register',
        name: '',
        component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
      },  
      {
        path: '/shiyan',
        name: '',
        component: () => import(/* webpackChunkName: "about" */ '../views/shiyan.vue')
      },  
]
const router = new VueRouter({  
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   if (limitPagePath.includes(to.path)) {
//       // 判断sessionStorage是否保存了用户信息
//       let userStr = sessionStorage.getItem("user") || "{}"
//       let user = JSON.parse(userStr)
//       if (!user.id) {
//           // 跳转到登录页面
//           next({path: "/Login"})
//       } else {
//           next()
//       }
//   } else {
//       next()
//   }
// })
export default router

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })

// export default router