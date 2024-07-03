import { Header } from '@/widgets/layout'
import {
    PartnersPage,
    PartnerDetailPage,
    RegionsPage,
    DetailRegionPage
} from '@/pages/sellIn'
export default [
    {
        path: '/sell-in',
        components: { default: PartnersPage, header: Header }
    },
    {
        path: '/sell-in/:id',
        components: { default: PartnerDetailPage, header: Header }
    },
    {
        path: '/sell-in/regions',
        components: { default: RegionsPage, header: Header }
    },
    {
        path: '/sell-in/regions/:id',
        components: { default: DetailRegionPage, header: Header }
    }
]
