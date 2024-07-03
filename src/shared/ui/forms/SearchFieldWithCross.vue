<template>
    <form class="inline-block" @submit.prevent="">
        <label class="relative inline-block w-full">
            <input
                type="text"
                class="h-10 border rounded text-small pl-4 pr-10 py-2.5 w-full placeholder:text-gray-2 placeholder:font-normal hover:border-blue focus-visible:border-blue focus-visible:outline-none"
                placeholder="Начните вводить название партнера"
                :class="{
                    'border-blue': searchValue,
                    'border-gray-pale': !searchValue
                }"
                v-model="searchValue"
            />
            <SearchIcon
                class="stroke-gray-light stroke-0.5 absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none"
            ></SearchIcon>
            <button
                class="cursor-pointer right-[2.75rem] top-1/2 -translate-y-1/2 absolute"
                v-if="searchValue"
                @click="resetSearchValue"
            >
                <CrossButtonIcon
                    class="fill-blue hover:fill-blue-hover active:fill-blue-pressed"
                ></CrossButtonIcon>
            </button>
        </label>
    </form>
</template>
<script setup lang="ts">
import { SearchIcon, CrossButtonIcon } from '@/shared/Icons'
import { ref } from 'vue'
const searchValue = ref('')
function resetSearchValue() {
    searchValue.value = ''
}
</script>
<style lang="scss"></style>
