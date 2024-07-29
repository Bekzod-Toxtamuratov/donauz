<script setup>
import Brandes from '../components/Brandes.vue'
import Navbar from '../components/Navbar.vue'
import Products from '../components/Products.vue'
import Search from '../components/Search.vue'
</script>

<template>
	<Navbar />
	<Search />
	<div class="bg-purple">
		<div class="container">
			<Products />
			<NewProducts />
			<Brandes />
			<PopularProduct />
		</div>
	</div>
	<!-- <Footer /> -->
</template>

<style scoped></style>
