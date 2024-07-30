<template>
    <header class="w-full bg-white h-[91px] py-[24px]">
        <div class="g-container flex justify-between">
            <div class="flex items-center gap-10">
                <router-link to="/">
                    <LogoIcon
                        class="fill-orange hover:fill-orange-hover active:fill-orange-pressed"
                    ></LogoIcon>
                </router-link>
                <nav class="text-blue-dark flex items-center gap-10">
                    <NavLink to="/">План-факт</NavLink>

                    <NavDropdown :options="sellInLinks" class="min-w-[4.25rem]"
                        >Sell In</NavDropdown
                    >
                    <NavDropdown
                        :options="sellOutLinks"
                        class="min-w-[4.9375rem]"
                        >Sell Out</NavDropdown
                    >
                    <NavLink to="/profile" class="min-w-[4.9375rem]"
                        >Мои данные</NavLink
                    >
                </nav>
            </div>
            <div class="flex items-end gap-[1.375rem] pr-px">
                <button
                    class="g-inline-button g-inline-button--gray active:stroke-gray pb-[0.1875rem]"
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
    { link: '/sell-in', name: 'Партнеры' },
    { link: '/order-shipments', name: 'Отгрузки' },
    { link: '/sku', name: 'SKU' },
    { link: '/sell-in/regions', name: 'Регионы' }
]
const sellOutLinks = [
    { link: '/partners', name: 'Партнеры' },
    { link: '/partners', name: 'Покупатели' },
    { link: '/regions', name: 'Регионы' },
    { link: '/city', name: 'Города' }
]
</script>
<style lang="scss"></style>
