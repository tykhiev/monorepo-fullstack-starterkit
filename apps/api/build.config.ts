import Bun from "bun";

try {
  const result = await Bun.build({
    entrypoints: ["./src/index.ts"],
    minify: true,
    splitting: false, // Disable code splitting for Node.js compatibility
    format: "esm",
    outdir: "dist",
    target: "node",
  });
  if (result.success) {
    console.log(result.outputs);
    console.log("Build successful");
  } else {
    console.error("Build failed");
    console.error(result.logs);
  }
} catch (error) {
  console.error(error);
}
