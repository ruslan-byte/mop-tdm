<template>
    <div
        class="relative"
        v-click-outside="
            () => {
                isDetailShow = false
            }
        "
    >
        <button
            class="group flex gap-2 items-center h-6"
            :disabled="disabled"
            @click="() => (isDetailShow = true)"
        >
            <span
                class="group-disabled:text-gray-2"
                :class="{
                    'group-hover:text-blue group-active:text-blue group-active:font-semibold group-active:border-b group-active:border-blue group-active:-tracking-0.2':
                        !disabled,
                    'text-blue font-semibold border-b border-blue -tracking-0.2':
                        isDetailShow,
                    'text-blue-dark': !isDetailShow
                }"
            >
                <slot></slot>
            </span>
            <ArrowIcon
                class="stroke-blue rotate-180 group-disabled:stroke-gray-2"
            ></ArrowIcon>
        </button>
        <div
            class="bg-white absolute top-full translate-y-2 right-0 rounded shadow"
            v-if="isDetailShow"
        >
            <router-link
                v-for="option of options"
                :to="option.link"
                class="block text-caption px-4 py-2 border [&:not(:first-child)]:border-t-0 first:rounded-t last:rounded-b border-gray-pale w-full leading-5 hover:bg-blue-pale hover:border-x-none hover:text-blue min-w-[9.375rem]"
                >{{ option.name }}</router-link
            >
        </div>
    </div>
</template>
<script setup lang="ts">
import { ArrowIcon } from '@/shared/Icons'
import { ref } from 'vue'
import { vClickOutside } from '@/shared/ui'
interface IOption {
    name: string
    link: string
}
const props = defineProps<{ disabled?: boolean; options: IOption[] }>()
const isDetailShow = ref<boolean>(false)
</script>
<style lang="scss"></style>
