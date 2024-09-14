const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
var nextVideo;

app.use(cors());

// 目录路径
const videoDirectory = path.join(__dirname, 'videos');
const videoListFile = path.join(__dirname, 'videoList.json');
const videoswatched = path.join(__dirname, 'watched.json');
let videoFiles = [];
// 初始化视频文件列表
const initVideoFiles = () => {
  if (fs.existsSync(videoListFile)) {
    const data = fs.readFileSync(videoListFile, 'utf8');
    videoFiles = JSON.parse(data);
  } else {
    console.error('videoList.json 文件不存在 请检查是否有 generateVideoList.js文件.');
  }
};

// 调用初始化函数
initVideoFiles();

//const getCurrentVideoFile = () => {
//  if (videoFiles.length === 0) return null;
//  const randomIndex = Math.floor(Math.random() * videoFiles.length);
//  return videoFiles[randomIndex];
//
//};

const updateWatchedList = (video) => {
  let watchedVideos = [];
  if (fs.existsSync(videoswatched)) {
    const data = fs.readFileSync(videoswatched, 'utf8');
    watchedVideos = JSON.parse(data);
  }

  if (!watchedVideos.includes(video)) {
    watchedVideos.push(video);
    fs.writeFileSync(videoswatched, JSON.stringify(watchedVideos, null, 2));
  }
};

const getCurrentVideoFile = () => {
  if (videoFiles.length === 0) return null;

  let watchedVideos = [];
  if (fs.existsSync(videoswatched)) {
    const data = fs.readFileSync(videoswatched, 'utf8');
    watchedVideos = JSON.parse(data);
  }

  let video;
  do {
    const randomIndex = Math.floor(Math.random() * videoFiles.length);
    video = videoFiles[randomIndex];
  } while (watchedVideos.includes(video));

  updateWatchedList(video); // 将选中的视频文件添加到 watched.json
  return video;
};



app.get('/video', (req, res) => {
  const filename = nextVideo;

  if (!filename) {
    return res.status(404).send('No videos available');
  }

  const stat = fs.statSync(filename);
  const fileSize = stat.size;
  const range = req.headers.range;

  if (range) {
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = Math.min(start + 999999, fileSize - 1);

    const chunksize = (end - start) + 1;
    const file = fs.createReadStream(filename, { start, end });

    res.writeHead(206, {
      "Content-Range": `bytes ${start}-${end}/${fileSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": chunksize,
      "Content-Type": "video/mp4",
    });

    file.pipe(res);
  } else {
    res.writeHead(200, {
      "Content-Length": fileSize,
      "Content-Type": "video/mp4", 
    });

    fs.createReadStream(filename).pipe(res);
  }
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/next-video', (req, res) => {
  if (videoFiles.length === 0) return res.status(404).send('No videos available');

  //currentVideoIndex = (currentVideoIndex + 1) % videoFiles.length;
  nextVideo = getCurrentVideoFile();

  res.json({ videoUrl: `/video?filename=${encodeURIComponent(nextVideo)}` });
  const nows = new Date();
  console.log(`${nows}打开了一个视频：${nextVideo}`);
});

const port = 3000;
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://127.0.0.1:${port}`);
});