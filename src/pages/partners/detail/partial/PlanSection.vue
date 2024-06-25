<template>
    <div class="g-white-block py-8 px-6">
        <div
            class="flex gap-5 justify-between border-b border-gray-pale pb-[1.1875rem] mb-4"
        >
            <h3>Выполнение плана продаж</h3>
            <div>
                <p class="text-small text-main leading-4 mb-1">
                    Показать динамику выполнения плана за:
                </p>
                <p class="leading-4 text-small text-end">дата</p>
            </div>
        </div>
        <div class="flex justify-between mb-4 items-center">
            <Tabs :tabs="tabs" v-model="activeTab" type="orange-blue"></Tabs>
            <UpdateBlock></UpdateBlock>
        </div>
        <div class="grid grid-cols-2 gap-6 mb-6">
            <QuartalBlock
                v-for="data of quartalsData"
                :data="data"
            ></QuartalBlock>
        </div>
        <YearBlock :data="YearBlockData" class="mb-6"></YearBlock>
        <SuperBlock :data="superBlockData" class="mb-6"></SuperBlock>
        <KppSection :total="30000000" :accountedPart="15000000"></KppSection>
    </div>
</template>
<script setup lang="ts">
import Tabs, { ITab } from '@/components/Tabs.vue'
import { ref } from 'vue'
import UpdateBlock from '@/components/UpdateBlock.vue'
import QuartalBlock, { IQuartalBlockData } from './QuartalBlock.vue'
import YearBlock, { IYearBlockData } from './YearBlock.vue'
import SuperBlock, { ISuperBlockData } from './SuperBlock.vue'
import KppSection from './KppSection.vue'
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
const YearBlockData: IYearBlockData = {
    factSum: 28000000,
    planSum: 30000000,
    electroSum: 18200000,
    kppSum: 9800000,
    factPercent: 93.33,
    electroPercent: 65,
    kppPercent: 35,
    dinamicPercent: 12,
    quartalPercents: [35, 33, 25.33, 0],
    standartBonusSum: 450000
}
const superBlockData: ISuperBlockData = {
    totalPercent: 200.34,
    dynamicPercent: 12,
    factSum: 60102000,
    planSum: 30000000
}
</script>
<style lang="scss"></style>
