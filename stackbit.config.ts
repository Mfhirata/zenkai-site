import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
  stackbitVersion: '~0.7.0',
  ssgName: 'custom',
  nodeVersion: '22',
  devCommand: 'npm run dev -- --port {PORT}',
  buildCommand: 'npm run build',
  publishDir: 'dist',

  // Fonte de conteúdo: Git CMS na pasta content/
  contentSources: [
    {
      type: 'git-cms',
      repo: 'Mfhirata/zenkai-site',
      branch: 'preview',
      rootPath: 'content'
    }
  ],

  // Modelos: define o que é editável no home.json
  models: [
    {
      name: 'home',
      type: 'data',
      filePath: 'content/home.json',
      label: 'Home Page',
      fields: [
        { name: 'title', type: 'string', label: 'Título Principal', required: true },
        { name: 'description', type: 'string', label: 'Descrição Principal', required: true },
        { name: 'heroImage', type: 'image', label: 'Imagem Hero' }
      ]
    }
  ],

  // Liga o model à rota home (/)
  pageModels: ['home'],
  mapModelsToPages: (model) => {
    if (model.name === 'home') {
      return { path: '/' };
    }
    return null;
  }
});