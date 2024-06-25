<template>
    <div class="flex items-center">
        <span
            class="text-caption text-gray"
            :class="{ 'mr-[1.4375rem]': !isActive, 'mr-2': isActive }"
        >
            Использование ЛК партнером:
        </span>
        <div
            v-if="isActive"
            class="bg-green-pressed px-4 py-1 leading-5 text-white inline-block rounded-full font-semibold text-caption"
        >
            Разрешено
        </div>
        <div class="flex" v-else>
            <div
                class="bg-red px-4 py-1 leading-5 text-white inline-block rounded-full mr-2 font-semibold text-caption"
            >
                Запрещено
            </div>
            <TooltipInfo class="self-start" placement="left">
                <p class="text-caption leading-5">
                    Для того, чтобы разрешить <br />
                    использование ЛК партнёру,<br />
                    в карточке основного контрагента<br />
                    этой группы партнёров, на вкладке<br />
                    «Рейтинг» нужно поставить галочку <br />в чекбокс «Выгружать
                    в ЛК».<br />
                    Сделать это может МКС.<br />
                    Название основного контрагента —<br />
                    <a
                        href="/"
                        target="_blank"
                        class="text-blue hover:text-blue-hover active:text-blue-pressed"
                        >ООО «Ромашка».</a
                    >
                </p>
            </TooltipInfo>
        </div>
    </div>
</template>
<script setup lang="ts">
import TooltipInfo from '@/components/Tooltips/TooltipInfo.vue'

defineProps<{ isActive: boolean }>()
</script>
<style lang="scss"></style>
