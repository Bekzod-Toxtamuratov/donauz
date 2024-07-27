import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('../pages/main.vue'),
		},
	],
	scrollBehavior(to, from, savedPosition) {
		return { top: 0 }
	},
})
export default router
