#!/usr/bin/env node

import packageJson from "../../package.json";

console.log("const version = \"" + packageJson.version + "\";");
console.log("");
console.log("export default version;");
