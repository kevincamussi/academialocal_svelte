//
// import adapter from '@sveltejs/adapter-static';
// import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
//   preprocess: vitePreprocess(),
//   kit: {
//     adapter: adapter({
//       fallback: '404.html'
//     }),
//     paths: {
//       base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
//     }
//   }
// };

export default config;

import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      fallback: 'index.html' // Usado para SPA (Single Page Application)
    }),
    paths: {
      base: process.env.BASE_PATH || '/academialocal_svelte'
    }
  }
};

export default config;




