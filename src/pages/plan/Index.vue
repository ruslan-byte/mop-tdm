<template>
  <div class="g-container pt-8">
    <BreadCrumbs :links="BreadCrumbsLinks" class="mb-8"></BreadCrumbs>
    <h1 class="mb-8">Мой план-факт</h1>
    <Tabs :tabs="tabs" v-model="activeTab"></Tabs>
  </div>
</template>
<script setup lang="ts">
import BreadCrumbs from "@/components/BreadCrumbs.vue";
import type { IBreadCrumbLink } from "@/components/BreadCrumbs.vue";
import Tabs from "@/components/Tabs.vue";
import type { ITab } from "@/components/Tabs.vue";
import { ref } from "vue";
const BreadCrumbsLinks: IBreadCrumbLink[] = [
  {
    id: "",
    label: "Мой план-факт",
  },
];
const activeTab = ref<string>("month");
const tabs: ITab[] = [
  {
    label: "Месяц",
    value: "month",
  },
  {
    label: "Квартал",
    value: "quartal",
  },
  {
    label: "Год",
    value: "year",
  },
];
</script>
