<template>
    <table>
        <tr v-for="(partnerRow, rowIndex) of partnerRows">
            <td
                v-for="(partnerCell, cellIndex) of partnerRow"
                class="pr-12 last:pr-0 p-0 pb-2 h-5"
            >
                <p
                    class="text-blue text-small font-semibold"
                    v-if="rowIndex === 0 && cellIndex === 0"
                >
                    {{ partnerCell.name }}
                </p>
                <button
                    v-else
                    @click="() => updateActivePartners(partnerCell.id, true)"
                    class="transition-all"
                    :class="{
                        'bg-orange text-white text-small py-1 pl-2 pr-6 leading-4 min-h-6 rounded-full relative cursor-default text-left':
                            modelValue.includes(partnerCell.id),
                        'text-caption min-h-5 leading-5 text-left':
                            !modelValue.includes(partnerCell.id)
                    }"
                >
                    {{ partnerCell.name }}
                    <button
                        class="absolute h-1.75 w-1.75 top-1/2 right-2 -translate-y-1/2 hover:scale-125 transition-transform"
                        v-if="modelValue.includes(partnerCell.id)"
                        @click.stop="
                            () => updateActivePartners(partnerCell.id, false)
                        "
                    >
                        <CrossLargeIcon
                            class="stroke-white stroke-round stroke-2 h-1.75 w-1.75"
                        ></CrossLargeIcon>
                    </button>
                </button>
            </td>
        </tr>
    </table>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { CrossLargeIcon } from '@/shared/Icons'
interface IPartnerOption {
    id: string | number
    name: string
}
const props = defineProps<{
    options: IPartnerOption[]
    modelValue: (string | number)[]
}>()
const partnerRows = computed((): IPartnerOption[][] => {
    return props.options.reduce(
        (res: IPartnerOption[][], partner: IPartnerOption, index) => {
            const countOnRow = index < 5 ? 4 : 5
            const currentIndex = index < 5 ? index - 1 : index
            if (res[Math.floor(currentIndex / countOnRow)]?.length > 0)
                res[Math.floor(currentIndex / countOnRow)].push(partner)
            else res[Math.floor(currentIndex / countOnRow)] = [partner]

            return res
        },
        [[{ id: '', name: 'Все партнеры' }]]
    )
})
const emit = defineEmits(['update:modelValue'])
function updateActivePartners(newId: string | number, isAdd: boolean) {
    const newValue = isAdd
        ? [...props.modelValue, newId]
        : props.modelValue.filter(id => id !== newId)
    emit('update:modelValue', newValue)
}
</script>
<style lang="scss"></style>
