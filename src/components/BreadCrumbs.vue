<template>
    <nav class="flex items-center gap-1.5">
        <template v-for="(link, index) of links">
            <router-link
                v-if="link.to"
                :to="link.to"
                class="leading-4 text-small text-gray hover:text-main active:text-gray-2"
                >{{ link.label }}</router-link
            >
            <p class="leading-4 text-small" v-else>{{ link.label }}</p>
            <BreadCrumbsArrowIcon
                class="stroke-black w-2"
                v-if="index != links.length - 1"
            ></BreadCrumbsArrowIcon>
        </template>
    </nav>
</template>
<script setup lang="ts">
import BreadCrumbsArrowIcon from '@/assets/icons/BreadCrumbsArrow.svg'
export interface IBreadCrumbLink {
    id: string
    label: string
    to?: string
}
defineProps<{
    links: IBreadCrumbLink[]
}>()
</script>
<style lang="scss"></style>
