const fs = require('fs');

const fileOperations = {
  writeToFile(filePath, content) {
    fs.writeFileSync(filePath, content, 'utf8');
  },

  readFromFile(filePath) {
    return fs.readFileSync(filePath, 'utf8');
  },

  updateFile(filePath, newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
  },

  clearFile(filePath) {
    fs.writeFileSync(filePath, '', 'utf8');
  },

  cleanFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const cleanedContent = content
      .replace(/[0-9]/g, '') 
      .toLowerCase();       
    fs.writeFileSync(filePath, cleanedContent, 'utf8');
  },

  copyFile(sourcePath, targetPath) {
    fs.copyFileSync(sourcePath, targetPath);
  },

  createFolder(folderPath) {
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
    }
  },

  deleteFolder(folderPath) {
    if (fs.existsSync(folderPath)) {
      fs.rmdirSync(folderPath, { recursive: true });
    }
  }
};

module.exports = { fileOperations };