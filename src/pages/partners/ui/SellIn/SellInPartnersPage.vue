<template>
    <div class="g-container py-8">
        <BreadCrumbs :links="BreadCrumbsLinks" class="mb-8"></BreadCrumbs>
        <h1 class="mb-8 leading-[2.25rem]">Партнеры</h1>
        <SellInPartnersList></SellInPartnersList>
    </div>
</template>
<script setup lang="ts">
import { BreadCrumbs, IBreadCrumbLink } from '@/widgets/layout'
import SellInPartnersList from './SellInPartnersList.vue'
const BreadCrumbsLinks: IBreadCrumbLink[] = [
    {
        id: 'sell-in',
        label: 'Sell In',
        to: '/sell-in'
    },
    {
        id: 'bread0',
        label: 'Партнеры'
    }
]
</script>
<style lang="scss"></style>
