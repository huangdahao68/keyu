import shop from '../../api/shop.js'
const state = {
	items:[]
}
const getters = {
	totalPrice : (state) => {
		return state.items.reduce(
		(total,item) =>{
			return total + item.price *item.num
		},0
		).toFixed(2)
	}
}
const actions = {
	// 加入购物车方法
	add(context,item){
		
		context.commit('add',item)
	
	},
	//删除购物车方法
	del(context,id){
		context.commit('del',id)
	},
	increat(context,id) {
		context.commit('increat')
	}
}

const mutations = {
	add(state,goods) {
		const result = state.items.find(item => item.id === goods.id)
		if(result) {
			++result.num;
			
		}else {
			state.items.push({
				id:goods.id,
				title:goods.title,
				price:goods.price,
				imgSrc:goods.imgSrc,
				num:1
			})
			
		}
	},
	del(state,id){
		state.items.forEach(
		(item,index,arr) => {
			if (item.id === id) {
				arr.splice(index,1)
				
			}
		}
		)
	},
	increat(state,id) {
		this.state.num++
			
	}
	
}
export default {
	namespaced:true,
	state,
	getters,
	actions,
	mutations
}