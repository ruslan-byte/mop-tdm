import { createWebHistory, createRouter } from 'vue-router'

import IndexPage from '@/pages/plan/Index.vue'
import myDataPage from '@/pages/myData/Index.vue'
import Header from '@/components/Header.vue'

const routes = [
  { path: '/', components: {default:IndexPage, header:Header} },
  { path: '/profile', component: myDataPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router