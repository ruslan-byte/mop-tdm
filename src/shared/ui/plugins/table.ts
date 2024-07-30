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
            '.g-table__th': {
                textAlign: 'left',
                paddingTop: '1rem',
                paddingBottom: '1rem',
                paddingLeft: '0.75rem',
                paddingRight: '0.75rem',
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
                paddingTop: '1rem',
                paddingBottom: '1rem',
                paddingLeft: '0.75rem',
                paddingRight: '0.75rem',
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
