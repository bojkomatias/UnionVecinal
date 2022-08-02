const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    presets: [],
    theme: {
        fontFamily: {
            sans: ['Lack', ...defaultTheme.fontFamily.sans],
            serif: [...defaultTheme.fontFamily.serif],
            mono: [...defaultTheme.fontFamily.mono],
        },
    },
}
