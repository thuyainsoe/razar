// @ts-nocheck
import { defineConfig, envField } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import alpinejs from "@astrojs/alpinejs";
import vercel from "@astrojs/vercel/serverless";
import { loadEnv } from "vite";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    icon(),
    alpinejs(),
    sitemap({
      entryLimit: 50000, // Helps generate sitemap-index.xml
    }),
  ],
  output: "server",
  adapter: vercel(),
  site: "https://www.razarinfo.online",
  env: {
    schema: {
      PUBLIC_EMAILJS_USER_ID: envField.string({
        context: "client",
        access: "public",
      }),
      PUBLIC_EMAILJS_SERVICE_ID: envField.string({
        context: "client",
        access: "public",
      }),
      PUBLIC_EMAILJS_TEMPLATE_ID: envField.string({
        context: "client",
        access: "public",
      }),
    },
  },
});
