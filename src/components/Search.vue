<script setup></script>
<template>
	<div class="container py-2 flex gap-10 justify-between border-red-500">
		<img src="/dona.png" />
		<div class="flex w-full items-center max-w-md mx-auto">
			<input
				type="text"
				placeholder="Izlash..."
				v-model="searchQuery"
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

		<div class="flex justify-between gap-10 items-center">
			<img src="/korzinka.png" />
			<img src="/person.png" />
		</div>
	</div>
</template>
<style scoped></style>
