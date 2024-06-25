<template>
    <div class="g-white-block p-6 pr-8">
        <h3 class="text-blue-dark mb-4">Логин и пароль</h3>
        <template v-if="data">
            <label class="block mb-4 pb-4 border-gray-pale border-b">
                <div class="text-blue text-caption leading-5 mb-1.5">Логин</div>
                <div class="text-blue-dark">{{ data.login }}</div>
            </label>
            <label class="block">
                <div class="text-blue text-caption leading-5 mb-1.5">
                    Пароль
                </div>
                <div>{{ data.password }}</div>
            </label>
        </template>
        <template v-else>
            <label class="block mb-4 pb-3.75 border-gray-pale border-b">
                <div class="text-blue text-caption leading-5 mb-1.5">Логин</div>
                <div class="h-1.25 flex items-center gap-[0.1875rem]">
                    <div
                        class="h-1.25 w-1.25 rounded-full bg-main"
                        v-for="i of 8"
                    ></div>
                </div>
            </label>
            <label class="block mb-4 pb-3.75 border-gray-pale border-b">
                <div class="text-blue text-caption leading-5 mb-1.5">
                    Пароль
                </div>
                <div class="h-1.25 flex items-center gap-[0.1875rem]">
                    <div
                        class="h-1.25 w-1.25 rounded-full bg-main"
                        v-for="i of 8"
                    ></div>
                </div>
            </label>
            <div class="flex gap-4">
                <WarningIcon
                    class="fill-yellow w-6 h-5 flex-[0_0_auto]"
                ></WarningIcon>
                <p class="text-small text-gray leading-4">
                    Партнер изменил логин-пароль в ЛК. Теперь<br />
                    зайти в личный кабинет партнера без его ведома невозможно
                </p>
            </div>
        </template>
    </div>
</template>
<script setup lang="ts">
import { WarningIcon } from '@/shared/Icons'
defineProps<{
    data?: {
        login: string
        password: string
    }
}>()
</script>
<style lang="scss"></style>
