import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    tsconfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({
      server: { entry: "server" },
    }),
    nitro({
      preset: process.env.GITHUB_ACTIONS ? "github-pages" : "cloudflare-module",
    }),
    react(),
  ],
  base: process.env.GITHUB_ACTIONS ? "/La-Cupula-/" : "/",
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
