<template>
    <div class="range-slider">
        <MultiRangeSlider
            :min-value="modelValue?.from ?? min"
            :max-value="modelValue?.to ?? max"
            :min="min"
            :max="max"
            @input="updateModelValue"
        >
        </MultiRangeSlider>
    </div>
</template>
<script setup lang="ts">
import MultiRangeSlider from 'multi-range-slider-vue'
export interface IRangeValue {
    from: number
    to: number
}
defineProps<{
    min: number
    max: number
    modelValue?: IRangeValue
}>()
const emit = defineEmits({
    'update:modelValue': val => {
        if (typeof val.from == 'number' && typeof val.to == 'number')
            return true
        return false
    }
})
interface IMultiRangeData {
    max: number
    maxValue: number
    min: number
    minValue: number
}
function updateModelValue(newValue: IMultiRangeData) {
    emit('update:modelValue', {
        from: newValue.minValue,
        to: newValue.maxValue
    })
}
</script>
<style lang="scss">
.range-slider {
    .ruler {
        @apply hidden;
    }
    .labels {
        @apply hidden;
    }
    .multi-range-slider {
        @apply border-none shadow-none py-2.5 pt-[0.5625rem] px-0;
    }
    .thumb::before {
        @apply bg-orange shadow-none border-none -translate-y-[1.5px];
    }
    .thumb-left {
        @apply translate-x-2;
    }
    .thumb-right {
        @apply -translate-x-[0.75rem];
    }
    .bar-inner,
    .bar-inner-left,
    .bar-inner-right,
    .bar-left,
    .bar-right {
        @apply h-px p-0 bg-gray-light border-none shadow-none;
    }
    .min-caption,
    .max-caption {
        @apply hidden;
    }
}
</style>
