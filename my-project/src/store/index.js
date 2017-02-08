import Vue from 'vue'
import Vuex from 'vuex'

// import * as actions from './action'
// import * as getters from './getter'
// import skus from './modules/skus'
Vue.use(Vuex)
// const state={
// 	wieght: 111,
// 	height: 222
// }
// const getters= {
// 	checkoutStatus: state => state.checkoutStatus
// }
// const actions= {
// 	checkout ({ commit, state }, products) {
// 	    const savedCartItems = [...state.added]
// 	    commit(types.CHECKOUT_REQUEST)
// 	    shop.buyProducts(
// 	      products,
// 	      () => commit(types.CHECKOUT_SUCCESS),
// 	      () => commit(types.CHECKOUT_FAILURE, { savedCartItems })
// 	    )
// 	  }
// }

// // const mutation= {
// // 		//有效期时间戳
// // 		checkout(state,data){
// // 			state.newHeight = state.newHeight+data;
// // 		},
// // 		[setPrice](state,data){
// // 			state.newHight=data;
// // 		}
// // 	}
// const store = new Vuex.Store({
//   state,
//   actions,
//   getters
// })

// export default store
import * as healthMu from './actions'
import * as healthAc from './getters'
// console.log(healthMu)
// console.log(healthAc)
export default {
	state:{
		weigth: '70kg',
		height: '180cm'
	},
	mutation: {
		//有效期时间戳
		[healthMu.personProducts](state,data){
			state.weigth = state.weigth+data;
		},
		[healthMu.setPrice](state,data){
			state.height=data;
		}
	},
	action: {
		async [healthAc.TEST]({commit},data){
			commit(healthMu.setPrice,await data);
		}
	}
}

