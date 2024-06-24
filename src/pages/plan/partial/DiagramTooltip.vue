<template>
    <div
        class="absolute top-0 left-0 drop-shadow-tooltip"
        ref="target"
        :class="{ 'opacity-0 pointer-events-none': !isShow }"
    >
        <div class="w-75 bg-white p-4 rounded" v-if="data">
            <p class="mb-2 text-caption leading-4 font-semibold">
                {{ data.label }}
            </p>
            <div class="flex gap-6">
                <p>
                    <span
                        class="text-gray text-very-small mb-1 block leading-3.5 whitespace-nowrap"
                        >% выполнения плана</span
                    >
                    <span class="text-blue text-caption block leading-5"
                        >{{ data.factPercent }}%
                    </span>
                </p>
                <p>
                    <span
                        class="text-gray text-very-small mb-1 block leading-3.5 whitespace-nowrap"
                        >Сумма отгрузок за период</span
                    >
                    <span class="text-blue text-caption block leading-5"
                        >{{ formatter.sum(data.totalAmound) }} ₽
                    </span>
                </p>
            </div>
        </div>
        <div
            class="rotate-180 absolute left-1/2 -translate-x-1/2 -translate-y-px"
        >
            <div
                class="w-5 h-4 after:bg-[linear-gradient(-60deg,_white_48%,_transparent_50%)] after:w-1/2 after:absolute after:h-full after:block before:bg-[linear-gradient(60deg,_white_48%,_transparent_50%)] before:w-1/2 before:h-full before:block before:absolute relative before:right-0"
            ></div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const target = ref<HTMLDivElement>()
import { Formatter } from '@/helpers/Formatter'
const formatter = new Formatter()
defineExpose({ target })
const props = defineProps<{ data?: ITooltipData; isShow: boolean }>()
export interface ITooltipData {
    label: string
    factPercent: number
    totalAmound: number
}
</script>
<style lang="scss"></style>
