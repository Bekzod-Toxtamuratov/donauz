<script>
export default {
	data() {
		return {
			menu: ['Home', 'Shop', 'Plant Care', 'Blogs'],
		}
	},
}
</script>
<template>
	<div class="container">
		<div class="flex items-center justify-between py-3">
			<div class="log"><img src="../assets/logo.svg" alt="" /></div>
			<div class="flex gap-4">
				<div v-for="(item, index) in menu" :key="index">
					<a
						class="text-[17px] focus:border-b-4 z-50 focus:border-[#46A358] focus:pb-5 focus:text-[#46A358] focus:font-medium"
						href="#"
						>{{ item }}</a
					>
				</div>
			</div>
			<div class="flex items-center gap-3">
				<button><img src="../assets/search.svg" alt="img" /></button>
				<button><img src="../assets/cart.svg" alt="img" /></button>
				<!-- <button class="px-5 py-2 text-white bg-[#46A358] rounded-lg gap-x-2">
					<img src="../assets/logout.svg" alt="" /> Login
				</button> -->

				<router-link to="/login">
					<button
						class="bg-[#46A358] text-white flex items-center px-4 py-1 gap-1 rounded-lg"
					>
						<img src="../assets/logout.svg" alt="" />
						Login
					</button>
					</router-link
				>
			</div>
		</div>
		<hr />
	</div>
</template>

<style scoped></style>
