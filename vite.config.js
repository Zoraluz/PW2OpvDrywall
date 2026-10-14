import { defineConfig } from 'vite'
import purgecss from 'vite-plugin-purgecss'
import handlebars from 'vite-plugin-handlebars'

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/PW2OpvDRYWALL1/' : '/',

  build: {
    cssMinify: true,
    cssCodeSplit: false, // ✅ un solo archivo CSS
    rollupOptions: {
      input: {
        main: 'index.html',
        acercaDe: 'html/acercaDe.html',
        contactenos: 'html/contactenos.html',
        formRegistro: 'html/formRegistro.html',
        galeria: 'html/galeria.html',
        nuestrosProgramas: 'html/nuestrosProgramas.html',
        porqueOpv: 'html/porqueOPV.html',
        preguntasFrecuentes: 'html/preguntasFrecuentes.html',
        terminosYcondiciones: 'html/terminosYcondiciones.html',
        testimonios: 'html/testimonios.html',
      }
    }
  },

  server: {
    port: 5173,
  },

  plugins: [
    handlebars({
      partialDirectory: './partials',
    }),
    purgecss({
      content: [
        './index.html',
        './html/**/*.html',
        './javascript/**/*.js',
      ],
    }),
  ],
}))