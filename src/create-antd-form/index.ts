import fs from "fs";
import main from "./create";

// 创建文件
function createFile(fileName: string, content: string) {
  fs.writeFile(
    `${fileName}.tsx`,
    content,
    {
      encoding: "utf8",
    },
    (err) => {
      if (err) console.log(err);
      process.exit(0);
    }
  );
}

function init() {
  const { fileName = "demo" } = process.env;

  const content = main({
    ...process.env,
    fileName: fileName,
  });

  createFile(fileName, content);
}

init();
