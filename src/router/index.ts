import { createRouter, createWebHistory } from 'vue-router'
import QuicktrackMain from '../views/QuicktrackMain.vue'
// import QuicktrackDetails from '../views/QuicktrackDetails.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: QuicktrackMain,
        },
        {
            path: '/accounts/:id',
            name: 'account',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/QuicktrackDetails.vue'),
        },
    ],
})

export default router
