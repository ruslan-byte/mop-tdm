<template>
    <Teleport to="body">
        <Transition name="modal">
            <div class="fixed left-0 right-0 top-0 bottom-0" v-if="isShow">
                <div
                    @click="emit('close')"
                    class="absolute left-0 right-0 top-0 bottom-0 bg-blue-dark opacity-15"
                ></div>
                <div
                    class="bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-10 focus:outline-none"
                    ref="modalBody"
                    @keydown.esc="emit('close')"
                    tabindex="-1"
                >
                    <slot name="cross">
                        <button
                            @click="emit('close')"
                            class="right-10 top-6 absolute group"
                        >
                            <CrossIcon
                                class="stroke-main h-3.75 w-3.75 group-hover:stroke-gray group-active:stroke-black"
                            ></CrossIcon>
                        </button>
                    </slot>
                    <slot></slot>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>
<script setup lang="ts">
import { CrossIcon } from '@/shared/Icons'
import { watch, ref } from 'vue'
const props = defineProps<{ isShow: boolean }>()
const emit = defineEmits(['close'])
const modalBody = ref<HTMLDivElement>()
watch(
    () => modalBody.value,
    () => {
        if (modalBody.value && props.isShow) {
            modalBody.value.focus()
        }
        if (props.isShow) hideScrollbarOnBody()
        if (!props.isShow) showScrollbarOnBody()
    }
)
function hideScrollbarOnBody() {
    document.body.style.overflow = 'hidden'
}
function showScrollbarOnBody() {
    document.body.style.overflow = 'auto'
}
</script>
<style lang="scss" scoped>
.modal-enter-active {
    transition: opacity 0.5s ease;
}
.modal-leave-active {
    transition: none;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}
</style>
