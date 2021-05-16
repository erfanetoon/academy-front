const colors = require('./colors.js');
const tailwindColors = require('tailwindcss/colors');

module.exports = {
    important: true,
    darkMode: false,
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: tailwindColors.black,
            white: tailwindColors.white,
            gray: tailwindColors.trueGray,
            indigo: tailwindColors.indigo,
            red: tailwindColors.rose,
            yellow: tailwindColors.amber,
            pink: tailwindColors.pink,
            purple: tailwindColors.violet,
            primary: colors.primary,
            secondary: colors.secondary,
            tertiary: colors.tertiary,
        },
        extend: {
            zIndex: {
                1030: 1030,
                1025: 1025,
                1020: 1020,
                1015: 1015,
                1010: 1010,
                1005: 1005,
                1000: 1000,
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
