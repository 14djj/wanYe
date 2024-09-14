// script.js
const videoPlayer = document.getElementById('videoPlayer');
const videoSource = document.getElementById('videoSource');

let videoQueue = [];
let startX = 0;  // For tracking the start position of touch
let currentIndex = 0;

function loadVideo(url) {
  videoSource.src = url;
  videoPlayer.load();
  videoPlayer.play();
}

function fetchNextVideo() {
  fetch('/next-video')
    .then(response => response.json())
    .then(data => {
      if (data.videoUrl) {
        videoQueue.push(data.videoUrl);
        if (videoQueue.length === 1) { // If queue was empty, load immediately
          loadVideo(videoQueue.shift());
        }
      } else {
        alert('No more videos');
      }
    })
    .catch(error => console.error('Error fetching next video:', error));
}

function switchToNextVideo() {
  if (videoQueue.length > 0) {
    loadVideo(videoQueue.shift());
  } else {
    fetchNextVideo();
  }
}

function handleSwipe(event) {
  const touch = event.changedTouches[0];
  const endX = touch.pageX;
  const diffX = startX - endX;

  if (Math.abs(diffX) > 50) { // Adjust threshold as needed
    if (diffX > 0) {
      // Swipe left, next video
      switchToNextVideo();
    } else {
      // Swipe right, previous video
      if (currentIndex > 0) {
        currentIndex--;
        videoSource.src = videoQueue[currentIndex];
        videoPlayer.load();
        videoPlayer.play();
      }
    }
  }
}

videoPlayer.addEventListener('touchstart', (event) => {
  const touch = event.touches[0];
  startX = touch.pageX;
});

videoPlayer.addEventListener('touchend', handleSwipe);

// Load the first video on page load
fetchNextVideo();
