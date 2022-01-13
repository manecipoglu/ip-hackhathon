const fs = require("fs");

// helper function to turn buffer to JSON file
const readFile = (path) => {
  const data = fs.readFileSync(path);
  return JSON.parse(data);
};

// helper function to write
const writeFile = (data, filePath) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

module.exports = {
  readFile,
  writeFile,
};
