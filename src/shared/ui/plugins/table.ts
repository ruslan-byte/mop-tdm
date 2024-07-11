import plugin from 'tailwindcss/plugin'

export const tablePlagin = plugin(
    ({
        addComponents,
        theme
    }: {
        addComponents: Function
        theme: Function
    }) => {
        addComponents({
            '.g-table__header': {
                height: '5rem'
            },
            '.g-table__th': {
                textAlign: 'left',
                paddingLeft: '1.5rem',
                color: theme('colors.blue-dark'),
                background: theme('colors.blue-light'),
                fontWeight: '600',
                '&:first-child': {
                    borderRadius: '5px 0 0 5px'
                },
                '&:last-child': {
                    borderRadius: '0 5px 5px 0'
                }
            },
            '.g-table__cell': {
                textAlign: 'left',
                padding: '0',
                paddingLeft: '1.5rem',
                background: theme('colors.white'),
                '&:first-child': {
                    borderRadius: '5px 0 0 5px'
                },
                '&:last-child': {
                    borderRadius: '0 5px 5px 0'
                }
            },
            '.g-table__row': {
                height: '56px'
            },
            '.g-table': {
                borderCollapse: 'separate',
                borderSpacing: '0 0.5rem'
            }
        })
    }
)
