import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://bradleygolski.com',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
