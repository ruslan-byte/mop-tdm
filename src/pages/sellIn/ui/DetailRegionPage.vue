<template>
    <div class="g-container">
        <div class="flex justify-between pt-5">
            <CategoryDropdown :options="getCategoryesForFilter(categoryes)">
            </CategoryDropdown>
        </div>
    </div>
</template>
<script setup lang="ts">
import { CategoryDropdown } from '@/entities/category'
import { categoryes } from '@/shared/consts'
import { getCategoryesForFilter } from '@/shared/helpers'
</script>
<style lang="scss"></style>
