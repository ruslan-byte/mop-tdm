<template>
    <Tooltip class="tooltip-info">
        <QuestionIcon class="tooltip-info__question-icon"> </QuestionIcon>
        <template v-slot:content>
            <slot></slot>
        </template>
    </Tooltip>
</template>
<script setup lang="ts">
import QuestionIcon from '@/assets/icons/Question.svg'
import Tooltip from './Tooltip.vue'
</script>
<style lang="scss">
.tooltip-info {
    &__question-icon {
        @apply cursor-pointer;
        path {
            @apply fill-gray;
        }
        circle {
            @apply stroke-gray;
        }
        &:active {
            path {
                @apply fill-main;
            }
            circle {
                @apply stroke-main;
            }
        }
    }
}
</style>
