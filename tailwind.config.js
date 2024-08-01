/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*', 
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    fontFamily: {
      'body': [
        'Inter', 
        'ui-sans-serif', 
        'system-ui',
        // other fallback fonts
      ],
      'sans': [
        'Inter', 
        'ui-sans-serif', 
        'system-ui',
      ],
      'playFair': [
        'Playfair Display', 
        'serif', 
        'system-ui',
      ],
      'sourceSans': [
        "Source Sans 3", 
        'sans-serif', 
        ,
      ],

    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

