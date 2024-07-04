<template>
    <div
        class="larege-date-picker-body absolute right-0 top-full bg-white shadow-md rounded z-10 flex translate-y-[0.4375rem]"
    >
        <div class="p-6 pl-3 pr-5 pt-[1.375rem]">
            <div
                class="h-[29.875rem] overflow-auto g-scrollbar pr-3 pt-[0.1875rem]"
            >
                <VueDatePicker
                    :class="{ blur: isLoading }"
                    ref="datePicker"
                    v-model="localDate"
                    inline
                    :month-change-on-scroll="false"
                    :enable-time-picker="false"
                    auto-apply
                    range
                    locale="ru"
                    fixed-end
                    :multi-calendars="countMonthBeforeBeginningYear"
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
                        <div class="text-blue text-small font-normal h-4 w-4">
                            {{ day }}
                        </div>
                    </template>
                    <template #day="{ day }">
                        <span class="larege-date-picker-body__day">
                            {{ day }}
                        </span>
                    </template>
                </VueDatePicker>
            </div>
        </div>
        <div
            class="bg-blue-pale p-4 w-[12.625rem] flex flex-col items-center gap-6 rounded-r"
        >
            <div>
                <p class="text-small text-main font-semibold mb-2">
                    Показывать за период
                </p>
                <ul>
                    <slot></slot>
                </ul>
            </div>
            <div>
                <button
                    @click="onApply"
                    class="g-button g-button--orange h-[1.875rem] px-[3.1875rem] text-small mb-2"
                >
                    Применить
                </button>
                <button
                    class="g-inline-button g-inline-button--gray-black text-gray text-caption mx-auto block"
                    @click="onCancel"
                >
                    Сбросить
                    <CrossIcon class="inline-block"></CrossIcon>
                </button>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useDate } from '../date'
import { computed, onMounted, ref } from 'vue'
import { monthNames } from '@/shared/consts'
import { VueDatePicker } from '../vueDatePicker'
import { CrossIcon } from '@/shared/Icons'
const localDate = defineModel()
const countMonthBeforeBeginningYear = computed(
    () => useDate().diff(useDate().startOf('year'), 'M') + 1
)
const emit = defineEmits(['on-apply', 'on-cancel'])
function onApply() {
    emit('on-apply')
}
function onCancel() {
    emit('on-cancel')
}
const isLoading = ref(false)
const datePicker = ref<InstanceType<typeof VueDatePicker>>()
function setPositionDatepickerOnStartYear() {
    isLoading.value = true
    setTimeout(() => {
        if (datePicker.value) {
            datePicker.value.setMonthYear({
                month: 0,
                year: useDate().get('year')
            })
        }
        setTimeout(() => {
            isLoading.value = false
        }, 100)
    }, 200)
}
onMounted(setPositionDatepickerOnStartYear)
defineExpose({ setPositionDatepickerOnStartYear })
</script>
<style lang="scss">
.larege-date-picker-body {
    --dp-menu-min-width: 12.5rem;
    --dp-multi-calendars-spacing: 0;
    --dp-month-year-row-height: 32px;
    &__day {
        @apply text-small h-4;
    }
    .dp__menu {
        @apply border-none focus:border-none;
    }
    .dp__menu_inner.dp__flex_display {
        @apply flex-col gap-[1.1875rem];
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
    .larege-date-picker-body__day {
        @apply h-4 w-4;
    }
    .dp__cell_offset {
        @apply opacity-0 pointer-events-none;
    }

    .dp__calendar_item {
        @apply w-[2.25rem];
    }
    .dp__calendar_item:hover
        .dp__cell_inner:not(
            .dp__range_start,
            .dp__range_end,
            .dp__range_between
        )
        .larege-date-picker-body__day {
        @apply bg-blue-pale;
    }
    .dp__calendar_row {
        @apply my-1.5;
    }
    .dp__today {
        @apply bg-transparent border-none;
        .larege-date-picker-body__day {
            @apply bg-blue-pale text-blue;
        }
    }
    .dp__range_start {
        background: none;
        @apply border-none rounded-none  bg-[linear-gradient(to_right,_#ffffff00_50%,_#5C6AFF_50%)];
        .larege-date-picker-body__day {
            @apply bg-blue text-white;
        }
    }
    .dp__range_end {
        background: none;
        @apply border-none rounded-none  bg-[linear-gradient(to_left,_#ffffff00_50%,_#5C6AFF_50%)];
        .larege-date-picker-body__day {
            @apply bg-blue text-white;
        }
    }
    .dp__range_start.dp__range_end {
        @apply bg-none;
    }
    .dp__range_between {
        @apply bg-blue;
        .larege-date-picker-body__day {
            @apply text-white;
        }
    }
    .dp__menu_inner {
        @apply p-0;
    }
    .dp__month_year_row {
        @apply items-start;
    }
}
</style>
