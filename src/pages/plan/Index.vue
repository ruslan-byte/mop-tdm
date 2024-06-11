<template>
  <div class="g-container pt-8">
    <BreadCrumbs :links="BreadCrumbsLinks" class="mb-8"></BreadCrumbs>
    <h1 class="mb-8">Мой план-факт</h1>
  </div>
</template>
<script setup lang="ts">
import BreadCrumbs from "@/components/BreadCrumbs.vue";
import type { IBreadCrumbLink } from "@/components/BreadCrumbs.vue";
const BreadCrumbsLinks: IBreadCrumbLink[] = [
  {
    id: "",
    label: "Мой план-факт",
  },
];
</script>
