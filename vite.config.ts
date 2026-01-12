import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Injeta a API Key do ambiente de build para o código cliente
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || ''),
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true, // Garante que a pasta dist seja limpa antes de cada build
    sourcemap: false,
    target: 'esnext', // Necessário para suporte total ao SDK do Gemini e top-level await se necessário
    rollupOptions: {
      output: {
        manualChunks: {
          // Separa dependências grandes em chunks menores para melhor cache e performance
          'vendor': ['react', 'react-dom', '@google/genai'],
        },
      },
    },
  },
  server: {
    port: Number(process.env.PORT) || 5173,  // já tens isso – bom para cloud/local
    strictPort: true,
    host: true,
    hmr: {
      clientPort: Number(process.env.PORT) || 5173
    },
    allowedHosts: [
      '.netlify.app'  // ← permite todos os subdomains *.netlify.app (inclui o teu devserver-preview--...)
      // Alternativa mais restrita: 'devserver-preview--zenkai-perfomance-tuning.netlify.app'
      // Ou para máxima segurança: true (mas não recomendado, expõe a DNS rebinding attacks)
    ]
  },
});