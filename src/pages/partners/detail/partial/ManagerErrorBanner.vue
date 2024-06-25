<template>
    <div class="g-white-block flex gap-4 px-6">
        <ErrorIcon class="fill-red flex-[0_0_auto] w-8 h-8"></ErrorIcon>
        <div class="pt-2">
            <p class="text-main font-semibold leading-4 mb-4 text-caption">
                Внимание! У этого партнера не указан менеджер клиентского
                сервиса. Срочно исправить!
            </p>
            <p class="text-caption leading-5 text-main mb-4">
                Для того, чтобы сменить менеджера КС, нужно отправить запрос в
                отдел аналитики. Вы можете отправить запрос прямо отсюда.
                Нажмите <br />
                на кнопку ниже, выберите из списка нужного менеджера КС и
                нажмите «Отправить». Запрос уйдёт Директору ДП, а после его
                подтверждения<br />
                будет отправлен в отдел аналитики
            </p>
            <button
                class="g-button g-button--linear-blue px-[2.4375rem] h-8 text-small"
                @click="() => (isManagerModalShow = true)"
            >
                Выбрать менеджера
            </button>
        </div>
        <ManagerModal
            :is-show="isManagerModalShow"
            @close="isManagerModalShow = false"
            :managers="managers"
            @send="sendManager"
        ></ManagerModal>
        <SuccessSendModal
            :is-show="isSuccessMessageShow"
            @close="isSuccessMessageShow = false"
        ></SuccessSendModal>
    </div>
</template>
<script setup lang="ts">
import { ErrorIcon } from '@/shared/Icons'
import ManagerModal, { IManagerItem } from './ManagerModal.vue'
import { ref } from 'vue'
import SuccessSendModal from './SuccessSendModal.vue'
const isManagerModalShow = ref(false)
const isSuccessMessageShow = ref(false)
const managers: IManagerItem[] = [
    { name: 'Фомина Василиса Николаевна', id: 1 },
    { name: 'Емельянов Кирилл Макарович', id: 2 },
    { name: 'Емельянов Кирилл Макарович', id: 3 },
    { name: 'Коротков Дмитрий Алексеевич', id: 4 },
    { name: 'Коротков Дмитрий Алексеевич', id: 5 },
    { name: 'Алексеева Ольга Мироновна', id: 6 },
    { name: 'Алексеева Ольга Мироновна', id: 7 },
    { name: 'Кольцов Святослав Тимофеевич', id: 8 },
    { name: 'Кольцов Святослав Тимофеевич', id: 9 },
    { name: 'Мешкова Агния Владимировна', id: 10 },
    { name: 'Мешкова Агния Владимировна', id: 11 },
    { name: 'Корнеев Глеб Дмитриевич', id: 12 },
    { name: 'Корнеев Глеб Дмитриевич', id: 13 },
    { name: 'Иванов Дмитрий Тимофеевич', id: 14 },
    { name: 'Иванов Дмитрий Тимофеевич', id: 15 },
    { name: 'Семенова Мария Марковна', id: 16 },
    { name: 'Семенова Мария Марковна', id: 17 },
    { name: 'Яшин Михаил Дамирович', id: 18 },
    { name: 'Яшин Михаил Дамирович', id: 19 },
    { name: 'Фомина Василиса Николаевна', id: 20 },
    { name: 'Емельянов Кирилл Макарович', id: 21 },
    { name: 'Емельянов Кирилл Макарович', id: 22 },
    { name: 'Коротков Дмитрий Алексеевич', id: 23 },
    { name: 'Коротков Дмитрий Алексеевич', id: 24 },
    { name: 'Алексеева Ольга Мироновна', id: 25 },
    { name: 'Алексеева Ольга Мироновна', id: 26 },
    { name: 'Кольцов Святослав Тимофеевич', id: 27 },
    { name: 'Кольцов Святослав Тимофеевич', id: 28 },
    { name: 'Мешкова Агния Владимировна', id: 29 },
    { name: 'Мешкова Агния Владимировна', id: 30 },
    { name: 'Корнеев Глеб Дмитриевич', id: 31 },
    { name: 'Корнеев Глеб Дмитриевич', id: 32 },
    { name: 'Иванов Дмитрий Тимофеевич', id: 33 },
    { name: 'Иванов Дмитрий Тимофеевич', id: 34 },
    { name: 'Семенова Мария Марковна', id: 35 },
    { name: 'Семенова Мария Марковна', id: 36 },
    { name: 'Яшин Михаил Дамирович', id: 37 },
    { name: 'Яшин Михаил Дамирович', id: 38 }
]
function sendManager() {
    isManagerModalShow.value = false
    isSuccessMessageShow.value = true
}
</script>
<style lang="scss"></style>
