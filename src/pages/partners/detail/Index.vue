<template>
    <div class="g-container py-8 max-w-[70.875rem] pr-[8.625rem]">
        <BreadCrumbs :links="breadCrumbsLink" class="mb-8"></BreadCrumbs>
        <div class="flex justify-between mb-10">
            <h1>Энергосберегающие технологии</h1>
            <ApprovalBlock is-success></ApprovalBlock>
        </div>

        <ManagerErrorBanner class="mb-6"></ManagerErrorBanner>
        <div class="flex gap-8">
            <div class="w-[44.5625rem]">
                <PlanSection class="mb-6"></PlanSection>
                <div class="flex items-center justify-between mb-6">
                    <p class="text-blue-dark text-small leading-4">
                        Вы можете задать вопрос по любому из блоков на этой
                        странице.
                    </p>
                    <button
                        class="g-button g-button--linear-blue px-4 py-2 h-8 font-normal text-small"
                    >
                        Задать вопрос
                    </button>
                </div>
                <div class="flex gap-6 mb-6">
                    <BonusSection></BonusSection>
                    <FineSection></FineSection>
                </div>
                <div class="mb-6 flex justify-center">
                    <button
                        class="g-button g-button--blue mr-4"
                        @click="activeDataName = '='"
                    >
                        Итоговый баланс 0
                    </button>
                    <button
                        class="g-button g-button--orange mr-4"
                        @click="activeDataName = '+'"
                    >
                        Внесена предоплата
                    </button>
                    <button
                        class="g-button g-button--red"
                        @click="activeDataName = '-'"
                    >
                        Просроченные задолжности
                    </button>
                </div>
                <BalanceSection :data="activeData"></BalanceSection>
            </div>
            <div class="flex-1">
                <AccessSection class="mb-6"></AccessSection>
                <LimitSection
                    :limits="limits"
                    :free-update-at="limitUpdateAt"
                    :total-update-at="limitUpdateAt"
                >
                </LimitSection>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import PlanSection from './partial/PlanSection.vue'
import BreadCrumbs, { IBreadCrumbLink } from '@/components/BreadCrumbs.vue'
import BonusSection from './partial/BonusSection.vue'
import FineSection from './partial/FineSection.vue'
import BalanceSection, {
    IBalanceSectionData
} from './partial/BalanceSection.vue'
import { ref } from 'vue'
import { computed } from 'vue'
import AccessSection from './partial/AccessSection.vue'
import ApprovalBlock from './partial/ApprovalBlock.vue'
import LimitSection, { ILimit } from './partial/LimitSection.vue'
import ManagerErrorBanner from './partial/ManagerErrorBanner.vue'

