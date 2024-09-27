/** @type {import('tailwindcss').Config} */

const scrollbarUtilities = {
  '.no-scrollbar::-webkit-scrollbar': {
    display: 'none',
  },
  '.no-scrollbar': {
    '-ms-overflow-style': 'none',  // Internet Explorer and Edge
    'scrollbar-width': 'none',     // Firefox
  },
};


module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities(scrollbarUtilities);
    }
  ],
};

