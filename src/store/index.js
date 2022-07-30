import Vue from 'vue'
import Vuex from 'vuex'
import player from './modules/player'
import category from'./modules/category.js'
import shopcart from'./modules/shopcart.js'
import detail from'./modules/detail.js'
import users from './modules/users.js'
import shoucang from './modules/shoucang.js'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,//state只能通mutations修改
  // 设置仓库的子模块
  modules: {
    player,
	category,
	shopcart,
	detail,
	shoucang,
	users
  }
})
