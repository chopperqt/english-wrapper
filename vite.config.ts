import federation from "@originjs/vite-plugin-federation";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host-app",
      remotes: {
        remoteApp: "http://192.168.100.107:5004/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "antd", "react-redux", "react-router-dom"],
    }),
  ],
  optimizeDeps: {
    exclude: ["remoteApp/Button"],
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
