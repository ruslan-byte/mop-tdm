<template>
    <section class="g-white-block pl-6 py-8 pr-[2.0625rem]">
        <h3 class="text-blue-dark mb-4">Лимиты</h3>
        <div class="flex gap-12 mb-6">
            <div class="w-[9.75rem] flex-[0_0_auto]">
                <p class="text-blue text-caption mb-2 leading-5">
                    Общий размер лимита
                </p>
                <UpdateBlock :date="totalUpdateAt"></UpdateBlock>
            </div>
            <div class="w-[8.5rem]">
                <p class="text-blue text-caption mb-2 leading-5">
                    Свободные лимиты
                </p>
                <UpdateBlock :date="freeUpdateAt"></UpdateBlock>
            </div>
        </div>
        <div>
            <div class="bg-background p-4 rounded mb-4" v-for="limit of limits">
                <p class="text-gray flex gap-2 mb-1.5">
                    <MapMarkIcon class="stroke-gray"></MapMarkIcon>
                    <span class="text-gray text-small leading-4">{{
                        limit.stockName
                    }}</span>
                </p>
                <p
                    class="text-black font-semibold pb-4 mb-4 border-b border-gray-light"
                >
                    {{ limit.name }}
                </p>
                <div class="flex gap-6">
                    <div>
                        <div class="flex gap-2 items-center mb-2">
                            <div class="h-1.5 w-1.5 rounded-full bg-blue"></div>
                            <div class="text-gray text-small leading-4">
                                Общий размер лимита
                            </div>
                        </div>
                        <div class="text-green font-semibold pl-3.5 leading-4">
                            {{ formatter.sum(limit.totalLimit) }} ₽
                        </div>
                    </div>
                    <div>
                        <div class="flex gap-2 items-center mb-2">
                            <div
                                class="h-1.5 w-1.5 rounded-full bg-orange"
                            ></div>
                            <div class="text-gray text-small leading-4">
                                Свободный лимит
                            </div>
                        </div>
                        <div class="text-green font-semibold pl-3.5 leading-4">
                            {{ formatter.sum(limit.freeLimit) }} ₽
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import UpdateBlock from '@/components/UpdateBlock.vue'
import MapMarkIcon from '@/assets/icons/MapMark.svg'
import { Formatter } from '@/helpers/Formatter'
const formatter = new Formatter(false)
export interface ILimit {
    stockName: string
    name: string
    totalLimit: number
    freeLimit: number
}
defineProps<{
    limits: ILimit[]
    totalUpdateAt: string | Date
    freeUpdateAt: string | Date
}>()
</script>
<style lang="scss"></style>
