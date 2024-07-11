<template>
    <div class="g-container py-8">
        <BreadCrumbs :links="BreadCrumbsLinks" class="mb-8"></BreadCrumbs>
        <h1 class="mb-8">Партнеры</h1>
        <div class="flex gap-6 mb-6">
            <SearchFieldWithCross class="w-[38rem]"></SearchFieldWithCross>
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

        <table class="w-full g-table">
            <thead class="g-table__header">
                <th class="g-table__th w-[38rem] pl-8">Название</th>
                <th class="g-table__th w-[13.4375rem]">План</th>
                <th class="g-table__th w-[13.4375rem]">Факт</th>
                <th class="g-table__th w-[12,5625rem] pr-8">
                    % выполнения плана
                </th>
            </thead>

            <tr class="g-table__row" v-for="item of 10">
                <td class="g-table__cell text-blue-dark pl-8">
                    <router-link
                        to="/sell-in/0"
                        class="hover:text-blue active:text-blue-pressed"
                    >
                        Энергосберегающие технологии
                    </router-link>
                </td>
                <td class="g-table__cell">
                    <div class="flex gap-2 items-center">
                        <span class="text-gray text-small"> План: </span>
                        <span class="text-main"> 670 878,00 ₽</span>
                    </div>
                </td>
                <td class="g-table__cell">
                    <div class="flex gap-2 items-center">
                        <span class="text-gray text-small"> Факт: </span>
                        <span class="text-blue text-caption">
                            661 517,61 ₽</span
                        >
                    </div>
                </td>
                <td class="g-table__cell pr-8">
                    <div class="flex gap-2 items-center">
                        <span class="text-gray text-small">
                            % выполнения:
                        </span>
                        <span class="text-blue text-caption"> 11% </span>
                    </div>
                </td>
            </tr>
        </table>
    </div>
</template>
<script setup lang="ts">
import { BreadCrumbs, IBreadCrumbLink } from '@/widgets/layout'
import { SearchFieldWithCross } from '@/shared/ui'
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
