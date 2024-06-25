import plugin from 'tailwindcss/plugin'

export const scrollbar = plugin(
    ({
        addComponents,
        theme
    }: {
        addComponents: Function
        theme: Function
    }) => {
        addComponents({
            '.g-scrollbar': {
                '&::-webkit-scrollbar': {
                    display: 'block',
                    width: '0.375rem',
                    borderRadius: '0.375rem'
                },
                '&::-webkit-scrollbar-track': {
                    background: theme('colors.gray-light'),
                    borderRadius: '0.375rem'
                },
                '&::-webkit-scrollbar-thumb': {
                    background: theme('colors.orange'),
                    borderRadius: '0.375rem'
                }
            }
        })
    }
)
