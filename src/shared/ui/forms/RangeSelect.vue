<template>
    <div class="relative w-fit" v-click-outside="hideDetail">
        <button
            class="h-10 rounded border border-gray-pale relative w-[292px] group hover:border-blue"
            @click="showDetail"
        >
            <input
                :placeholder="placeholder"
                class="placeholder:text-main text-small h-full w-full pl-4 pr-9 leading-4 bg-white rounded pointer-events-none group-hover:text-blue group-hover:placeholder:text-blue"
                disabled
                :value="previewLabel"
            />
            <ArrowIcon
                class="absolute top-1/2 right-4 stroke-blue rotate-180 -translate-y-1/2 stroke-0.5 stroke-round w-3.5 pointer-events-none"
            ></ArrowIcon>
        </button>
        <div
            class="bg-white absolute top-full translate-y-2 w-full px-4 py-6 rounded z-20"
            v-if="isShowDetail"
        >
            <RangeSlider
                class="mb-2"
                v-model="localRangeValue"
                :min="min"
                :max="max"
            ></RangeSlider>
            <div class="flex gap-4 items-center mb-4">
                <input
                    type="number"
                    class="g-input w-[6.875rem]"
                    :placeholder="`От ${min}${unitName}`"
                    error-message="Неверное значение"
                    :value="localRangeValue?.from"
                    @input="inputFrom"
                />
                <div class="h-px bg-gray-2 w-2"></div>
                <input
                    type="text"
                    class="g-input w-[6.875rem]"
                    :placeholder="`До ${max}${unitName}`"
                    :value="localRangeValue?.to"
                    @input="inputTo"
                />
            </div>

            <div class="flex gap-6 items-center">
                <button
                    class="g-button g-button--linear-blue w-[8.125rem]"
                    :disabled="!isDataChanged"
                    @click="applyRange"
                >
                    Применить
                </button>
                <button
                    class="g-inline-button g-inline-button--gray-black text-caption"
                    @click="resetRange"
                    :disabled="isDataDefault"
                >
                    Сбросить
                    <CrossIcon class="inline-block"></CrossIcon>
                </button>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ArrowIcon } from '@/shared/Icons'
import RangeSlider, { IRangeValue } from './RangeSlider.vue'
import { computed, ref } from 'vue'
import { CrossIcon } from '@/shared/Icons'
import { vClickOutside } from '../clickOutside'
const props = defineProps<{
    min: number
    max: number
    modelValue?: {
        from: number
        to: number
    }
    placeholder?: string
    unitName: string
}>()
const localRangeValue = ref<IRangeValue>()
const emit = defineEmits({
    'update:modelValue': (newVal: IRangeValue | null) => {
        if (!newVal) return true
        if (
            Object.keys(newVal).includes('from') &&
            Object.keys(newVal).includes('to')
        )
            return true
        return false
    }
})
function applyRange() {
    if (localRangeValue.value) emit('update:modelValue', localRangeValue.value)
    hideDetail()
}
function resetRange() {
    emit('update:modelValue', null)
    hideDetail()
}
const isDataChanged = computed(
    () =>
        props.modelValue?.from != localRangeValue.value?.from ||
        props.modelValue?.to != localRangeValue.value?.to
)
const isDataDefault = computed(
    () => !props.modelValue?.from && !props.modelValue?.to
)
const isShowDetail = ref(false)

function showDetail() {
    isShowDetail.value = true
    setLocalRangeValueFromProps()
}
function hideDetail() {
    isShowDetail.value = false
}
function setLocalRangeValueFromProps() {
    localRangeValue.value = props.modelValue
}

const previewLabel = computed(() => {
    return props.modelValue
        ? `От ${props.modelValue?.from}${props.unitName} до ${props.modelValue?.to}${props.unitName}`
        : ''
})
interface IEventInput extends Event {
    target: HTMLInputElement | null
    data?: string
}
function inputFrom(event: IEventInput) {
    if (!event.target) return
    if (localRangeValue.value) {
        const forbiddenSymbols = ['-', '+', ',', '.', 'e']

        if (event.data && forbiddenSymbols.includes(event.data))
            event.target.value = '' + localRangeValue.value.from
        if (+event.target.value >= localRangeValue.value.to)
            event.target.value = '' + localRangeValue.value.to

        localRangeValue.value.from = +event.target.value
    } else {
        localRangeValue.value = { from: props.min, to: props.max }
        inputFrom(event)
    }
}
function inputTo(event: IEventInput) {
    if (!event.target) return
    if (localRangeValue.value) {
        const forbiddenSymbols = ['-', '+', ',', '.', 'e']

        if (event.data && forbiddenSymbols.includes(event.data))
            event.target.value = '' + localRangeValue.value.to
        if (+event.target.value <= localRangeValue.value.from)
            event.target.value = '' + localRangeValue.value.from
        if (+event.target.value >= props.max)
            event.target.value = '' + props.max

        localRangeValue.value.to = +event.target.value
    } else {
        localRangeValue.value = { from: props.min, to: props.max }
        inputFrom(event)
    }
}
</script>
<style lang="scss"></style>
