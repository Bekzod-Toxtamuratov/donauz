<script setup>
import Button from './Button.vue'

const productData = [
	{
		img: '/product13.png',
		title: 'Choyshab Lelit',
		imgLittle: '/start.png',
		price: '149,000 so’m',
		basketImg: '/backet_two.png',
	},
	{
		img: '/product14.png',
		title: 'Xiomi M 10 Smartfon',
		imgLittle: '/start.png',
		price: '1 500 000 so’m',
		basketImg: '/backet_two.png',
	},
	{
		img: '/product14.png',
		title: 'Smartwatch 11',
		imgLittle: '/start.png',
		price: '149,000 so’m',
		basketImg: '/backet_two.png',
	},
	{
		img: '/product16.png',
		title: 'O’tgan kunlar 1',
		imgLittle: '/start.png',
		price: '50,000 so’m',
		basketImg: '/backet_two.png',
	},
	{
		img: '/product17.png',
		title: 'Mashina qismlari',
		imgLittle: '/start.png',
		price: '149,000 so’m',
		basketImg: '/backet_two.png',
	},
	{
		img: '/product18.png',
		title: 'O’yinchoq mashina',
		imgLittle: '/start.png',
		price: '149,000 so’m',
		basketImg: '/backet_two.png',
	},
	{
		img: '/product19.png',
		title: 'Choyshab Lelit',
		imgLittle: '/start.png',
		price: '149,000 so’m',
		basketImg: '/backet_two.png',
	},
	{
		img: '/product20.png',
		title: 'Xiaomi Ми 8 Lite ',
		imgLittle: '/start.png',
		price: '149,000 so’m',
		basketImg: '/backet_two.png',
	},
]
</script>

<template>
	<div class="pt-9 mt-10">
		<h2 class="text-black1 text-4xl font-semibold mb-10">Ommabop tovarlar</h2>
		<div
			class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
		>
			<div
				v-for="(item, index) in productData"
				:key="index"
				class="bg-white p-4 rounded-xl shadow-md"
			>
				<img :src="item.img" class="rounded-2xl w-full" />
				<div class="flex justify-between items-center mt-2">
					<p class="font-normal text-lg text-black1">{{ item.title }}</p>
					<div class="flex items-center gap-1">
						<img :src="item.imgLittle" />
						<p>4.3</p>
					</div>
				</div>
				<div class="flex justify-between mt-3 items-center">
					<p class="font-medium text-xl text-black1">{{ item.price }}</p>
					<img :src="item.basketImg" class="w-6 h-8" />
				</div>
			</div>
		</div>
		<Button class="lg:flex lg:justify-center hidden" />
	</div>
</template>

<style scoped>
.bg-black1 {
	color: #333; /* Text color for product title and price */
}
</style>
