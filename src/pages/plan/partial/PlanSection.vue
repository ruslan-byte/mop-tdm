<template>
    <section class="g-white-block">
        <div class="flex gap-2 mb-4">
            <h3 class="text-blue-dark">Выполнение плана продаж</h3>
            <h4 class="text-blue">({{ planSectionTabLabel }})</h4>
        </div>
        <div
            class="flex justify-between items-center pb-4 mb-4 border-b border-gray-pale"
        >
            <Tabs :tabs="tabs" v-model="activeTab" type="blue-light"></Tabs>
            <button
                class="h-5 leading-5 flex items-center"
                v-if="isShowPieDiagram"
                @click="isShowPieDiagram = false"
            >
                <BarDiagramIcon
                    class="stroke-gray inline-block mr-2"
                ></BarDiagramIcon>
                <span class="leading-5 text-caption text-gray"
                    >Отображать столбцами
                </span>
            </button>
            <button
                class="h-5 leading-5 flex items-center"
                v-else
                @click="isShowPieDiagram = true"
            >
                <PieDiagramIcon
                    class="stroke-gray fill-gray stroke-[0.4px] inline-block mr-2 leading-5"
                ></PieDiagramIcon>
                <span class="leading-5 text-caption text-gray"
                    >Отображать диаграммой
                </span>
            </button>
        </div>

        <PieDiagramBlock
            v-if="isShowPieDiagram"
            :data="chartData"
            :plan-sum="60000000"
            class="mb-6"
        ></PieDiagramBlock>

        <BarDiagramBlock
            v-else
            :data="chartData"
            :plan-sum="60000000"
            class="mb-6"
        >
        </BarDiagramBlock>

        <div class="bg-background rounded-10 p-6 mb-6">
            <p class="text-blue-dark mb-4">
                Динамика прироста плана за период с:
                <SmallDatePicker v-model="fromDate"></SmallDatePicker> по
                {{ moment().format('DD.MM.YYYY') }}
            </p>
            <div class="flex gap-10">
                <h3 class="text-blue">+90%</h3>
                <h3 class="text-blue">+4 670 878.00 ₽</h3>
            </div>
        </div>
        <div class="flex justify-between items-center mb-2">
            <p class="leading-6 h-6">
                Детализация динамики прироста плана по партнерам
            </p>
            <div class="flex items-center gap-4">
                <p class="text-caption leading-5">
                    Показывать сначала партнеров
                </p>
                <Select
                    v-model="activeOption"
                    class="min-w-[18rem]"
                    :options="selectOptions"
                ></Select>
            </div>
        </div>
        <div
            class="text-main text-small flex gap-1 items-center pb-4 mb-4 border-b border-gray-pale"
        >
            <b class="font-semibold inline-block leading-4.5 mr-1">Показаны:</b>
            <strong class="text-green-21 leading-4 font-normal"
                >% выполнения плана партнера</strong
            >
            /
            <span class="text-gray leading-4">% от вашего плана </span> /
            <strong class="text-green-21 leading-4 font-normal"
                >Сумма отгрузок за период</strong
            >
        </div>
        <div class="columns-3">
            <div
                class="flex text-small mb-2 w-87.5"
                v-for="partner of partnersList"
            >
                <div class="w-37.5 text-main">{{ partner.name }}</div>
                <div class="text-main">
                    <strong
                        class="font-normal"
                        :class="{
                            'text-green-21': partner.personalPercent != '0%',
                            'text-gray': partner.personalPercent == '0%'
                        }"
                        >{{ partner.personalPercent }}</strong
                    >
                    / <span class="text-gray">{{ partner.percent }}</span> /
                    <strong
                        class="font-normal"
                        :class="{
                            'text-green-21': partner.sum != '0',
                            'text-gray': partner.sum == '0'
                        }"
                        >{{ partner.sum }} ₽</strong
                    >
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import Tabs from '@/components/Tabs.vue'
import type { ITab } from '@/components/Tabs.vue'
import { ref, computed } from 'vue'
import { BarDiagramIcon, PieDiagramIcon } from '@/shared/Icons'
import PieDiagramBlock from './PieDiagramBlock.vue'
import { IPlanChartItem } from '@/types/chart'
import SmallDatePicker from '@/components/DatePickers/SmallDatePicker.vue'
import moment from 'moment'
import Select from '@/components/Dropdowns/Select.vue'
import type { IOption } from '@/components/Dropdowns/Select.vue'
import BarDiagramBlock from './BarDiagramBlock.vue'
export type TPlanSection = 'month' | 'quartal' | 'year'
const props = defineProps<{ type: TPlanSection }>()
const fromDate = ref<Date>()
const activeTab = ref('all')
const tabs: ITab[] = [
    {
        value: 'all',
        label: 'Все товары'
    },
    {
        value: 'electro',
        label: 'Электротехника'
    },
    {
        value: 'kpp',
        label: 'КПП'
    }
]
const chartData: IPlanChartItem[] = [
    {
        partnerName: 'АВЕНТА',
        factPercent: 6,
        factSum: 3280252.68
    },

    {
        partnerName: 'ИП Вербовский Иван Борисович',
        factPercent: 5,
        factSum: 2733543.9,
        deltaPercent: 5
    },
    {
        partnerName: 'Энергосберегающие технологии',
        factPercent: 11.5,
        factSum: 670878.0,
        deltaPercent: 1
    },
    {
        partnerName: 'ИП Кондратьев А. С.',
        factPercent: 5.5,
        factSum: 6287150.97,
        deltaPercent: 5
    },
    {
        partnerName: 'ЭНЕРГОСИТИ г. Орел',
        factPercent: 8,
        factSum: 4373670.24,
        deltaPercent: 20
    },
    {
        partnerName: 'МАКСЭЛЕКТРО',
        factPercent: 5,
        factSum: 2733543.9,
        deltaPercent: 5
    },
    {
        partnerName: 'ЭЛЕКТРОСВЕТ Орел',
        factPercent: 8,
        factSum: 4373670.24,
        deltaPercent: 5
    },
    {
        partnerName: 'Дельта-плюс',
        factPercent: 5,
        factSum: 2733543.9,
        deltaPercent: 5
    },
    {
        partnerName: 'ЛЕДБРОКЕР',
        factPercent: 11,
        factSum: 6013796.58,
        deltaPercent: 5
    },
    {
        partnerName: 'Партия Света',
        factPercent: 5,
        factSum: 2733543.9,
        deltaPercent: 5
    },
    {
        partnerName: 'Лайт',
        factPercent: 5,
        factSum: 2733543.9,
        deltaPercent: 5
    },
    {
        partnerName: 'КЕНАЗ ООО',
        factPercent: 6.5,
        factSum: 3553607.07,
        deltaPercent: 5
    },
    {
        partnerName: 'Интердекор (г.Тула)',
        factPercent: 6,
        factSum: 3280252.68,
        deltaPercent: 5
    },
    {
        partnerName: 'ЭлектроСтрой ООО',
        factPercent: 5.5,
        factSum: 3006898.29,
        deltaPercent: 5
    },
    {
        partnerName: 'ИП Чекрыгина О. А.',
        factPercent: 7,
        factSum: 3826961.46,
        deltaPercent: 5
    }
]

