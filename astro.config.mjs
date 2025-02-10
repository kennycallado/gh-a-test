// @ts-check
import { defineConfig, sharpImageService } from "astro/config";
import lit from "@astrojs/lit";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3000,
  },

  image: {
    service: sharpImageService(),
    remotePatterns: [{ protocol: "https" }],
  },

  integrations: [lit()],
});
