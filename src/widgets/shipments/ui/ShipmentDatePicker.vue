<template>
    <div>
        <label class="inline-block relative">
            <input
                type="text"
                class="bg-blue-pale rounded text-small pl-4 pr-12 h-7 text-main"
                value="01.01.2024-07.01.2024"
            />
            <CalendarIcon
                class="fill-blue absolute top-1/2 right-4 -translate-y-1/2 h-3.5 w-4 block"
            ></CalendarIcon>
        </label>
    </div>
</template>
<script setup lang="ts">
import { CalendarIcon } from '@/shared/Icons'
</script>
<style lang="scss"></style>
