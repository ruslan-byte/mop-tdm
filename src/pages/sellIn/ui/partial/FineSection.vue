<template>
    <div class="g-white-block p-6 w-[18.25rem] pb-[1.125rem]">
        <div
            class="border-b border-gray-light pb-3.5 mb-4 flex items-start justify-between"
        >
            <div>
                <p class="flex gap-2 items-start mb-2">
                    <span class="font-semibold text-blue-dark leading-6">
                        Возмещения
                    </span>
                    <TooltipInfo class="block h-3.75 text-0">
                        <p class="w-[15.75rem] text-caption leading-5">
                            Возмещения могут быть начислены<br />
                            за просрочку по оплате.<br />
                            За просрочку начисляется пеня.<br />
                            По итогам квартала эта пеня<br />
                            подсчитывается и формируется<br />
                            возмещение.
                            <br />
                            <br />
                            Возмещения начисляются в заказ<br />
                            как 5% наценка к стоимости заказа.<br />
                            По желанию можно включить<br />
                            в заказ большую сумму<br />
                            возмещений. Для этого нужно<br />
                            написать соответствующий<br />
                            комментарий при создании заказа.
                        </p>
                    </TooltipInfo>
                </p>
                <p class="text-red">-100 000 ₽</p>
            </div>
            <UpdateBlock class="max-w-[7.375rem] justify-end"></UpdateBlock>
        </div>
        <router-link
            to="/"
            class="g-inline-button g-inline-button--blue-fill inline-flex gap-2"
        >
            <CalendarIcon class="inline-block"></CalendarIcon> График
            платежей</router-link
        >
    </div>
</template>
<script setup lang="ts">
import TooltipInfo from '@/components/Tooltips/TooltipInfo.vue'
import UpdateBlock from '@/components/UpdateBlock.vue'
import { CalendarIcon } from '@/shared/Icons'
import { ref } from 'vue'
const isExist = ref(false)
</script>
<style lang="scss"></style>
