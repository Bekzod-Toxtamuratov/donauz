<template>
	<div class="container">
		<!-- <h1 class="text-3xl text-center">Single Product: {{ id }}</h1> -->
		<!-- <pre>{{ Products[id - 1] }}</pre> -->
		<div class="flex items-center">
			<div class="w-full">
				<img
					:src="Products[id - 1]?.img"
					alt="image"
					class="w-[700px] h-[450px]"
				/>
			</div>
			<!-- <div class="w-2/3">
				<h1 class="text-3xl">{{ Products[id - 1]?.title }}</h1>
				<p class="text-lg text-red-500">{{ Products[id - 1]?.price }}</p>
			</div> -->
		</div>
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { Products } from '../data/products.js'

const route = useRoute()
const id = route.params.id

console.log('id', id)
</script>

<style lang="scss" scoped></style>
