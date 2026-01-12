import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
  stackbitVersion: '~0.7.0',
  ssgName: 'custom',
  nodeVersion: '22',
  devCommand: 'npm run dev -- --port {PORT}',
  buildCommand: 'npm run build',
  publishDir: 'dist',

  // Content source simples (objeto direto - compatível com v1.4.1)
  contentSources: [
    {
      type: 'git-cms',
      rootPath: 'content',  // pasta com home.json
      repo: 'Mfhirata/zenkai-site',
      branch: 'preview'
    }
  ],

  // Model para o home.json
  models: [
    {
      name: 'home',
      type: 'data',
      filePath: 'content/home.json',
      label: 'Página Inicial (Hero)',
      fields: [
        { name: 'title', type: 'string', label: 'Título Principal', required: true },
        { name: 'description', type: 'string', label: 'Descrição Principal', required: true },
        { name: 'heroImage', type: 'image', label: 'Imagem Hero' }
      ]
    }
  ],

  pageModels: ['home'],
  mapModelsToPages: (model) => {
    if (model.name === 'home') return { path: '/' };
  }
});