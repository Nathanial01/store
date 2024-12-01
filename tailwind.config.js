import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            animation: {
                swing: 'swing 1.5s ease-in-out infinite',
                bounce: 'bounce 1.5s infinite',
                fade: 'fade 2s ease-in-out infinite',
                slideIn: 'slideIn 1s ease-out forwards',
                zoomIn: 'zoomIn 0.5s ease-in-out forwards',
                shake: 'shake 0.5s cubic-bezier(.36,.07,.19,.97) both',
                pulse: 'pulse 2s infinite',
            },
            keyframes: {
                swing: {
                    '0%': { transform: 'rotate(0deg)' },
                    '25%': { transform: 'rotate(15deg)' },
                    '50%': { transform: 'rotate(-15deg)' },
                    '75%': { transform: 'rotate(10deg)' },
                    '100%': { transform: 'rotate(0deg)' },
                },
                bounce: {
                    '0%, 100%': { transform: 'translateY(-25%)', animationTimingFunction: 'cubic-bezier(0.8,0,1,1)' },
                    '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0,0,0.2,1)' },
                },
                fade: {
                    '0%, 100%': { opacity: '0' },
                    '50%': { opacity: '1' },
                },
                slideIn: {
                    '0%': { transform: 'translateX(-100%)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                zoomIn: {
                    '0%': { transform: 'scale(0)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                shake: {
                    '0%, 100%': { transform: 'translateX(0)' },
                    '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-10px)' },
                    '20%, 40%, 60%, 80%': { transform: 'translateX(10px)' },
                },
                pulse: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.5' },
                },
            },
        },
    },

    plugins: [forms],
};
