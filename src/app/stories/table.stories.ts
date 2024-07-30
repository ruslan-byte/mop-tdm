import type { Meta, StoryObj } from '@storybook/vue3'

import { SortButton } from '@/shared/ui'

const meta = {
    title: 'Table',
    render: (args: any) => ({
        components: { SortButton },
        setup() {
            return { args }
        },
        template: `
        <table class="w-full g-table">
            <thead >
                <th class="g-table__th w-[38rem] pl-8">
                    <label class="cursor-pointer">
                        Название
                        <SortButton v-model="args.sortName"></SortButton>
                    </label>
                </th>
                <th class="g-table__th w-[13.4375rem]" >
                    <label class="cursor-pointer">
                        План
                        <SortButton v-model="args.sortPlan"></SortButton>
                    </label>
                </th>
                <th class="g-table__th w-[13.4375rem]" >
                    <label class="cursor-pointer">
                        Факт
                        <SortButton v-model="args.sortFact"></SortButton>
                    </label>
                
                
                </th>
                <th class="g-table__th w-[12,5625rem] pr-8">
                    <label class="cursor-pointer">
                        % выполнения плана
                        <SortButton v-model="args.sortPercent"></SortButton>
                    </label>
                </th>
            </thead>

            <tr class="g-table__row" v-for="item of 10">
                <td class="g-table__cell text-blue-dark pl-8">
                    <a
                        to="/sell-in/0"
                        class="hover:text-blue active:text-blue-pressed"
                    >
                        Энергосберегающие технологии
                    </a>
                </td>
                <td class="g-table__cell">
                    <div class="flex gap-2 items-center">
                        <span class="text-gray text-small"> План: </span>
                        <span class="text-main"> 670 878,00 ₽</span>
                    </div>
                </td>
                <td class="g-table__cell">
                    <div class="flex gap-2 items-center">
                        <span class="text-gray text-small"> Факт: </span>
                        <span class="text-blue text-caption">
                            661 517,61 ₽</span
                        >
                    </div>
                </td>
                <td class="g-table__cell pr-8">
                    <div class="flex gap-2 items-center">
                        <span class="text-gray text-small">
                            % выполнения:
                        </span>
                        <span class="text-blue text-caption"> 11% </span>
                    </div>
                </td>
            </tr>
        </table>
        `
    })
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
    args: {
        sortName: 'ASC',
        sortPlan: 'ASC',
        sortFact: 'ASC',
        sortPercent: 'ASC'
    }
}
