<template>
    <div class="g-container pb-20 pt-8">
        <BreadCrumbs :links="BreadCrumbsLinks" class="mb-8"></BreadCrumbs>
        <RegionsBlock></RegionsBlock>
    </div>
</template>
<script setup lang="ts">
import { RegionsBlock } from '@/widgets/statistic'
import { BreadCrumbs, IBreadCrumbLink } from '@/widgets/layout'
const BreadCrumbsLinks: IBreadCrumbLink[] = [
    {
        id: '0',
        label: 'Главная',
        to: '/'
    },
    {
        id: '0',
        label: 'Sell In',
        to: '/'
    },
    {
        id: '0',
        label: 'Регионы'
    }
]
</script>
<style lang="scss"></style>
