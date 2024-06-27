<template>
    <div class="relative w-fit">
        <button
            class="h-10 rounded border border-gray-pale relative w-[292px] group hover:border-blue"
        >
            <input
                placeholder="Кол-во проданных едениц"
                class="placeholder:text-main text-small h-full w-full pl-4 pr-9 leading-4 bg-white rounded pointer-events-none group-hover:text-blue group-hover:placeholder:text-blue"
                disabled
            />
            <ArrowIcon
                class="absolute top-1/2 right-4 stroke-blue rotate-180 -translate-y-1/2 stroke-0.5 stroke-round w-3.5 pointer-events-none"
            ></ArrowIcon>
        </button>
        <div class="bg-white absolute top-full translate-y-2 w-full px-4 py-6">
            <RangeSlider
                v-model="rangeValue"
                :min="min"
                :max="max"
            ></RangeSlider>
            <div class="flex gap-4">
                <input
                    type="number"
                    class="g-input w-20"
                    placeholder="От 100 ₽ "
                    error-message="Неверное значение"
                />
                <input
                    type="text"
                    class="g-input w-20"
                    placeholder="От 100 ₽ "
                />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ArrowIcon } from '@/shared/Icons'
import RangeSlider, { IRangeValue } from './RangeSlider.vue'
import { ref } from 'vue'
const rangeValue = ref<IRangeValue>()
const min = 0
const max = 100
</script>
<style lang="scss"></style>
