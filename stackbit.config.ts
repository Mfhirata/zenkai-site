import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
  stackbitVersion: '~0.7.0',
  ssgName: 'custom',
  nodeVersion: '22',
  devCommand: 'npm run dev -- --port {PORT}',
  buildCommand: 'npm run build',
  publishDir: 'dist',

  // Comenta ou remove esta seção por agora (resolve o TypeError)
  // contentSources: [
  //   {
  //     type: 'git-cms',
  //     rootPath: 'content',
  //     repo: 'Mfhirata/zenkai-site',
  //     branch: 'preview'
  //   }
  // ],

  // Mantém os models (o editor usa isso para inline mesmo sem source full)
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