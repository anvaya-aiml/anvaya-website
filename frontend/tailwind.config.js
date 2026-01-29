/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Anvaya Brand Colors (from logo)
        primary: {
          50: '#e6f0f8',
          100: '#cce1f1',
          200: '#99c3e3',
          300: '#66a5d5',
          400: '#3387c7',
          500: '#1a3a5c', // Deep Navy (logo primary)
          600: '#152e4a',
          700: '#102338',
          800: '#0b1726',
          900: '#050c13',
        },
        accent: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa', // Royal Blue (accent color)
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        // Additional UI colors
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #1a3a5c 0%, #1d4ed8 100%)',
        'gradient-accent': 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
        'gradient-hero': 'linear-gradient(135deg, #1a3a5c 0%, #2563eb 50%, #60a5fa 100%)',
        'gradient-mesh': 'radial-gradient(at 40% 20%, #1a3a5c 0px, transparent 50%), radial-gradient(at 80% 0%, #3b82f6 0px, transparent 50%), radial-gradient(at 0% 50%, #2563eb 0px, transparent 50%)',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'glow': '0 0 20px rgba(59, 130, 246, 0.3)',
        'glow-lg': '0 0 40px rgba(59, 130, 246, 0.4)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
