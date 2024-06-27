<template>
    <header class="w-full bg-white h-[91px] py-[24px]">
        <div class="g-container flex justify-between">
            <div class="flex items-center gap-[2.620625rem]">
                <router-link to="/">
                    <LogoIcon
                        class="fill-orange hover:fill-orange-hover active:fill-orange-pressed"
                    ></LogoIcon>
                </router-link>
                <nav class="text-blue-dark flex items-center gap-10">
                    <NavLink to="/">Мой план-факт</NavLink>
                    <NavLink to="/order-shipments">Отгрузки</NavLink>
                    <NavDropdown :options="sellInLinks">Sell In</NavDropdown>
                    <NavDropdown :options="sellOutLinks">Sell Out</NavDropdown>
                    <NavLink to="/sku">SKU</NavLink>
                    <NavLink to="/profile">Мои данные</NavLink>
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
import UserDropdown from './UserDropdown.vue'
import NavLink from './NavLink.vue'
import { NotificationIcon } from '@/shared/Icons'
import NavDropdown from './NavDropdown.vue'
const sellInLinks = [
    { link: '/partners', name: 'Партнеры' },
    { link: '/regions', name: 'Регионы' },
    { link: '/city', name: 'Города' }
]
const sellOutLinks = [
    { link: '/partners', name: 'Партнеры' },
    { link: '/partners', name: 'Покупатели' },
    { link: '/regions', name: 'Регионы' },
    { link: '/city', name: 'Города' }
]
</script>
<style lang="scss"></style>
