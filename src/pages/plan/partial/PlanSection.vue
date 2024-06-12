<template>
  <section class="g-white-block">
    <div class="flex gap-2 mb-4">
      <h3 class="text-blue-dark">Выполнение плана продаж</h3>
      <h4 class="text-blue">(месяц)</h4>
    </div>
    <div>
      <Tabs :tabs="tabs" v-model="activeTab" type="blue-light"></Tabs>
    </div>
  </section>
</template>
<script setup lang="ts">
import Tabs from "@/components/Tabs.vue";
import type { ITab } from "@/components/Tabs.vue";
import { ref } from "vue";
const activeTab = ref("all");
const tabs: ITab[] = [
  {
    value: "all",
    label: "Все товары",
  },
  {
    value: "electro",
    label: "Электротехника",
  },
  {
    value: "kpp",
    label: "КПП",
  },
];
</script>
<style lang="scss"></style>