const activeOption = ref('shipment')
const selectOptions = computed((): IOption[] => {
    if (props.type == 'month')
        return [
            {
                label: 'С большей суммой отгрузок',
                value: 'shipment'
            }
        ]
    else
        return [
            {
                label: 'С большим % от вашего плана',
                value: 'plan'
            },
            {
                label: 'С большей суммой отгрузок',
                value: 'shipment'
            }
        ]
})

const partnersList = [
    {
        name: 'ИП Чекрыгина О. А.',
        personalPercent: '+10%',
        percent: '+10%',
        sum: '+5 467 087,80'
    },
    {
        name: 'ЛЕДБРОКЕР',
        personalPercent: '+17%',
        percent: '+8,1%',
        sum: '+4 428 341,12'
    },
    {
        name: 'ЭЛЕКТРОСВЕТ Орел',
        personalPercent: '+8%',
        percent: '+7%',
        sum: '+3 826 961,46'
    },
    {
        name: 'Лайт',
        personalPercent: '+10%',
        percent: '+6%',
        sum: '+3 280 252,68'
    },
    {
        name: 'Партия Света',
        personalPercent: '+17%',
        percent: '+5%',
        sum: '+2 733 543,90'
    },
    {
        name: 'Дельта-плюс',
        personalPercent: '+17%',
        percent: '+3,2%',
        sum: '+1 749 468,10'
    },
    {
        name: 'ИП Вербовский Иван Борисович',
        personalPercent: '+10%',
        percent: '+3%',
        sum: '+1 640 126,34'
    },
    {
        name: 'ЭлектроСтрой',
        personalPercent: '+17%',
        percent: '+3%',
        sum: '+1 640 126,34'
    },
    {
        name: 'Энергосберегающие технологии',
        personalPercent: '+8%',
        percent: '+2,4%',
        sum: '+1 312 101,07'
    },
    {
        name: 'МАКСЭЛЕКТРО',
        personalPercent: '+10%',
        percent: '+1,8%',
        sum: '+984 075,80'
    },
    {
        name: 'Интердекор (г.Тула)',
        personalPercent: '+17%',
        percent: '+1,5%',
        sum: '+820 063,17'
    },
    {
        name: 'АВЕНТА',
        personalPercent: '+10%',
        percent: '+1%',
        sum: '+546 708,78'
    },
    {
        name: 'ЭНЕРГОСИТИ г. Орел',
        personalPercent: '+17%',
        percent: '+0,6%',
        sum: '+328 025,27'
    },
    {
        name: 'ИП Кондратьев А. С.',
        personalPercent: '0%',
        percent: '0%',
        sum: '0'
    },
    {
        name: 'КЕНАЗ ООО',
        personalPercent: '0%',
        percent: '0%',
        sum: '0'
    }
]
const planSectionTabLabel = computed((): string => {
    const labels = {
        month: 'месяц',
        quartal: 'квартал',
        year: 'год'
    }
    return labels[props.type]
})
const isShowPieDiagram = ref(false)
</script>
<style lang="scss"></style>
