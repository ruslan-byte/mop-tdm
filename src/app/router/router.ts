import { createWebHistory, createRouter } from 'vue-router'

import IndexPage from '@/pages/plan/Index.vue'
import myDataPage from '@/pages/myData/Index.vue'

import shipmentsPage from '@/pages/shipments/Index.vue'
import skuPage from '@/pages/sku/Index.vue'

import { Header } from '@/widgets/layout'
import SellInRoutes from './sell-in-routes'

const routes = [
    { path: '/', components: { default: IndexPage, header: Header } },
    { path: '/profile', components: { default: myDataPage, header: Header } },
    {
        path: '/order-shipments',
        components: { default: shipmentsPage, header: Header }
    },
    { path: '/sku', components: { default: skuPage, header: Header } },
    ...SellInRoutes
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
