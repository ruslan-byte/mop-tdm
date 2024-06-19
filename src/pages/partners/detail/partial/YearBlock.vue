<template>
    <div class="bg-background p-4">
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
                            28 000 000 ₽ из
                        </span>
                        <span
                            class="leading-4 text-small text-blue font-semibold"
                        >
                            30 000 000 ₽
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
                                    >18 200 000 ₽</span
                                >
                                <span class="text-gray">(65%)</span>
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
                                    >9 800 000 ₽</span
                                >
                                <span class="text-gray">(35%)</span>
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
                    <div class="text-small text-main whitespace-nowrap">
                        1 квартал
                        <span
                            class="font-bold"
                            :class="{
                                'text-orange font-bold': 35 !== 0,
                                'text-gray font-normal': 35 == 0
                            }"
                            >35%</span
                        >
                    </div>
                    <div class="text-small text-main whitespace-nowrap">
                        2 квартал
                        <span
                            class="font-bold"
                            :class="{
                                'text-orange font-bold': 33 !== 0,
                                'text-gray font-normal': 33 == 0
                            }"
                            >33%</span
                        >
                    </div>
                    <div class="text-small text-main whitespace-nowrap">
                        3 квартал
                        <span
                            class="font-bold"
                            :class="{
                                'text-orange font-bold': 25.33 !== 0,
                                'text-gray font-normal': 25.33 == 0
                            }"
                            >25,33%</span
                        >
                    </div>
                    <div class="text-small text-main whitespace-nowrap">
                        4 квартал
                        <span
                            :class="{
                                'text-orange font-bold': 0 !== 0,
                                'text-gray font-normal': 0 == 0
                            }"
                            >0%</span
                        >
                    </div>
                </div>
            </div>
        </div>
        <div class="flex items-center mb-4 border-b border-gray-pale pb-4">
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
        <div class="text-small flex items-center">
            <p class="mr-2">
                Для получения
                <strong class="font-normal text-blue"
                    >стандартного бонуса</strong
                >
                в 2023 году вам осталось заказать ещё на:
            </p>
            <span class="font-semibodl text-caption text-blue font-semibold">
                450 000 ₽
            </span>
        </div>
    </div>
</template>
<script setup lang="ts">
import MedalIcon from '@/assets/icons/Medal.svg'
import RadioButton from '@/components/Form/RadioButton.vue'
import YearDoughnutChart, { IYearDoughnutData } from './YearDoughnutChart.vue'
import { ref } from 'vue'
const activeRadio = ref<'quartal' | 'kpp-electro'>('quartal')
const YearDoughnutData: IYearDoughnutData = {
    quartalPercents: [35, 33, 25.33, 0],
    factPercent: 93.33,
    dinamicPercent: 12,
    relatedElectroPercent: 65,
    relatedKppPercent: 35
}
</script>
<style lang="scss"></style>
