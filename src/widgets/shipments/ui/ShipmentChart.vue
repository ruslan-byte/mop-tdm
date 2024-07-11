<template>
    <div>
        <Line :data="chartData" :options="options"></Line>
    </div>
</template>
<script setup lang="ts">
import { Line } from 'vue-chartjs'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement)
const chartData = {
    labels: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40],
    datasets: [
        {
            data: [100, 0, 100, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40],
            borderColor: ['#5C6AFF'],
            tension: 0.1
        }
    ]
}
const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '84%',

    elements: {
        point: {
            backgroundColor: '#5C6AFF',
            borderWidth: 3
        }
    }
}
</script>
<style lang="scss"></style>
