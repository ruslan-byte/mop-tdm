<template>
    <div class="g-white-block p-6">
        <div
            class="flex items-center justify-between border-b border-gray-pale pb-4 mb-4"
        >
            <h3 class="text-blue-dark">Баланс</h3>
            <div class="flex items-center gap-4">
                <router-link
                    to="/"
                    class="g-inline-button g-inline-button--blue-fill flex gap-2 text-very-small pr-2.5"
                >
                    <CalendarIcon></CalendarIcon>
                    Перейти в график платежей
                </router-link>
                <UpdateBlock></UpdateBlock>
            </div>
        </div>
        <div class="flex gap-10 mb-2">
            <div class="flex items-center gap-2" v-if="data.totalBalance > 0">
                <SuccessIcon class="fill-green h-5 w-5"></SuccessIcon>
                <span class="text-green text-caption">
                    Внесена предоплата
                </span>
            </div>
            <div
                class="flex items-start gap-2"
                v-else-if="data.totalBalance < 0"
            >
                <ErrorIcon class="fill-red flex-[0_0_auto] h-5 w-5"></ErrorIcon>
                <span class="text-red text-caption">
                    У вас есть просроченная дебиторская <br />задолженность
                </span>
            </div>
            <div>
                <div
                    class="flex items-center"
                    :class="{
                        'mb-5':
                            data.totalOverdueDebt ||
                            data.totalCountOverdueAccounts ||
                            data.totalCountOverdueDays
                    }"
                >
                    <span
                        class="inline-block mr-2 font-semibold text-caption leading-4"
                        >Итоговый баланс:</span
                    >
                    <span
                        class="inline-block"
                        :class="{
                            'text-green font-semibold': data.totalBalance > 0,
                            'text-gray': data.totalBalance === 0,
                            'text-red font-semibold': data.totalBalance < 0
                        }"
                    >
                        {{
                            data.totalBalance === 0
                                ? 0
                                : formatter.sum(data.totalBalance)
                        }}
                        ₽
                    </span>
                </div>
                <div>
                    <p
                        class="text-very-small flex gap-2 mb-1"
                        v-if="data.totalOverdueDebt"
                    >
                        <span class="text-gray leading-3.75"
                            >Просроченная задолженность:</span
                        >
                        <span class="text-red text-small leading-4"
                            >{{ formatter.sum(data.totalOverdueDebt) }} ₽</span
                        >
                    </p>
                    <p
                        class="text-very-small flex gap-2 mb-1"
                        v-if="data.totalCountOverdueAccounts"
                    >
                        <span class="text-gray leading-3.75"
                            >Просроченных счетов:</span
                        >
                        <span class="text-red text-small leading-4">
                            {{ data.totalCountOverdueAccounts }}
                        </span>
                    </p>
                    <p
                        class="text-very-small flex gap-2"
                        v-if="data.totalCountOverdueDays"
                    >
                        <span class="text-gray leading-3.75"
                            >Дней просрочки:</span
                        >
                        <span class="text-red text-small leading-4"
                            >{{ data.totalCountOverdueDays }}
                            {{
                                formatter.getDeclensionOfDate(
                                    data.totalCountOverdueDays,
                                    'days'
                                )
                            }}</span
                        >
                    </p>
                </div>
            </div>
        </div>
        <table
            class="w-full border-spacing-y-4 border-spacing-x-0"
            v-for="sellCompany of data.selesCompanies"
            :key="sellCompany.name"
        >
            <thead class="h-[2.125rem]">
                <tr class="h-[2.125rem]">
                    <th class="text-small pl-4 text-main w-[11rem]">
                        Компания-продавец
                    </th>
                    <th class="text-small text-main">
                        Итоговый баланс по компании-продавцу
                    </th>
                </tr>
            </thead>
            <tr class="h-[1.9375rem]">
                <td class="text-blue font-semibold pl-4 align-top leading-5">
                    {{ sellCompany.name }}
                </td>
                <td class="align-top leading-5">
                    <div class="flex gap-8 items-start">
                        <div class="w-[11.25rem]">
                            <p
                                class="leading-[1.125rem]"
                                :class="{
                                    'text-red text-small font-semibold':
                                        sellCompany.totalBalance < 0,
                                    'text-gray text-caption font-normal':
                                        sellCompany.totalBalance === 0,
                                    'text-green text-small font-semibold':
                                        sellCompany.totalBalance > 0
                                }"
                            >
                                {{
                                    formatter.getSignOfSum(
                                        sellCompany.totalBalance
                                    )
                                }}{{
                                    sellCompany.totalBalance === 0
                                        ? 0
                                        : formatter.sum(
                                              sellCompany.totalBalance
                                          )
                                }}
                                ₽
                            </p>
                        </div>
                        <div class="flex gap-2">
                            <div
                                class="text-very-small leading-3.5 font-normal"
                            >
                                <p
                                    class="text-gray mb-0.5"
                                    v-if="sellCompany.totalOverdueDebt"
                                >
                                    Просроченная задолженность:
                                </p>
                                <p
                                    class="text-gray mb-0.5"
                                    v-if="sellCompany.totalCountOverdueAccounts"
                                >
                                    Просроченных счетов:
                                </p>
                                <p
                                    class="text-gray"
                                    v-if="sellCompany.totalCountOverdueDays"
                                >
                                    Дней просрочки:
                                </p>
                            </div>
                            <div class="text-very-small leading-3.5">
                                <p
                                    class="text-red font-semibold mb-0.5"
                                    v-if="sellCompany.totalOverdueDebt"
                                >
                                    {{
                                        formatter.sum(
                                            sellCompany.totalOverdueDebt
                                        )
                                    }}
                                    ₽
                                </p>
                                <p
                                    class="text-red font-semibold mb-0.5"
                                    v-if="sellCompany.totalCountOverdueAccounts"
                                >
                                    {{ sellCompany.totalCountOverdueAccounts }}
                                </p>
                                <p
                                    class="text-red font-semibold"
                                    v-if="sellCompany.totalCountOverdueDays"
                                >
                                    {{ sellCompany.totalCountOverdueDays }}
                                    {{
                                        formatter.getDeclensionOfDate(
                                            sellCompany.totalCountOverdueDays,
                                            'days'
                                        )
                                    }}
                                </p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr class="h-8">
                <td class="bg-blue-pale text-main text-small leading-4 pl-4">
                    Юр. лицо
                </td>
                <td class="bg-blue-pale text-main text-small leading-4">
                    Баланс по юр.лицу
                </td>
            </tr>
            <template
                v-for="(
                    organization, organizationIndex
                ) of sellCompany.organizations"
                :key="organization.name + organizationIndex"
            >
                <tr class="h-[unset]">
                    <td class="pl-4 align-top">
                        <p
                            class="text-main text-caption font-semibold leading-4"
                        >
                            {{ organization.name }}
                        </p>
                    </td>
                    <td class="align-top">
                        <div class="flex gap-8 items-start">
                            <div class="w-[11.25rem]">
                                <p
                                    class="text-gray leading-3.5 text-very-small mb-1"
                                    v-if="organization.totalBalance < 0"
                                >
                                    Дебиторская задолженность:
                                </p>
                                <p
                                    class="text-gray leading-3.5 text-very-small mb-1"
                                    v-else-if="organization.totalBalance > 0"
                                >
                                    Внесена предоплата:
                                </p>
                                <p
                                    class="text-small leading-[1.125rem] font-semibold"
                                    :class="{
                                        'text-red':
                                            organization.totalBalance < 0,
                                        'text-green':
                                            organization.totalBalance > 0,
                                        'text-gray':
                                            organization.totalBalance === 0
                                    }"
                                >
                                    {{
                                        formatter.getSignOfSum(
                                            organization.totalBalance
                                        )
                                    }}{{
                                        organization.totalBalance == 0
                                            ? 0
                                            : formatter.sum(
                                                  organization.totalBalance
                                              )
                                    }}
                                    ₽
                                </p>
                            </div>
                            <div class="flex gap-2">
                                <div class="text-very-small leading-3.5">
                                    <p
                                        class="text-gray mb-0.5"
                                        v-if="organization.totalOverdueDebt"
                                    >
                                        Просроченная задолженность:
                                    </p>
                                    <p
                                        class="text-gray mb-0.5"
                                        v-if="
                                            organization.totalCountOverdueAccounts
                                        "
                                    >
                                        Просроченных счетов:
                                    </p>
                                    <p
                                        class="text-gray"
                                        v-if="
                                            organization.totalCountOverdueDays
                                        "
                                    >
                                        Дней просрочки:
                                    </p>
                                </div>
                                <div class="text-very-small leading-3.5">
                                    <p
                                        class="text-red font-semibold mb-0.5"
                                        v-if="organization.totalOverdueDebt"
                                    >
                                        {{
                                            formatter.sum(
                                                organization.totalOverdueDebt
                                            )
                                        }}
                                        ₽
                                    </p>
                                    <p
                                        class="text-red font-semibold mb-0.5"
                                        v-if="
                                            organization.totalCountOverdueAccounts
                                        "
                                    >
                                        {{
                                            organization.totalCountOverdueAccounts
                                        }}
                                    </p>
                                    <p
                                        class="text-red font-semibold"
                                        v-if="
                                            organization.totalCountOverdueDays
                                        "
                                    >
                                        {{ organization.totalCountOverdueDays }}
                                        {{
                                            formatter.getDeclensionOfDate(
                                                organization.totalCountOverdueDays,
                                                'days'
                                            )
                                        }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr
                    v-for="(contract, contractIndex) of organization.contracts"
                    class="h-[unset]"
                    :key="contract.name + contractIndex"
                >
                    <td
                        class="pl-4 align-top"
                        :class="{
                            'border-b border-gray-light first:rounded-none pb-3.75':
                                contractIndex ==
                                    organization.contracts.length - 1 &&
                                organizationIndex !=
                                    sellCompany.organizations.length - 1
                        }"
                    >
                        <div class="text-gray text-small leading-4">
                            {{ contract.name }}
                            <p class="text-green-21 text-small italic">
                                {{ contract.number }}
                            </p>
                        </div>
                    </td>
                    <td
                        class="align-top"
                        :class="{
                            'border-b border-gray-light last:rounded-none pb-3.75':
                                contractIndex ==
                                    organization.contracts.length - 1 &&
                                organizationIndex !=
                                    sellCompany.organizations.length - 1
                        }"
                    >
                        <div class="flex gap-8 items-start">
                            <div class="w-[11.25rem] self-center">
                                <p
                                    class="text-gray leading-3.5 text-very-small mb-1"
                                    v-if="contract.balance < 0"
                                >
                                    Дебиторская задолженность:
                                </p>
                                <p
                                    v-else-if="contract.balance > 0"
                                    class="text-gray leading-3.5 text-very-small mb-1"
                                >
                                    Внесена предоплата:
                                </p>
                                <p
                                    class="text-small leading-4"
                                    :class="{
                                        'text-red': contract.balance < 0,
                                        'text-gray': contract.balance === 0,
                                        'text-green': contract.balance > 0
                                    }"
                                >
                                    {{ formatter.getSignOfSum(contract.balance)
                                    }}{{
                                        contract.balance === 0
                                            ? 0
                                            : formatter.sum(contract.balance)
                                    }}
                                    ₽
                                </p>
                            </div>
                            <div class="flex gap-2">
                                <div class="text-very-small leading-3.5">
                                    <p
                                        class="text-gray mb-0.5"
                                        v-if="
                                            contract.overdueDebt ||
                                            contract.overdueDebt === 0
                                        "
                                    >
                                        Просроченная задолженность:
                                    </p>
                                    <p
                                        class="text-gray mb-0.5"
                                        v-if="
                                            contract.countOverdueAccounts ||
                                            contract.countOverdueAccounts === 0
                                        "
                                    >
                                        Просроченных счетов:
                                    </p>
                                    <p
                                        class="text-gray"
                                        v-if="
                                            contract.countOverdueDays ||
                                            contract.countOverdueDays === 0
                                        "
                                    >
                                        Дней просрочки:
                                    </p>
                                </div>
                                <div class="text-very-small leading-3.5">
                                    <p
                                        class="mb-0.5"
                                        :class="{
                                            'text-red':
                                                contract.overdueDebt !== 0,
                                            'text-gray':
                                                contract.overdueDebt === 0
                                        }"
                                        v-if="
                                            contract.overdueDebt ||
                                            contract.overdueDebt === 0
                                        "
                                    >
                                        {{
                                            contract.overdueDebt !== 0
                                                ? formatter.sum(
                                                      contract.overdueDebt
                                                  )
                                                : contract.overdueDebt
                                        }}
                                        ₽
                                    </p>
                                    <p
                                        class="mb-0.5"
                                        :class="{
                                            'text-red':
                                                contract.countOverdueAccounts !==
                                                0,
                                            'text-gray':
                                                contract.countOverdueAccounts ===
                                                0
                                        }"
                                        v-if="
                                            contract.countOverdueAccounts ||
                                            contract.countOverdueAccounts === 0
                                        "
                                    >
                                        {{ contract.countOverdueAccounts }}
                                    </p>
                                    <p
                                        :class="{
                                            'text-red':
                                                contract.countOverdueDays !== 0,
                                            'text-gray':
                                                contract.countOverdueDays === 0
                                        }"
                                        v-if="
                                            contract.countOverdueDays ||
                                            contract.countOverdueDays === 0
                                        "
                                    >
                                        {{ contract.countOverdueDays }}
                                        {{
                                            formatter.getDeclensionOfDate(
                                                contract.countOverdueDays,
                                                'days'
                                            )
                                        }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
            </template>
        </table>
    </div>
</template>
<script setup lang="ts">
import CalendarIcon from '@/assets/icons/Calendar.svg'
import UpdateBlock from '@/components/UpdateBlock.vue'
import SuccessIcon from '@/assets/icons/Success.svg'
import ErrorIcon from '@/assets/icons/Error.svg'
import { Formatter } from '@/helpers/Formatter'
const formatter = new Formatter()
defineProps<{ data: IBalanceSectionData }>()
interface IDetailTotalOverdue {
    totalOverdueDebt?: number
    totalCountOverdueAccounts?: number
    totalCountOverdueDays?: number
}
export interface IContract {
    name: string
    number: string
    balance: number
    overdueDebt?: number
    countOverdueAccounts?: number
    countOverdueDays?: number
}
export interface IOrganizationBalanceData extends IDetailTotalOverdue {
    name: string
    totalBalance: number
    contracts: IContract[]
}
export interface ISellerCompanyData extends IDetailTotalOverdue {
    name: string
    totalBalance: number
    organizations: IOrganizationBalanceData[]
}
export interface IBalanceSectionData extends IDetailTotalOverdue {
    totalBalance: number
    selesCompanies: ISellerCompanyData[]
}
</script>
<style lang="scss"></style>
