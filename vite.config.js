import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig({
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
});
