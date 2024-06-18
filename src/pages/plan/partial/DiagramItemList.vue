<template>
  <div class="columns-2 w-[61.5625rem]">
    <router-link
      to="/partners"
      v-for="(partnerItem, index) of partners"
      class="flex items-center gap-2 w-[28.8125rem] h-5 mb-2 hover:p-1 hover:bg-purple cursor-pointer"
    >
      <p
        class="h-3 w-3"
        :style="`background: ${itemsColors[index % itemsColors.length]};`"
      ></p>
      <label
        class="text-caption leading-4 max-w-[16.25rem] flex-1 cursor-pointer"
      >
        {{ partnerItem.partnerName }}
      </label>
      <span class="text-blue text-caption w-[10rem]">
        {{ formatter.percent(partnerItem.factPercent) }}% /
        <span class="leading-5 text-blue border-b border-blue"
          >{{ formatter.sum(partnerItem.factSum) }} ₽</span
        >
      </span>
    </router-link>
  </div>
</template>
<script setup lang="ts">
import type { IPlanChartItem } from "./PieDiagramBlock.vue";
import { Formatter } from "@/composables/Formatter";
const formatter = new Formatter();
const props = defineProps<{
  partners: IPlanChartItem[];
  itemsColors: string[];
}>();
</script>
<style lang="scss"></style>
