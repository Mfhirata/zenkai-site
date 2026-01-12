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
    port: 5173,           // Alterado de 3000 → 5173 (porta padrão esperada pelo Visual Editor + Vite moderno)
    strictPort: true,     // Adicionado: impede que o Vite mude automaticamente de porta se 5173 estiver ocupada
    host: true,
    hmr: {
      clientPort: 5173    // Ajuda o Hot Module Replacement a funcionar corretamente através do proxy do Netlify
    }
  },
});