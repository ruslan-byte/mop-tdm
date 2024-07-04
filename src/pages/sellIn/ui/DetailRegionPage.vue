<template>
    <div class="g-container">
        <div class="flex justify-between">
            <Checkbox v-model="checked">
                <p class="ml-1 text-small text-main">
                    Сравнить с аналогоичным периодом прошлого года
                </p>
            </Checkbox>
            {{ checked }}
        </div>
    </div>
</template>
<script setup lang="ts">
import { Checkbox } from '@/shared/ui'
import { ref } from 'vue'
const checked = ref(false)
</script>
<style lang="scss"></style>
