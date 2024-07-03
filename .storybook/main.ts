import type { StorybookConfig } from '@storybook/vue3-vite'

const config: StorybookConfig = {
    stories: ['../src/app/stories/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
        '@storybook/addon-styling-webpack',
        '@storybook/addon-designs'
    ],
    framework: {
        name: '@storybook/vue3-vite',
        options: {}
    }
}
export default config
