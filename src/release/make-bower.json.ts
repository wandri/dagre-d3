#!/usr/bin/env node

// Renders the bower.json template and prints it to stdout

import packageJson from "../../package.json";

const packageNameParts = packageJson.name.split("/");
const packageName = packageNameParts[packageNameParts.length - 1];

const template = {
  name: packageName,
  version: packageJson.version,
  main: ["dist/" + packageName + ".core.js"],
  ignore: [
    ".*",
    "README.md",
    "CHANGELOG.md",
    "Makefile",
    "browser.js",
    "dist/" + packageName + ".js",
    "dist/" + packageName + ".min.js",
    "index.js",
    "karma*",
    "lib/**",
    "package.json",
    "src/**",
    "test/**"
  ],
  dependencies: packageJson.dependencies
};

console.log(JSON.stringify(template, null, 2));
