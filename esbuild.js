#!/usr/bin/env node

const fs = require("fs");

function toBuild(entryPoints) {
  require("esbuild")
    .build({
      entryPoints: entryPoints,
      bundle: true,
      minify: true,
      platform: 'node',
      outdir: "dist",
    })
    .catch(() => process.exit(1));
}

function walkSync(currentDirPath, callback) {
  const filenames = fs.readdirSync(currentDirPath, { withFileTypes: true });
  const arr = [];
  filenames.forEach(function (dirent) {
    arr.push(dirent.name);
  });
  callback(arr);
}

walkSync("src", function (filePath, stat) {
  let entryPoints = [];
  filePath.forEach((item) => {
    entryPoints.push(`src/${item}/index.ts`);
  });
  toBuild(entryPoints);
});
