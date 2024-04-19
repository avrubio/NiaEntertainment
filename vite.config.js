import { resolve } from 'path';

export default {
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        aboutCollective: resolve(__dirname, "aboutCollective/index.html"),
        aboutNia: resolve(__dirname, "aboutNiaEnt/index.html"),
        aboutNiaAndJimi: resolve(__dirname, "aboutNiaAndJimi/index.html"),
        shop: resolve(__dirname, "shop/index.html"),
        contact: resolve(__dirname, "contact/index.html"),
        newReleases: resolve(__dirname, "newReleases/index.html"),
      },
    },
  },
  base: "/",
};
