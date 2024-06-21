<template>
    <div class="g-tooltip inline-block" @mouseleave="hidePopper">
        <div
            ref="reference"
            @mouseenter="showPopper"
            class="inline-block g-tooltip__reference"
        >
            <slot></slot>
        </div>
        <div
            ref="popper"
            class="g-tooltip__popper transition-opacity"
            @mouseenter="isHover = true"
            @mouseleave="
                () => {
                    isHover = false
                }
            "
            :class="{
                'opacity-0 fixed left-0 top-0 pointer-events-none':
                    !isShowPopper
            }"
        >
            <div ref="tooltipArrow" class="g-tooltip__arrow-overlay">
                <div class="g-tooltip__arrow">
                    <div
                        class="w-5 h-4 after:bg-[linear-gradient(-60deg,_white_48%,_transparent_50%)] after:w-1/2 after:absolute after:h-full after:block before:bg-[linear-gradient(60deg,_white_48%,_transparent_50%)] before:w-1/2 before:h-full before:block before:absolute relative before:right-0"
                    ></div>
                </div>
            </div>
            <div class="bg-white rounded px-6 py-4">
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { createPopper, flip } from '@popperjs/core'
const reference = ref<HTMLDivElement>()
const popper = ref<HTMLDivElement>()
const tooltipArrow = ref<HTMLDivElement>()
const props = defineProps<{ placement: 'left' | 'right' | 'top' | 'button' }>()
const isShowPopper = ref(false)

let isPooperInstanceExist = ref<boolean>(false)

function initPupper() {
    if (reference.value && popper.value && !isPooperInstanceExist.value) {
        isPooperInstanceExist.value = !!createPopper(
            reference.value,
            popper.value,
            {
                strategy: 'fixed',
                placement: 'top',
                modifiers: [
                    {
                        name: 'flip',
                        options: {
                            fallbackPlacements: props.placement
                                ? [props.placement]
                                : ['top', 'bottom']
                        }
                    },
                    {
                        name: 'arrow',
                        options: {
                            element: tooltipArrow.value
                        }
                    },
                    {
                        name: 'offset',
                        options: {
                            offset: [0, 20]
                        }
                    }
                ]
            }
        )
    }
}

function showPopper() {
    initPupper()
    resetTimeouts()
    isShowPopper.value = true
}
let timeoutIds: NodeJS.Timeout[] = []
const isHover = ref(false)
function hidePopper() {
    timeoutIds.push(
        setTimeout(() => {
            if (!isHover.value) isShowPopper.value = false
        }, 150)
    )
}
function resetTimeouts() {
    timeoutIds.forEach(id => {
        clearTimeout(id)
    })
}
</script>
<style lang="scss">
.g-tooltip {
    &__popper {
        @apply z-20 drop-shadow-md;
        &[data-popper-placement='top'] {
            .g-tooltip__arrow {
                @apply rotate-180;
            }
            .g-tooltip__arrow-overlay {
                @apply -bottom-4;
            }
        }
        &[data-popper-placement='bottom'] {
            .g-tooltip__arrow {
                @apply rotate-0;
            }
            .g-tooltip__arrow-overlay {
                @apply -top-4;
            }
        }
        &[data-popper-placement='left'] {
            .g-tooltip__arrow {
                @apply rotate-90;
            }
            .g-tooltip__arrow-overlay {
                @apply -right-4;
            }
        }
    }
}
</style>
