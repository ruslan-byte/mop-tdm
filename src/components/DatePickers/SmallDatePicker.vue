<template>
  <div class="relative small-date-picker">
    <button class="flex items-center gap-1 group">
      <span class="text-blue group-hover:text-blue-hover"> дата </span>
      <ArrowIcon
        class="stroke-blue group-hover:stroke-blue-hover rotate-180 w-[0.706875rem]"
      ></ArrowIcon>
    </button>
    <div
      class="min-h-[15.125rem] absolute bg-white top-[calc(100%+0.5rem)] left-0 flex"
    >
      <div class="w-[17.5rem] p-6 pb-[2.375rem]">
        <VueDatePicker
          :model-value="date"
          @update:model-value="
            (newVal) => {
              console.log(`newVal`, newVal);
            }
          "
          inline
          :enable-time-picker="false"
          auto-apply
          range
          locale="ru"
          fixed-end
        >
          <template #month-year="{ month, year }">
            <span
              class="font-semibold text-caption block mx-auto text-blue-dark leading-4 ml-[89px]"
            >
              {{ monthNames[month] }}
              {{ year }}
            </span>
          </template>
          <template #calendar-header="{ day }">
            <div class="text-blue text-small font-normal h-4 w-4 text-left">
              {{ day }}
            </div>
          </template>
          <template #day="{ day }">
            <div class="text-small h-4 small-date-picker__day">
              {{ day }}
            </div>
          </template>
        </VueDatePicker>
      </div>
      <div class="w-[12.625rem] bg-blue-pale p-4 pb-[1.125rem]">
        <p class="text-small font-semibold mb-2">Показывать за период</p>
        <div class="mb-8">
          <button
            class="py-1.5 px-2 text-small text-blue bg-blue-light rounded mb-2"
          >
            За прошлую неделю
          </button>
          <button
            class="py-1.5 px-2 text-small text-blue bg-blue-light rounded mb-2"
          >
            За неделю
          </button>
          <button
            class="py-1.5 px-2 text-small text-blue bg-blue-light rounded"
          >
            С начала текущей недели
          </button>
        </div>
        <button class="g-button mb-2">Применить</button>
        <button class="g-button-reset mx-auto block">
          Сбросить
          <CrossIcon class="inline-block"></CrossIcon>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import ArrowIcon from "@/assets/icons/Arrow.svg";
import CrossIcon from "@/assets/icons/Cross.svg";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { ref } from "vue";
const date = ref<Date[]>([new Date(), new Date()]);
const monthNames = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];
</script>
<style lang="scss">
.small-date-picker {
  --dp-menu-min-width: 12.5rem;
  .dp__menu {
    @apply border-none;
  }
  .dp__outer_menu_wrap {
    @apply w-full;
  }
  .dp__calendar_header_item {
    @apply h-4 p-0 flex justify-center;
  }
  .dp__calendar_header_separator {
    @apply hidden;
  }
  .dp__cell_inner {
    @apply h-4 w-full px-0;
  }
  .small-date-picker__day {
    @apply h-4 w-4 text-left;
  }
  .dp__cell_offset {
    .small-date-picker__day {
      @apply text-gray-2;
    }
  }
  .dp__calendar_item {
    @apply w-4;
  }
  .dp__calendar_item:hover .small-date-picker__day {
    @apply bg-blue-pale;
  }
  .dp__calendar_row {
    @apply my-1.5;
  }
  .dp__today {
    @apply bg-transparent border-none;
    .small-date-picker__day {
      @apply bg-blue-pale text-blue;
    }
  }
  .dp__range_start {
    background: none;
    @apply border-none rounded-none  bg-[linear-gradient(to_right,_#ffffff00_50%,_#F2F4FF_50%)];
    .small-date-picker__day {
      @apply bg-blue-pale;
    }
  }
  .dp__range_end {
    background: none;
    @apply border-none rounded-none  bg-[linear-gradient(to_left,_#ffffff00_50%,_#F2F4FF_50%)];
    .small-date-picker__day {
      @apply bg-blue-pale;
    }
  }
  .dp__range_start.dp__range_end {
    @apply bg-none;
  }
  .dp__range_between {
    @apply bg-blue-pale;
  }
  .dp__menu_inner {
    @apply p-0;
  }
}
</style>
