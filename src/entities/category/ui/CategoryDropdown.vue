<template>
    <div class="relative category-dropdown" v-click-outside="hideDetail">
        <button
            class="relative inline-block pointer-events-auto group"
            @click="showDetail"
        >
            <input
                type="text"
                class="h-10 rounded border border-gray-light placeholder:text-caption placeholder:text-main px-4 group-hover:border-blue-hover bg-white cursor-pointer pointer-events-none"
                placeholder="Категория"
                disabled
                @click="showDetail"
            />
            <ArrowIcon
                class="stroke-gray top-1/2 right-4 absolute -translate-y-1/2 rotate-180 pointer-events-none"
            ></ArrowIcon>
        </button>
        <div
            class="absolute top-full translate-y-2.5 bg-white w-[31.4375rem] py-8 px-6 rounded shadow"
            v-if="isDetailShow"
        >
            <p class="font-semibold text-main mb-4">Выберите категории</p>
            <SearchField
                placeholder="Введите название категории"
                class="w-[22.3125rem] mb-4"
                v-model="searchText"
            ></SearchField>
            <div class="max-h-[28.4375rem] overflow-auto g-scrollbar mb-8">
                <Tree
                    :nodes="nodeOptionsList"
                    :search-text="searchText"
                    :use-checkbox="true"
                    :useIcon="true"
                    rowHoverBackground="white"
                    :gap="8"
                >
                    <template #checkbox="{ checked, node }">
                        <Checkbox
                            class="mr-2 ml-5"
                            is-orange
                            :model-value="checked"
                            @update:model-value="
                                newVal => {
                                    toggleCheckboxWithAllChildren(node, newVal)
                                }
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
            <div class="flex gap-6 items-center">
                <button
                    class="g-button g-button--linear-blue"
                    @click="applyCategoryes"
                >
                    Применить
                </button>
                <button
                    class="g-inline-button g-inline-button--gray-black flex items-center gap-1"
                    @click="resetCategoryes"
                >
                    Сбросить
                    <CrossIcon></CrossIcon>
                </button>
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
import { onMounted, ref } from 'vue'
import { Checkbox } from '@/shared/ui'
import { CrossIcon } from '@/shared/Icons'
import { vClickOutside } from '@/shared/ui'

interface INodeElement {
    checked: boolean
    expanded?: boolean
    id: number
    indeterminate?: boolean
    label: string
    nodes: INodeElement[] | null
}

const props = defineProps<{
    options: ICategoryFilterOption[]
    modelValue: number[]
}>()
const emit = defineEmits(['update:modelValue'])
const searchText = ref('')

function toggleCheckboxWithAllChildren(node: INodeElement, isChecked: boolean) {
    node.checked = isChecked
    if (node.nodes)
        node.nodes.forEach(node => {
            toggleCheckboxWithAllChildren(node, isChecked)
        })
}

const nodeOptionsList = ref<INodeElement[]>([])

function getNodeList(
    options: ICategoryFilterOption[],
    isParentChecked?: boolean
): INodeElement[] {
    return options.map(option => {
        const isChecked =
            props.modelValue.includes(option.id) || (isParentChecked ?? false)
        const ChildrenNodeList = option.nodes
            ? getNodeList(option.nodes, isChecked)
            : null
        return {
            checked: isChecked,
            id: option.id,
            expanded: isCheckedElementExist(ChildrenNodeList),
            label: option.label,
            nodes: ChildrenNodeList
        }
    })
}

function initNodeList() {
    nodeOptionsList.value = getNodeList(props.options)
}
function applyCategoryes() {
    emit('update:modelValue', getCheckedId(nodeOptionsList.value))
    hideDetail()
}
function resetCategoryes() {
    emit('update:modelValue', [])
    hideDetail()
}

function getCheckedId(nodeList: INodeElement[]) {
    const res: number[] = []
    nodeList.forEach(nodeItem => {
        if (nodeItem.checked) res.push(nodeItem.id)
        else if (nodeItem.nodes) res.push(...getCheckedId(nodeItem.nodes))
    })
    return res
}

function isCheckedElementExist(nodeList: INodeElement[] | null): boolean {
    if (!nodeList) return false

    const isExistElementChecked: boolean =
        nodeList.find(node => node.checked)?.checked ?? false

    if (isExistElementChecked) return true

    return nodeList.reduce((res: boolean, node: INodeElement) => {
        return res || isCheckedElementExist(node.nodes)
    }, false)
}
const isDetailShow = ref(false)
function showDetail() {
    initNodeList()
    isDetailShow.value = true
}
function hideDetail() {
    isDetailShow.value = false
}
onMounted(() => {
    initNodeList()
})
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
        @apply cursor-pointer  p-0;
    }
}
</style>
