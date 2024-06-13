<template>
  <div class="flex items-center gap-6 pb-4 border-b border-gray-pale">
    <p class="text-main">
      План:
      <span class="font-semibold leading-6 text-blue-dark">
        60 000 000,00 ₽
      </span>
    </p>
    <p class="text-main">
      Факт:
      <router-link
        class="mr-2 leading-6 text-blue border-b border-blue hover:text-blue-hover hover:border-blue-hover active:text-blue-pressed active:border-blue-pressed"
        to="order-shipments"
      >
        54 670 878,00 ₽
      </router-link>
      (Электротехника - 60 000 000,00 ₽, КПП - 24 670 878, 00 ₽)
    </p>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss"></style>
