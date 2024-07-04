<template>
    <div class="relative w-fit" v-click-outside="hideDetail">
        <button
            class="inline-block relative pointer-events-all group"
            @click="showDetail"
        >
            <input
                type="text"
                class="bg-blue-pale rounded text-small pl-4 pr-12 h-7 text-main group-hover:bg-blue-light cursor-pointer group-hover:outline group-hover:outline-blue outline-1 pointer-events-none"
                :class="{ 'outline outline-blue': isDetailShow }"
                :value="
                    modelValue
                        ? `${useDate(modelValue.from).format('DD.MM.YYYY')}-${useDate(modelValue.to).format('DD.MM.YYYY')}`
                        : ''
                "
                :placeholder="placeholder"
            />
            <CalendarIcon
                class="fill-blue absolute top-1/2 right-4 -translate-y-1/2 h-3.5 w-4 block pointer-events-none"
            ></CalendarIcon>
        </button>
        <LargeDatePickerBody
            @on-apply="onApply"
            @on-cancel="onCancel"
            v-model="localDate"
            v-if="isDetailShow"
        >
            <ul>
                <li>
                    <button
                        class="text-small leading-4 px-2 py-1.5 rounded mb-2"
                        :class="{
                            'text-white bg-blue': activeAlias.includes('week'),
                            'bg-blue-light text-blue':
                                !activeAlias.includes('week')
                        }"
                        @click="activeAlias = ['week']"
                    >
                        Последние 7 дней
                    </button>
                </li>
                <li>
                    <button
                        class="text-small leading-4 px-2 py-1.5 rounded mb-2"
                        :class="{
                            'text-white bg-blue': activeAlias.includes('month'),
                            'bg-blue-light text-blue':
                                !activeAlias.includes('month')
                        }"
                        @click="activeAlias = ['month']"
                    >
                        Текущий месяц
                    </button>
                </li>
                <li>
                    <button
                        class="text-small leading-4 px-2 py-1.5 rounded mb-2"
                        :class="{
                            'text-white bg-blue':
                                activeAlias.includes('quarter'),
                            'bg-blue-light text-blue':
                                !activeAlias.includes('quarter')
                        }"
                        @click="activeAlias = ['quarter']"
                    >
                        Текущий квартал
                    </button>
                </li>
                <li>
                    <button
                        class="text-small leading-4 px-2 py-1.5 rounded"
                        :class="{
                            'text-white bg-blue': activeAlias.includes('year'),
                            'bg-blue-light text-blue':
                                !activeAlias.includes('year')
                        }"
                        @click="activeAlias = ['year']"
                    >
                        Текущий год
                    </button>
                </li>
            </ul>
        </LargeDatePickerBody>
    </div>
</template>
<script setup lang="ts">
import { CalendarIcon } from '@/shared/Icons'
import '@vuepic/vue-datepicker/dist/main.css'
import { LargeDatePickerBody } from '@/shared/ui'
import { computed, ref } from 'vue'
import { useDate, vClickOutside } from '@/shared/ui'

interface IDatePropsValue {
    from: Date
    to: Date
}
const props = defineProps<{
    modelValue?: IDatePropsValue
    placeholder?: string
}>()
type localDateType = [Date, Date]
const localDate = ref<localDateType>([new Date(), new Date()])
const isDetailShow = ref(false)

function setLocalDate(newDate?: IDatePropsValue) {
    localDate.value = newDate
        ? [newDate.from, newDate.to]
        : [new Date(), new Date()]
}

const emit = defineEmits(['update:modelValue'])

function onApply() {
    hideDetail()
    emit('update:modelValue', {
        from: localDate.value[0],
        to: localDate.value[1]
    })
}
function onCancel() {
    hideDetail()
    emit('update:modelValue', null)
}

type aliasType = 'week' | 'month' | 'quarter' | 'year' | ''

const activeAlias = computed<aliasType[]>({
    get: (): aliasType[] => {
        const fromDay = useDate(localDate.value[0])
        const res: aliasType[] = ['']
        const diffDays = fromDay.diff(useDate(localDate.value[1]), 'days')
        if (diffDays === -7) {
            res.push('week')
        }
        if (
            fromDay.toString() ==
            useDate(localDate.value[1]).startOf('month').toString()
        )
            res.push('month')
        if (
            fromDay.toString() ==
            useDate(localDate.value[1]).startOf('quarter').toString()
        )
            res.push('quarter')
        if (
            fromDay.toString() ==
            useDate(localDate.value[1]).startOf('year').toString()
        )
            res.push('year')

        return res
    },
    set: (buttonName: aliasType[]) => {
        const today = useDate(localDate.value[1])

        if (buttonName.includes('week'))
            setLocalDate({
                from: today.add(-7, 'days').toDate(),
                to: localDate.value[1]
            })
        else if (buttonName.includes('month'))
            setLocalDate({
                from: today.startOf('month').toDate(),
                to: localDate.value[1]
            })
        else if (buttonName.includes('quarter'))
            setLocalDate({
                from: today.startOf('quarter').toDate(),
                to: localDate.value[1]
            })
        else if (buttonName.includes('year'))
            setLocalDate({
                from: today.startOf('year').toDate(),
                to: localDate.value[1]
            })
    }
})
function hideDetail() {
    isDetailShow.value = false
}
function showDetail() {
    isDetailShow.value = true
    setLocalDate(props.modelValue)
}
</script>
<style lang="scss"></style>
