<template>
    <div class="relative group" tabindex="-1">
        <div class="group cursor-pointer flex gap-4 font-sans">
            <div
                class="w-[42px] h-[42px] rounded-full bg-gray-pale px-2.5 py-[9px]"
            >
                <PersoneIcon class="fill-gray-light"></PersoneIcon>
            </div>
            <div>
                <div class="flex gap-2 items-center mb-2">
                    <p class="text-blue-dark group-hover:text-blue-hover">
                        Арсений Устимов
                    </p>
                    <ArrowIcon class="stroke-blue rotate-180 h-2"></ArrowIcon>
                </div>
                <p
                    class="text-main text-small leading-3 font-normal group-hover:text-blue-hover"
                >
                    Менеджер отдела продаж
                </p>
            </div>
        </div>
        <div
            class="absolute bg-white top-[calc(100%+16px)] w-[217px] rounded-[5px] shadow-[4px_4px_20px_0px_#E3E5EA] hidden group-focus-within:block"
        >
            <router-link
                class="flex gap-4 h-[52px] w-full p-4 text-main hover:bg-gray-pale hover:text-blue items-center"
                to="profile"
            >
                <PersoneIcon class="fill-blue h-4 w-4"></PersoneIcon>
                <span class="leading-5"> Мои данные </span>
            </router-link>
            <button
                class="flex gap-4 items-center h-[52px] w-full p-4 text-main border border-gray-pale rounded-b-[5px] hover:bg-gray-pale hover:text-blue"
            >
                <ExitIcon
                    class="fill-blue w-[15px] h-4 inline-block"
                ></ExitIcon>
                Выход
            </button>
        </div>
    </div>
</template>
<script setup lang="ts">
import { PersoneIcon } from '@/shared/Icons'
import { ArrowIcon } from '@/shared/Icons'
import { ExitIcon } from '@/shared/Icons'
</script>
<style lang="scss"></style>
