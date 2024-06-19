<template>
    <div class="g-white-block py-8 px-6">
        <div
            class="flex gap-5 justify-between border-b border-gray-pale pb-4 mb-4"
        >
            <h3>Выполнение плана продаж</h3>
            <div>
                <p class="text-small text-main">
                    Показать динамику выполнения плана за:
                </p>
            </div>
        </div>
        <div class="flex justify-between mb-4">
            <Tabs :tabs="tabs" v-model="activeTab" type="orange-blue"></Tabs>
            <UpdateBlock></UpdateBlock>
        </div>
        <div class="grid grid-cols-2 gap-6 mb-6">
            <QuartalBlock
                v-for="data of quartalsData"
                :data="data"
            ></QuartalBlock>
        </div>
        <YearBlock></YearBlock>
    </div>
</template>
<script setup lang="ts">
import Tabs, { ITab } from '@/components/Tabs.vue'
import { ref } from 'vue'
import UpdateBlock from '@/components/UpdateBlock.vue'
import QuartalBlock, { IQuartalBlockData } from './QuartalBlock.vue'
import YearBlock from './YearBlock.vue'

const activeTab = ref('2022')
const tabs: ITab[] = [
    { value: '2022', label: '2022' },
    { value: '2023', label: '2023' },
    { value: '2024', label: '2024' }
]
const quartalsData: IQuartalBlockData[] = [
    {
        quartal: '1',
        factSum: 15036000,
        planSum: 30000000,
        totalFactPercent: 50.12,
        electroSum: 9773400,
        kppSum: 5262600,
        reletedPercentElectro: 65,
        reletedPercentKpp: 35,
        dynamicPercent: 12
    },
    {
        quartal: '2',
        factSum: 60294000,
        planSum: 30000000,
        totalFactPercent: 200.98,
        electroSum: 39191100,
        kppSum: 21102900,
        reletedPercentElectro: 65,
        reletedPercentKpp: 35,
        dynamicPercent: 12
    },
    {
        quartal: '3',
        factSum: 15036000,
        planSum: 30000000,
        totalFactPercent: 50.12,
        electroSum: 9773400,
        kppSum: 5262600,
        reletedPercentElectro: 65,
        reletedPercentKpp: 35,
        dynamicPercent: 12
    },
    {
        quartal: '4',
        factSum: 0,
        planSum: 30000000,
        totalFactPercent: 0,
        electroSum: 0,
        kppSum: 0,
        reletedPercentElectro: 0,
        reletedPercentKpp: 0,
        dynamicPercent: 12
    }
]
</script>
<style lang="scss"></style>
