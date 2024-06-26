<template>
    <router-link
        class="leading-6 inline-block tracking-0.2 hover:text-blue active:text-blue-dark"
        active-class="text-blue border-b border-blue"
        :class="{ 'pointer-events-none text-gray-2': disabled }"
        :to="to"
        ><slot></slot>
    </router-link>
</template>
<script setup lang="ts">
defineProps<{ to: string; disabled?: boolean }>()
</script>
<style lang="scss"></style>
