<template>
    <div class="plan-date-picker w-fit relative" v-click-outside="hideDetail">
        <button class="flex gap-1 items-center group" @click="showDeatil">
            <p
                class="w-fit text-small leading-4 text-blue group-hover:text-blue-hover group-active:text-blue-pressed"
            >
                <template v-if="props.modelValue">
                    {{ useDate(props.modelValue.from).format('DD.MM.YYYY') }}-{{
                        useDate(props.modelValue.to).format('DD.MM.YYYY')
                    }}
                </template>
                <template v-else> дата </template>
            </p>
            <ArrowIcon
                class="stroke-blue origin-center group-hover:stroke-blue-hover group-active:stroke-blue-pressed"
                :class="{ 'rotate-180': !isDeatilShow }"
            ></ArrowIcon>
        </button>
        <div
            class="absolute right-0 top-full bg-white shadow-md rounded z-10 flex translate-y-[0.4375rem]"
            v-if="isDeatilShow"
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
            <div
                class="bg-blue-pale p-4 w-[12.625rem] flex flex-col items-center gap-6 rounded-r"
            >
                <div>
                    <p class="text-small text-main font-semibold mb-2">
                        Показывать за период
                    </p>
                    <ul>
                        <li class="mb-2">
                            <button
                                class="text-small leading-4 px-2 py-1.5 rounded"
                                @click="activeAlias = 'week'"
                                :class="{
                                    'text-white bg-blue': activeAlias == 'week',
                                    'bg-blue-light text-blue':
                                        activeAlias != 'week'
                                }"
                            >
                                За неделю
                            </button>
                        </li>
                        <li class="mb-2">
                            <button
                                class="text-small leading-4 px-2 py-1.5 rounded"
                                :class="{
                                    'text-white bg-blue':
                                        activeAlias == 'month',
                                    'bg-blue-light text-blue':
                                        activeAlias != 'month'
                                }"
                                @click="activeAlias = 'month'"
                            >
                                За месяц
                            </button>
                        </li>
                        <li class="mb-2">
                            <button
                                class="text-small leading-4 px-2 py-1.5 rounded"
                                :class="{
                                    'text-white bg-blue':
                                        activeAlias == 'start-month',
                                    'bg-blue-light text-blue':
                                        activeAlias != 'start-month'
                                }"
                                @click="activeAlias = 'start-month'"
                            >
                                С начала месяца
                            </button>
                        </li>
                        <li>
                            <button
                                class="text-small leading-4 px-2 py-1.5 rounded"
                                :class="{
                                    'text-white bg-blue':
                                        activeAlias == 'start-quarter',
                                    'bg-blue-light text-blue':
                                        activeAlias != 'start-quarter'
                                }"
                                @click="activeAlias = 'start-quarter'"
                            >
                                С начала квартала
                            </button>
                        </li>
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
    </div>
</template>
<script setup lang="ts">
import { ArrowIcon, CrossIcon } from '@/shared/Icons'
import { ref, computed } from 'vue'
import { vClickOutside, VueDatePicker, useDate } from '@/shared/ui'
import { monthNames } from '@/shared/consts'
const datePicker = ref<InstanceType<typeof VueDatePicker>>()
interface IPropDate {
    from: Date
    to: Date
}
type typeLocalDate = [Date, Date]
const props = defineProps<{
    modelValue?: IPropDate
}>()

const localDate = ref<typeLocalDate>([new Date(), new Date()])

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

const countMonthBeforeBeginningYear = computed(
    () => useDate().diff(useDate().startOf('year'), 'M') + 1
)

const isDeatilShow = ref(false)
const isLoading = ref(true)

function showDeatil() {
    isDeatilShow.value = true
    isLoading.value = true
    setPositionDatepickerOnStartYear()
    setLocalDate(props.modelValue)
}
function setLocalDate(date?: IPropDate) {
    if (date) localDate.value = [date.from, date.to]
    else localDate.value = [new Date(), new Date()]
}

function hideDetail() {
    isDeatilShow.value = false
}

const emit = defineEmits({
    'update:modelValue': (date: IPropDate | null) => {
        if (!date) return true
        if (date.from && date.to) return true
        return false
    }
})

function onApply() {
    emit('update:modelValue', {
        from: localDate.value[0],
        to: localDate.value[1]
    })
    hideDetail()
}
function onCancel() {
    emit('update:modelValue', null)
    hideDetail()
}

type typeAliases = 'week' | 'month' | 'start-month' | 'start-quarter' | ''

const activeAlias = computed<typeAliases>({
    get: (): typeAliases => {
        const fromDay = useDate(localDate.value[0])

        const diffDays = fromDay.diff(useDate(localDate.value[1]), 'days')
        if (diffDays === -7) {
            return 'week'
        }
        if (
            fromDay.toString() ==
            useDate(localDate.value[1]).startOf('month').toString()
        )
            return 'start-month'
        if (
            fromDay.toString() ==
            useDate(localDate.value[1]).startOf('quarter').toString()
        )
            return 'start-quarter'
        if (
            fromDay.toString() ==
            useDate(localDate.value[1])
                .set('month', useDate(localDate.value[1]).get('month') - 1)
                .toString()
        )
            return 'month'

        return ''
    },
    set: (buttonName: typeAliases) => {
        const today = useDate(localDate.value[1])
        if (buttonName == 'week')
            setLocalDate({
                from: today.add(-7, 'days').toDate(),
                to: localDate.value[1]
            })
        else if (buttonName == 'month')
            setLocalDate({
                from: today.set('month', today.get('month') - 1).toDate(),
                to: localDate.value[1]
            })
        else if (buttonName == 'start-month')
            setLocalDate({
                from: today.startOf('month').toDate(),
                to: localDate.value[1]
            })
        else if (buttonName == 'start-quarter')
            setLocalDate({
                from: today.startOf('quarter').toDate(),
                to: localDate.value[1]
            })
    }
})
</script>
<style lang="scss">
.plan-date-picker {
    --dp-menu-min-width: 12.5rem;
    --dp-multi-calendars-spacing: 0;
    --dp-month-year-row-height: 32px;
    &__day {
        @apply text-small h-4;
    }
    .dp__menu {
        @apply border-none;
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
    .plan-date-picker__day {
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
    .dp__month_year_row {
        @apply items-start;
    }
}
</style>
