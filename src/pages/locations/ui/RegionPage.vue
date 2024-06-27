<template>
    <div class="g-container">
        <h1>Регионы</h1>
        <div class="flex">
            <RangeSelect
                v-model="rangeSelectData"
                :min="1"
                :max="100"
            ></RangeSelect>
            <h1>
                {{ rangeSelectData }}
            </h1>
        </div>
    </div>
</template>
<script setup lang="ts">
import { RangeSelect } from '@/shared/ui'
import { ref } from 'vue'
const rangeSelectData = ref<{ from: number; to: number }>()
</script>
<style lang="scss"></style>
