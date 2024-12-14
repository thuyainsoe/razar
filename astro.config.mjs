// @ts-nocheck
import { defineConfig, envField } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import alpinejs from "@astrojs/alpinejs";
import vercel from "@astrojs/vercel/serverless";
import { loadEnv } from "vite";

const { PUBLIC_EMAILJS_USER_ID } = loadEnv(
  process.env.PUBLIC_EMAILJS_USER_ID,
  process.cwd(),
  "",
);

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), alpinejs()],
  output: "server",
  adapter: vercel(),
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
