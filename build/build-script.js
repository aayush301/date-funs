const path = require("path");
const fs = require("fs/promises");

const getFiles = async () => {
  const ignorePattern = /^_/;
  const ignoredFiles = ["index.js"];
  const srcPath = path.join(process.cwd(), "src");

  let files = await fs.readdir(srcPath, { withFileTypes: true });
  files = files.filter(file => !ignorePattern.test(file.name) && !ignoredFiles.includes(file.name));

  files = await Promise.all(
    files.map(async file => {
      if (file.isFile())
        return {
          name: path.parse(file.name).name,
          path: `./${file.name}`,
        };

      // Else if file is a directory
      let files = await fs.readdir(path.join(srcPath, file.name), { withFileTypes: true });
      files = files.filter(file => !ignorePattern.test(file.name));
      return files.map(fl => ({
        name: path.parse(fl.name).name,
        path: `./${file.name}/${fl.name}`,
      }));
    })
  );
  return files.flat();
};

const getContent = files => {
  const lines = files.map(file => `exports.${file.name} = require("${file.path}");`);
  const joinedLines = lines.join("\n");
  const content = `// This file is generated automatically using \`npm run build\`. Please don't change it.\n\n${joinedLines}`;
  return content;
};

const writeExportsIntoIndexFile = async () => {
  const files = await getFiles();
  const content = getContent(files);
  fs.writeFile("src/index.js", content);
};

writeExportsIntoIndexFile();
