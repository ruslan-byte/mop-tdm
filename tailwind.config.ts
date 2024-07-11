import defaultTheme from 'tailwindcss/defaultTheme'
const plugin = require('tailwindcss/plugin')
import {
    buttons as buttonsPlugin,
    scrollbar as scrollbarPlugin,
    forms,
    tablePlagin
} from './src/shared/ui/plugins'
/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            sans: ['Inter', ...defaultTheme.fontFamily.sans]
        },
        extend: {
            spacing: {
                1.25: '0.3125rem',
                1.75: '0.4375rem',
                3.75: '0.9375rem',
                7.5: '1.875rem',
                37.5: '9.375rem',
                75: '18.75rem',
                87.5: '21.875rem'
            },
            letterSpacing: {
                0.2: '0.0125rem',
                3.75: '0.9375rem',
                4.5: '1.125rem'
            },
            strokeWidth: {
                0.5: '0.125rem'
            },
            borderRadius: {
                DEFAULT: '0.3125rem',
                10: '0.625rem'
            },
            boxShadow: {
                DEFAULT: '4px 4px 20px 0px #E6E8EE',
                tooltip: '1px 1px 5px 0px #C6C5C5'
            },

            dropShadow: {
                table: '4px 4px 20px #E6E8EEB2',
                tooltip: '1px 1px 5px #C6C5C5'
            },
            maxWidth: {
                37.5: '9.375rem'
            },

            lineHeight: {
                3.5: '0.875rem',
                3.75: '0.9375rem'
            }
        },
        colors: {
            black: '#333333',
            main: '#4F4F4F',
            gray: '#828282',
            'gray-2': '#BDBDBD',
            'gray-light': '#E0E0E0',
            'gray-pale': '#F2F2F2',
            white: '#FFFFFF',
            background: '#F5F6FA',
            orange: '#FC7D00',
            'orange-pale': '#FFE7CF',
            blue: '#5C6AFF',
            'blue-dark': '#1F255A',
            'blue-pale': '#F2F4FF',
            'blue-light': '#E9ECFF',
            'green-21': '#21B5C2',
            green: '#5BCD8A',
            red: '#EB5757',
            'green-pale': '#EFFFF6',
            'pink-pale': '#FFF2F5',
            'yellow-pale': '#FEF9EC',
            purple: '#F5EEFF',
            'blue-hover': '#7E89FF',
            'orange-hover': '#FF942B',
            'red-hover': '#FA6E6E',
            'blue-pressed': '#4A58EF',
            'orange-pressed': '#EC7908',
            'red-pressed': '#E44C4C',
            'green-pressed': '#55CC86',
            transparent: 'rgba(0,0,0,0)',
            yellow: '#F4CE61'
        },
        fontSize: {
            caption: '0.875rem',
            small: '0.75rem',
            'very-small': '0.625rem'
        }
    },

    plugins: [
        plugin(({ addComponents, addBase, theme }) => {
            addBase({
                h1: {
                    fontSize: '2.25rem',
                    fontWeight: '700',
                    lineHeight: '2.723125rem',
                    textAlign: 'left'
                },
                h3: {
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    lineHeight: '1.625rem'
                },
                h4: {
                    fontSize: '1.25rem',
                    lineHeight: '1.5125rem'
                }
            })
            addComponents({
                '.g-container': {
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    boxSizing: 'content-box',
                    maxWidth: '1240px',
                    paddingLeft: '2rem',
                    paddingRight: '2rem'
                },
                '.g-white-block': {
                    padding: '1.5rem 2rem',
                    background: 'white',
                    borderRadius: theme('borderRadius.10'),
                    boxShadow: theme('boxShadow.DEFAULT')
                },

                '.stroke-round': {
                    strokeLinecap: 'round'
                },
                '.g-radio-button': {
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                    gap: theme('spacing.2'),
                    '& svg circle:first-child': {
                        stroke: theme('colors.gray-2')
                    },
                    '&:hover svg circle:first-child': {
                        stroke: theme('colors.orange-hover')
                    },
                    '&:active svg circle': {
                        '&:first-child': {
                            stroke: theme('colors.orange-pressed')
                        },
                        '&:last-child': {
                            fill: theme('colors.orange-pressed')
                        }
                    }
                },
                '.g-radio-button--active': {
                    '& svg circle:first-child': {
                        stroke: theme('colors.orange')
                    },
                    '& svg circle:last-child': {
                        fill: theme('colors.orange')
                    }
                },
                '.g-radio-button--disabled': {
                    '& svg circle:first-child': {
                        stroke: theme('colors.gray-light')
                    },
                    '&:hover svg circle:first-child': {
                        stroke: theme('colors.gray-light')
                    },
                    '&:active svg circle': {
                        '&:first-child': {
                            stroke: theme('colors.gray-light')
                        },
                        '&:last-child': {
                            fill: theme('colors.transparent')
                        }
                    }
                }
            })
        }),
        buttonsPlugin,
        scrollbarPlugin,
        forms,
        tablePlagin
    ]
}
