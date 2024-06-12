<template>
  <div class="flex gap-10">
    <div class="h-[12.3125rem] w-[12.3125rem] relative">
      <Doughnut id="pie-plan" :data="chartData" :options="options"></Doughnut>
      <h3
        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-blue"
      >
        97%
      </h3>
    </div>
    <div class="flex flex-col gap-[0.375rem_6rem] flex-wrap h-[13.5rem] w-[48.75rem]">
      <p v-for="(partnerItem, index) of data" class="flex items-center gap-2">
        <div class="h-3 w-3 " :style="`background: ${itemsColors[index % itemsColors.length]};`"></div>
        <span class="text-small text-main leading-4 max-w-[10.625rem] flex-1">
        {{ partnerItem.partnerName }}
        </span>
        <span class="text-main text-caption w-[10rem]">
          {{formatter.percent(partnerItem.factPercent)}} % / <span class="text-blue">{{formatter.sum(partnerItem.factSum)}} ₽</span>
        </span>
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Doughnut } from "vue-chartjs";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { computed } from "vue";
import { Formatter } from "@/composables/Formatter";
const formatter = new Formatter()
ChartJS.register(ArcElement, Tooltip);
export interface IPlanChartItem {
  partnerName: string;
  factPercent: number;
  factSum: number;
}
const itemsColors = [
  "#FC7D00",
  "#21B5C2",
  "#5C6AFF",
  "#5BCD8A",
  "#F9F871",
  "#0093D5",
  "#8B45E6",
  "#ABEA60",
  "#B0A7E8",
  "#087AA7",
  "#FFCD4B",
  "#8CE6EC",
  "#B6BBC4",
  "#E47FC7",
  "#428373",
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
