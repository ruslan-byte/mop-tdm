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
        <PartnerSelector
            :options="partnerList"
            v-model="activePartners"
        ></PartnerSelector>
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
const partnerList = [
    { name: 'ЭЛЕКТРОСВЕТ Орел', id: '1' },
    { name: 'Дельта-плюс', id: '2' },
    { name: 'Энергосберегающие технологии', id: '3' },
    { name: 'ЭНЕРГОСИТИ г. Орел', id: '4' },
    { name: 'ИП Чекрыгина О. А.', id: '5' },
    { name: 'Лайт', id: '6' },
    { name: 'ИП Вербовский Иван Борисович', id: '7' },
    { name: 'Интердекор (г.Тула)', id: '8' },
    { name: 'ИП Кондратьев А. С.', id: '9' },
    { name: 'ЛЕДБРОКЕР', id: '10' },
    { name: 'Партия Света', id: '11' },
    { name: 'ЭлектроСтрой', id: '12' },
    { name: 'АВЕНТА', id: '13' },
    { name: 'КЕНАЗ ООО', id: '14' },
    { name: 'ЭЛЕКТРОСВЕТ Орел', id: '1' },
    { name: 'Дельта-плюс', id: '2' },
    { name: 'Энергосберегающие технологии', id: '3' }
]
const activePartners = ref([])
</script>
<style lang="scss"></style>
