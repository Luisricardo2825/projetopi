import * as fs from "fs";
import path from "path";

function copy(src, dest) {
  fs.copyFileSync(src, dest);
}

function getFilesRecursive(dir) {
  let files = [];
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      files = files.concat(getFilesRecursive(filePath));
    } else {
      files.push(filePath);
    }
  });
  return files;
}

function checkFileExtension(file) {
  return file.split(".").pop();
}

function getBuild() {
  const assetsPath = "../src/main/resources/static";
  const htmlPath = "../src/main/resources/templates";

  const files = getFilesRecursive("./dist");

  files.forEach((file) => {
    const fileExtension = checkFileExtension(file);
    if (fileExtension === "html") {
      const fileName = path.basename(file);
      const filePath = path.join(...[htmlPath, fileName]).toString();

      copy(file, filePath);
    } else {
      const fileName = path.basename(file);

      const filePath = path
        .join(...[assetsPath, "assets", fileName])
        .toString();

      copy(file, filePath);
    }
  });

  console.log("finished build");
}

getBuild();
