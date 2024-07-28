<script setup>
const productData = [
	{
		img: '/product1.png',
		text: 'Uy va hovli uchun',
	},
	{
		img: '/product2.png',
		text: 'Bolalar uchun',
	},
	{
		img: '/product3.png',
		text: 'Sovgalar',
	},
	{
		img: '/product4.png',
		text: 'Automobillar uchun',
	},
	{
		img: '/product5.png',
		text: 'Smartfonlar',
	},
	{
		img: '/product6.png',
		text: 'Go’zallik va salomatlik',
	},
	{
		img: '/product7.png',
		text: 'Quloqchinlar ',
	},
	{
		img: '/product8.png',
		text: 'Aqlli soatlar',
	},
	{
		img: '/product9.png',
		text: 'Kolonkalar',
	},
	{
		img: '/product10.png',
		text: 'Kitoblar',
	},
	{
		img: '/product11.png',
		text: 'Voyaga yetganalar uchun',
	},
	{
		img: '/product12.png',
		text: 'Bolajonlar',
	},
]
</script>
<template>
	<div class="pt-9 bg-purple">
		<div class="grid grid-cols-6 gap-8">
			<div v-for="(item, index) in productData" :key="index" class="px-2">
				<img :src="item.img" class="rounded-2xl" />
				<p class="font-medium text-[16px] leading-5 text-black1">
					{{ item.text }}
				</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
