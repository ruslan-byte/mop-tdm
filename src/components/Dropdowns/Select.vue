<template>
  <label
    class="inline-block relative"
    ref="select"
    @focus="showDetail"
    @blur="hideDetail"
    tabindex="-1"
  >
    <div class="relative rounded cursor-pointer w-full group">
      <input
        type="text"
        class="h-10 w-full rounded text-caption pr-7 pl-4 py-2.5 text-blue leading-5 pointer-events-none group-hover:bg-background group-hover:text-blue-hover"
        disabled
        :class="{
          'bg-blue-light': !disabled,
          'bg-background text-gray-2 group-hover:text-gray-2': disabled,
        }"
        :value="activeLabel"
      />
      <ArrowIcon
        class="stroke-blue rotate-180 absolute right-4 top-1/2 -translate-y-1/2"
        :class="{ 'stroke-gray-2': disabled }"
      ></ArrowIcon>
    </div>
    <div
      class="absolute w-full"
      v-if="isDetailShow"
      :class="{
        'top-full translate-y-2': placement == 'bottom',
        'bottom-full -translate-y-2': placement == 'top',
      }"
    >
      <div
        class="p-4 text-main rounded bg-white text-caption leading-5 cursor-pointer hover:text-blue border-b border-gray-light last:border-none shadow"
        @click="setActiveValue(option)"
        v-for="option of options"
      >
        {{ option.label }}
      </div>
    </div>
  </label>
</template>
<script setup lang="ts">
import ArrowIcon from "@/assets/icons/Arrow.svg";
import { ref, computed } from "vue";
const placement = ref<"top" | "bottom">("bottom");
const select = ref<HTMLLabelElement>();
const isDetailShow = ref<boolean>(false);
const emit = defineEmits(["update:modelValue"]);
export interface IOption {
  label: string;
  value: string;
}
const props = defineProps<{
  disabled?: boolean;
  options: IOption[];
  modelValue?: string;
}>();
function showDetail() {
  if (props.disabled) return;
  calculatePlacemant();
  isDetailShow.value = true;
}
function calculatePlacemant() {
  if (select.value) {
    placement.value =
      select.value.getBoundingClientRect().y +
        300 +
        select.value.getBoundingClientRect().height +
        8 >
      window.innerHeight
        ? "top"
        : "bottom";
  }
}
function setActiveValue(option: IOption) {
  emit("update:modelValue", option.value);
  select.value?.blur();
}
function hideDetail() {
  isDetailShow.value = false;
}
const activeLabel = computed(() => {
  const option = props.options.find(
    (option) => option.value == props.modelValue
  );
  if (option) return option.label;
});
</script>
<style lang="scss"></style>
