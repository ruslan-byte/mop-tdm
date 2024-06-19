<template>
    <div class="g-container py-8">
        <BreadCrumbs :links="breadCrumbsLink" class="mb-8"></BreadCrumbs>
        <div class="flex justify-between mb-10">
            <h1>Энергосберегающие технологии</h1>
            <div class="flex items-center">
                <span class="text-caption text-gray mr-2">
                    Использование ЛК партнером:
                </span>
                <div
                    class="bg-green-pressed px-4 py-1 leading-5 text-white inline-block rounded-full"
                >
                    Разрешено
                </div>
            </div>
        </div>
        <div class="flex gap-8">
            <PlanSection class="w-[44.5625rem]"></PlanSection>
            <div class="g-white-block flex-1"></div>
        </div>
    </div>
</template>
<script setup lang="ts">
import PlanSection from './partial/PlanSection.vue'
import BreadCrumbs, { IBreadCrumbLink } from '@/components/BreadCrumbs.vue'
const breadCrumbsLink: IBreadCrumbLink[] = [
    {
        id: '0',
        label: 'Главная',
        to: '/'
    },
    {
        id: '0',
        label: 'Партнеры',
        to: '/partners'
    },
    {
        id: '0',
        label: 'Энергосберегающие технологии'
    }
]
</script>
<style lang="scss"></style>
