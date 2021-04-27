const colors = require('tailwindcss/colors');
const customColors = require('./colors');

module.exports = {
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extends: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                black: colors.black,
                white: colors.white,
                gray: colors.trueGray,
                indigo: colors.indigo,
                red: colors.rose,
                yellow: colors.amber,
                primary: customColors.primary,
                secondary: customColors.secondary,
                tertiary: customColors.tertiary,
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
