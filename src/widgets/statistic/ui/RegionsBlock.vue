<template>
    <div>
        <h1>Регионы</h1>
        <div class="flex">
            <RangeSelect
                v-model="rangeSelectData"
                :min="1"
                :max="100"
            ></RangeSelect>
        </div>
        <div class="mb-10">
            <DateSelect
                :options="DateSelectOptions"
                v-model="activeDateId"
                disabled
            ></DateSelect>
        </div>

        <Pagination
            v-model="activePageId"
            :links="PaginationLinks"
        ></Pagination>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import DateSelect from './DateSelect.vue'
import { RangeSelect } from '@/shared/ui'
import { Pagination } from '@/shared/ui'
const rangeSelectData = ref<{ from: number; to: number }>()
const DateSelectOptions = [
    {
        id: 0,
        name: 'Июнь - май, 2024'
    },
    {
        id: 1,
        name: 'Май - апрель, 2024'
    },
    {
        id: 2,
        name: 'Апрель - март, 2024'
    },
    {
        id: 3,
        name: '2 кв. - 1 кв.,2024'
    },
    {
        id: 4,
        name: '1 кв 2024. - 4 кв. 2023'
    },
    {
        id: 5,
        name: '4 кв. - 3 кв.,2023'
    },
    {
        id: 6,
        name: '2024 г. - 2023 г.'
    }
]
const activeDateId = ref<number>(0)

const activePageId = ref(42)
const PaginationLinks = [
    {
        id: 42,
        name: '1',
        link: '/regions?page=1'
    },
    {
        id: 12,
        name: '2',
        link: '/regions?page=2'
    },
    {
        id: 323,
        name: '3',
        link: '/regions?page=3'
    },
    {
        id: 23234,
        name: '4',
        link: '/regions?page=4'
    },
    {
        id: 52323,
        name: '5',
        link: '/regions?page=5'
    },
    {
        id: 623232,
        name: '6',
        link: '/regions?page=6'
    },
    {
        id: 73242,
        name: '9',
        link: '/regions?page=8'
    },
    {
        id: 23238,
        name: '10',
        link: '/regions?page=8'
    }
]
</script>
<style lang="scss"></style>
