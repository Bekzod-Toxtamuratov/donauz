<script setup></script>
<template>
	<header class="sticky top-0 left-0 w-full bg-white z-20">
		<div class="container py-2 flex gap-10 justify-between items-center">
			<img src="/dona.png" class="w-[103px] sm:w-auto" />
			<div class="w-full items-center max-w-md mx-auto hidden lg:flex">
				<input
					type="text"
					placeholder="Izlash..."
					class="w-full px-4 py-2 border border-primary-500 rounded-l-lg focus:outline-none focus:border-purple-700"
				/>
				<button
					@click="performSearch"
					class="px-4 py-2 bg-primary rounded-r-lg hover:bg-orange-600"
				>
					<svg
						class="w-full h-6 text-white"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 10-10.6-10.6 7.5 7.5 0 0010.6 10.6z"
						></path>
					</svg>
				</button>
			</div>

			<div class="flex justify-between gap-5 lg:gap-10 items-center">
				<div class="flex flex-col items-center lg:hidden">
					<img src="/fe_search.png" class="w-6 sm:w-auto" />
					<span class="text-orange text-xs sm:text-sm">Izlash</span>
				</div>
				<div class="flex flex-col items-center">
					<img src="/korzinka.png" class="w-6 sm:w-7" />
					<span class="text-orange text-xs sm:text-sm lg:hidden">Izlash</span>
				</div>
				<div class="flex flex-col items-center">
					<img src="/person.png" class="w-[18px] sm:w-auto mb-1 sm:mb-0" />
					<span class="text-orange text-xs sm:text-sm lg:hidden">Izlash</span>
				</div>
			</div>
		</div>
	</header>
</template>
<style scoped></style>
