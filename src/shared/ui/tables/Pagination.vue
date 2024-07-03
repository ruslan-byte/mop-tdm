<template>
    <div class="flex">
        <router-link
            v-if="firstLinkItem?.link"
            :to="firstLinkItem.link"
            @click="() => (firstLinkItem ? changePage(firstLinkItem.id) : '')"
            class="w-[2.375rem] h-[1.875rem] bg-background g-inline-button stroke-gray g-inline-button--orange flex items-center justify-center"
        >
            <DoubleArrowIcon></DoubleArrowIcon>
        </router-link>
        <p
            v-else
            class="w-[2.375rem] h-[1.875rem] bg-background g-inline-button g-inline-button--orange flex items-center justify-center hover:stroke-gray-light stroke-gray-light"
            disabled
        >
            <DoubleArrowIcon></DoubleArrowIcon>
        </p>
        <router-link
            v-if="prevLinkItem?.link"
            :to="prevLinkItem.link"
            @click="() => (prevLinkItem ? changePage(prevLinkItem.id) : '')"
            class="w-[2.375rem] h-[1.875rem] bg-background g-inline-button stroke-gray g-inline-button--orange flex items-center justify-center"
        >
            <ArrowIcon class="-rotate-90"></ArrowIcon>
        </router-link>
        <p
            v-else
            class="w-[2.375rem] h-[1.875rem] bg-background g-inline-button g-inline-button--orange flex items-center justify-center hover:stroke-gray-light stroke-gray-light"
            disabled
        >
            <ArrowIcon class="-rotate-90"></ArrowIcon>
        </p>
        <template v-for="linkItem of links">
            <router-link
                v-if="linkItem.link"
                :to="linkItem.link"
                @click="changePage(linkItem.id)"
                class="w-[1.875rem] h-[1.875rem] bg-background g-inline-button text-gray g-inline-button--orange flex items-center justify-center active:bg-orange-pressed active:text-white"
                :class="{
                    'bg-orange text-white hover:text-white hover:bg-orange-hover':
                        linkItem.id == modelValue
                }"
            >
                {{ linkItem.name }}
            </router-link>
            <div
                v-else
                class="w-[2.375rem] h-[1.875rem] bg-background text-gray flex items-center justify-center"
            >
                {{ linkItem.name }}
            </div>
        </template>
        <router-link
            v-if="nextLinkItem?.link"
            :to="nextLinkItem.link"
            @click="() => (nextLinkItem ? changePage(nextLinkItem.id) : '')"
            class="w-[2.375rem] h-[1.875rem] bg-background g-inline-button stroke-gray g-inline-button--orange flex items-center justify-center"
        >
            <ArrowIcon class="rotate-90"></ArrowIcon>
        </router-link>
        <p
            v-else
            class="w-[2.375rem] h-[1.875rem] bg-background g-inline-button g-inline-button--orange flex items-center justify-center hover:stroke-gray-light stroke-gray-light"
            disabled
        >
            <ArrowIcon class="rotate-90"></ArrowIcon>
        </p>
        <router-link
            v-if="lastLinkItem?.link"
            :to="lastLinkItem.link"
            @click="() => (lastLinkItem ? changePage(lastLinkItem.id) : '')"
            class="w-[2.375rem] h-[1.875rem] bg-background g-inline-button stroke-gray g-inline-button--orange flex items-center justify-center"
        >
            <DoubleArrowIcon class="rotate-180"></DoubleArrowIcon>
        </router-link>
        <p
            v-else
            class="w-[2.375rem] h-[1.875rem] bg-background g-inline-button g-inline-button--orange flex items-center justify-center hover:stroke-gray-light stroke-gray-light"
            disabled
        >
            <DoubleArrowIcon class="rotate-180"></DoubleArrowIcon>
        </p>
    </div>
</template>
<script setup lang="ts">
import { ArrowIcon, DoubleArrowIcon } from '@/shared/Icons'
import { computed } from 'vue'
interface ILinkItem {
    id: number
    name: string
    link?: string
}

const props = defineProps<{
    modelValue: number
    links: ILinkItem[]
}>()
const emit = defineEmits(['update:modelValue'])
function changePage(newPage: number) {
    emit('update:modelValue', newPage)
}

const prevLinkItem = computed(() => {
    const prevPageLinkItem: ILinkItem | undefined = props.links.find(
        (link, index, arr) => {
            if (arr[index + 1]) return arr[index + 1].id === props.modelValue
            return false
        }
    )
    return prevPageLinkItem ?? null
})
const nextLinkItem = computed(() => {
    const nextPageLinkItem: ILinkItem | undefined = props.links.find(
        (link, index, arr) => {
            if (arr[index - 1]) return arr[index - 1].id === props.modelValue
            return false
        }
    )
    return nextPageLinkItem ?? null
})
const firstLinkItem = computed(() => {
    return props.modelValue !== props.links[0].id ? props.links[0] : null
})
const lastLinkItem = computed(() => {
    return props.modelValue !== props.links[props.links.length - 1].id
        ? props.links[props.links.length - 1]
        : null
})
</script>
<style lang="scss"></style>
