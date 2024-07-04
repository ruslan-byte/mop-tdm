export interface ICategory {
    id: number
    tdm_id: string
    code: string
    slug: string
    name: string
    description: string
    is_active: boolean
    eac: boolean
    image: string
    image_icon: string
    image_icon_select: string
    image_cert: string
    image_cert_preview: string
    parent_id: null | number
    order: 1
    created_at: string
    updated_at: string
    settings: {
        icon: string
    }
    products_count: number
    views: number
    child_recursive: [] | []
}
export interface ICategoryFilterOption {
    id: number
    label: string
    nodes: ICategoryFilterOption[] | null
}
