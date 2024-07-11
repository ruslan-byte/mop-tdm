import type { Meta, StoryObj } from '@storybook/vue3'

import { CheckboxDropdown } from '@/shared/ui'

const meta = {
    title: 'Dropdown/CheckboxDropdown',
    component: CheckboxDropdown,
    render: (args: any) => ({
        components: { CheckboxDropdown },
        setup() {
            return { args }
        },
        template:
            '<CheckboxDropdown v-model="args.modelValue" :options="args.options" class="w-[292px]" placeholder="placeholder" ></CheckboxDropdown>'
    })
} satisfies Meta<typeof CheckboxDropdown>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
    args: {
        modelValue: '',
        options: [
            {
                id: 'glavny',
                label: 'Главный склад'
            },
            { label: 'Склад г. Рыбинск', id: 'riba' },
            { label: 'Склад г. Новосибирск', id: 'noc' },
            { label: 'Склад г. Ревда', id: 'revda' },
            { label: 'Склад г. Артем', id: 'artem' },
            { label: 'Рыбинск склад (ТДМ)', id: 'riba tdm' },
            { label: 'Рыбинск экспорт', id: 'riba export' }
        ]
    },
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/design/LNX1Yb6Pw07GSG2ulI2xvI/TDM-%D0%9B%D0%B8%D1%87%D0%BD%D1%8B%D0%B9-%D0%BA%D0%B0%D0%B1%D0%B8%D0%B5%D0%BD%D1%82?node-id=10446-9318&t=Y1Grd0z3rdValqS2-4'
        }
    }
}
