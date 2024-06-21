<template>
    <div class="relative">
        <Doughnut :data="chartData" :options></Doughnut>
        <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
        >
            <div class="mb-0.5 text-blue text-small leading-[0.6875rem]">
                {{ data.totalPercent }}%
            </div>
            <div
                class="bg-green text-white rounded-sm w-fit px-0.5 leading-4 text-small"
                v-if="data.dynamicPercent"
            >
                +{{ data.dynamicPercent }}%
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement } from 'chart.js'
import { computed } from 'vue'
ChartJS.register(ArcElement)
export interface ISuperDougnutData {
    totalPercent: number
    dynamicPercent?: number
}
const props = defineProps<{ data: ISuperDougnutData }>()
const placeholder = computed(() =>
    props.data.totalPercent >= 100 ? 0 : 100 - props.data.totalPercent
)
const chartData = {
    datasets: [
        {
            backgroundColor: ['#21B5C2', '#E0E0E0'],
            data: [props.data.totalPercent, placeholder.value],
            borderRadius:
                placeholder.value == 0
                    ? 0
                    : [
                          {
                              outerStart: 50,
                              innerStart: 50,
                              outerEnd: 50,
                              innerEnd: 50
                          },
                          0
                      ]
        }
    ]
}
const options = {
    responsive: true,
    cutout: '82%',

    elements: {
        arc: {
            borderWidth: 0
        }
    }
}
</script>
<style lang="scss"></style>
