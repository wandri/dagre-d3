import * as esbuild from "esbuild";
import { dependencies } from "./package.json";

const external = Object.keys(dependencies || {});

const sharedConfig: esbuild.BuildOptions = {
  entryPoints: ["index.ts"],
  bundle: true,
  sourcemap: true,
  target: "es2018",
  legalComments: "linked"
};

async function build(): Promise<void> {
  await esbuild.build({
    ...sharedConfig,
    outfile: "dist/dagre-d3.cjs.js",
    format: "cjs",
    platform: "node",
    external
  });

  await esbuild.build({
    ...sharedConfig,
    outfile: "dist/dagre-d3.esm.js",
    format: "esm",
    platform: "neutral",
    external
  });

  const iifeConfig: esbuild.BuildOptions = {
    ...sharedConfig,
    format: "iife",
    globalName: "dagreD3",
    platform: "browser",
    external: []
  };

  await esbuild.build({
    ...iifeConfig,
    outfile: "dist/dagre-d3.min.js",
    minify: true
  });

  await esbuild.build({
    ...iifeConfig,
    outfile: "dist/dagre-d3.js",
    minify: false
  });
}

build().catch(() => process.exit(1));
