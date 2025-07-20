import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/auth.ts", "src/client.ts"],
  format: ["esm"],
  outDir: "dist",
  dts: true,
  clean: true,
  target: "es2020",
  platform: "node",
  silent: true,
});
