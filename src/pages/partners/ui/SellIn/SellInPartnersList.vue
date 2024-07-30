<template>
    <section>
        <div class="flex gap-6 mb-6">
            <SearchFieldWithCross class="w-[38rem]"></SearchFieldWithCross>
            <Dropdown
                :options="deltaOptions"
                v-model="activeDeltaItemValue"
                class="w-[18.25rem]"
                prefix="Выполнение плана:"
            ></Dropdown>
        </div>
        <SellInPartnersTable class="mb-[2.0625rem]"></SellInPartnersTable>
        <div class="flex justify-center">
            <Pagination
                v-model="activePage"
                :links="paginationLinks"
            ></Pagination>
        </div>
    </section>
</template>
<script setup lang="ts">
import { SearchFieldWithCross } from '@/shared/ui'
import { Dropdown, IDropdownOption } from '@/shared/ui'
import { ref } from 'vue'
import SellInPartnersTable from './SellInPartnersTable.vue'
import { Pagination } from '@/shared/ui'
import { IPaginationLink } from '@/shared/types'
const paginationLinks: IPaginationLink[] = [
    { id: 1, name: '1', link: '/sell-in?page=1' },
    { id: 2, name: '2', link: '/sell-in?page=2' },
    { id: 3, name: '3', link: '/sell-in?page=3' },
    { id: 4, name: '4', link: '/sell-in?page=4' },
    { id: 5, name: '5', link: '/sell-in?page=5' },
    { id: 6, name: '6', link: '/sell-in?page=6' },
    { id: 7, name: '7', link: '/sell-in?page=7' },
    { id: 8, name: '8', link: '/sell-in?page=8' }
]
const activePage = ref<number>(1)
const activeDeltaItemValue = ref('week')
const deltaOptions: IDropdownOption[] = [
    {
        label: 'Неделя',
        value: 'week',
        placementLabel: ' за неделю'
    },
    {
        label: 'Месяц',
        value: 'month',
        placementLabel: ' за месяц'
    },
    {
        label: 'Квартал',
        value: 'quartal',
        placementLabel: ' за квартал'
    },
    {
        label: 'Год',
        value: 'year',
        placementLabel: ' за год'
    }
]
</script>
<style lang="scss"></style>
