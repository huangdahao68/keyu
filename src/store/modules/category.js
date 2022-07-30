import shop from '../../api/shop.js'

const state = {
	list1:[],
	
}
const getters = {
	
}

//获取列表数据
const actions = {
	getListData1(context){
		shop.getLifuList1(
		data => {
			context.commit('setList',data)
		}
		)
	},
	
	
}
//将商品列表数据保存到state的list1中
const mutations = {
	setList(state,data){
		state.list1 = data;
		// console.log("礼服数据:",state.list1)
	},

	
}
export default {
	namespaced:true,
	state,
	getters,
	actions,
	mutations
}