module.exports = {
    content: [
        './app/**/*.{js,jsx,ts,tsx}',
        './components/**/*.{js,jsx,ts,tsx}',
        './lib/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {},
    plugins: [require('@tailwindcss/forms')],
};
