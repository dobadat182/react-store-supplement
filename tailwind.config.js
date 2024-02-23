/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
    theme: {
        extend: {
            // Tùy chỉnh màu sắc
            colors: {},
            // Tùy chỉnh font
            fontFamily: {
                // sans: ['Graphik', 'sans-serif'],
                // serif: ['Merriweather', 'serif'],
            },
        },
    },
    variants: {
        extend: {
            // Cấu hình các biến thể cho các utility
            opacity: ['disabled'],
            cursor: ['hover', 'focus'],
        },
    },
    plugins: [
        // Thêm các plugin Tailwind CSS tùy chỉnh ở đây
        // require('@tailwindcss/forms'),
        // require('@tailwindcss/typography'),
        // Có thể thêm nhiều plugin khác tùy theo nhu cầu
    ],
};
