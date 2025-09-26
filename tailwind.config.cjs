// tailwind.config.cjs
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dpets-pink': '#f7c6d9',
        'dpets-mint': '#a8e6cf',
        'dpets-gold': '#ffd700',
        'dpets-green': '#34D399' // verde para CTA
      }
    },
  },
  plugins: [],
}
