<template>
    <div>
        <h1 class="mb-8 leading-9">Регионы</h1>
        <div class="flex gap-6 mb-4">
            <RangeSelect
                v-model="rangeShipmentTotalAmount"
                :min="1"
                :max="100"
                placeholder="Сумма отгрузок"
                unit-name=" ₽"
            ></RangeSelect>
            <RangeSelect
                v-model="rangeShipmentTotalPercent"
                :min="1"
                :max="100"
                placeholder="Сумма отгрузок (динамика в %)"
                unit-name=" %"
            ></RangeSelect>
            <RangeSelect
                v-model="rangePartnerCount"
                :min="1"
                :max="100"
                placeholder="Кол-во партнеров"
                unit-name=""
            ></RangeSelect>
            <RangeSelect
                v-model="rangePartnerPercent"
                :min="1"
                :max="100"
                placeholder="Кол-во партнеров (динамика в %)"
                unit-name=" %"
            ></RangeSelect>
        </div>
        <div class="mb-6 flex items-center gap-2">
            <p class="text-blue-dark">Сравнивать динамику за:</p>
            <DateSelect
                :options="DateSelectOptions"
                v-model="activeDateId"
            ></DateSelect>
        </div>
        <RegionsTable class="w-full mb-8" :regions="regionList"></RegionsTable>
        <Pagination
            class="mx-auto w-fit"
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
import RegionsTable, { IRegion } from './RegionsTable.vue'
const rangeShipmentTotalAmount = ref<{ from: number; to: number }>()
const rangeShipmentTotalPercent = ref<{ from: number; to: number }>()
const rangePartnerCount = ref<{ from: number; to: number }>()
const rangePartnerPercent = ref<{ from: number; to: number }>()
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
        link: '/sell-in/regions?page=1'
    },
    {
        id: 12,
        name: '2',
        link: '/sell-in/regions?page=2'
    },
    {
        id: 323,
        name: '3',
        link: '/sell-in/regions?page=3'
    },
    {
        id: 23234,
        name: '...',
        link: '/sell-in/regions?page=4'
    },
    {
        id: 52323,
        name: '7',
        link: '/sell-in/regions?page=5'
    },
    {
        id: 623232,
        name: '8',
        link: '/sell-in/regions?page=6'
    }
]
const regionList: IRegion[] = [
    {
        name: 'Республика Адыгея',
        partnerCount: 134,
        partnerPercent: -13.78,
        shipmentsAmount: 260580.26,
        shipmentsPercent: -134,
        color: 'red'
    },
    {
        name: 'Республика Башкортостан',
        partnerCount: 134,
        partnerPercent: -13.78,
        shipmentsAmount: 260580.26,
        shipmentsPercent: -134,
        color: 'red'
    },
    {
        name: 'Республика Бурятия',
        partnerCount: 134,
        partnerPercent: 0,
        shipmentsAmount: 260580.26,
        shipmentsPercent: 0,
        color: 'yellow'
    },
    {
        name: 'Республика Алтай',
        partnerCount: 134,
        partnerPercent: 13.67,
        shipmentsAmount: 260580.26,
        shipmentsPercent: 13.67,
        color: 'green'
    },
    {
        name: 'Республика Дагестан',
        partnerCount: 134,
        partnerPercent: 1,
        shipmentsAmount: 260580.26,
        shipmentsPercent: 0.87,
        color: 'yellow'
    },
    {
        name: 'Республика Ингушетия',
        partnerCount: 134,
        partnerPercent: 13.67,
        shipmentsAmount: 260580.26,
        shipmentsPercent: 13.67,
        color: 'green'
    },
    {
        name: 'Кабардино-Балкарская Республика',
        partnerCount: 134,
        partnerPercent: 13.67,
        shipmentsAmount: 260580.26,
        shipmentsPercent: 13.67,
        color: 'green'
    },
    {
        name: 'Республика Калмыкия',
        partnerCount: 134,
        partnerPercent: 13.67,
        shipmentsAmount: 260580.26,
        shipmentsPercent: 13.67,
        color: 'green'
    },
    {
        name: 'Республика Карачаево-Черкессия',
        partnerCount: 134,
        partnerPercent: 13.67,
        shipmentsAmount: 260580.26,
        shipmentsPercent: 13.67,
        color: 'green'
    },
    {
        name: 'Республика Карелия',
        partnerCount: 134,
        partnerPercent: 13.67,
        shipmentsAmount: 260580.26,
        shipmentsPercent: 13.67,
        color: 'green'
    },
    {
        name: 'Республика Коми',
        partnerCount: 134,
        partnerPercent: 13.67,
        shipmentsAmount: 260580.26,
        shipmentsPercent: 13.67,
        color: 'green'
    },
    {
        name: 'Республика Марий Эл',
        partnerCount: 134,
        partnerPercent: 13.67,
        shipmentsAmount: 260580.26,
        shipmentsPercent: 13.67,
        color: 'green'
    },
    {
        name: 'Республика Мордовия',
        partnerCount: 134,
        partnerPercent: 13.67,
        shipmentsAmount: 260580.26,
        shipmentsPercent: 13.67,
        color: 'green'
    },
    {
        name: 'Республика Саха (Якутия)',
        partnerCount: 134,
        partnerPercent: 13.67,
        shipmentsAmount: 260580.26,
        shipmentsPercent: 13.67,
        color: 'green'
    },
    {
        name: 'Республика Северная Осетия-Алания',
        partnerCount: 134,
        partnerPercent: 13.67,
        shipmentsAmount: 260580.26,
        shipmentsPercent: 13.67,
        color: 'green'
    },
    {
        name: 'Республика Татарстан',
        partnerCount: 134,
        partnerPercent: 1,
        shipmentsAmount: 260580.26,
        shipmentsPercent: 0.87,
        color: 'yellow'
    },
    {
        name: 'Республика Тыва',
        partnerCount: 134,
        partnerPercent: 1,
        shipmentsAmount: 260580.26,
        shipmentsPercent: 0.87,
        color: 'yellow'
    },
    {
        name: 'Удмуртская Республика',
        partnerCount: 134,
        partnerPercent: 13.67,
        shipmentsAmount: 260580.26,
        shipmentsPercent: 13.67,
        color: 'green'
    },
    {
        name: 'Республика Хакасия',
        partnerCount: 134,
        partnerPercent: 13.67,
        shipmentsAmount: 260580.26,
        shipmentsPercent: 13.67,
        color: 'green'
    },
    {
        name: 'Чеченская республика',
        partnerCount: 134,
        partnerPercent: 13.67,
        shipmentsAmount: 260580.26,
        shipmentsPercent: 13.67,
        color: 'green'
    }
]
</script>
<style lang="scss"></style>
