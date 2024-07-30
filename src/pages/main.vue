<script setup>
import Brandes from '../components/Brandes.vue'
import Footer from '../components/Footer.vue'
import Navbar from '../components/Navbar.vue'
import NewProducts from '../components/NewProducts.vue'
import PopularProduct from '../components/PopularProduct.vue'
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
	<Footer />
</template>
<style scoped></style>
