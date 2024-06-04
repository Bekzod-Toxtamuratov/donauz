import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('../pages/main.vue'),
		},
		// {
		// 	path: '/products/:id',
		// 	name: 'product-detail',
		// 	component: () => import('../pages/main2.vue'),
		// },
		{
			path: '/login',
			name: 'login',
			component: () => import('../pages/loginMainPage.vue'),
		},
		{
			path: '/products/:id',
			name: 'single-product',
			component: () => import('../pages/main2.vue'),
		},
	],
	scrollBehavior(to, from, savedPosition) {
		return { top: 0 }
	},
})
export default router
