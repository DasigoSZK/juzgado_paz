import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          copias: path.resolve(__dirname, 'certificacion-copias.html'),
          firmas: path.resolve(__dirname, 'certificacion-firmas.html'),
          sumaria: path.resolve(__dirname, 'informacion-sumaria.html'),
          autorizacion: path.resolve(__dirname, 'autorizacion-simple.html'),
          viajeInterior: path.resolve(__dirname, 'autorizacion-viaje-interior.html'),
          viajeExterior: path.resolve(__dirname, 'autorizacion-viaje-exterior.html'),
          declaracion: path.resolve(__dirname, 'declaracion-jurada.html'),
          poderes: path.resolve(__dirname, 'poderes-generales-especiales.html'),
          pobreza: path.resolve(__dirname, 'carta-de-pobreza.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
