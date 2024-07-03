import type { Meta, StoryObj } from '@storybook/vue3'

import { SearchField } from '@/shared/ui'

const meta = {
    title: 'SearchField',
    component: SearchField,
    render: (args: any) => ({
        components: { SearchField },
        setup() {
            return { args }
        },
        template:
            '<SearchField :disabled="args.disabled" v-model="args.searchValue" :is-white="args.isWhite"/>'
    })
} satisfies Meta<typeof SearchField>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
    args: {
        disabled: false,
        searchValue: '',
        isWhite: true
    },
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/design/LNX1Yb6Pw07GSG2ulI2xvI/TDM-%D0%9B%D0%B8%D1%87%D0%BD%D1%8B%D0%B9-%D0%BA%D0%B0%D0%B1%D0%B8%D0%B5%D0%BD%D1%82?node-id=103-1392&t=09VZ6pVbgRvXW8Ny-4'
        }
    }
}
