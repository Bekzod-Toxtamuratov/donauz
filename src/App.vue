<script setup>
import { RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'
</script>

<template>
	<div>
		<Navbar />

		<router-view></router-view>

		<!-- <RouterLink to="/">Home</RouterLink>
		<RouterLink to="/about">About</RouterLink>
		<RouterLink to="/products">Products</RouterLink> -->

		<Footer />
	</div>
</template>

<style scoped></style>
