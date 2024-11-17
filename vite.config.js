import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',  // Asegúrate de que este valor coincide con el nombre de tu repositorio
  plugins: [react()]
})
