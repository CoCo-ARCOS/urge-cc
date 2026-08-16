// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

/*
 * Deployed to GitHub Pages from CoCo-ARCOS/urge-cc, which serves the site from
 * a subpath: https://coco-arcos.github.io/urge-cc/
 *
 * If you move to a custom domain (or rename the repo to
 * coco-arcos.github.io), set `site` to the new origin and change `base` to "/".
 */
// https://astro.build/config
export default defineConfig({
  site: "https://coco-arcos.github.io",
  base: "/urge-cc",
  trailingSlash: "ignore",

  vite: {
    plugins: [tailwindcss()],
  },
});
