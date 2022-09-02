const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    presets: [],
    theme: {
        fontFamily: {
            sans: ['Raleway', ...defaultTheme.fontFamily.sans],
            serif: [...defaultTheme.fontFamily.serif],
            mono: [...defaultTheme.fontFamily.mono],
        },
    },
}
