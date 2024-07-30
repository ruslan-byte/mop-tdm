<template>
    <table class="w-full g-table">
        <thead>
            <th class="g-table__th w-[38.75rem] pl-8 shadow">
                <label class="cursor-pointer leading-[1.625rem] block">
                    Название
                    <SortButton v-model="sortName" class="pl-1"></SortButton>
                </label>
            </th>
            <th class="g-table__th w-[10.875rem]">
                <label class="cursor-pointer leading-[1.625rem] block">
                    План
                    <SortButton v-model="sortPlan" class="pl-1"></SortButton>
                </label>
            </th>
            <th class="g-table__th w-[10.875rem]">
                <label class="cursor-pointer leading-[1.625rem] block">
                    Факт
                    <SortButton v-model="sortFact" class="pl-1"></SortButton>
                </label>
            </th>
            <th class="g-table__th pr-8">
                <label class="cursor-pointer leading-[1.625rem] block">
                    % выполнения плана
                    <SortButton v-model="sortPercent" class="pl-1"></SortButton>
                </label>
            </th>
        </thead>

        <tr class="g-table__row shadow" v-for="row of rows">
            <td class="g-table__cell text-blue-dark pl-8">
                <router-link
                    to="/sell-in/0"
                    class="hover:text-blue active:text-blue-pressed leading-6"
                >
                    {{ row.name }}
                </router-link>
            </td>
            <td class="g-table__cell">
                <div class="flex gap-2 items-center leading-6">
                    <span class="text-main">
                        {{ formatter.sum(row.plan) }} ₽</span
                    >
                </div>
            </td>
            <td class="g-table__cell">
                <div class="flex gap-2 items-center leading-6">
                    <span class="text-blue text-caption font-semibold">
                        {{ formatter.sum(row.fact) }} ₽</span
                    >
                </div>
            </td>
            <td class="g-table__cell pr-8">
                <div class="flex gap-2 items-center leading-6">
                    <span class="text-blue text-caption">
                        {{ formatter.percent(row.percent) }}%
                    </span>
                </div>
            </td>
        </tr>
    </table>
</template>
<script setup lang="ts">
import { SortButton } from '@/shared/ui'
import { ref } from 'vue'
import { sortButtonValueType } from '@/shared/types'
import { Formatter } from '@/shared/ui'
const formatter = new Formatter()
const sortName = ref<sortButtonValueType>('')
const sortPlan = ref<sortButtonValueType>('')
const sortFact = ref<sortButtonValueType>('')
const sortPercent = ref<sortButtonValueType>('')
const rows = [
    {
        name: 'Энергосберегающие технологии',
        plan: 670878,
        fact: 677150.97,
        percent: 11.5
    },
    {
        name: 'Энергосберегающие технологии',
        plan: 670878,
        fact: 677150.97,
        percent: 11.5
    },
    {
        name: 'ЛЕДБРОКЕР',
        plan: 6013796.58,
        fact: 661517.61,
        percent: 11
    },
    {
        name: 'ЛЕДБРОКЕР',
        plan: 6013796.58,
        fact: 661517.61,
        percent: 11
    },
    {
        name: 'ИП Кондратьев А. С.',
        plan: 6287150.97,
        fact: 628715.1,
        percent: 10
    },
    {
        name: 'ИП Кондратьев А. С.',
        plan: 6287150.97,
        fact: 628715.1,
        percent: 10
    },
    {
        name: 'ЭНЕРГОСИТИ г. Орел',
        plan: 4373670.24,
        fact: 349893.62,
        percent: 8
    },
    {
        name: 'ЭНЕРГОСИТИ г. Орел',
        plan: 4373670.24,
        fact: 349893.62,
        percent: 8
    },
    {
        name: 'ЭЛЕКТРОСВЕТ Орел',
        plan: 4373670.24,
        fact: 349893.62,
        percent: 8
    },
    {
        name: 'ЭЛЕКТРОСВЕТ Орел',
        plan: 4373670.24,
        fact: 349893.62,
        percent: 8
    },
    {
        name: 'ИП Чекрыгина О. А.',
        plan: 3826961.46,
        fact: 267887.3,
        percent: 7
    },
    {
        name: 'ИП Чекрыгина О. А.',
        plan: 3826961.46,
        fact: 267887.3,
        percent: 7
    },
    {
        name: 'КЕНАЗ ООО',
        plan: 3553607.07,
        fact: 230984.46,
        percent: 6.5
    },
    {
        name: 'КЕНАЗ ООО',
        plan: 3553607.07,
        fact: 230984.46,
        percent: 6.5
    },
    {
        name: 'АВЕНТА',
        plan: 3280252.68,
        fact: 203375.67,
        percent: 6.2
    },
    {
        name: 'АВЕНТА',
        plan: 3280252.68,
        fact: 203375.67,
        percent: 6.2
    },
    {
        name: 'Интердекор (г.Тула)',
        plan: 3280252.68,
        fact: 196815.16,
        percent: 6
    },
    {
        name: 'Интердекор (г.Тула)',
        plan: 3280252.68,
        fact: 196815.16,
        percent: 6
    },
    {
        name: 'ЭлектроСтрой ООО',
        plan: 3006898.29,
        fact: 165379.41,
        percent: 5.5
    },
    {
        name: 'ЭлектроСтрой ООО',
        plan: 3006898.29,
        fact: 165379.41,
        percent: 5.5
    }
]
</script>
<style lang="scss"></style>
