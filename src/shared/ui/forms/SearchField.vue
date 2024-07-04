<template>
    <label class="relative inline-block">
        <input
            type="text"
            class="h-10 bg-background rounded placeholder:text-gray-2 pl-4 text-main text-caption focus:outline-blue focus:placeholder:text-[0px] pr-10 text-ellipsis w-full"
            :class="{
                'bg-white outline outline-1 outline-gray-light hover:outline-blue active:outline-gray disabled:bg-background disabled:text-gray-ligh disabled:outline-gray-light disabled:placeholder:text-gray-light':
                    isWhite,
                'hover:bg-blue-pale active:outline active:bg-background active:outline-gray-light disabled:bg-gray-pale disabled:outline-none':
                    !isWhite
            }"
            placeholder="Поиск"
            v-model="model"
            :disabled="disabled"
        />
        <SearchIcon
            class="stroke-gray-light absolute right-4 top-1/2 -translate-y-1/2 stroke-2 stroke-round pointer-events-none"
        ></SearchIcon>
    </label>
</template>
<script setup lang="ts">
import { SearchIcon } from '@/shared/Icons'
defineProps<{ disabled?: boolean; isWhite?: boolean }>()
const model = defineModel()
</script>
<style lang="scss"></style>
