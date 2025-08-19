import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: ["src/index.tsx"],
      name: "emoji",
      fileName: (format, entryName) => `emoji-${entryName}.${format}.js`,
    },
  },
});
