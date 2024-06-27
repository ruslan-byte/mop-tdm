import plugin from 'tailwindcss/plugin'

export const forms = plugin(
    ({
        addComponents,
        theme
    }: {
        addComponents: Function
        theme: Function
    }) => {
        addComponents({
            '.g-input': {
                background: theme('colors.white'),
                height: theme('spacing.10'),
                border: `1px solid ${theme('colors.gray-light')}`,
                borderRadius: '5px',
                paddingLeft: '8px',
                paddingRight: '8px',
                paddingBottom: '1px',
                fontSize: theme('fontSize.small'),
                color: theme('colors.main'),
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                '&::placeholder': {
                    color: theme('colors.gray-2'),
                    fontSize: theme('fontSize.small')
                },

                '&:hover': {
                    border: `1px solid ${theme('colors.gray-2')}`,
                    '&::placeholder': {
                        color: theme('colors.gray')
                    }
                },
                '&:focus': {
                    outline: `unset`,
                    border: `1px solid ${theme('colors.blue-hover')}`
                },
                '&:disabled': {
                    background: theme('colors.background'),
                    border: 'none',
                    '&::placeholder': {
                        color: theme('colors.gray-2')
                    }
                },
                '&::-webkit-outer-spin-button': {
                    '-webkit-appearance': 'none',
                    margin: 0
                },
                '&::-webkit-inner-spin-button': {
                    '-webkit-appearance': 'none',
                    margin: 0
                }
            }
        })
    }
)
