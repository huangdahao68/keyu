import shop from '../../api/shop.js'
const state = {
	sList:[]
}
const getters = {
}
const actions = {
	// 加入收藏法
	addShouCang(context,item){
		
		context.commit('addShouCang',item)
	
	},
	delShouCang(context,item){
		
		context.commit('delShouCang',item)
	
	},
}

const mutations = {
	addShouCang(state,goods) {
		const result = state.sList.find(item => item.id === goods.id)
		if(result) {
			++result.num;
			
		}else {
			state.sList .push({
				id:goods.id,
				title:goods.title,
				price:goods.price,
				imgSrc:goods.imgSrc,
				num:1
			})
			
		}
	},
	delShouCang(state,id){
		state.sList.forEach(
		(item,index,arr) => {
			if (item.id === id) {
				arr.splice(index,1)
				
			}
		}
		)
	},

	
}
export default {
	namespaced:true,
	state,
	getters,
	actions,
	mutations
}