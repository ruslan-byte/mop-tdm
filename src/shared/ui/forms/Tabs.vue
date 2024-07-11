<template>
    <ul class="tabs">
        <li v-for="tab of tabs">
            <button
                class="tabs__button"
                :class="{
                    'tabs__button--orange': type == 'orange',
                    'tabs__button--blue': type == 'blue',
                    'tabs__button--blue-light': type == 'blue-light',
                    'tabs__button--orange-blue': type == 'orange-blue',
                    'tabs__button--active': modelValue === tab.value
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
type ITabType = 'orange' | 'blue' | 'blue-light' | 'orange-blue'
export interface ITab {
    value: string
    label: string
    disabled?: boolean
}
withDefaults(
    defineProps<{ tabs: ITab[]; modelValue: string; type?: ITabType }>(),
    { type: 'orange' }
)
const emit = defineEmits(['update:modelValue'])
</script>
<style lang="scss">
.tabs {
    @apply flex gap-4;
    &__button {
        @apply rounded;
        &--orange {
            @apply bg-white hover:text-orange active:text-orange
      h-10 leading-6 py-2 px-4 disabled:bg-gray-pale disabled:text-gray-2 active:bg-background;

            &.tabs__button--active {
                @apply bg-orange text-white hover:bg-orange-hover active:bg-orange-pressed;
            }
        }
        &--blue-light {
            @apply px-4 py-2 leading-5 text-caption text-blue-dark hover:text-blue active:bg-background active:text-blue-dark disabled:bg-transparent disabled:text-gray-light;

            &.tabs__button--active {
                @apply bg-blue-light text-blue hover:bg-blue-pale active:bg-blue-light active:text-blue-dark;
            }
        }
        &--orange-blue {
            @apply bg-blue-light hover:bg-blue-pale hover:text-orange active:text-orange-pressed h-9  py-2 px-4 disabled:bg-blue-pale disabled:text-gray-light text-caption leading-5;

            &.tabs__button--active {
                @apply bg-orange text-white hover:bg-orange-hover active:bg-orange-pressed font-semibold;
            }
        }
        &--blue {
            @apply bg-blue-light hover:bg-blue-pale hover:text-blue active:text-blue-pressed h-9  py-2 px-4 disabled:bg-blue-pale disabled:text-gray-light text-caption leading-5;

            &.tabs__button--active {
                @apply bg-blue text-white hover:bg-blue-hover active:bg-blue-pressed font-semibold;
            }
        }
    }
}
</style>
