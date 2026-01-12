import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
  stackbitVersion: '~0.7.0',
  ssgName: 'custom',
  nodeVersion: '22',
  devCommand: 'npm run dev -- --port {PORT}',
  buildCommand: 'npm run build',
  publishDir: 'dist',

  // Content source simples (objeto direto, sem new GitContentSource)
  contentSources: [
    {
      type: 'git-cms',
      rootPath: 'content',  // pasta com os JSONs
      repo: 'Mfhirata/zenkai-site',
      branch: 'preview'
    }
  ],

  // Modelos de conteúdo
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

  // Liga o model à rota /
  pageModels: ['home'],
  mapModelsToPages: (model) => {
    if (model.name === 'home') return { path: '/' };
  }
});