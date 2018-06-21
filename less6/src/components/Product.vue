<template>
	<div>
		<h2>Product title</h2>
		<div class="price">
			Price: {{ price }}
		</div>
		<hr>
		<button class="btn btn-warning" @click="minus">-1</button>
		<button class="btn btn-success" @click="plus">+1</button>
		<input type="text" v-model="cnt">
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';
	import {mapMutations} from 'vuex';

	export default {
		computed: {
			...mapGetters([
				'price'
			]),
			cnt: {
				get(){
					return this.$store.getters.cnt;
				},
				set(value){
					this.$store.commit('setCnt', value);
				}
			}
		},
		methods: {
			...mapMutations([
				'minus',
				'plus'
			])
		}
	}
</script>