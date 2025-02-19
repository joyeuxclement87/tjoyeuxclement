/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6', // Blue-500
          dark: '#2563EB'     // Blue-600
        },
        background: {
          DEFAULT: '#0f172a', // Slate-900
          alt: '#1e293b'      // Slate-800
        },
        accent: {
          DEFAULT: '#60A5FA', // Blue-400
          dark: '#3B82F6'     // Blue-500
        },
        text: {
          DEFAULT: '#F1F5F9', // Slate-100
          muted: '#94A3B8'    // Slate-400
        }
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
        body: ['Poppins', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #2563EB, #3B82F6)',
        'gradient-accent': 'linear-gradient(to right, #60A5FA, #93C5FD)',
      },
      boxShadow: {
        'primary': '0 0 15px rgba(184, 119, 86, 0.2)',
        'accent': '0 0 20px rgba(191, 155, 48, 0.2)',
      },
      animation: {
        'gradient': 'gradient 15s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      },
      backgroundSize: {
        '300%': '300%',
      }
    }
  },
  plugins: [],
}
