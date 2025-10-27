import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // watching for file changes so that it is reloaded in docker container
    },
    port: 3000,
    host: "0.0.0.0",
  },
});
