import { Header } from '@/widgets/layout'
import {
    PartnerDetailPage,
    RegionsPage,
    DetailRegionPage
} from '@/pages/sellIn'
import { SellInPartnersPage } from '@/pages/partners'
export default [
    {
        path: '/sell-in',
        components: {
            default: SellInPartnersPage,
            header: Header
        }
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
