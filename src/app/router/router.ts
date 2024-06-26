import { createWebHistory, createRouter } from 'vue-router'

import IndexPage from '@/pages/plan/Index.vue'
import myDataPage from '@/pages/myData/Index.vue'

import partnersPage from '@/pages/partners/Index.vue'
import partnerDetailPage from '@/pages/partners/detail/Index.vue'
import shipmentsPage from '@/pages/shipments/Index.vue'
import skuPage from '@/pages/sku/Index.vue'

import { Header } from '@/widgets/layout'
import { RegionPage } from '@/pages/locations'

const routes = [
    { path: '/', components: { default: IndexPage, header: Header } },
    { path: '/profile', components: { default: myDataPage, header: Header } },
    {
        path: '/partners',
        components: { default: partnersPage, header: Header }
    },
    {
        path: '/partners/:id',
        components: { default: partnerDetailPage, header: Header }
    },
    {
        path: '/order-shipments',
        components: { default: shipmentsPage, header: Header }
    },
    { path: '/sku', components: { default: skuPage, header: Header } },
    { path: '/regions', components: { default: RegionPage, header: Header } }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
