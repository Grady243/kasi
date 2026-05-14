import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  base: "/kasipos-landing/",

  tanstackStart: {
    server: { entry: "server" },
    deploymentStrategy: "vercel",
  },
});
