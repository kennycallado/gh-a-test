// @ts-check
import { defineConfig } from "astro/config";
import lit from "@astrojs/lit";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3000,
  },

  integrations: [lit()],
});
