export default {
	state:{
		id:0,
		username:''
	},
	mutations:{
		setUser(state,users){
			
			state.id = users.id
			state.username = users.username
		}
	},
	actions:{},
	getters:{
		ifLogin(state){
			return state.id  !== 0			
		}
	},
	namespaced:true
}