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
		<div
			class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8"
		>
			<div v-for="(item, index) in productData" :key="index" class="px-2 group">
				<img :src="item.img" class="rounded-2xl w-full" />
				<p
					class="font-medium text-[16px] group-hover:text-orange text-center leading-5 text-titleColor mt-2"
				>
					{{ item.text }}
				</p>
			</div>
		</div>
	</div>
</template>
<style scoped>
.text-titleColor {
	color: #333;
}

.text-orange {
	color: #fb923c;
}
.group:hover .group-hover\:text-orange {
	color: #fb923c;
}
.group img {
	transition: transform 0.3s ease;
}
.group:hover img {
	transform: scale(1.05);
}
</style>
