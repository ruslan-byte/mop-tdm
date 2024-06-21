const plugin = require('tailwindcss/plugin')

export default plugin(({ addComponents, theme }) => {
    addComponents({
        '.g-button': {
            height: theme('spacing.10'),
            lineHeight: '1',
            whiteSpace: 'nowrap',
            paddingLeft: theme('spacing.5'),
            paddingRight: theme('spacing.5'),
            fontWeight: '600',
            borderRadius: theme('borderRadius.DEFAULT'),
            fontSize: theme('fontSize.caption')
        },
        '.g-button--blue-pale': {
            color: theme('colors.blue-dark'),
            background: theme('colors.blue-pale'),
            '&:hover': {
                backgroundColor: theme('colors.background'),
                color: theme('colors.blue')
            },
            '&:active': {
                backgroundColor: theme('colors.background'),
                color: theme('colors.blue-dark')
            },
            '&:disabled': {
                backgroundColor: theme('colors.background'),
                color: theme('colors.gray-2')
            }
        },
        '.g-button--linear-blue-dark': {
            border: `1px solid ${theme('colors.blue-dark')}`,
            color: theme('colors.blue-dark'),
            '&:hover': {
                border: `1px solid ${theme('colors.blue')}`,
                color: theme('colors.blue')
            },
            '&:active': {
                border: `1px solid ${theme('colors.blue-dark')}`,
                color: theme('colors.blue-dark')
            },
            '&:disabled': {
                border: `1px solid ${theme('colors.gray-2')}`,
                color: theme('colors.gray-2')
            }
        },
        '.g-button--linear-blue': {
            border: `1px solid ${theme('colors.blue')}`,
            color: theme('colors.blue'),
            '&:hover': {
                border: `1px solid ${theme('colors.blue-hover')}`,
                color: theme('colors.blue-hover')
            },
            '&:active': {
                border: `1px solid ${theme('colors.blue-pressed')}`,
                color: theme('colors.blue-pressed')
            },
            '&:disabled': {
                border: `1px solid ${theme('colors.gray-2')}`,
                color: theme('colors.gray-2')
            }
        },
        '.g-button--blue': {
            background: theme('colors.blue'),
            color: theme('colors.white'),
            '&:hover': {
                background: theme('colors.blue-hover')
            },
            '&:active': {
                background: theme('colors.blue-pressed')
            },
            '&:disabled': {
                background: theme('colors.gray-2')
            }
        },
        '.g-button--orange': {
            backgroundColor: theme('colors.orange'),
            color: theme('colors.white'),
            '&:hover': {
                backgroundColor: theme('colors.orange-hover')
            },
            '&:active': {
                backgroundColor: theme('colors.orange-pressed')
            },
            '&:disabled': {
                backgroundColor: theme('colors.gray-2')
            }
        },
        '.g-button--linear-orange': {
            border: `1px solid ${theme('colors.orange')}`,
            color: theme('colors.orange'),
            '&:hover': {
                borderColor: theme('colors.orange-hover'),
                color: theme('colors.orange-hover')
            },
            '&:active': {
                borderColor: theme('colors.orange-pressed'),
                color: theme('colors.orange-pressed')
            },
            '&:disabled': {
                borderColor: theme('colors.gray-2'),
                color: theme('colors.gray-2')
            }
        },
        '.g-button--linear-red': {
            border: `1px solid ${theme('colors.red')}`,
            color: theme('colors.red'),
            '&:hover': {
                borderColor: theme('colors.white'),
                background: theme('colors.white')
            },
            '&:active': {
                background: theme('colors.red'),
                color: theme('colors.white')
            },
            '&:disabled': {
                borderColor: theme('colors.pink-pale'),
                color: theme('colors.pink-pale'),
                background: theme('colors.transparent')
            }
        },
        '.g-button--linear-white': {
            border: `1px solid ${theme('colors.white')}`,
            color: theme('colors.white'),
            '&:hover': {
                borderColor: theme('colors.white'),
                background: theme('colors.white'),
                color: theme('colors.red')
            },
            '&:active': {
                background: theme('colors.red'),
                color: theme('colors.white')
            },
            '&:disabled': {
                borderColor: theme('colors.pink-pale'),
                color: theme('colors.pink-pale'),
                background: theme('colors.transparent')
            }
        },
        '.g-button--red': {
            background: theme('colors.red'),
            color: theme('colors.white'),
            '&:hover': {
                background: theme('colors.white'),
                color: theme('colors.red')
            },
            '&:active': {
                background: theme('colors.red-pressed'),
                color: theme('colors.white')
            },
            '&:disabled': {
                borderColor: theme('colors.pink-pale'),
                color: theme('colors.pink-pale'),
                background: theme('colors.transparent')
            }
        },
        '.g-button--white': {
            background: theme('colors.white'),
            color: theme('colors.red'),
            '&:hover': {
                background: theme('colors.pink-pale'),
                color: theme('colors.red')
            },
            '&:active': {
                background: theme('colors.pink-pale'),
                color: theme('colors.red-pressed')
            },
            '&:disabled': {
                borderColor: theme('colors.pink-pale'),
                color: theme('colors.pink-pale'),
                background: theme('colors.transparent')
            }
        },
        '.g-inline-button': {
            lineHeight: theme('spacing.5'),
            fontSize: theme('fontSize.small')
        },
        '.g-inline-button--blue-dark': {
            color: theme('colors.blue-dark'),
            stroke: theme('colors.blue-dark'),
            '&:hover': {
                color: theme('colors.blue'),
                stroke: theme('colors.blue')
            },
            '&:active': {
                color: theme('colors.blue-pressed'),
                stroke: theme('colors.blue-pressed')
            },
            '&:disabled': {
                color: theme('colors.gray-2'),
                stroke: theme('colors.gray-2')
            }
        },
        '.g-inline-button--blue': {
            color: theme('colors.blue'),
            stroke: theme('colors.blue'),
            '&:hover': {
                color: theme('colors.blue-hover'),
                stroke: theme('colors.blue-hover')
            },
            '&:active': {
                color: theme('colors.blue-pressed'),
                stroke: theme('colors.blue-pressed')
            },
            '&:disabled': {
                color: theme('colors.gray-2'),
                stroke: theme('colors.gray-2')
            }
        },
        '.g-inline-button--blue-fill': {
            color: theme('colors.blue'),
            fill: theme('colors.blue'),
            '&:hover': {
                color: theme('colors.blue-hover'),
                fill: theme('colors.blue-hover')
            },
            '&:active': {
                color: theme('colors.blue-pressed'),
                fill: theme('colors.blue-pressed')
            },
            '&:disabled': {
                color: theme('colors.gray-2'),
                fill: theme('colors.gray-2')
            }
        },
        '.g-inline-button--gray-black': {
            color: theme('colors.gray'),
            stroke: theme('colors.gray'),
            '&:hover': {
                color: theme('colors.main'),
                stroke: theme('colors.main')
            },
            '&:active': {
                color: theme('colors.black'),
                stroke: theme('colors.black')
            },
            '&:disabled': {
                color: theme('colors.gray-light'),
                stroke: theme('colors.gray-light')
            }
        },
        '.g-inline-button--gray': {
            color: theme('colors.gray-2'),
            stroke: theme('colors.gray-2'),
            '&:hover': {
                color: theme('colors.gray'),
                stroke: theme('colors.gray')
            },
            '&:active': {
                color: theme('colors.main'),
                stroke: theme('colors.main')
            },
            '&:disabled': {
                color: theme('colors.gray-light'),
                stroke: theme('colors.gray-light')
            }
        },
        '.g-inline-button--orange': {
            color: theme('colors.orange'),
            stroke: theme('colors.orange'),
            '&:hover': {
                color: theme('colors.orange-hover'),
                stroke: theme('colors.orange-hover')
            },
            '&:active': {
                color: theme('colors.orange-pressed'),
                stroke: theme('colors.orange-pressed')
            },
            '&:disabled': {
                color: theme('colors.gray-light'),
                stroke: theme('colors.gray-light')
            }
        }
    })
})
