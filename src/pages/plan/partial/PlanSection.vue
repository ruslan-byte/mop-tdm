<template>
  <section class="g-white-block">
    <div class="flex gap-2 mb-4">
      <h3 class="text-blue-dark">Выполнение плана продаж</h3>
      <h4 class="text-blue">(месяц)</h4>
    </div>
    <div
      class="flex justify-between items-center pb-4 mb-4 border-b border-gray-pale"
    >
      <Tabs :tabs="tabs" v-model="activeTab" type="blue-light"></Tabs>
      <button class="h-5 leading-5 flex items-center" v-if="true">
        <BarDiagramIcon class="stroke-gray inline-block mr-2"></BarDiagramIcon>
        <span class="leading-5 text-caption text-gray"
          >Отображать столбцами
        </span>
      </button>
      <button class="h-5 leading-5 flex items-center" v-else>
        <PieDiagramIcon
          class="stroke-gray fill-gray stroke-[0.4px] inline-block mr-2 leading-5"
        ></PieDiagramIcon>
        <span class="leading-5 text-caption text-gray"
          >Отображать диаграммой
        </span>
      </button>
    </div>
    <div class="flex items-center gap-6 pb-4 border-b border-gray-pale mb-4">
      <p class="text-main">
        План:
        <span class="font-semibold leading-6 text-blue-dark">
          60 000 000,00 ₽
        </span>
      </p>
      <p class="text-main">
        Факт:
        <router-link
          class="mr-2 leading-6 text-blue border-b border-blue hover:text-blue-hover hover:border-blue-hover active:text-blue-pressed active:border-blue-pressed"
          to="order-shipments"
        >
          54 670 878,00 ₽
        </router-link>
        (Электротехника - 60 000 000,00 ₽, КПП - 24 670 878, 00 ₽)
      </p>
    </div>
    <PieDiagramBlock
      :data="chartData"
      :plan-sum="60000000"
      class="mb-6"
    ></PieDiagramBlock>
    <div class="bg-background rounded-10 p-6 mb-6">
      <p class="text-blue-dark mb-4">
        Динамика прироста плана за период с:
        <SmallDatePicker v-model="fromDate"></SmallDatePicker> по
        {{ moment().format("DD.MM.YYYY") }}
      </p>
      <div class="flex gap-10">
        <h3 class="text-blue">+90%</h3>
        <h3 class="text-blue">+4 670 878.00 ₽</h3>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import Tabs from "@/components/Tabs.vue";
import type { ITab } from "@/components/Tabs.vue";
import { ref } from "vue";
import BarDiagramIcon from "@/assets/icons/BarDiagram.svg";
import PieDiagramIcon from "@/assets/icons/PieDiagram.svg";
import PieDiagramBlock from "./PieDiagramBlock.vue";
import type { IPlanChartItem } from "./PieDiagramBlock.vue";
import SmallDatePicker from "@/components/DatePickers/SmallDatePicker.vue";
import moment from "moment";
const fromDate = ref<Date>();
const activeTab = ref("all");
const tabs: ITab[] = [
  {
    value: "all",
    label: "Все товары",
  },
  {
    value: "electro",
    label: "Электротехника",
  },
  {
    value: "kpp",
    label: "КПП",
  },
];
const chartData: IPlanChartItem[] = [
  { partnerName: "АВЕНТА", factPercent: 6, factSum: 3280252.68 },
  {
    partnerName: "ИП Вербовский Иван Борисович",
    factPercent: 5,
    factSum: 2733543.9,
  },
  {
    partnerName: "Энергосберегающие технологии",
    factPercent: 11.5,
    factSum: 670878.0,
  },
  {
    partnerName: "ИП Кондратьев А. С.",
    factPercent: 5.5,
    factSum: 6287150.97,
  },
  {
    partnerName: "ЭНЕРГОСИТИ г. Орел",
    factPercent: 8,
    factSum: 4373670.24,
  },
  {
    partnerName: "МАКСЭЛЕКТРО",
    factPercent: 5,
    factSum: 2733543.9,
  },
  {
    partnerName: "ЭЛЕКТРОСВЕТ Орел",
    factPercent: 8,
    factSum: 4373670.24,
  },
  {
    partnerName: "Дельта-плюс",
    factPercent: 5,
    factSum: 2733543.9,
  },
  {
    partnerName: "ЛЕДБРОКЕР",
    factPercent: 11,
    factSum: 6013796.58,
  },
  {
    partnerName: "Партия Света",
    factPercent: 5,
    factSum: 2733543.9,
  },
  {
    partnerName: "Лайт",
    factPercent: 5,
    factSum: 2733543.9,
  },
  {
    partnerName: "КЕНАЗ ООО",
    factPercent: 6.5,
    factSum: 3553607.07,
  },
  {
    partnerName: "Интердекор (г.Тула)",
    factPercent: 6,
    factSum: 3280252.68,
  },
  {
    partnerName: "ЭлектроСтрой ООО",
    factPercent: 5.5,
    factSum: 3006898.29,
  },
  {
    partnerName: "ИП Чекрыгина О. А.",
    factPercent: 7,
    factSum: 3826961.46,
  },
];
</script>
<style lang="scss"></style>
