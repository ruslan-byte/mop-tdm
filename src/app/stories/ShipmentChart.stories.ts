import type { Meta, StoryObj } from '@storybook/vue3'

import ShipmentChart from '@/widgets/shipments/ui/ShipmentChart.vue'

const meta = {
    title: 'Charts/ShipmentChart',
    component: ShipmentChart,
    render: (args: any) => ({
        components: { ShipmentChart },
        setup() {
            return { args }
        },
        template: `
        <div class="h-[271px] w-[1200px]">
        <ShipmentChart />
        </div>`
    })
} satisfies Meta<typeof ShipmentChart>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
    args: {}
}
