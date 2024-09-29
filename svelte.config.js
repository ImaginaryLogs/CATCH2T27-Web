//import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import adapter from '@sveltejs/adapter-static';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      // Optional: Customize your output folder, defaults to "build"
      pages: 'build',
      assets: 'build',
      fallback: null,
      strict: false,
      $fonts: resolve('./static/fonts')
    }),
  }
};
export const prerender = true;
export default config;
