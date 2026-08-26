const { nextui } = require("@nextui-org/react");

module.exports = {
    content: [
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
             fontFamily: {
        // This maps your existing utility classes to the imported fonts
        custom: ['MyCustomFont', 'sans-serif'],
        frank: ['FrankFont', 'serif'],
      },
        },
    },
    darkMode: "class",
    plugins: [nextui()],
};