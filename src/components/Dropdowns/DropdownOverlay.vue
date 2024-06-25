<template>
    <div class="relative" v-click-outside="hideDetail">
        <label
            class="inline-block w-full relative cursor-pointer"
            @click="showDetail"
        >
            <input
                type="text"
                class="h-10 rounded border border-gray-pale w-full bg-white cursor-pointer hover:border-blue pl-4 pb-3 pt-2.5 pr-10 placeholder:text-main placeholder:text-small hover:placeholder:text-blue outline-none pointer-events-none"
                :placeholder="placeholder"
                disabled
            />
            <ArrowIcon
                class="stroke-blue stroke-0.5 absolute top-1/2 right-4 -translate-y-1/2 rotate-180 stroke-round"
            ></ArrowIcon>
        </label>
        <div class="w-full absolute top-full translate-y-1" v-if="isDetailShow">
            <slot :hideDetail="hideDetail"></slot>
        </div>
    </div>
</template>
<script setup lang="ts">
defineProps<{ placeholder: string }>()
import { ArrowIcon } from '@/shared/Icons'
import { ref } from 'vue'
import vClickOutsideDirective from 'click-outside-vue3'
const vClickOutside = vClickOutsideDirective.directive
const isDetailShow = ref(false)
function hideDetail() {
    console.log(`'hide'`, 'hide')
    isDetailShow.value = false
}
function showDetail() {
    isDetailShow.value = true
}
defineExpose({ hideDetail })
</script>
<style lang="scss"></style>
