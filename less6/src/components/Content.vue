<template>
	<section>
		<div class="container">
			<div class="row">
				<div class="col col-sm-12">
					<app-product>	
					</app-product>
					<hr>
					<div class="form-group">
				        <label>Name</label>
				        <input type="text" 
				        	   class="form-control"
				        	   v-model="name"
				        	   >
				    </div>
				    <div class="form-group">
				        <label>Phone</label>
				        <input type="text" 
				        	   class="form-control"
				        	   v-model="phone"
				        	   >
				    </div>
					<button class="btn btn-primary"
							:disabled="btnDisabled"
							@click="onOrder"
					>
						Order now
					</button>
					<div class="alert alert-success" 
						 v-if="showResult">
						Your order is done!
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import AppProduct from './Product';
	import {mapGetters} from 'vuex';

	export default {
		data(){
			return {
				name: '',
				phone: ''
			};
		},
		computed: {
			...mapGetters([
				'cnt',
				'orderState'
			]),
			btnDisabled(){
				return this.cnt < 1 || this.orderState !== null;
			},
			showResult(){
				return this.orderState == 'done';
			}
		},
		methods: {
			onOrder(){
				this.$store.dispatch('sendOrder', {
					name: this.name,
					phone: this.phone
				});
			}
		},
		components: {
			AppProduct
		}
	}
</script>
<style scoped>
	.alert{
		margin: 10px 0;
	}
</style>