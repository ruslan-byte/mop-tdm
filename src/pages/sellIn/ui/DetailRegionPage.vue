<template>
    <div class="g-container">
        <div class="flex justify-between pt-5 gap-10 mb-10">
            <CategoryDropdown
                v-model="categoryIdList"
                :options="getCategoryesForFilter(categoryes)"
            >
            </CategoryDropdown>
            <CheckboxDropdown
                v-model="activeStockId"
                class="w-[284px]"
                :options="options"
            ></CheckboxDropdown>
        </div>
        <PartnerSelector></PartnerSelector>
    </div>
</template>
<script setup lang="ts">
import { CategoryDropdown } from '@/entities/category'
import { categoryes } from '@/shared/consts'
import { getCategoryesForFilter } from '@/shared/helpers'
import { ref } from 'vue'
import { CheckboxDropdown } from '@/shared/ui'
import { PartnerSelector } from '@/widgets/shipments'
const categoryIdList = ref([])
const options = ref([
    {
        id: 'glavny',
        label: 'Главный склад'
    },
    { label: 'Склад г. Рыбинск', id: 'riba' },
    { label: 'Склад г. Новосибирск', id: 'noc' },
    { label: 'Склад г. Ревда', id: 'revda' },
    { label: 'Склад г. Артем', id: 'artem' },
    { label: 'Рыбинск склад (ТДМ)', id: 'riba tdm' },
    { label: 'Рыбинск экспорт', id: 'riba export' }
])
const activeStockId = ref('')
</script>
<style lang="scss"></style>
