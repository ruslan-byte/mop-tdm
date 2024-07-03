<template>
    <router-link
        class="text-blue-dark leading-6 inline-block hover:text-blue active:text-blue-dark"
        :class="{ 'pointer-events-none text-gray-2': disabled }"
        :to="to"
        ><slot></slot>
    </router-link>
</template>
<script setup lang="ts">
defineProps<{ to: string; disabled?: boolean }>()
</script>
<style lang="scss" scoped>
.router-link-exact-active {
    @apply text-blue font-semibold  border-b border-blue;
}
</style>
