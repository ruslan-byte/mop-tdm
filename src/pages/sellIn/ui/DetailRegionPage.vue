<template>
    <div class="g-container">
        <div class="flex justify-between pt-5">
            <CategoryDropdown
                v-model="categoryIdList"
                :options="getCategoryesForFilter(categoryes)"
            >
            </CategoryDropdown>
            {{ categoryIdList }}
        </div>
    </div>
</template>
<script setup lang="ts">
import { CategoryDropdown } from '@/entities/category'
import { categoryes } from '@/shared/consts'
import { getCategoryesForFilter } from '@/shared/helpers'
import { ref } from 'vue'
const categoryIdList = ref([1175])
</script>
<style lang="scss"></style>
