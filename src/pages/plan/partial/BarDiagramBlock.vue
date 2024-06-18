<template>
  <div>
    <div class="relative">
      <Bar
        :data="barData"
        :options="options"
        class="h-[274px]"
        :plugins="[barTopLabelPlagin]"
      ></Bar>
      <DiagramBarLabels :labels="tooltipLabels"></DiagramBarLabels>
      <DiagramTooltip
        :is-show="isTooltipShow"
        :data="activeTooltipData"
        ref="tooltip"
        class="-translate-x-1/2 -translate-y-[calc(100%+16px)] transition-all"
      ></DiagramTooltip>
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
import DiagramTooltip from "./DiagramTooltip.vue";
import DiagramBarLabels, { ILabel } from "./DiagramBarLabels.vue";
import type { ITooltipData } from "./DiagramTooltip.vue";
import { ref } from "vue";
import { Bar } from "vue-chartjs";
import { IPlanChartItem } from "@/types/chart";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import type { TooltipModel, ChartType } from "chart.js";
ChartJS.register({
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
});

const props = defineProps<{ data: IPlanChartItem[] }>();

const itemsColors = [
  "#21B5C2",
  "#5C6AFF",
  "#FA6E6E",
  "#0093D5",
  "#8B45E6",
  "#E47FC7",
  "#428373",
  "#FC7D00",
  "#ABEA60",
];

interface IBarData {
  labels: string[];
  datasets: {
    backgroundColor: string[];
    data: number[];
    tooltipData: ITooltipData[];
  }[];
}
const barData: IBarData = {
  labels: props.data.map((partner) => partner.partnerName),

  datasets: [
    {
      backgroundColor: [
        ...props.data.map(
          (item, index) => itemsColors[index % itemsColors.length]
        ),
      ],
      data: props.data.map((partner) => partner.factPercent),
      tooltipData: props.data.map((partner) => ({
        label: partner.partnerName,
        factPercent: partner.factPercent,
        totalAmound: partner.factSum,
      })),
    },
  ],
};

const barsDeltaPercendDisplay = {
  borderWidth: props.data.map((item) => ({ top: item.deltaPercent })),
  borderColor: "#5BCD8A",
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
  plugins: {
    tooltip: {
      xAlign: "center",
      enabled: false,
      external: tooltipExternal,
    },
  },
  elements: {
    bar: barsDeltaPercendDisplay,
  },
};

const tooltip = ref<InstanceType<typeof DiagramTooltip>>();

const activeTooltipData = ref<ITooltipData>();

function tooltipExternal(e) {
  setActiveTooltipData(e.tooltip);
  isTooltipShow.value = e.tooltip.opacity == 1;
  setTooltipPosition(e.tooltip.caretX, e.tooltip.caretY);
}

function setTooltipPosition(x: number, y: number) {
  if (tooltip.value?.target) {
    tooltip.value.target.style.left = x + "px";
    tooltip.value.target.style.top = y - 24 + "px";
  }
}
function setActiveTooltipData(tooltip: TooltipModel<ChartType>) {
  const dataIndex = tooltip.dataPoints[0].dataIndex;
  activeTooltipData.value =
    tooltip.dataPoints[0].dataset.tooltipData[dataIndex];
}
const isTooltipShow = ref(false);

const tooltipLabels = ref<ILabel[]>();

const barTopLabelPlagin = {
  id: "barTopLabelPlagin",
  afterDatasetDraw(chart) {
    const {
      scales: { x },
    } = chart;

    tooltipLabels.value = props.data.map(
      (item, id): ILabel => ({
        id: "id-" + id,
        label: `+${item.deltaPercent ?? 0}%`,
        x: x.getPixelForValue(id),
        y: chart.getDatasetMeta(0).data[id].y,
      })
    );
  },
};
</script>
<style lang="scss"></style>
