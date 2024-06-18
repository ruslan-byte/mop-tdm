<template>
    <div class="g-container py-8">
        <BreadCrumbs :links="BreadCrumbsLinks" class="mb-8"></BreadCrumbs>
        <h1 class="mb-8">Партнеры</h1>
        <div class="flex gap-6">
            <SearchField class="w-[38rem]"></SearchField>
            <Dropdown
                :options="deltaOptions"
                v-model="activeDeltaItemValue"
                class="flex-1"
                prefix="Выполнение плана:"
            ></Dropdown>
            <Dropdown
                :options="sortOptions"
                class="flex-1"
                v-model="activeSortValue"
            ></Dropdown>
        </div>
    </div>
</template>
<script setup lang="ts">
import BreadCrumbs, { IBreadCrumbLink } from '@/components/BreadCrumbs.vue'
import SearchField from '@/components/Form/SearchField.vue'
import Dropdown, { IDropdownOption } from '@/components/Dropdowns/Dropdown.vue'
import { ref } from 'vue'
const BreadCrumbsLinks: IBreadCrumbLink[] = [
    {
        id: 'bread0',
        label: 'Партнеры'
    }
]
const activeDeltaItemValue = ref('week')
const deltaOptions: IDropdownOption[] = [
    {
        label: 'Неделя',
        value: 'week'
    },
    {
        label: 'Месяц',
        value: 'month'
    },
    {
        label: 'Квартал',
        value: 'quartal'
    },
    {
        label: 'Год',
        value: 'year'
    }
]
const activeSortValue = ref('2')
const sortOptions: IDropdownOption[] = [
    { label: 'По алфавиту', value: '1' },
    { label: 'По возрастанию % прироста плана', value: '2' },
    { label: 'По убыванию % прироста плана', value: '3' },
    { label: 'По возростанию суммы плана', value: '5' },
    { label: 'По убыванию суммы плана', value: '4' }
]
</script>
<style lang="scss"></style>
