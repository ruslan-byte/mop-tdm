<template>
    <div class="g-white-block">
        <div
            class="flex items-center justify-between pb-4 mb-4 border-b border-gray-light"
        >
            <h3 class="text-blue-dark">Отгрузки за период</h3>
            <div class="flex items-center gap-6">
                <SearchField
                    class="w-[9.6875rem]"
                    placeholder="Поиск SKU"
                ></SearchField>
                <p class="text-caption leading-4 text-main font-semibold">
                    Показывать на графике:
                </p>
                <RadioButton
                    :isActive="showOnGraph === 'electro-kpp'"
                    @change="showOnGraph = 'electro-kpp'"
                >
                    <span class="text-caption text-main leading-5"
                        >Электротехника и КПП</span
                    >
                </RadioButton>
                <RadioButton
                    :isActive="showOnGraph === 'electro'"
                    @change="showOnGraph = 'electro'"
                >
                    <span class="text-caption text-main leading-5"
                        >Электротехника</span
                    >
                </RadioButton>
                <RadioButton
                    :isActive="showOnGraph === 'kpp'"
                    @change="showOnGraph = 'kpp'"
                >
                    <span class="text-caption text-main leading-5">КПП</span>
                </RadioButton>
            </div>
        </div>
        <div class="flex justify-between items-end mb-8">
            <div class="flex gap-6 items-center">
                <ShipmentDatePicker
                    v-model="date"
                    placeholder="Дата"
                ></ShipmentDatePicker>
                <div class="flex items-center gap-[0.5625rem]">
                    <Checkbox v-model="isCompare"></Checkbox>
                    <span class="leading-4 text-main text-small"
                        >Сравнить с аналогоичным периодом прошлого года</span
                    >
                </div>
            </div>
            <CategoryDropdown
                class="w-[18.25rem]"
                v-model="categoryIdList"
                :options="getCategoryesForFilter(categoryes)"
            ></CategoryDropdown>
        </div>
        <ShipmentChart class="h-[16.9375rem] mb-8"></ShipmentChart>
        <div class="flex justify-between">
            <div class="flex gap-2">
                <span class="text-caption leading-5">
                    Сумма отгрузок за период:
                </span>
                <span class="font-semibold text-orange"> 247 897 076 ₽ </span>
            </div>
            <div>
                <CheckboxDropdown
                    class="w-[17.75rem]"
                    :options="[]"
                    v-model="activeShipemtStatus"
                    placeholder="Статус отгрузки"
                ></CheckboxDropdown>

                <Select
                    :options="detailOptions"
                    v-model="activeDetailOption"
                    class="w-[8.8125rem]"
                ></Select>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import RadioButton from '@/components/Form/RadioButton.vue'
import { SearchField, Checkbox, CheckboxDropdown } from '@/shared/ui'
import { ref } from 'vue'
import { CategoryDropdown } from '@/entities/category'
import { categoryes } from '@/shared/consts'
import { getCategoryesForFilter } from '@/shared/helpers'
import ShipmentDatePicker from './ShipmentDatePicker.vue'
import ShipmentChart from './ShipmentChart.vue'
import Select, {
    IOption as ISelectOption
} from '@/components/Dropdowns/Select.vue'
const showOnGraph = ref<'electro-kpp' | 'electro' | 'kpp'>('electro-kpp')
const categoryIdList = ref([])
const date = ref()
const isCompare = ref(false)
const activeShipemtStatus = ref('')
const detailOptions: ISelectOption[] = [
    {
        label: 'По дням',
        value: 'string'
    },
    {
        label: 'По неделям',
        value: 'string'
    },
    {
        label: 'По месяцам',
        value: 'string'
    }
]
const activeDetailOption = ref('')
</script>
<style lang="scss"></style>
