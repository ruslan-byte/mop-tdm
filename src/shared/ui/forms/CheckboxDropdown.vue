<template>
    <div class="relative" v-click-outside="hideDetail">
        <button class="relative w-full group" @click="showDetail">
            <input
                type="text"
                class="h-10 w-full bg-white rounded border placeholder:text-captio placeholder:text-main pl-4 pr-8 group-hover:border-blue-hover select-none pointer-events-none text-caption"
                :class="{
                    'border-blue': isShowDetail,
                    'border-gray-light': !isShowDetail
                }"
                :placeholder="placeholder"
                disabled
            />
            <ArrowIcon
                class="stroke-gray absolute right-[1.0625rem] top-1/2 -translate-y-1/2 rotate-180"
            ></ArrowIcon>
        </button>
        <div
            class="absolute w-full py-6 px-4 bg-white rounded translate-y-2 shadow"
            v-if="isShowDetail"
        >
            <label
                class="flex items-center group cursor-pointer mb-2 last:mb-0"
                v-for="option of options"
                ><Checkbox
                    is-orange
                    :model-value="modelValue === option.id"
                    @update:model-value="
                        () => {
                            update(option.id)
                        }
                    "
                ></Checkbox>
                <span
                    class="leading-5 group-hover:text-orange pl-2 text-main text-caption"
                    >{{ option.label }}</span
                >
            </label>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ArrowIcon } from '@/shared/Icons'
import Checkbox from './Checkbox.vue'
import { ref, computed } from 'vue'
import { vClickOutside } from '../clickOutside'
export interface IOption {
    id: string
    label: string
}

const props = defineProps<{
    options: IOption[]
    modelValue: string
    placeholder?: string
}>()
const emit = defineEmits(['update:modelValue'])
const isShowDetail = ref(false)
function update(id: string) {
    emit('update:modelValue', id)
    hideDetail()
}
function showDetail() {
    isShowDetail.value = true
}
function hideDetail() {
    isShowDetail.value = false
}
const placeholder = computed(
    () =>
        props.options.find(option => option.id === props.modelValue)?.label ??
        props.placeholder ??
        ''
)
</script>
<style lang="scss"></style>
