<template>
    <div class="plan-date-picker w-fit relative">
        <button class="flex gap-1 items-center group">
            <p
                class="w-fit text-small leading-4 text-blue group-hover:text-blue-hover group-active:text-blue-pressed"
            >
                дата
            </p>
            <ArrowIcon
                class="stroke-blue origin-center rotate-180 group-hover:stroke-blue-hover group-active:stroke-blue-pressed"
            ></ArrowIcon>
        </button>
        <div
            class="absolute right-0 top-full bg-white shadow-md rounded z-10 flex"
        >
            <div class="p-6">
                <div class="h-[29.875rem] overflow-auto g-scrollbar pr-6">
                    <VueDatePicker
                        ref="datePicker"
                        v-model="date"
                        inline
                        :month-change-on-scroll="false"
                        :enable-time-picker="false"
                        auto-apply
                        range
                        locale="ru"
                        fixed-end
                        :multi-calendars="12"
                    >
                        <template #month-year="{ month, year }">
                            <p
                                class="mx-auto text-blue-dark font-semibold text-caption leading-4 font-sans"
                            >
                                {{ monthNames[month] }}
                                {{ year }}
                            </p>
                        </template>
                        <template #calendar-header="{ day }">
                            <div
                                class="text-blue text-small font-normal h-4 w-4"
                            >
                                {{ day }}
                            </div>
                        </template>
                        <template #day="{ day }">
                            <span class="plan-date-picker__day">
                                {{ day }}
                            </span>
                        </template>
                    </VueDatePicker>
                </div>
            </div>
            <div class="bg-blue-pale p-4"></div>
        </div>
    </div>
</template>
<script setup lang="ts">
import ArrowIcon from '@/assets/icons/Arrow.svg'
import VueDatePicker from '@vuepic/vue-datepicker'
import { onMounted, ref } from 'vue'
const datePicker = ref<InstanceType<typeof VueDatePicker>>()
const date = ref([new Date(), new Date()])
const monthNames = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь'
]
onMounted(() => {
    setTimeout(() => {
        if (datePicker.value)
            datePicker.value.setMonthYear({
                month: 0,
                year: 2024
            })
    }, 300)
})
</script>
<style lang="scss">
.plan-date-picker {
    --dp-menu-min-width: 12.5rem;
    --dp-multi-calendars-spacing: 0;
    &__day {
        @apply text-small h-4;
    }
    .dp__menu {
        @apply border-none;
    }
    .dp__menu_inner.dp__flex_display {
        @apply flex-col;
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
        @apply h-4 w-full px-0 border-none;
    }
    .plan-date-picker__day {
        @apply h-4 w-4;
    }
    .dp__cell_offset {
        @apply opacity-0 pointer-events-none;
    }

    .dp__calendar_item {
        @apply w-4;
    }
    .dp__calendar_item:hover
        .dp__cell_inner:not(
            .dp__range_start,
            .dp__range_end,
            .dp__range_between
        )
        .plan-date-picker__day {
        @apply bg-blue-pale;
    }
    .dp__calendar_row {
        @apply my-1.5;
    }
    .dp__today {
        @apply bg-transparent border-none;
        .plan-date-picker__day {
            @apply bg-blue-pale text-blue;
        }
    }
    .dp__range_start {
        background: none;
        @apply border-none rounded-none  bg-[linear-gradient(to_right,_#ffffff00_50%,_#5C6AFF_50%)];
        .plan-date-picker__day {
            @apply bg-blue text-white;
        }
    }
    .dp__range_end {
        background: none;
        @apply border-none rounded-none  bg-[linear-gradient(to_left,_#ffffff00_50%,_#5C6AFF_50%)];
        .plan-date-picker__day {
            @apply bg-blue text-white;
        }
    }
    .dp__range_start.dp__range_end {
        @apply bg-none;
    }
    .dp__range_between {
        @apply bg-blue;
        .plan-date-picker__day {
            @apply text-white;
        }
    }
    .dp__menu_inner {
        @apply p-0;
    }
}
</style>
