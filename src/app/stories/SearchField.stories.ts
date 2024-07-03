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
    }
}
