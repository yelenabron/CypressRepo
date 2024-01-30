const { defineConfig } = require('cypress')
const { initPlugin } = require('cypress-plugin-snapshots/plugin');
//let percyHealthCheck = require('@percy/cypress/task')



module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: false,
  defaultCommandTimeout: 10000,
  projectId: '7g4d56',
  experimentalWebKitSupport: true,
  
  setupNodeEvents(on, config) {
    initPlugin(on, config);
 //on("task", percyHealthCheck);
    return config
  },
  env: {
    'cypress-plugin-snapshots': {
      imageConfig: {
        threshold: 0.01,
      },
    },
  },
  e2e: {
    baseUrl: 'http://localhost:4200',
    excludeSpecPattern: [
      '**/1-getting-started', 
      '**/2-advanced-examples',
      '**/__snapshots__/*',
      '**/__image_snapshots__/*',
    ],
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
   
  },
});