module.exports = {
  content: [
    './index.html',         // Asegura que tailwind procese el archivo HTML
    './src/**/*.{js,jsx,ts,tsx}', // Asegura que tailwind procese todos los archivos JSX/TSX en 'src'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
