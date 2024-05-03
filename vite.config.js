import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        aboutCollective: resolve(__dirname, "aboutCollective/index.html"),
        aboutNiaEnt: resolve(__dirname, "aboutNiaEnt/index.html"),
        aboutNiaExtension: resolve(__dirname, "aboutNiaExtension/index.html"),
        shop: resolve(__dirname, "shop/index.html"),
        contact: resolve(__dirname, "contact/index.html"),
        newReleases: resolve(__dirname, "newReleases/index.html"),
      },
    },
  },
  base: "/",
});
