<template>
    <div class="flex flex-wrap gap-1">
        <div class="flex gap-1.5 h-4">
            <ClockIcon></ClockIcon>
            <span class="text-gray text-small leading-4"> Обновлено: </span>
        </div>
        <span class="leading-4 text-small h-4">
            {{
                date
                    ? moment(date).format('DD.MM.YYYY, HH:mm')
                    : '23.05.2023, 00:00'
            }}
        </span>
    </div>
</template>
<script setup lang="ts">
import { ClockIcon } from '@/shared/Icons'
import moment from 'moment'
defineProps<{ date?: string | Date }>()
</script>
<style lang="scss"></style>
