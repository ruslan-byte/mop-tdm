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

        <LargeDatePickerBody
            ref="datePickerBody"
            v-if="isDeatilShow"
            v-model="localDate"
            @on-apply="onApply"
            @on-cancel="onCancel"
        >
            <ul>
                <li class="mb-2">
                    <button
                        class="text-small leading-4 px-2 py-1.5 rounded"
                        :class="{
                            'text-white bg-blue': activeAlias.includes('week'),
                            'bg-blue-light text-blue':
                                !activeAlias.includes('week')
                        }"
                        @click="activeAlias = ['week']"
                    >
                        За неделю
                    </button>
                </li>
                <li class="mb-2">
                    <button
                        class="text-small leading-4 px-2 py-1.5 rounded"
                        :class="{
                            'text-white bg-blue': activeAlias.includes('month'),
                            'bg-blue-light text-blue':
                                !activeAlias.includes('month')
                        }"
                        @click="activeAlias = ['month']"
                    >
                        За месяц
                    </button>
                </li>
                <li class="mb-2">
                    <button
                        class="text-small leading-4 px-2 py-1.5 rounded"
                        :class="{
                            'text-white bg-blue':
                                activeAlias.includes('start-month'),
                            'bg-blue-light text-blue':
                                !activeAlias.includes('start-month')
                        }"
                        @click="activeAlias = ['start-month']"
                    >
                        С начала месяца
                    </button>
                </li>
                <li>
                    <button
                        class="text-small leading-4 px-2 py-1.5 rounded"
                        :class="{
                            'text-white bg-blue':
                                activeAlias.includes('start-quarter'),
                            'bg-blue-light text-blue':
                                !activeAlias.includes('start-quarter')
                        }"
                        @click="activeAlias = ['start-quarter']"
                    >
                        С начала квартала
                    </button>
                </li>
            </ul>
        </LargeDatePickerBody>
    </div>
</template>
<script setup lang="ts">
import { ArrowIcon } from '@/shared/Icons'
import { ref, computed } from 'vue'
import { vClickOutside, useDate } from '@/shared/ui'
import '@vuepic/vue-datepicker/dist/main.css'
import { LargeDatePickerBody } from '@/shared/ui'
interface IPropDate {
    from: Date
    to: Date
}
type typeLocalDate = [Date, Date]
const props = defineProps<{
    modelValue?: IPropDate
}>()

const localDate = ref<typeLocalDate>([new Date(), new Date()])

const isDeatilShow = ref(false)
const isLoading = ref(true)
const datePickerBody = ref<InstanceType<typeof LargeDatePickerBody>>()

function showDeatil() {
    isDeatilShow.value = true
    isLoading.value = true

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

const activeAlias = computed<typeAliases[]>({
    get: (): typeAliases[] => {
        const fromDay = useDate(localDate.value[0])
        const res: typeAliases[] = ['']
        const diffDays = fromDay.diff(useDate(localDate.value[1]), 'days')
        if (diffDays === -7) {
            res.push('week')
        }
        if (
            fromDay.toString() ==
            useDate(localDate.value[1]).startOf('month').toString()
        )
            res.push('start-month')
        if (
            fromDay.toString() ==
            useDate(localDate.value[1]).startOf('quarter').toString()
        )
            res.push('start-quarter')
        if (
            fromDay.toString() ==
            useDate(localDate.value[1])
                .set('month', useDate(localDate.value[1]).get('month') - 1)
                .toString()
        )
            res.push('month')

        return res
    },
    set: (buttonName: typeAliases[]) => {
        const today = useDate(localDate.value[1])

        if (buttonName.includes('week'))
            setLocalDate({
                from: today.add(-7, 'days').toDate(),
                to: localDate.value[1]
            })
        else if (buttonName.includes('month'))
            setLocalDate({
                from: today.set('month', today.get('month') - 1).toDate(),
                to: localDate.value[1]
            })
        else if (buttonName.includes('start-month'))
            setLocalDate({
                from: today.startOf('month').toDate(),
                to: localDate.value[1]
            })
        else if (buttonName.includes('start-quarter'))
            setLocalDate({
                from: today.startOf('quarter').toDate(),
                to: localDate.value[1]
            })
    }
})
</script>
<style lang="scss"></style>
