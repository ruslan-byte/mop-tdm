<template>
    <div class="relative inline-block" v-click-outside="hideDetail">
        <div>
            <button
                @click="showDetail"
                class="g-inline-button g-inline-button--blue flex text-caption h-5 items-center gap-1 focus:outline-none"
                :disabled="disabled"
            >
                {{ activeButtonName }}
                <ArrowIcon class="rotate-180"></ArrowIcon>
            </button>
        </div>

        <div
            class="absolute top-full bg-blue-pale shadow p-4 rounded"
            v-if="isDetailShow"
        >
            <p class="text-small leading-4 font-semibold mb-2">
                Сравнивать периоды
            </p>
            <div class="flex w-[25.25rem] flex-wrap gap-2">
                <button
                    v-for="option of options"
                    class="px-2 py-1.5 rounded text-small leading-4"
                    :class="{
                        'text-blue bg-blue-light': modelValue != option.id,
                        'bg-blue text-white': modelValue == option.id
                    }"
                    @click="() => setNewButton(option.id)"
                >
                    {{ option.name }}
                </button>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ArrowIcon } from '@/shared/Icons'
import { computed } from 'vue'
import { ref } from 'vue'
import { vClickOutside } from '@/shared/ui'
interface IOption {
    name: string
    id: number
}
const props = defineProps<{
    options: IOption[]
    modelValue?: number
    disabled?: boolean
}>()
const emit = defineEmits({
    'update:modelValue': newVal => {
        if (typeof newVal == 'number') return true
        return false
    }
})
function setNewButton(newVal: number) {
    emit('update:modelValue', newVal)
    hideDetail()
}
const activeButtonName = computed(() => {
    const activeButton = props.options.find(
        option => option.id == props.modelValue
    )
    if (activeButton) return activeButton.name
})
const isDetailShow = ref(false)
function showDetail() {
    isDetailShow.value = true
}
function hideDetail() {
    isDetailShow.value = false
}
</script>
<style lang="scss"></style>
