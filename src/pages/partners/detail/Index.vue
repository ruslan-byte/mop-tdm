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
            <div class="w-[44.5625rem]">
                <PlanSection class="mb-6"></PlanSection>
                <div class="flex items-center justify-between mb-6">
                    <p class="text-blue-dark text-small leading-4">
                        Вы можете задать вопрос по любому из блоков на этой
                        странице.
                    </p>
                    <button
                        class="g-button g-button--linear-blue px-4 py-2 h-8 font-normal text-small"
                    >
                        Задать вопрос
                    </button>
                </div>
                <div class="flex gap-6">
                    <BonusSection></BonusSection>
                    <FineSection></FineSection>
                </div>
            </div>
            <div class="g-white-block flex-1"></div>
        </div>
    </div>
</template>
<script setup lang="ts">
import PlanSection from './partial/PlanSection.vue'
import BreadCrumbs, { IBreadCrumbLink } from '@/components/BreadCrumbs.vue'
import BonusSection from './partial/BonusSection.vue'
import FineSection from './partial/FineSection.vue'

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
