<template>
    <table class="drop-shadow-table g-table">
        <thead class="h-[3.625rem]">
            <th class="g-table__th text-caption w-[29.4375rem] pl-8">
                Название региона
            </th>
            <th class="g-table__th w-[13.75rem]">
                <div class="flex gap-2">
                    <label
                        class="cursor-pointer flex items-center gap-2 text-caption"
                    >
                        Кол-во партнеров
                        <SortButton v-model="countPartnersSort"></SortButton>
                    </label>
                    <label class="cursor-pointer flex items-center gap-2">
                        <p class="text-">%</p>
                        <SortButton v-model="percentPartnersSort"></SortButton>
                    </label>
                </div>
            </th>
            <th class="g-table__th text-caption w-[29.3125rem] pl-8">
                <div class="flex gap-2">
                    <label class="cursor-pointer flex items-center gap-2">
                        Сумма отгрузок
                        <SortButton v-model="totalShipmentsSort"></SortButton>
                    </label>
                    <label class="cursor-pointer flex items-center gap-2">
                        <p>%</p>
                        <SortButton v-model="percentShipmentsSort"></SortButton>
                    </label>
                </div>
            </th>
        </thead>
        <tr class="g-table__row" v-for="region of regions">
            <td
                class="text-blue-dark pl-8 g-table__cell"
                :class="{
                    'bg-pink-pale': region.color == 'red',
                    'bg-yellow-pale': region.color == 'yellow',
                    'bg-green-pale': region.color == 'green'
                }"
            >
                <router-link
                    to="/sell-in/regions/1"
                    class="hover:text-blue active:text-blue-pressed"
                >
                    {{ region.name }}
                </router-link>
            </td>

            <td
                class="g-table__cell"
                :class="{
                    'bg-pink-pale': region.color == 'red',
                    'bg-yellow-pale': region.color == 'yellow',
                    'bg-green-pale': region.color == 'green'
                }"
            >
                <div class="flex gap-2">
                    <p class="min-w-[5.625rem] text-main">
                        {{ formatter.count(region.partnerCount) }}
                    </p>
                    <div
                        class="min-w-[4.375rem] text-caption flex items-center leading-5 h-5 gap-0.5"
                    >
                        <p
                            :class="{
                                'text-red': region.partnerPercent < 0,
                                'text-gray': region.partnerPercent == 0,
                                'text-green': region.partnerPercent > 0
                            }"
                        >
                            {{ formatter.getSignOfSum(region.partnerPercent)
                            }}{{ formatter.percent(region.partnerPercent) }}%
                        </p>
                        <ArrowWithStickIcon
                            :class="{
                                'fill-red': region.partnerPercent < 0,
                                hidden: region.partnerPercent == 0,
                                'fill-green rotate-180':
                                    region.partnerPercent > 0
                            }"
                        ></ArrowWithStickIcon>
                    </div>
                </div>
            </td>
            <td
                class="pl-8 g-table__cell"
                :class="{
                    'bg-pink-pale': region.color == 'red',
                    'bg-yellow-pale': region.color == 'yellow',
                    'bg-green-pale': region.color == 'green'
                }"
            >
                <div class="flex gap-2">
                    <p class="min-w-[5.625rem] text-main">
                        {{ formatter.sum(region.shipmentsAmount) }} ₽
                    </p>
                    <div
                        class="min-w-[4.375rem] text-caption flex items-center leading-5 h-5 gap-0.5"
                    >
                        <p
                            :class="{
                                'text-red': region.shipmentsPercent < 0,
                                'text-gray': region.shipmentsPercent == 0,
                                'text-green': region.shipmentsPercent > 0
                            }"
                        >
                            {{ formatter.getSignOfSum(region.shipmentsPercent)
                            }}{{ formatter.percent(region.shipmentsPercent) }}%
                        </p>
                        <ArrowWithStickIcon
                            :class="{
                                'fill-red': region.shipmentsPercent < 0,
                                hidden: region.shipmentsPercent == 0,
                                'fill-green rotate-180':
                                    region.shipmentsPercent > 0
                            }"
                        ></ArrowWithStickIcon>
                    </div>
                </div>
            </td>
        </tr>
    </table>
</template>
<script setup lang="ts">
import { SortButton } from '@/shared/ui'
import { ref } from 'vue'
import { Formatter } from '@/shared/ui'
import { ArrowWithStickIcon } from '@/shared/Icons'
const formatter = new Formatter()
export interface IRegion {
    name: string
    partnerCount: number
    partnerPercent: number
    shipmentsAmount: number
    shipmentsPercent: number
    color: 'red' | 'yellow' | 'green'
}
const props = defineProps<{ regions: IRegion[] }>()
const countPartnersSort = ref<'ASC' | 'DESC' | ''>('')
const percentPartnersSort = ref<'ASC' | 'DESC' | ''>('')
const totalShipmentsSort = ref<'ASC' | 'DESC' | ''>('')
const percentShipmentsSort = ref<'ASC' | 'DESC' | ''>('')
</script>
<style lang="scss"></style>
