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
                    <NavItem class="mr-10" to="/">Мой план-факт</NavItem>
                    <NavItem class="mr-10" to="/order-shipments"
                        >Отгрузки</NavItem
                    >
                    <NavItem class="mr-10" to="/partners">Партнеры</NavItem>
                    <NavItem class="mr-10" to="/sku">SKU</NavItem>
                    <NavItem class="mr-10" to="/profile">Мои данные</NavItem>
                </nav>
            </div>
            <div class="flex items-end gap-5">
                <NotificationButton class="mb-1"></NotificationButton>
                <PersoneDropdown></PersoneDropdown>
            </div>
        </div>
    </header>
</template>
<script setup lang="ts">
import { LogoIcon } from '@/shared/Icons'
import NotificationButton from '@/components/Header/NotificationButton.vue'
import PersoneDropdown from '@/components/Header/PersoneDropdown.vue'
import NavItem from '@/components/Header/NavItem.vue'
</script>
<style lang="scss"></style>
