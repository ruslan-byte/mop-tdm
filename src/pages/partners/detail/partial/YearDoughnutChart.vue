<template>
    <div class="relative">
        <Doughnut
            ref="doughnut"
            :data="chartData"
            :options="options"
        ></Doughnut>
        <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
        >
            <div class="mb-1 text-blue font-semibold text-small">
                {{ data.factPercent }}%
            </div>
            <div
                class="bg-green text-white rounded-sm w-fit px-0.5 leading-4 text-small"
                v-if="data.dinamicPercent"
            >
                +{{ data.dinamicPercent }}%
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement } from 'chart.js'
import { computed } from 'vue'
import { ref } from 'vue'
import moment from 'moment'
ChartJS.register(ArcElement)
export interface IYearDoughnutData {
    quartalPercents: [number, number, number, number]
    factPercent: number
    dinamicPercent?: number
    relatedElectroPercent: number
    relatedKppPercent: number
}

const doughnut = ref<InstanceType<typeof Doughnut>>()
const props = defineProps<{ data: IYearDoughnutData; isQuartal: boolean }>()
const placeholderPercent = computed(() => 100 - props.data.factPercent)

const borderRadius = computed(() => {
    if (placeholderPercent.value == 0) return 0
    if (props.isQuartal) {
        return [
            ...props.data.quartalPercents.map(
                (quartal: number, index: number, arr: number[]) => {
                    if (index == 0) return { outerStart: 50, innerStart: 50 }
                    if (arr[index + 1] === 0)
                        return { outerEnd: 50, innerEnd: 50 }
                    return 0
                }
            ),
            0
        ]
    }
    return [
        { outerStart: 50, innerStart: 50 },
        { outerEnd: 50, innerEnd: 50 },
        0
    ]
})
const dataForChart = computed(() => {
    if (props.isQuartal)
        return [...props.data.quartalPercents, placeholderPercent.value]
    else
        return [
            electroPercent.value,
            kppPercent.value,
            placeholderPercent.value
        ]
})
const backgroundColorChart = computed(() => {
    if (props.isQuartal)
        return [
            ...props.data.quartalPercents.map((quartal, index) =>
                moment().quarter() == index + 1 ? '#FC7D00' : '#5C6AFF'
            ),
            '#E0E0E0'
        ]
    else return ['#FC7D00', '#21B5C2', '#E0E0E0']
})
const chartData = computed(() => ({
    datasets: [
        {
            backgroundColor: backgroundColorChart.value,

            data: dataForChart.value,
            borderRadius: borderRadius.value
        }
    ]
}))
const options = {
    responsive: true,
    cutout: '84%',

    elements: {
        arc: {
            borderWidth: 0
        }
    }
}
const kppPercent = computed(
    () => (props.data.factPercent / 100) * props.data.relatedKppPercent
)
const electroPercent = computed(
    () => (props.data.factPercent / 100) * props.data.relatedElectroPercent
)
</script>
<style lang="scss"></style>
