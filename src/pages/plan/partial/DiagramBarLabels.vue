<template>
  <div class="absolute left-0 top-0 right-0 bottom-0 pointer-events-none">
    <div
      class="absolute text-very-small text-green -translate-x-1/2 leading-3.5"
      v-for="item of labels"
      :style="`left:${item.x}px; top:${item.y - 4 - 14}px`"
    >
      {{ item.label }}
    </div>
  </div>
</template>
<script setup lang="ts">
export interface ILabel {
  id: string;
  label: string;
  x: number;
  y: number;
}
const props = defineProps<{ labels?: ILabel[] }>();
</script>
<style lang="scss"></style>
