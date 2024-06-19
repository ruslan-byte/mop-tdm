<template>
    <label
        class="g-radio-button"
        :class="{
            'g-radio-button--active': isActive,
            'g-radio-button--disabled': disabled
        }"
    >
        <input
            class="hidden"
            type="radio"
            :disabled="disabled"
            :checked="isActive"
            @change="emit('change')"
        />
        <RadioIcon></RadioIcon>
        <slot />
    </label>
</template>
<script setup lang="ts">
import RadioIcon from '@/assets/icons/Radio.svg'
defineProps<{ disabled?: boolean; isActive: boolean }>()
const emit = defineEmits(['change'])
</script>
<style lang="scss"></style>
