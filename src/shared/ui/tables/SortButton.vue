<template>
    <button
        class="sort-button"
        :class="{
            'sort-button--top': modelValue === 'ASC',
            'sort-button--bottom': modelValue === 'DESC'
        }"
        @click="changeSort"
    >
        <SortIcon></SortIcon>
    </button>
</template>
<script setup lang="ts">
import { SortIcon } from '@/shared/Icons'
import { sortButtonValueType } from '@/shared/types'
const props = defineProps<{ modelValue: sortButtonValueType }>()
const emit = defineEmits(['update:modelValue'])
function changeSort() {
    const varianst = {
        '': 'ASC',
        ASC: 'DESC',
        DESC: 'ASC'
    }

    emit('update:modelValue', varianst[props.modelValue])
}
</script>
<style lang="scss">
.sort-button {
    path:first-child {
        @apply fill-gray stroke-gray;
    }
    path:nth-child(2) {
        @apply fill-gray;
    }
    path:nth-child(3) {
        @apply fill-gray-2 stroke-gray-2;
    }
    path:last-child {
        @apply fill-gray-2;
    }
    &:hover {
        path:first-child {
            @apply fill-main stroke-main;
        }
        path:nth-child(2) {
            @apply fill-main;
        }
    }
    &:active {
        path:first-child {
            @apply fill-black stroke-black;
        }
        path:nth-child(2) {
            @apply fill-black;
        }
    }
    &--top {
        path:first-child {
            @apply fill-blue stroke-blue;
        }
        path:nth-child(2) {
            @apply fill-blue;
        }

        &:hover {
            path:first-child {
                @apply fill-main stroke-main;
            }
            path:nth-child(2) {
                @apply fill-main;
            }
        }
        &:active {
            path:first-child {
                @apply fill-black stroke-black;
            }
            path:nth-child(2) {
                @apply fill-black;
            }
        }
    }
    &--bottom {
        path:first-child {
            @apply fill-gray-2 stroke-gray-2;
        }
        path:nth-child(2) {
            @apply fill-gray-2;
        }
        path:nth-child(3) {
            @apply fill-blue stroke-blue;
        }
        path:last-child {
            @apply fill-blue;
        }
        &:hover {
            path:first-child {
                @apply fill-gray-2 stroke-gray-2;
            }
            path:nth-child(2) {
                @apply fill-gray-2;
            }
            path:nth-child(3) {
                @apply fill-main stroke-main;
            }
            path:last-child {
                @apply fill-main;
            }
        }
        &:active {
            path:first-child {
                @apply fill-gray-2 stroke-gray-2;
            }
            path:nth-child(2) {
                @apply fill-gray-2;
            }
            path:nth-child(3) {
                @apply fill-black stroke-black;
            }
            path:last-child {
                @apply fill-black;
            }
        }
    }
}
</style>
