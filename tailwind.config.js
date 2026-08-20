/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff7ed', 100: '#ffedd5', 200: '#fed7aa', 300: '#fdba74',
          400: '#fb923c', 500: '#f97316', 600: '#ea580c', 700: '#c2410c',
          800: '#9a3412', 900: '#7c2d12',
        },
        sunny: {
          50: '#fefce8', 100: '#fef9c3', 200: '#fef08a', 300: '#fde047',
          400: '#facc15', 500: '#eab308', 600: '#ca8a04', 700: '#a16207',
        },
        grass: {
          50: '#f0fdf4', 100: '#dcfce7', 200: '#bbf7d0', 300: '#86efac',
          400: '#4ade80', 500: '#22c55e', 600: '#16a34a', 700: '#15803d',
        },
        sky: {
          50: '#f0f9ff', 100: '#e0f2fe', 200: '#bae6fd', 300: '#7dd3fc',
          400: '#38bdf8', 500: '#0ea5e9', 600: '#0284c7', 700: '#0369a1',
        },
        berry: {
          50: '#fdf2f8', 100: '#fce7f3', 200: '#fbcfe8', 300: '#f9a8d4',
          400: '#f472b6', 500: '#ec4899', 600: '#db2777',
        },
        ink: {
          50: '#f8fafc', 100: '#f1f5f9', 200: '#e2e8f0', 300: '#cbd5e1',
          400: '#94a3b8', 500: '#64748b', 600: '#475569', 700: '#334155',
          800: '#1e293b', 900: '#0f172a',
        },
      },
      fontFamily: {
        display: ['"Fredoka"', 'system-ui', 'sans-serif'],
        body: ['"Nunito"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '5xl': '3rem', '6xl': '3.75rem', '7xl': '4.5rem', '8xl': '6rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'bounce-soft': 'bounceSoft 2.5s ease-in-out infinite',
        'wiggle': 'wiggle 3s ease-in-out infinite',
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'marquee': 'marquee 30s linear infinite',
        'morph': 'morph 8s ease-in-out infinite',
        'morph2': 'morph2 10s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'pulse-3d': 'pulse3d 2s ease-in-out infinite',
        'tilt-idle': 'tiltIdle 4s ease-in-out infinite',
        'orbit': 'orbit 15s linear infinite',
        'pop-in': 'popIn 0.6s cubic-bezier(0.34,1.56,0.64,1) forwards',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        bounceSoft: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        wiggle: {
          '0%,100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        morph: {
          '0%,100%': { borderRadius: '42% 58% 63% 37% / 41% 44% 56% 59%' },
          '33%': { borderRadius: '58% 42% 37% 63% / 56% 59% 41% 44%' },
          '66%': { borderRadius: '50% 50% 70% 30% / 60% 40% 60% 40%' },
        },
        morph2: {
          '0%,100%': { borderRadius: '63% 37% 37% 63% / 44% 56% 44% 56%' },
          '50%': { borderRadius: '37% 63% 63% 37% / 56% 44% 56% 44%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulse3d: {
          '0%,100%': { transform: 'translateZ(0) scale(1)' },
          '50%': { transform: 'translateZ(20px) scale(1.05)' },
        },
        tiltIdle: {
          '0%,100%': { transform: 'perspective(800px) rotateY(0deg) rotateX(0deg)' },
          '25%': { transform: 'perspective(800px) rotateY(5deg) rotateX(-2deg)' },
          '75%': { transform: 'perspective(800px) rotateY(-5deg) rotateX(2deg)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(40px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(40px) rotate(-360deg)' },
        },
        popIn: {
          '0%': { opacity: '0', transform: 'scale(0.5) rotate(-10deg)' },
          '100%': { opacity: '1', transform: 'scale(1) rotate(0deg)' },
        },
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.15)',
        'card': '0 8px 30px -6px rgba(0,0,0,0.12)',
        'pop': '0 20px 50px -12px rgba(249,115,22,0.35)',
        '3d': '0 4px 8px rgba(0,0,0,0.08), 0 20px 40px -12px rgba(0,0,0,0.25)',
        '3d-hover': '0 8px 16px rgba(0,0,0,0.1), 0 40px 80px -20px rgba(249,115,22,0.3)',
        'inner-3d': 'inset 0 1px 2px rgba(255,255,255,0.6), inset 0 -2px 8px rgba(0,0,0,0.06)',
        'glow-brand': '0 0 30px rgba(249,115,22,0.4), 0 0 60px rgba(249,115,22,0.2)',
        'glow-sky': '0 0 30px rgba(14,165,233,0.4), 0 0 60px rgba(14,165,233,0.2)',
      },
      backgroundImage: {
        'dots': 'radial-gradient(circle, rgba(249,115,22,0.15) 1px, transparent 1px)',
        'grid': 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)',
        'shimmer': 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
      },
      transformOrigin: {
        'center': 'center',
      },
    },
  },
  plugins: [],
};
