<template>
    <div class="relative category-dropdown">
        <label class="relative">
            <input
                type="text"
                class="h-10 rounded border border-gray-light placeholder:text-caption placeholder:text-main px-4 hover:border-blue-hover bg-white cursor-pointer"
                placeholder="Категория"
                disabled
            />
            <ArrowIcon
                class="stroke-gray top-1/2 right-4 absolute -translate-y-1/2 rotate-180 pointer-events-none"
            ></ArrowIcon>
        </label>
        <div
            class="absolute top-full translate-y-2.5 bg-white w-[31.4375rem] py-8 px-6 rounded shadow"
        >
            <p class="font-semibold text-main mb-4">Выберите категории</p>
            <SearchField
                placeholder="Введите название категории"
                class="w-[22.3125rem] mb-4"
                v-model="searchText"
            ></SearchField>
            <div>
                <Tree
                    :nodes="options"
                    :search-text="searchText"
                    :use-checkbox="true"
                    :useIcon="true"
                    rowHoverBackground="white"
                >
                    <template #checkbox="{ checked, node }">
                        <Checkbox
                            class="mr-2 ml-5"
                            is-orange
                            :model-value="checked"
                            @update:model-value="
                                newVal =>
                                    toggleCheckboxWithAllChildren(node, newVal)
                            "
                        >
                        </Checkbox>
                    </template>
                    <template #iconActive>
                        <ArrowIcon class="stroke-gray rotate-90"></ArrowIcon>
                    </template>
                    <template #iconInactive>
                        <ArrowIcon class="stroke-gray rotate-180"></ArrowIcon>
                    </template>
                </Tree>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ICategoryFilterOption } from '@/shared/types'
import { ArrowIcon } from '@/shared/Icons'
import { SearchField } from '@/shared/ui'
import Tree from 'vue3-tree'
import 'vue3-tree/dist/style.css'
import { ref } from 'vue'
import { Checkbox } from '@/shared/ui'
interface INodeElement {
    checked: boolean
    expanded: boolean
    id: number
    indeterminate: boolean
    label: string
    nodes: INodeElement[] | null
}
const props = defineProps<{ options: ICategoryFilterOption[] }>()

const searchText = ref('')
const options = ref(props.options)

function toggleCheckboxWithAllChildren(node: INodeElement, isChecked: boolean) {
    node.checked = isChecked
    if (node.nodes)
        node.nodes.forEach(node => {
            toggleCheckboxWithAllChildren(node, isChecked)
        })
}
</script>
<style lang="scss">
.category-dropdown {
    .tree-row-item-icon-wrapper {
        @apply min-w-4;
    }
    .tree-row-txt {
        @apply leading-4 text-caption font-semibold;
    }
    .tree-list .tree-list .tree-row-txt {
        @apply font-normal;
    }
    .tree-row-item {
        @apply cursor-pointer hover:bg-blue-pale;
    }
}
</style>
