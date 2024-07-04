<template>
    <div class="g-container">
        <div class="flex justify-between">
            <ShipmentDatePicker v-model="date"></ShipmentDatePicker>
            <div>
                {{ date }}
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ShipmentDatePicker } from '@/widgets/shipments'
import { ref } from 'vue'
const date = ref()
</script>
<style lang="scss"></style>