const breadCrumbsLink: IBreadCrumbLink[] = [
    {
        id: '0',
        label: 'Главная',
        to: '/'
    },
    {
        id: '0',
        label: 'Партнеры',
        to: '/partners'
    },
    {
        id: '0',
        label: 'Энергосберегающие технологии'
    }
]
const balanceSectionDataSuccess: IBalanceSectionData = {
    totalBalance: 1705713.55,
    selesCompanies: [
        {
            name: 'РЭМЗ ТМ',
            totalBalance: 325955.87,
            organizations: [
                {
                    name: 'Альфа-Нева',
                    totalBalance: -0.15,
                    totalOverdueDebt: 0.15,
                    totalCountOverdueAccounts: 2,
                    totalCountOverdueDays: 5,
                    contracts: [
                        {
                            name: 'Договор отсутствие заказа РЭМЗ, руб.,',
                            number: '№ 2143/ТДМ',
                            balance: -0.15,
                            overdueDebt: 0.15,
                            countOverdueAccounts: 2,
                            countOverdueDays: 5
                        }
                    ]
                },
                {
                    name: 'ИП Смирнов И.А. Краснодар',
                    totalBalance: 225281.77,
                    contracts: [
                        {
                            name: 'Договор РЭМЗ ТМ отсрочка 30 дн предоплата 0/100, руб.,',
                            number: '№ 2143/ТДМ',
                            balance: 142103.57
                        },
                        {
                            name: 'Договор РЭМЗ ТМ отсрочка 30 дн предоплата 50/50, руб., №',
                            number: '№ 2143/ТДМ',
                            balance: 83178.2
                        }
                    ]
                },
                {
                    name: 'ИП Жигулев А. В.',
                    totalBalance: 100674.25,
                    contracts: [
                        {
                            name: 'Договор РЭМЗ ТМ отсрочка 30 дн предоплата 50/50, руб.,',
                            number: '№ 2143/ТДМ',
                            balance: 100674.25
                        }
                    ]
                }
            ]
        },
        {
            name: 'ТДМ',
            totalBalance: 1379757.68,
            organizations: [
                {
                    name: 'Альфа-Нева',
                    totalBalance: -193222.44,
                    totalOverdueDebt: 193222.44,
                    totalCountOverdueAccounts: 2,
                    totalCountOverdueDays: 5,
                    contracts: [
                        {
                            name: 'Договор с поставщиком ТДМ, руб.,',
                            number: '№ 2143/ТДМ',
                            balance: -168867.67,
                            overdueDebt: 168867.67,
                            countOverdueAccounts: 2,
                            countOverdueDays: 5
                        },
                        {
                            name: 'Договор ФКО отсрочка ТДМ 30д -30%-6%, руб.,',
                            number: '№ 2143/ТДМ',
                            balance: -24354.77,
                            overdueDebt: 24354.77,
                            countOverdueAccounts: 2,
                            countOverdueDays: 5
                        }
                    ]
                },
                {
                    name: 'ИП Смирнов И.А. Краснодар',
                    totalBalance: 487995.47,
                    contracts: [
                        {
                            name: 'Договор 1 с потсавщиком, руб.,',
                            number: '№ 2143/ТДМ',
                            balance: -234.8,
                            overdueDebt: 0,
                            countOverdueDays: 0
                        },
                        {
                            name: 'Договор Отсрочка ТДМ 30 дн -30%-6%, руб.,',
                            number: '№ 2143/ТДМ',
                            balance: 881563.68
                        },
                        {
                            name: 'Договор Отсутствие заказа ТДМ, руб.,',
                            number: '№ 2143/ТДМ',
                            balance: -338387.01,
                            overdueDebt: 0,
                            countOverdueDays: 0
                        },
                        {
                            name: 'Договор С поставщиком, руб.,',
                            number: '№ 2143/ТДМ',
                            balance: -76938.2,
                            overdueDebt: 76938.2,
                            countOverdueDays: 2,
                            countOverdueAccounts: 3
                        },
                        {
                            name: 'Договор ТДМ КПП 30дн -11% +2% (Чехов, Ревда, НВС), руб.,',
                            number: '№ 2143/ТДМ',
                            balance: 21991.8
                        }
                    ]
                },
                {
                    name: 'ИП Жигулев А. В.',
                    totalBalance: 1084984.65,
                    contracts: [
                        {
                            name: 'Договор С поставщиком, руб., ',
                            number: '№ 2143/ТДМ',
                            balance: -17926.2,
                            overdueDebt: -17926.2,
                            countOverdueAccounts: 2,
                            countOverdueDays: 1
                        },
                        {
                            name: 'Договор Отсрочка ТДМ 30 дн -30%-6%, руб., ',
                            number: '№ 2143/ТДМ',
                            balance: 1043953.95
                        },
                        {
                            name: 'Договор ТДМ КПП 30дн -11% +2% (Чехов, Ревда, НВС), руб., ',
                            number: '№ 2143/ТДМ',
                            balance: 61719.45
                        },
                        {
                            name: 'ДоговорЦепочечный отсрочка ТДМ 30 дней, руб., ',
                            number: '№ 2143/ТДМ',
                            balance: -2762.75,
                            overdueDebt: 0,
                            countOverdueDays: 0
                        }
                    ]
                }
            ]
        }
    ]
}
const balanceSectionDataError: IBalanceSectionData = {
    totalBalance: -3325955.87,
    totalCountOverdueAccounts: 2,
    totalCountOverdueDays: 5,
    totalOverdueDebt: 122000000,
    selesCompanies: [
        {
            name: 'РЭМЗ ТМ',
            totalBalance: -3325955.87,
            totalCountOverdueAccounts: 2,
            totalCountOverdueDays: 5,
            totalOverdueDebt: 100000000,
            organizations: [
                {
                    name: 'Альфа-Нева',
                    totalBalance: -4325955.87,
                    totalOverdueDebt: 100000000,
                    totalCountOverdueAccounts: 2,
                    totalCountOverdueDays: 5,
                    contracts: [
                        {
                            name: 'Договор отсутствие заказа РЭМЗ, руб.,',
                            number: '№ 2143/ТДМ',
                            balance: -3325955.87,
                            overdueDebt: 100000000,
                            countOverdueAccounts: 2,
                            countOverdueDays: 5
                        }
                    ]
                },
                {
                    name: 'ИП Смирнов И.А. Краснодар',
                    totalBalance: 3325955.87,
                    contracts: [
                        {
                            name: 'Договор отсутсвие заказа РЭМЗ, руб.,',
                            number: '№ 2143/ТДМ',
                            balance: 3325955.87
                        }
                    ]
                },
                {
                    name: 'ИП Жигулев А. В.',
                    totalBalance: 0,
                    contracts: [
                        {
                            name: 'Договор РЭМЗ ТМ отсрочка 30 дней предоплтата 50/50, руб.,',
                            number: '№ 2143/ТДМ',
                            balance: 0
                        }
                    ]
                }
            ]
        }
    ]
}
const balanceSectionDataZero: IBalanceSectionData = {
    totalBalance: 0,
    selesCompanies: [
        {
            name: 'РЭМЗ ТМ',
            totalBalance: 0,

            organizations: [
                {
                    name: 'Альфа-Нева',
                    totalBalance: 0,
                    contracts: [
                        {
                            name: 'Договор отсутствие заказа РЭМЗ, руб.,',
                            number: '№ 2143/ТДМ',
                            balance: 0
                        }
                    ]
                },
                {
                    name: 'ИП Смирнов И.А. Краснодар',
                    totalBalance: 0,
                    contracts: [
                        {
                            name: 'Договор отсутсвие заказа РЭМЗ, руб.,',
                            number: '№ 2143/ТДМ',
                            balance: 0
                        }
                    ]
                },
                {
                    name: 'ИП Жигулев А. В.',
                    totalBalance: 0,
                    contracts: [
                        {
                            name: 'Договор РЭМЗ ТМ отсрочка 30 дней предоплтата 50/50, руб.,',
                            number: '№ 2143/ТДМ',
                            balance: 0
                        }
                    ]
                }
            ]
        }
    ]
}
const activeDataName = ref<'+' | '-' | '='>('+')
const activeData = computed(() => {
    switch (activeDataName.value) {
        case '-':
            return balanceSectionDataError
        case '=':
            return balanceSectionDataZero
        default:
            return balanceSectionDataSuccess
    }
})
const limits: ILimit[] = [
    {
        stockName: 'Склад г. Рыбинск',
        name: 'Кабельно-проводниковая продукция',
        totalLimit: 8900000,
        freeLimit: 6900000
    },
    {
        stockName: 'кроме Рыбинска',
        name: 'Кабельно-проводниковая продукция',
        totalLimit: 8900000,
        freeLimit: 8900000
    },
    {
        stockName: 'Склад г. Рыбинск',
        name: 'Электротехническая продукция',
        totalLimit: 5000000,
        freeLimit: 5000000
    },
    {
        stockName: 'кроме Рыбинска',
        name: 'Электротехническая продукция',
        totalLimit: 8000000,
        freeLimit: 8900000
    }
]
const limitUpdateAt = new Date()
</script>
<style lang="scss"></style>
