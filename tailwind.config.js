/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            container: {
                screens: {
                    // sm: "640px",
                    // md: "768px",
                    lg: "1024px",
                },
            },
            fontFamily: {
                "noto-sans": ["Noto Sans", "sans-serif"],
            },
        },
    },
    plugins: [],
};
