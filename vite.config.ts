import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

export default defineConfig(() => ({
  plugins: [
    tailwindcss(),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({
      deployment: "cloudflare-pages",
    }),
    react(),
  ],
  ssr: {
    noExternal: true,
  },
  resolve: {
    alias: {
      "@": `${process.cwd()}/src`,
      util: "node:util",
      crypto: "node:crypto",
      stream: "node:stream",
      async_hooks: "node:async_hooks",
    },
    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "@tanstack/react-query",
      "@tanstack/query-core",
    ],
  },
  server: {
    host: "::",
    port: 8080,
  },
}));
