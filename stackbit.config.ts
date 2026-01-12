import { defineStackbitConfig } from '@stackbit/types';
import { GitContentSource } from '@stackbit/cms-git';  // ← importa isso!

export default defineStackbitConfig({
  stackbitVersion: '~0.7.0',
  ssgName: 'custom',
  nodeVersion: '22',
  devCommand: 'npm run dev -- --port {PORT}',
  buildCommand: 'npm run build',
  publishDir: 'dist',

  // Content source correto com instância GitContentSource
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,  // ou 'content' se quiser limitar
      contentDirs: ['content'],  // pasta com os JSONs
      // models: [...] – opcional, mas pode mover os models para cá se preferir
    })
  ],

  // Mantém os models (podes deixar aqui ou mover para dentro do GitContentSource se quiser)
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

  pageModels: ['home'],
  mapModelsToPages: (model) => {
    if (model.name === 'home') return { path: '/' };
  }
});