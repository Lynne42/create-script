#!/usr/bin/env node

import path from "path";
import cp from "child_process";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const rootDir = path.join(__dirname, "..");
const packagesDir = path.join(rootDir, "lib");

const args = process.argv.slice(2);

const craScriptPath = path.join(packagesDir, "create-antd-form", "index.js");

cp.execSync(`node  ${craScriptPath} ${args.join(" ")}`, {
  cwd: rootDir,
  stdio: "inherit",
});
