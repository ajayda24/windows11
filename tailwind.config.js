module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.js', './components/**/*.js', './style.css'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#001c30',
          'primary-focus': '#000e19',
          'primary-content': '#98b6f5',
          secondary: '#99b7f6',
          'secondary-focus': '#8098d0',
          'secondary-content': '#001b2e',
          accent: '#b2108f',
          'accent-focus': '#89066d',
          'accent-content': '#98b6f5',
          neutral: '#3d4451',
          'neutral-focus': '#2a2e37',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-200': '#f9fafb',
          'base-300': '#d1d5db',
          'base-content': '#1f2937',
          info: '#2094f3',
          success: '#009485',
          warning: '#ff9900',
          error: '#ff5724',
        },
      },
    ],
  },
}
