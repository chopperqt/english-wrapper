import federation from "@originjs/vite-plugin-federation";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from 'path'

const DEFAULT_URL = 'http://192.168.100.107'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  plugins: [
    react(),
    federation({
      name: "host-app",
      remotes: {
        StatisticsApp: `${DEFAULT_URL}:5004/assets/remoteEntry.js`,
        RepeaterApp: `${DEFAULT_URL}:5006/assets/remote2Entry.js`,
      },
      shared: ["react", "react-dom", "antd", "react-redux", "react-router-dom"],
    }),
  ],
  resolve: {
    alias: {
      '@pages': path.resolve(__dirname, './src/pages'),
      '@api': path.resolve(__dirname, './src/api'),
      '@stores': path.resolve(__dirname, './src/stores'),
    },
  },
  optimizeDeps: {
    exclude: ["remoteApp/Button"],
  },
});
