<template>
    <DropdownOverlay :placeholder="placeholder" ref="dropdownOverlay">
        <ul class="rounded-b bg-white border border-gray-pale shadow">
            <li
                v-for="option of options"
                class="px-4 py-2.5 border-b last:border-none border-gray-pale text-small hover:text-blue hover:bg-background cursor-pointer"
                :class="{
                    'bg-blue-light text-blue hover:bg-blue-light':
                        option.value == modelValue
                }"
                @click="selectOption(option.value)"
            >
                {{ option.label }}
            </li>
        </ul>
    </DropdownOverlay>
</template>
<script setup lang="ts">
import DropdownOverlay from './DropdownOverlay.vue'
import { computed, ref } from 'vue'
const dropdownOverlay = ref<InstanceType<typeof DropdownOverlay>>()
export interface IDropdownOption {
    value: string
    label: string
    placementLabel?: string
}
const props = defineProps<{
    options: IDropdownOption[]
    modelValue: string
    prefix?: string
}>()
const placeholder = computed(() => {
    const activeOption = props.options.find(
        option => option.value == props.modelValue
    )
    if (activeOption?.placementLabel)
        return (props.prefix ?? '') + activeOption?.placementLabel
    return (props.prefix ?? '') + activeOption?.label
})
const emit = defineEmits(['update:modelValue'])
function selectOption(optionValue: string) {
    emit('update:modelValue', optionValue)
    dropdownOverlay.value?.hideDetail()
}
</script>
<style lang="scss"></style>
