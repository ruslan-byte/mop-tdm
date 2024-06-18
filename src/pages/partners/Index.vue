<template>
  <div class="g-container py-8">
    <BreadCrumbs :links="BreadCrumbsLinks" class="mb-8"></BreadCrumbs>
    <h1 class="mb-8">Партнеры</h1>
    <SearchField class="w-[38rem]"></SearchField>
    <DropdownOverlay placeholder="По возрастанию % прироста плана">
    </DropdownOverlay>
  </div>
</template>
<script setup lang="ts">
import BreadCrumbs, { IBreadCrumbLink } from "@/components/BreadCrumbs.vue";
import SearchField from "@/components/Form/SearchField.vue";
import DropdownOverlay from "@/components/Dropdowns/DropdownOverlay.vue";
const BreadCrumbsLinks: IBreadCrumbLink[] = [
  {
    id: "bread0",
    label: "Партнеры",
  },
];
</script>
<style lang="scss"></style>
