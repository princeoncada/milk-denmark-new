/** @type {import('tailwindcss').Config} */
module.exports = {
    prefix: "x-",
    important: true,
    content: ["./**/*.{html,js,css,liquid}"],
    theme: {
        extend: {
            fontFamily: {
                'nanum': ["'Nanum Myeongjo', serif"],
                'causten': ["'Causten'"],
            },
        },
        screens: {
            md: "990px",
            lg: "1280px",
        },
    },
    plugins: [],
}