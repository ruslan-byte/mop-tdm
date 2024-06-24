<template>
    <div class="bg-background p-4 rounded">
        <div class="flex mb-4">
            <div class="h-[6.875rem] w-[6.875rem] mr-6">
                <YearDoughnutChart
                    :data="YearDoughnutData"
                    :is-quartal="activeRadio == 'quartal'"
                ></YearDoughnutChart>
            </div>
            <div
                class="bg-white mr-4 px-2 py-[0.8125rem] rounded w-[15.3125rem] flex-[0_0_auto]"
            >
                <div class="flex items-center gap-2 justify-between mb-2">
                    <p class="font-semibold text-blue-dark">Годовой план</p>
                    <div
                        class="text-very-small bg-background flex gap-1 px-1.5 py-0.5 leading-[0.9375rem] text-green rounded-full"
                        v-if="data.factPercent >= 100"
                    >
                        <MedalIcon></MedalIcon>
                        План выполнен!
                    </div>
                </div>
                <div>
                    <p class="text-small text-gray leading-4">
                        Выполнение плана:
                    </p>
                    <div class="flex gap-1 mb-2">
                        <span class="leading-4 text-small text-main">
                            {{ formatter.sum(data.factSum) }} ₽ из
                        </span>
                        <span
                            class="leading-4 text-small text-blue font-semibold"
                        >
                            {{ formatter.sum(data.planSum) }} ₽
                        </span>
                    </div>
                    <div class="flex gap-2">
                        <div>
                            <div class="flex items-center gap-1">
                                <div
                                    class="h-[0.4375rem] w-[0.4375rem] bg-orange rounded-full"
                                ></div>
                                <span
                                    class="leading-3 text-gray text-very-small"
                                >
                                    Электротехника
                                </span>
                            </div>
                            <div class="text-very-small leading-4 text-main">
                                <span class="inline-block mr-0.5"
                                    >{{
                                        formatter.sum(data.electroSum)
                                    }}
                                    ₽</span
                                >
                                <span class="text-gray"
                                    >({{
                                        formatter.percent(data.electroPercent)
                                    }}%)</span
                                >
                            </div>
                        </div>
                        <div>
                            <div class="flex items-center gap-1">
                                <div
                                    class="h-[0.4375rem] w-[0.4375rem] bg-green-21 rounded-full"
                                ></div>
                                <span
                                    class="leading-3 text-gray text-very-small"
                                >
                                    КПП
                                </span>
                            </div>
                            <div class="text-very-small leading-4 text-main">
                                <span class="inline-block mr-0.5"
                                    >{{ formatter.sum(data.kppSum) }} ₽</span
                                >
                                <span class="text-gray"
                                    >({{
                                        formatter.percent(data.kppPercent)
                                    }}%)</span
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-white rounded px-2 py-[0.8125rem] w-60">
                <p class="text-caption text-blue-dark mb-2 leading-5">
                    Доля выполнения плана поквартально:
                </p>
                <div class="grid grid-cols-2 gap-[0.5rem_1rem]">
                    <div
                        class="text-small text-main whitespace-nowrap"
                        v-for="(quartal, index) of data.quartalPercents"
                    >
                        {{ index + 1 }} квартал
                        <span
                            class="font-bold"
                            :class="{
                                'text-orange font-bold': quartal !== 0,
                                'text-gray font-normal': quartal == 0
                            }"
                            >{{ formatter.percent(quartal) }}%</span
                        >
                    </div>
                </div>
            </div>
        </div>
        <div
            class="flex items-center"
            :class="{
                'mb-4 border-b border-gray-light pb-4': data.standartBonusSum
            }"
        >
            <p
                class="font-semibold text-small text-main mr-4 leading-[1.125rem]"
            >
                Показать на графике:
            </p>
            <RadioButton
                class="mr-4"
                :is-active="activeRadio == 'quartal'"
                @change="activeRadio = 'quartal'"
            >
                <span class="text-small leading-4 text-main"
                    >Выполнение плана поквартально
                </span>
            </RadioButton>
            <RadioButton
                :is-active="activeRadio == 'kpp-electro'"
                @change="activeRadio = 'kpp-electro'"
            >
                <span class="text-small leading-4 text-main"
                    >Доля электротехники и КПП в плане
                </span>
            </RadioButton>
        </div>
        <div class="text-small flex items-center" v-if="data.standartBonusSum">
            <p class="mr-2">
                Для получения
                <strong class="font-normal text-blue"
                    >стандартного бонуса</strong
                >
                в {{ moment().format('YYYY') }} году вам осталось заказать ещё
                на:
            </p>
            <span class="font-semibodl text-caption text-blue font-semibold">
                {{ formatter.sum(data.standartBonusSum) }} ₽
            </span>
        </div>
    </div>
</template>
<script setup lang="ts">
import MedalIcon from '@/assets/icons/Medal.svg'
import RadioButton from '@/components/Form/RadioButton.vue'
import YearDoughnutChart, { IYearDoughnutData } from './YearDoughnutChart.vue'
import { Formatter } from '@/helpers/Formatter'
import moment from 'moment'
const formatter = new Formatter(false)
import { ref } from 'vue'
export interface IYearBlockData {
    factSum: number
    planSum: number
    electroSum: number
    kppSum: number
    factPercent: number
    electroPercent: number
    kppPercent: number
    dinamicPercent: number
    quartalPercents: [number, number, number, number]
    standartBonusSum?: number
}
const props = defineProps<{ data: IYearBlockData }>()
const activeRadio = ref<'quartal' | 'kpp-electro'>('quartal')
const YearDoughnutData: IYearDoughnutData = {
    quartalPercents: props.data.quartalPercents,
    factPercent: props.data.factPercent,
    dinamicPercent: props.data.dinamicPercent,
    relatedElectroPercent: props.data.electroPercent,
    relatedKppPercent: props.data.kppPercent
}
</script>
<style lang="scss"></style>
