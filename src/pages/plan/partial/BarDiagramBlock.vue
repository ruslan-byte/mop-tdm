<template>
  <div>
    <div>
      <Bar :data="barData" :options="options" class="h-[274px]"></Bar>
    </div>
    <div class="w-full h-px border-b border-gray-pale -translate-y-6"></div>
    <TotalSumBlock class="mb-4"></TotalSumBlock>
    <DiagramItemList
      :partners="data"
      :items-colors="itemsColors"
    ></DiagramItemList>
  </div>
</template>
<script setup lang="ts">
import DiagramItemList from "./DiagramItemList.vue";
import TotalSumBlock from "./TotalSumBlock.vue";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
ChartJS.register({
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
});

export interface IPlanChartItem {
  partnerName: string;
  factPercent: number;
  factSum: number;
}
const props = defineProps<{ data: IPlanChartItem[] }>();

const itemsColors = [
  "#21B5C2",
  "#5C6AFF",
  "#5BCD8A",
  "#FA6E6E",
  "#0093D5",
  "#8B45E6",
  "#E47FC7",
  "#428373",
  "#FC7D00",
  "#ABEA60",
];

const barData = {
  labels: props.data.map((partner) => partner.partnerName),

  datasets: [
    {
      backgroundColor: [
        ...props.data.map(
          (item, index) => itemsColors[index % itemsColors.length]
        ),
      ],
      data: props.data.map((partner) => partner.factPercent),
    },
  ],
};

const options = {
  maintainAspectRatio: false,

  scales: {
    x: {
      grid: {
        drawTicks: false,
        color: (context: { index?: string }) => {
          if (context.index) return "transparent";
          return "#E0E0E0";
        },
      },
      border: {
        display: true,
      },
      ticks: {
        display: false,
      },
    },
    y: {
      ticks: {
        padding: 35,
        crossAlign: "far",
        callback: (field: string) => field + " %",
      },
      grid: {
        drawTicks: false,
      },
    },
  },
};
</script>
<style lang="scss"></style>
