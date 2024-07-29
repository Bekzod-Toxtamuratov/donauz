<script setup>
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref } from 'vue'

const modules = ref([Pagination])
</script>

<template>
	<section class="brands py-20">
		<h2 class="mb-10 text-3xl">Mashhur brendlar</h2>
		<div class="hidden lg:block">
			<swiper
				:slidesPerView="6"
				:spaceBetween="30"
				:loop="true"
				:pagination="true"
				:modules="modules"
				class="mySwiper"
			>
				<swiper-slide>
					<div class="bg-white py-4 xl:py-6 px-5 xl:px-8 rounded-md shadow-md">
						<img src="/apple.png" alt="slider-image" class="w-full" />
					</div>
				</swiper-slide>
				<swiper-slide>
					<div class="bg-white py-4 xl:py-6 px-5 xl:px-8 rounded-md shadow-md">
						<img src="/lg.png" alt="slider-image" class="w-full" />
					</div>
				</swiper-slide>
				<swiper-slide>
					<div class="bg-white py-4 xl:py-6 px-5 xl:px-8 rounded-md shadow-md">
						<img src="/acer.png" alt="slider-image" class="w-full" />
					</div>
				</swiper-slide>
				<swiper-slide>
					<div class="bg-white py-4 xl:py-6 px-5 xl:px-8 rounded-md shadow-md">
						<img src="/sony.png" alt="slider-image" class="w-full" />
					</div>
				</swiper-slide>
				<swiper-slide>
					<div class="bg-white py-4 xl:py-6 px-5 xl:px-8 rounded-md shadow-md">
						<img src="/hp.png" alt="slider-image" class="w-full" />
					</div>
				</swiper-slide>
				<swiper-slide>
					<div class="bg-white py-4 xl:py-6 px-5 xl:px-8 rounded-md shadow-md">
						<img src="/asus.png" alt="slider-image" class="w-full" />
					</div>
				</swiper-slide>
				<swiper-slide>
					<div class="bg-white py-4 xl:py-6 px-5 xl:px-8 rounded-md shadow-md">
						<img src="/asus.png" alt="slider-image" class="w-full" />
					</div>
				</swiper-slide>
				<swiper-slide>
					<div class="bg-white py-4 xl:py-6 px-5 xl:px-8 rounded-md shadow-md">
						<img src="/asus.png" alt="slider-image" class="w-full" />
					</div>
				</swiper-slide>
			</swiper>
		</div>
		<div class="grid lg:hidden">grid</div>
	</section>
</template>

<style>
.mySwiper {
	padding-bottom: 40px;
}
.mySwiper .swiper-pagination {
	top: auto;
	bottom: 0px;
}
.mySwiper .swiper-pagination .swiper-pagination-bullet-active {
	background: orange;
}
</style>
