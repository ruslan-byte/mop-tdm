<template>
    <Modal :is-show="isShow" @close="emit('close')">
        <section class="pt-6 pl-10 pb-8 pr-[2.6875rem] w-[31.375rem]">
            <h3 class="mt-[2.3125rem] mb-6">Выберите сотрудника из списка</h3>
            <div
                class="overflow-auto max-h-[24.75rem] pr-6 box-content g-scrollbar mb-6"
            >
                <RadioButton
                    class="mb-4 last:mb-0"
                    v-for="manager of managers"
                    :is-active="manager.id == activeId"
                    @click="() => (activeId = manager.id)"
                >
                    <span class="text-main">{{
                        manager.name
                    }}</span></RadioButton
                >
            </div>
            <button
                class="g-button g-button--orange px-[8.1875rem]"
                @click="sendManager"
            >
                Отправить
            </button>
        </section>
    </Modal>
</template>
<script setup lang="ts">
import Modal from '@/ui/Modal.vue'
import RadioButton from '@/components/Form/RadioButton.vue'
import { ref } from 'vue'
export interface IManagerItem {
    id: number
    name: string
}
defineProps<{ isShow: boolean; managers: IManagerItem[] }>()
const emit = defineEmits({
    close: () => true,
    send: (newActiveId: number) => typeof newActiveId == 'number'
})
const activeId = ref<number>()
function sendManager() {
    if (activeId.value) emit('send', activeId.value)
}
</script>
<style lang="scss"></style>
