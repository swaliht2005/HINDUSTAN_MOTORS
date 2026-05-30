export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        page: '#000000',
        accent: '#00C853',
        muted: '#9CA3AF',
      },
      boxShadow: {
        glow: '0 20px 80px rgba(0, 200, 83, 0.18)',
      },
      borderRadius: {
        xl: '0.5rem',
      },
    },
  },
  plugins: [],
}
