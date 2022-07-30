
import goodList from '../../api/goodList.js'
const state = {
	goodListData:[]
}
const getters = {
	
}

//获取列表数据
const actions = {
	
	getGoodListData(context){
		goodList.getgoodList(
		data => {
			context.commit('setGoodList',data)
		}
		)
	},
	
}
//将商品列表数据保存到state的list1中
const mutations = {
	setGoodList(state,data){
		state.goodListData = data;
		console.log("详情页数据@@@:",state.goodListData)
	},
	
	
}
export default {
	namespaced:true,
	state,
	getters,
	actions,
	mutations
}