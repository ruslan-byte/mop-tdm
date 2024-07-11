<template>
    <label class="inline-flex group" :class="{ 'cursor-pointer': !disabled }">
        <input
            type="checkbox"
            v-model="isActive"
            class="hidden"
            :disabled="disabled"
        />
        <div v-if="isOrange">
            <div
                class="h-5 w-5 border rounded-[1px] border-gray-2 group-hover:border-orange-hover group-hover:stroke-orange relative active:bg-orange-pressed active:border-orange-pressed active:stroke-white"
                :class="{
                    'bg-orange border-orange group-hover:bg-orange-hover stroke-white hover:stroke-white group-hover:stroke-white':
                        isActive
                }"
            >
                <CheckIcon
                    class="stroke-1 stroke-round absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
                ></CheckIcon>
            </div>
        </div>
        <div
            v-else
            class="h-5 w-5 border rounded-[1px] relative flex-[0_0_auto]"
            :class="{
                'bg-blue group-hover:bg-blue-hover group-hover:border-blue-hover border-blue':
                    isActive,
                'group-hover:border-blue group-active:bg-blue-hover group-active:border-blue-hover border-gray':
                    !isActive,
                'border-background group-hover:border-background group-active:border-background group-active:bg-transparent':
                    disabled
            }"
        >
            <CheckIcon
                v-if="isActive"
                class="stroke-white stroke-2 stroke-round absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
            ></CheckIcon>
        </div>
        <span>
            <slot></slot>
        </span>
    </label>
</template>
<script setup lang="ts">
const isActive = defineModel()
import { CheckIcon } from '@/shared/Icons'
defineProps<{ disabled?: boolean; isOrange?: boolean }>()
</script>
<style lang="scss"></style>
