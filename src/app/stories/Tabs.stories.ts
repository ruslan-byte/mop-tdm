import type { Meta, StoryObj } from '@storybook/vue3'

import { Tabs } from '@/shared/ui'

const meta = {
    title: 'Tabs',
    component: Tabs,
    render: (args: any) => ({
        components: { Tabs },
        setup() {
            return { args }
        },
        template:
            '<Tabs :tabs="args.tabs" v-model="args.modelValue" :type="args.type"/>'
    })
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
    args: {
        type: 'orange',
        modelValue: 'month',
        tabs: [
            {
                label: 'Месяц',
                value: 'month'
            },
            {
                label: 'Квартал',
                value: 'quartal'
            },
            {
                label: 'Год',
                value: 'year'
            }
        ]
    },
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/design/LNX1Yb6Pw07GSG2ulI2xvI/TDM-%D0%9B%D0%B8%D1%87%D0%BD%D1%8B%D0%B9-%D0%BA%D0%B0%D0%B1%D0%B8%D0%B5%D0%BD%D1%82?node-id=8612-12569&t=tfIBbiqqfasCGHvV-4'
        }
    }
}
export const blue: Story = {
    args: {
        type: 'blue',
        modelValue: 'month',
        tabs: [
            {
                label: 'Месяц',
                value: 'month'
            },
            {
                label: 'Квартал',
                value: 'quartal'
            },
            {
                label: 'Год',
                value: 'year'
            }
        ]
    },
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/design/LNX1Yb6Pw07GSG2ulI2xvI/TDM-%D0%9B%D0%B8%D1%87%D0%BD%D1%8B%D0%B9-%D0%BA%D0%B0%D0%B1%D0%B8%D0%B5%D0%BD%D1%82?node-id=10742-43900&t=tfIBbiqqfasCGHvV-4'
        }
    }
}
export const blueLignt: Story = {
    args: {
        type: 'blue-light',
        modelValue: 'month',
        tabs: [
            {
                label: 'Месяц',
                value: 'month'
            },
            {
                label: 'Квартал',
                value: 'quartal'
            },
            {
                label: 'Год',
                value: 'year'
            }
        ]
    },
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/design/LNX1Yb6Pw07GSG2ulI2xvI/TDM-%D0%9B%D0%B8%D1%87%D0%BD%D1%8B%D0%B9-%D0%BA%D0%B0%D0%B1%D0%B8%D0%B5%D0%BD%D1%82?node-id=8612-12584&t=tfIBbiqqfasCGHvV-4'
        }
    }
}
export const orangeBlue: Story = {
    args: {
        type: 'orange-blue',
        modelValue: 'month',
        tabs: [
            {
                label: 'Месяц',
                value: 'month'
            },
            {
                label: 'Квартал',
                value: 'quartal'
            },
            {
                label: 'Год',
                value: 'year'
            }
        ]
    },
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/design/LNX1Yb6Pw07GSG2ulI2xvI/TDM-%D0%9B%D0%B8%D1%87%D0%BD%D1%8B%D0%B9-%D0%BA%D0%B0%D0%B1%D0%B8%D0%B5%D0%BD%D1%82?node-id=890-36433&t=tfIBbiqqfasCGHvV-4'
        }
    }
}
