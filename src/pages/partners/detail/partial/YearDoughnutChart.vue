<template>
    <div>
        <Doughnut :data="chartData" :options="options"></Doughnut>
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
    dinamicPercent: number
    relatedElectroPercent: number
    relatedKppPercent: number
}

const props = defineProps<{ data: IYearDoughnutData; isQuartal: boolean }>()
const placeholderPercent = computed(() => 100 - props.data.factPercent)

const borderRadius = computed(() => {
    if (placeholderPercent.value == 0) return 0
    console.log(`moment().quarter()`, moment().quarter())
})

const chartData = ref({
    datasets: [
        {
            backgroundColor: [
                ...props.data.quartalPercents.map((quartal, index) =>
                    moment().quarter() == index + 1 ? '#FC7D00' : '#5C6AFF'
                ),
                '#E0E0E0'
            ],

            data: [...props.data.quartalPercents, placeholderPercent.value],
            borderRadius: borderRadius.value
        }
    ]
})
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
