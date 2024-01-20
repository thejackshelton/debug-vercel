import { defineConfig } from "astro/config";

import qwikdev from "@qwikdev/astro";
import vercel from "@astrojs/vercel/serverless";
import { qwikReact } from "@builder.io/qwik-react/vite";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [qwikdev()],
  vite: {
    plugins: [qwikReact()],
  },
});
