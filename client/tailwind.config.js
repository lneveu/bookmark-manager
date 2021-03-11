module.exports = {
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    opacity: ({ after }) => after(['disabled']),
    cursor: ({ after }) => after(['disabled']),
    extend: {}
  },
  plugins: [require('@tailwindcss/forms')]
};
