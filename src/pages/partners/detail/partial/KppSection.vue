<template>
    <div class="bg-background p-4 rounded">
        <div
            class="pb-2.5 border-b border-gray-light mb-2.5 flex justify-between items-center"
        >
            <p class="text-blue-dark font-semibold">Продажи КПП</p>
            <p class="leading-4 text-small text-gray pr-0.5">
                Мы учитываем в факте до 50% закупок по КПП
            </p>
        </div>
        <div class="flex gap-6">
            <p class="h-5 flex items-center gap-1.5">
                <span class="text-main text-small leading-4">
                    Общее количество продаж КПП:
                </span>
                <span class="text-blue text-caption leading-5">
                    {{ formatter.sum(total) }} ₽
                </span>
            </p>
            <p class="h-5 flex items-center gap-1.5">
                <span class="text-main text-small leading-4">
                    Доля продаж КПП, учтенная в плане:
                </span>
                <span class="text-blue text-caption leading-5">
                    {{ formatter.sum(accountedPart) }} ₽
                </span>
            </p>
        </div>
    </div>
</template>
<script setup lang="ts">
import { Formatter } from '@/shared/ui/'
const formatter = new Formatter(false)
defineProps<{ total: number; accountedPart: number }>()
</script>
<style lang="scss"></style>
