<template>
    <div
        class="relative small-date-picker inline-block"
        v-click-outside="hideDetail"
    >
        <button
            class="flex items-center gap-1 group"
            @click="isDetailShow = true"
        >
            <span class="text-blue group-hover:text-blue-hover">
                {{
                    modelValue
                        ? moment(modelValue).format('DD.MM.YYYY')
                        : 'дата'
                }}
            </span>
            <ArrowIcon
                class="stroke-blue group-hover:stroke-blue-hover rotate-180 w-[0.706875rem]"
            ></ArrowIcon>
        </button>
        <div
            v-if="isDetailShow"
            class="min-h-[15.125rem] absolute bg-white top-[calc(100%+0.5rem)] left-0 flex"
        >
            <div class="w-[17.5rem] p-6 pb-[2.375rem]">
                <VueDatePicker
                    :model-value="[localFromDate, new Date()]"
                    @update:model-value="
                        newDateRande => setNewDateOnLocal(newDateRande[0])
                    "
                    inline
                    :month-change-on-scroll="false"
                    :enable-time-picker="false"
                    auto-apply
                    range
                    locale="ru"
                    fixed-end
                >
                    <template #month-year="{ month, year, updateMonthYear }">
                        <p
                            class="font-semibold text-caption block mx-auto text-blue-dark leading-4"
                        >
                            <button
                                @click="
                                    setPrevMonth(updateMonthYear, month, year)
                                "
                                class="group"
                            >
                                <ArrowSmallIcon
                                    class="stroke-main rotate-90 mr-4 group-hover:stroke-gray group-active:stroke-black"
                                ></ArrowSmallIcon>
                            </button>
                            <span class="inline-block min-w-[102px] text-center"
                                >{{ monthNames[month] }}
                                {{ year }}
                            </span>
                            <button
                                @click="
                                    setNextMonth(updateMonthYear, month, year)
                                "
                                class="group"
                            >
                                <ArrowSmallIcon
                                    class="stroke-main -rotate-90 ml-4 group-hover:stroke-gray group-active:stroke-black"
                                ></ArrowSmallIcon>
                            </button>
                        </p>
                    </template>
                    <template #calendar-header="{ day }">
                        <div class="text-blue text-small font-normal h-4 w-4">
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
                <p class="text-small font-semibold mb-2">
                    Показывать за период
                </p>
                <div class="mb-8">
                    <button
                        class="py-1.5 px-2 text-small rounded mb-2"
                        :class="{
                            'bg-blue text-white': activeButton == 'prevWeek',
                            'text-blue bg-blue-light':
                                activeButton != 'prevWeek'
                        }"
                        @click="activeButton = 'prevWeek'"
                    >
                        За прошлую неделю
                    </button>
                    <button
                        class="py-1.5 px-2 text-small rounded mb-2"
                        :class="{
                            'bg-blue text-white': activeButton == 'week',
                            'text-blue bg-blue-light': activeButton != 'week'
                        }"
                        @click="activeButton = 'week'"
                    >
                        За неделю
                    </button>
                    <button
                        class="py-1.5 px-2 text-small rounded"
                        :class="{
                            'bg-blue text-white':
                                activeButton == 'startThisWeek',
                            'text-blue bg-blue-light':
                                activeButton != 'startThisWeek'
                        }"
                        @click="activeButton = 'startThisWeek'"
                    >
                        С начала текущей недели
                    </button>
                </div>
                <button
                    class="g-button g-button--orange mb-2 text-small h-7.5 w-full"
                    @click="updateNewDate"
                >
                    Применить
                </button>
                <button
                    class="g-button--reset mx-auto block"
                    @click="resetDate"
                >
                    Сбросить
                    <CrossIcon class="inline-block"></CrossIcon>
                </button>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import ArrowIcon from '@/assets/icons/Arrow.svg'
import CrossIcon from '@/assets/icons/Cross.svg'
import ArrowSmallIcon from '@/assets/icons/ArrowSmall.svg'
import VueDatePicker from '@vuepic/vue-datepicker'
import vClickOutsideDirective from 'click-outside-vue3'
import moment from 'moment'
import '@vuepic/vue-datepicker/dist/main.css'
const vClickOutside = vClickOutsideDirective.directive
import { computed, ref } from 'vue'
const emit = defineEmits(['update:modelValue'])
defineProps<{ modelValue?: Date }>()
const localFromDate = ref<Date>(new Date())
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
function setPrevMonth(updateMonthYear: Function, month: number, year: number) {
    if (month - 1 >= 0) updateMonthYear(month - 1, year)
    else updateMonthYear(11, year - 1)
}
function setNextMonth(updateMonthYear: Function, month: number, year: number) {
    if (month + 1 <= 11) updateMonthYear(month + 1, year)
    else updateMonthYear(0, year + 1)
}
const isDetailShow = ref<boolean>(false)
function setNewDateOnLocal(newDate: Date) {
    localFromDate.value = moment(newDate).startOf('day').toDate()
}
function updateNewDate() {
    emit('update:modelValue', localFromDate.value)
    hideDetail()
}
function hideDetail() {
    isDetailShow.value = false
}
type TActiveButton = 'prevWeek' | 'week' | 'startThisWeek' | ''
const activeButton = computed<TActiveButton>({
    get: () => {
        if (moment().diff(moment(localFromDate.value), 'day') == 7)
            return 'week'
        if (
            moment().startOf('week').diff(moment(localFromDate.value), 'day') ==
            0
        )
            return 'startThisWeek'
        if (
            moment()
                .subtract(1, 'week')
                .startOf('week')
                .diff(moment(localFromDate.value), 'day') == 0
        )
            return 'prevWeek'
        return ''
    },
    set: (newVal: TActiveButton) => {
        if (newVal === 'prevWeek')
            setNewDateOnLocal(
                moment().subtract(1, 'week').startOf('week').toDate()
            )
        if (newVal === 'week')
            setNewDateOnLocal(moment().subtract(7, 'day').toDate())
        if (newVal === 'startThisWeek')
            setNewDateOnLocal(moment().startOf('week').toDate())
    }
})

function resetDate() {
    emit('update:modelValue', null), (localFromDate.value = new Date())
    hideDetail()
}
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
        @apply h-4 w-full px-0 border-none;
    }
    .small-date-picker__day {
        @apply h-4 w-4;
    }
    .dp__cell_offset {
        .small-date-picker__day {
            @apply text-gray-2;
        }
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
        .small-date-picker__day {
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
        @apply border-none rounded-none  bg-[linear-gradient(to_right,_#ffffff00_50%,_#5C6AFF_50%)];
        .small-date-picker__day {
            @apply bg-blue text-white;
        }
    }
    .dp__range_end {
        background: none;
        @apply border-none rounded-none  bg-[linear-gradient(to_left,_#ffffff00_50%,_#5C6AFF_50%)];
        .small-date-picker__day {
            @apply bg-blue text-white;
        }
    }
    .dp__range_start.dp__range_end {
        @apply bg-none;
    }
    .dp__range_between {
        @apply bg-blue;
        .small-date-picker__day {
            @apply text-white;
        }
    }
    .dp__menu_inner {
        @apply p-0;
    }
}
</style>
