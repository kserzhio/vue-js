import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		cnt: 0,
		price: 1000,
		orderState: null
	},
	getters: {
		cnt(state){
			return state.cnt;
		},
		price(state){
			return state.price;
		},
		total(state){
			return state.cnt * state.price;
		},
		orderState(state){
			return state.orderState;
		}
	},
	mutations: {
		minus(state){
			if(state.cnt > 0){
				state.cnt--;
			}
		},
		plus(state){
			state.cnt++;
		},
		orderSend(state){
			state.orderState = 'pending';
		},
		orderDone(state){
			state.orderState = 'done';
		},
		setCnt(state, count){
			//count = count.replace(/[^0-9]/g, '');
			count = parseInt(count);

			if(count < 0){
				count = 0;
			}

			state.cnt = count;
		}
	},
	actions: {
		/*
		minus(store){
			store.commit('minus');
		},*/
		sendOrder(store, payload){
			store.commit('orderSend');
			
			setTimeout(() => {
				console.log(payload);
				store.commit('orderDone');
			}, 1000);
		}
	},
	strict: process.env.NODE_ENV !== 'production'
});