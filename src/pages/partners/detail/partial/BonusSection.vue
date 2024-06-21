<template>
    <div class="g-white-block p-6 w-[24.875rem]">
        <div
            class="border-b border-gray-light pb-4 mb-4 flex items-start justify-between"
        >
            <div>
                <p class="flex gap-2 items-start">
                    <span class="font-semibold text-blue-dark leading-6">
                        Бонусы
                    </span>
                    <TooltipInfo class="block h-3.75 text-0">
                        <button
                            class="g-button g-button--orange h-5 px-1 font-normal"
                            @click="isExist = !isExist"
                        >
                            переключить вид
                        </button>
                        <p
                            class="w-[15.75rem] text-caption leading-5"
                            v-if="isExist"
                        >
                            Вы можете использовать бонусы<br />
                            для оплаты следующего заказа,<br />
                            но не более 5% от стоимости заказа.

                            <br />
                            <br />
                            Бонусы можно распределить<br />
                            по выбранным позициям в заказе,<br />
                            либо на весь заказ равномерно. Для этого<br />
                            укажите желаемый вариант списания<br />
                            при создании заказа, написав пожелание<br />
                            в комментарий к заказу на этапе<br />
                            оформления заказа в корзине.
                        </p>
                        <p v-else class="w-[15.75rem] text-caption leading-5">
                            Бонус может быть начислен по итогам<br />
                            квартала за достижение показателей.<br />
                            Также бонус может быть начислен<br />
                            за брак: если со стороны<br />
                            ТДМ подтвердили брак в заказе,<br />
                            то партнёру на счёт возвращаются<br />
                            деньги для компенсации этого возврата.
                        </p>
                    </TooltipInfo>
                </p>
                <p class="text-green">+100 000 ₽</p>
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
import CalendarIcon from '@/assets/icons/Calendar.svg'
import { ref } from 'vue'
const isExist = ref(false)
</script>
<style lang="scss"></style>
