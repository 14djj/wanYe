const fs = require('fs');
const path = require('path');

// 目录路径
const videoDirectory = path.join(__dirname, 'videos');
const outputFile = path.join(__dirname, 'videoList.json');
let videoFiles = [];

// 递归获取所有视频文件
const getAllVideoFiles = (dir) => {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getAllVideoFiles(filePath);
    } else if (file.endsWith('.mp4')) {
      videoFiles.push(filePath);
    }
  });
};

// 生成视频列表
getAllVideoFiles(videoDirectory);

// 将视频列表保存到 JSON 文件
fs.writeFileSync(outputFile, JSON.stringify(videoFiles, null, 2), 'utf8');

console.log(`Video list saved to ${outputFile}`);
