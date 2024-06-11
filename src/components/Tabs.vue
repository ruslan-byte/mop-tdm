<template>
  <ul class="flex gap-4">
    <li v-for="tab of tabs">
      <button
        class="h-10 py-2 px-4 leading-6 rounded disabled:bg-gray-pale disabled:text-gray-2"
        :class="{
          'bg-orange text-white hover:bg-orange-hover active:bg-orange-pressed':
            modelValue === tab.value,
          'bg-white hover:text-orange active:text-orange':
            modelValue !== tab.value,
        }"
        :disabled="tab.disabled"
        @click="emit('update:modelValue', tab.value)"
      >
        {{ tab.label }}
      </button>
    </li>
  </ul>
</template>
<script setup lang="ts">
export interface ITab {
  value: string;
  label: string;
  disabled?: boolean;
}
defineProps<{ tabs: ITab[]; modelValue: string }>();
const emit = defineEmits(["update:modelValue"]);
</script>
<style lang="scss"></style>
