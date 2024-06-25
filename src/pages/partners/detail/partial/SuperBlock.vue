<template>
    <div class="bg-background rounded p-4">
        <div
            class="flex items-start gap-4"
            :class="{
                'pb-2.5 mb-2.5 border-b border-gray-light':
                    props.data.amountUpToBonus
            }"
        >
            <div class="flex gap-4">
                <div class="h-20 w-20 flex-0-auto">
                    <SuperDoughnutChart :data="chartData"></SuperDoughnutChart>
                </div>
                <div class="min-w-[12.8125rem] pt-1.25">
                    <div class="flex gap-2 mb-2.5 items-center">
                        <p class="text-blue-dark font-semibold">Супер Рост</p>
                        <div
                            v-if="data.totalPercent >= 100"
                            class="bg-green text-white px-1.5 flex items-center gap-1 rounded-full text-very-small py-0.5"
                        >
                            <MedalIcon calss="h-3.75"></MedalIcon>
                            План выполнен!
                        </div>
                    </div>
                    <div class="text-small">
                        <div class="leading-3.5 mb-1 text-gray">
                            Выполнение плана:
                        </div>
                        <div class="text-small leading-4 text-main">
                            {{ formatter.sum(props.data.factSum) }}₽ из
                            <span class="text-blue font-semibold pl-px"
                                >{{ formatter.sum(props.data.planSum) }} ₽</span
                            >
                        </div>
                    </div>
                </div>
            </div>
            <div class="pl-px">
                <p class="mb-4 text-small text-blue leading-4">
                    Супер Рост — это программа для дистрибьюторов,<br />
                    которые стремятся добиться выдающихся<br />
                    результатов и получить Супер Бонус.
                </p>
                <p class="text-very-small leading-3.5 text-gray">
                    В плане
                    <strong class="text-blue font-normal">Супер Роста</strong>
                    учитываются только отгрузки<br />
                    по Электротехнике.
                </p>
            </div>
        </div>
        <div
            class="leading-4 text-small text-main"
            v-if="props.data.amountUpToBonus"
        >
            Для получения <span class="text-blue">супер-бонуса</span> в
            {{ moment().format('YYYY') }} году вам осталось заказать ещё
            на:<span class="text-blue text-caption font-semibold ml-2"
                >{{ formatter.sum(props.data.amountUpToBonus) }} ₽</span
            >
        </div>
    </div>
</template>
<script setup lang="ts">
import { MedalIcon } from '@/shared/Icons'
import SuperDoughnutChart, { ISuperDougnutData } from './SuperDoughnutChart.vue'
import { Formatter } from '@/helpers/Formatter'
import moment from 'moment'
const formatter = new Formatter(false)
export interface ISuperBlockData {
    totalPercent: number
    dynamicPercent: number
    factSum: number
    planSum: number
    amountUpToBonus?: number
}
const props = defineProps<{ data: ISuperBlockData }>()
const chartData: ISuperDougnutData = {
    totalPercent: props.data.totalPercent,
    dynamicPercent: props.data.dynamicPercent
}
</script>
<style lang="scss"></style>
