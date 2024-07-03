<template>
    <div class="g-container pt-8 pb-20">
        <BreadCrumbs :links="BreadCrumbsLinks" class="mb-8"></BreadCrumbs>
        <h1 class="mb-8">Мой план-факт</h1>
        <Tabs :tabs="tabs" v-model="activeTab" class="mb-4"></Tabs>
        <PlanSection :type="activeTab"></PlanSection>
    </div>
</template>
<script setup lang="ts">
import { BreadCrumbs, IBreadCrumbLink } from '@/widgets/layout'
import Tabs from '@/components/Tabs.vue'
import type { ITab } from '@/components/Tabs.vue'
import PlanSection from './partial/PlanSection.vue'
import type { TPlanSection } from './partial/PlanSection.vue'
import { ref } from 'vue'

const BreadCrumbsLinks: IBreadCrumbLink[] = [
    {
        id: '',
        label: 'Мой план-факт'
    }
]
const activeTab = ref<TPlanSection>('month')
const tabs: ITab[] = [
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
</script>
