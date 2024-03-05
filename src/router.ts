import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        component: () => import('./pages/index.vue'),
      },
      {
        path: '/login',
        component: () => import('./pages/auth/login.vue'),
      }
    ],
})

export default router