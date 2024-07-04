import { ICategory, ICategoryFilterOption } from '@/shared/types'
export function getCategoryesForFilter(
    categoryes: ICategory[]
): ICategoryFilterOption[] {
    return categoryes.map(category => ({
        id: category.id,
        label: category.name,
        nodes:
            category.child_recursive.length > 0
                ? getCategoryesForFilter(category.child_recursive)
                : null
    }))
}
