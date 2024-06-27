<template>
    <div>
        <h1>Регионы</h1>
        <div class="flex">
            <RangeSelect
                v-model="rangeSelectData"
                :min="1"
                :max="100"
            ></RangeSelect>
        </div>
        <div>
            <DateSelect
                :options="DateSelectOptions"
                v-model="activeDateId"
                disabled
            ></DateSelect>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import DateSelect from './DateSelect.vue'
import { RangeSelect } from '@/shared/ui'
const rangeSelectData = ref<{ from: number; to: number }>()
const DateSelectOptions = [
    {
        id: 0,
        name: 'Июнь - май, 2024'
    },
    {
        id: 1,
        name: 'Май - апрель, 2024'
    },
    {
        id: 2,
        name: 'Апрель - март, 2024'
    },
    {
        id: 3,
        name: '2 кв. - 1 кв.,2024'
    },
    {
        id: 4,
        name: '1 кв 2024. - 4 кв. 2023'
    },
    {
        id: 5,
        name: '4 кв. - 3 кв.,2023'
    },
    {
        id: 6,
        name: '2024 г. - 2023 г.'
    }
]
const activeDateId = ref<number>(0)
</script>
<style lang="scss"></style>
