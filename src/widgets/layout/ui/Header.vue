<template>
    <header class="w-full bg-white h-[91px] py-[24px]">
        <div class="g-container flex justify-between">
            <div class="flex items-center gap-[2.620625rem]">
                <router-link to="/">
                    <LogoIcon
                        class="fill-orange hover:fill-orange-hover active:fill-orange-pressed"
                    ></LogoIcon>
                </router-link>
                <nav class="text-blue-dark">
                    <NavLink class="mr-10" to="/">Мой план-факт</NavLink>
                    <NavLink class="mr-10" to="/order-shipments"
                        >Отгрузки</NavLink
                    >
                    <NavLink class="mr-10" to="/partners">Партнеры</NavLink>
                    <NavLink class="mr-10" to="/sku">SKU</NavLink>
                    <NavLink class="mr-10" to="/profile">Мои данные</NavLink>
                </nav>
            </div>
            <div class="flex items-end gap-5">
                <button
                    class="g-inline-button g-inline-button--gray active:stroke-gray"
                >
                    <NotificationIcon class="stroke-0.5"></NotificationIcon>
                </button>
                <UserDropdown></UserDropdown>
            </div>
        </div>
    </header>
</template>
<script setup lang="ts">
import { LogoIcon } from '@/shared/Icons'
import { UserDropdown } from '@/entities/user'
import NavLink from './NavLink.vue'
import { NotificationIcon } from '@/shared/Icons'
</script>
<style lang="scss"></style>
