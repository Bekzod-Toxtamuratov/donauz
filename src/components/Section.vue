<script setup>
import { reactive, ref } from 'vue'

const props = defineProps({
	data: Object,
})
const products = reactive([
	{ img: '/product1.png', title: 'Barberton Daisy', price: '199.00', id: 1 },
	{ img: '/product2.png', title: 'Angel Wing Begonia', price: '200.00', id: 2 },
	{ img: '/product3.png', title: 'African Violet', price: '150.00', id: 3 },
	{ img: '/product9.png', title: 'Beach Spider Lily', price: '139.00', id: 4 },
	{ img: '/product5.png', title: 'Blushing Bromeliad', price: '190.00', id: 5 },
	{ img: '/product6.png', title: 'Aluminum Plant', price: '200.00', id: 6 },
	{ img: '/product7.png', title: 'African Violet', price: '129.00', id: 7 },
	{
		img: '/product8.png',
		title: 'Broadleaf Lady Palm',
		price: '129.00',
		id: 8,
	},
	{ img: '/product9.png', title: 'Chinese Evergreen', price: '111.00', id: 9 },
])

const categories = reactive([
	{ title: 'House Plants', count: 33 },
	{ title: 'Potter Plants', count: 12 },
	{ title: 'Seeds', count: 60 },
	{ title: 'Small Plants', count: 20 },
	{ title: 'Big Plants', count: 34 },
	{ title: 'Succulents', count: 43 },
	{ title: 'Terrariums', count: 10 },
	{ title: 'Gardening', count: 14 },
	{ title: 'Accessories', count: 33 },
])

const size = reactive([
	{ title: 'Small', count: 119 },
	{ title: 'Medium', count: 86 },
	{ title: 'Large', count: 79 },
])

const btns = ref([1, 2, 3, 4, '>'])
const categoriesTitle = ref(['All Plants', 'New Arrivals', 'Sale'])
</script>

<template>
	<div class="flex gap-10 my-5">
		<div
			class="l w-[310px] h-[1050px] bg-[#FBFBFB] py-3 px-5 flex flex-col gap-8"
		>
			<div class="flex flex-col gap-2">
				<h1 class="text-xl font-extrabold text-[#3d3d3d]">Categories</h1>
				<div v-for="(item, index) in categories" :key="index">
					<a class="flex justify-between focus:text-[#46A358]" href="#c">
						<p>{{ item.title }}</p>
						<p>({{ item.count }})</p>
					</a>
				</div>
			</div>

			<div class="flex flex-col gap-2">
				<h1 class="text-xl font-extrabold text-[#3d3d3d]">Price Range</h1>
				<input
					class="bg-green-500 appearance-none h-1 w-full rounded-lg"
					type="range"
					min="2"
				/>
				<p>Price: <b class="text-[#46A358]">$39 - $1230</b></p>
				<button
					class="px-6 py-2 w-32 uppercase text-sm rounded-lg font-medium text-white bg-[#46A358]"
				>
					Filter
				</button>
			</div>

			<div class="flex flex-col gap-2">
				<h1 class="text-xl font-extrabold text-[#3d3d3d]">Size</h1>
				<div v-for="(item, index) in size" :key="index">
					<a class="flex justify-between focus:text-[#46A358]" href="#">
						<p>{{ item.title }}</p>
						<p>({{ item.count }})</p>
					</a>
				</div>
			</div>

			<div class="flex flex-col items-center">
				<img src="../assets/super.svg" alt="img" />
				<h1 class="text-base uppercase font-semibold">UP TO 75% OFF</h1>
				<img src="../assets/super.svg" alt="img" />
			</div>
		</div>

		<div class="w-[860px] flex flex-col gap-4">
			<div class="flex justify-between items-center">
				<div class="flex gap-5">
					<div v-for="(item, index) in categoriesTitle" :key="index">
						<a
							class="text-[17px] focus:border-b-4 focus:border-[#46A358] focus:mb-2 focus:text-[#46A358]"
							href="#c"
						>
							{{ item }}
						</a>
					</div>
				</div>
				<div class="sort">
					<p>Sort by: Default sorting</p>
				</div>
			</div>

			<div class="grid grid-cols-3 gap-5">
				<div v-for="item in products" :key="item.id">
					<div
						class="card flex flex-col gap-2 mb-3 border-t relative"
						@mouseover="item.hover = true"
						@mouseleave="item.hover = false"
					>
						<div class="bg-[#FBFBFB] p-5 w-[270px] h-[266px] relative">
							<router-link :to="`/products/${item.id}`">
								<img
									:src="item.img"
									alt="flower"
									class="bg-cover w-[250px] h-[250px]"
								/>
							</router-link>
						</div>

						<div
							class="buttons absolute flex gap-4 -bottom-1 left-[30%]"
							:class="{ hidden: !item.hover }"
						>
							<button><img src="../assets/cart2.svg" alt="cart" /></button>
							<button><img src="../assets/like.svg" alt="like" /></button>
							<button><img src="../assets/search.svg" alt="search" /></button>
						</div>
					</div>

					<div>
						<h1 class="text-lg text-[#3D3D3D]">{{ item.title }}</h1>
						<p>
							<b class="text-[#46A358]">${{ item.price }}</b>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="flex gap-3 justify-end mb-4">
		<div v-for="(item, index) in btns" :key="index">
			<button
				class="px-2 py-1 border rounded-md focus:bg-[#46A358] focus:text-white"
			>
				{{ item }}
			</button>
		</div>
	</div>
</template>

<style scoped>
.card:hover .buttons {
	display: flex;
}
.buttons {
	display: none;
}
</style>
