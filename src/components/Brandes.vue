<template>
	<swiper-container class="my-8">
		<swiper-slide class="flex items-center justify-between">
			<div class="flex items-center justify-between gap-8 border">
				<div class="bg-[#fff] w-[150px] text-center">
					<img class="" src="/apple.png" />
				</div>
				<div class="bg-[#fff] h-full">
					<img class="" src="/lg.png" />
				</div>
				<div class="bg-[#fff] h-full">
					<img class="" src="/acer.png" />
				</div>
				<div class="bg-[#fff] h-full">
					<img class="" src="/sony.png" />
				</div>
				<div class="bg-[#fff] h-full">
					<img class="" src="/asus.png" />
				</div>
				<div class="bg-[#fff] h-full">
					<img class="" src="/hp.png" />
				</div>
			</div>
		</swiper-slide>
		<swiper-slide class="flex items-center justify-between bg-gray-100 p-6">
			<div class="flex items-center">
				<p>dadad</p>
			</div>
		</swiper-slide>
		<swiper-slide class="flex items-center justify-between bg-gray-100 p-6">
			<div class="flex items-center">
				<p>dadad</p>
				<p>dadad</p>
				<p>dadad</p>
				<p>dadad</p>
			</div>
		</swiper-slide>
	</swiper-container>
</template>
<script>
import 'swiper/swiper-bundle.css'
import { Swiper, SwiperSlide } from 'swiper/vue'

export default {
	components: {
		SwiperContainer: Swiper,
		SwiperSlide: SwiperSlide,
	},
}
</script>
<style scoped>
@import 'swiper/swiper-bundle.css';

.swiper-container {
	width: 100%;
	height: 100%;
}

.swiper-slide {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}

@-webkit-keyframes scroll {
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(calc(-250px * 7));
	}
}
@keyframes scroll {
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(calc(-250px * 7));
	}
}
.slider {
	background: white;
	box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
	height: 100px;
	margin: auto;
	overflow: hidden;
	position: relative;
	width: 100%;
}
.slider::before,
.slider::after {
	background: linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%);
	content: '';
	height: 100px;
	position: absolute;
	width: 200px;
	z-index: 2;
}
.slider::after {
	right: 0;
	top: 0;
	transform: rotateZ(180deg);
}
.slider::before {
	left: 0;
	top: 0;
}
.slider .slide-track {
	-webkit-animation: scroll 40s linear infinite;
	animation: scroll 40s linear infinite;
	display: flex;
	width: calc(250px * 14);
}
.slider .slide {
	height: 100px;
	width: 250px;
}
</style>
