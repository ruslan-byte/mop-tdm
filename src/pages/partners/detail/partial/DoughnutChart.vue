<template>
    <div class="relative">
        <Doughnut :data="chartData" :options="options"></Doughnut>
        <p
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center flex flex-col gap-1 items-center"
        >
            <span class="text-blue text-small leading-4"
                >{{ data.totalPercent }}%</span
            >
            <span
                class="bg-green text-small text-white px-0.5 leading-4 h-4 rounded-sm"
                v-if="data.dynamicPercent && data.dynamicPercent > 0"
            >
                +{{ data.dynamicPercent }}%
            </span>
        </p>
    </div>
</template>
<script setup lang="ts">
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement } from 'chart.js'
import { computed } from 'vue'
ChartJS.register(ArcElement)
export interface IDoughnutData {
    totalPercent: number
    reletedPercentKpp: number
    reletedPercentElectro: number
    dynamicPercent?: number
}
const props = defineProps<{ data: IDoughnutData }>()
const placeholderPercent = computed(() =>
    props.data.totalPercent > 100 ? 0 : 100 - props.data.totalPercent
)
const electroPercent = computed(
    (): number =>
        (props.data.totalPercent / 100) * props.data.reletedPercentElectro
)
const kppPercent = computed(
    (): number => (props.data.totalPercent / 100) * props.data.reletedPercentKpp
)
const chartData = {
    datasets: [
        {
            backgroundColor: ['#FC7D00', '#21B5C2', '#E0E0E0'],
            data: [
                electroPercent.value,
                kppPercent.value,
                placeholderPercent.value
            ],
            borderRadius:
                placeholderPercent.value == 0
                    ? [0, 0, 0]
                    : [
                          { outerStart: 50, innerStart: 50 },
                          { outerEnd: 50, innerEnd: 50 },
                          0
                      ]
        }
    ]
}
const options = {
    responsive: true,
    cutout: '84%',

    elements: {
        arc: {
            borderWidth: 0
        }
    }
}
</script>
<style lang="scss"></style>
