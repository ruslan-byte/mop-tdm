<template>
    <div
        class="bg-background py-4 px-2 rounded"
        :class="{ 'outline outline-1 outline-blue': isThisActiveQuartal }"
    >
        <div class="flex gap-3 mb-4">
            <div class="w-20 h-[4.9375rem]">
                <DoughnutChart :data="chartData"></DoughnutChart>
            </div>
            <div class="flex-1 pt-[0.46875rem]">
                <div class="flex gap-2 items-center mb-1.5 justify-between">
                    <p class="text-blue-dark font-semibold">
                        {{ data.quartal }} квартал
                    </p>
                    <div
                        class="bg-white px-1.5 rounded-full flex gap-1 py-0.5"
                        v-if="data.totalFactPercent > 100"
                    >
                        <MedalIcon></MedalIcon>
                        <span
                            class="text-green-pressed text-very-small leading-3.5"
                        >
                            План выполнен!
                        </span>
                    </div>
                </div>
                <div>
                    <p class="text-gray text-small mb-1 leading-3.5">
                        Выполнение плана:
                    </p>
                    <p class="text-small leading-4">
                        {{ formatter.sum(data.factSum) }} ₽ из
                        <span class="text-blue font-semibold"
                            >{{ formatter.sum(data.planSum) }} ₽</span
                        >
                    </p>
                </div>
            </div>
        </div>
        <div class="bg-white px-4 py-2 flex gap-6 rounded">
            <div>
                <p class="text-gray text-small mb-1 leading-4 pr-px">
                    <span
                        class="inline-block h-[0.4375rem] w-[0.4375rem] bg-orange rounded-full"
                    ></span>
                    Электротехника
                </p>
                <p class="text-very-small flex gap-1 leading-3.5">
                    <span class="text-main"
                        >{{ formatter.sum(data.electroSum) }} ₽</span
                    >
                    <span class="text-blue"
                        >({{
                            formatter.percent(data.reletedPercentElectro)
                        }}%)</span
                    >
                </p>
            </div>
            <div>
                <p class="text-gray text-small mb-1 leading-[0.75rem] pt-0.5">
                    <span
                        class="inline-block h-[0.4375rem] w-[0.4375rem] bg-green-21 rounded-full"
                    ></span>
                    КПП
                </p>
                <p class="text-very-small flex gap-1 leading-3.5">
                    <span class="text-main"
                        >{{ formatter.sum(data.kppSum) }} ₽</span
                    >
                    <span class="text-blue"
                        >({{
                            formatter.percent(data.reletedPercentKpp)
                        }}%)</span
                    >
                </p>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { MedalIcon } from '@/shared/Icons'
import DoughnutChart, { IDoughnutData } from './DoughnutChart.vue'
import { Formatter } from '@/shared/ui'
import { computed, ref } from 'vue'
import moment from 'moment'
const formatter = new Formatter(false)
export interface IQuartalBlockData {
    quartal: '1' | '2' | '3' | '4'
    factSum: number
    planSum: number
    totalFactPercent: number
    electroSum: number
    kppSum: number
    reletedPercentElectro: number
    reletedPercentKpp: number
    dynamicPercent?: number
}
const props = defineProps<{ data: IQuartalBlockData }>()

const isThisActiveQuartal = computed(() => {
    return moment().quarter().toString() == props.data.quartal
})
const chartData = ref<IDoughnutData>({
    totalPercent: props.data.totalFactPercent,
    reletedPercentKpp: props.data.reletedPercentKpp,
    reletedPercentElectro: props.data.reletedPercentElectro,
    dynamicPercent: isThisActiveQuartal.value ? props.data.dynamicPercent : 0
})
</script>
<style lang="scss"></style>
