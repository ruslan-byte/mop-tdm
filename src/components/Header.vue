<template>
  <header class="w-full bg-white h-[91px] py-[24px]">
    <div class="g-container flex gap-10 items-center">
      <router-link to="/">
        <LogoIcon
          class="fill-orange hover:fill-orange-hover active:fill-orange-pressed"
        ></LogoIcon>
      </router-link>
      <nav>
        <router-link
          class="text-blue-dark leading-6 inline-block mr-10"
          active-class="text-blue border-b border-blue"
          to="/"
          >Мой план-факт</router-link
        >
        <router-link
          class="text-blue-dark leading-6 inline-block mr-10"
          to="/orders-shipments"
          >Отгрузки</router-link
        >
        <router-link
          class="text-blue-dark leading-6 inline-block mr-10"
          to="/partners"
          >Партнеры</router-link
        >
        <router-link class="text-blue-dark leading-6 inline-block" to="/profile"
          >Мои данные</router-link
        >
      </nav>
      <PersoneDropdown></PersoneDropdown>
    </div>
  </header>
</template>
<script setup lang="ts">
import LogoIcon from "@/assets/icons/Logo.svg";
import PersoneDropdown from "@/components/PersoneDropdown.vue";
</script>
<style lang="scss"></style>
