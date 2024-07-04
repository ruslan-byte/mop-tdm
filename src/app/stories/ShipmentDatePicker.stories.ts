import type { Meta, StoryObj } from '@storybook/vue3'

import { ShipmentDatePicker } from '@/widgets/shipments'

const meta = {
    title: 'DatePickers/Shipment',
    component: ShipmentDatePicker,
    render: (args: any) => ({
        components: { ShipmentDatePicker },
        setup() {
            return { args }
        },
        template:
            '<div class="flex justify-center items-center">  <ShipmentDatePicker /></div>'
    })
} satisfies Meta<typeof ShipmentDatePicker>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
    args: {},
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/design/LNX1Yb6Pw07GSG2ulI2xvI/TDM-%D0%9B%D0%B8%D1%87%D0%BD%D1%8B%D0%B9-%D0%BA%D0%B0%D0%B1%D0%B8%D0%B5%D0%BD%D1%82?node-id=8612-15566&t=09VZ6pVbgRvXW8Ny-4'
        }
    }
}
