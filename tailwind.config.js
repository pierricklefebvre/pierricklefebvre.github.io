/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./docs/**/*.{html,js}'],
    theme: {
        extend: {
            colors: {
                primary: 'rgb(var(--color-primary))',
                secondary: 'rgb(var(--color-secondary))',
            },
        },
    },
    plugins: [],
};
