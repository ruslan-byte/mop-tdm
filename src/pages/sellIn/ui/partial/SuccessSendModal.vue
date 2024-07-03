<template>
    <Modal :is-show="true" @close="emit('close')">
        <div class="p-6 pt-4 w-[24.875rem]">
            <SuccessIcon
                class="h-8 w-8 fill-green mt-[0.8125rem] mx-auto mb-4"
            ></SuccessIcon>
            <p class="text-blue-dark font-semibold mx-auto w-fit mb-2">
                Запрос отправлен Директору ДП.
            </p>
            <p class="text-main text-center mb-6">
                После его подтверждения запрос уйдёт<br />
                в отдел аналитики.
            </p>
            <button
                @click="emit('close')"
                class="g-button g-button--linear-blue mx-auto block px-[6.0625rem]"
            >
                Хорошо
            </button>
        </div>
        <template v-slot:cross>
            <button class="right-6 top-4 absolute group" @click="emit('close')">
                <CrossLargeIcon
                    class="stroke-main h-[0.8125rem] w-[0.8125rem] group-hover:stroke-gray group-active:stroke-black"
                ></CrossLargeIcon>
            </button>
        </template>
    </Modal>
</template>
<script setup lang="ts">
import { Modal } from '@/shared/ui/'
import { SuccessIcon, CrossLargeIcon } from '@/shared/Icons'
const emit = defineEmits(['close'])
</script>
<style lang="scss"></style>
