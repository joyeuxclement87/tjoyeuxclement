/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        muted: "var(--muted)",
        card: "var(--card)",
        hover: "var(--hover)",
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        shine: "shine 1.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      fontFamily: {
        sans: ['var(--font-montserrat)'],
        display: ['var(--font-unica)'],
        serif: ['var(--font-crimson)'],
      },
    },
  },
  plugins: [],
};

