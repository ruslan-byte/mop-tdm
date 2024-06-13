<template>
  <div>
    <TotalSumBlock class="mb-4"></TotalSumBlock>
    <div class="flex gap-10">
      <div class="h-[12.3125rem] w-[12.3125rem] relative">
        <Doughnut id="pie-plan" :data="chartData" :options="options"></Doughnut>
        <h3
          class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-blue"
        >
          97%
        </h3>
      </div>
      <DiagramItemList
        :partners="data"
        :items-colors="itemsColors"
      ></DiagramItemList>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Doughnut } from "vue-chartjs";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { computed } from "vue";
import DiagramItemList from "./DiagramItemList.vue";
import TotalSumBlock from "./TotalSumBlock.vue";
ChartJS.register(ArcElement, Tooltip);
export interface IPlanChartItem {
  partnerName: string;
  factPercent: number;
  factSum: number;
}
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
const placeholderColor = "#F2F2F2";
const placeholderValue = computed(() => {
  return (
    ((props.planSum - props.data.reduce((res, item) => res + item.factSum, 0)) /
      props.planSum) *
    100
  );
});
const props = defineProps<{
  data: IPlanChartItem[];
  planSum: number;
}>();
const chartData = {
  labels: [...props.data.map((item) => item.partnerName)],
  datasets: [
    {
      backgroundColor: [
        ...props.data.map(
          (item, index) => itemsColors[index % itemsColors.length]
        ),
        placeholderColor,
      ],
      data: [
        ...props.data.map((item) => item.factPercent),
        placeholderValue.value,
      ],
    },
  ],
};
const options = {
  elements: {
    arc: {
      borderWidth: 0,
    },
  },
};
</script>
<style lang="scss"></style>
