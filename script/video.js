const video = document.getElementById('myVideo');
const playPauseBtn = document.getElementById('playPauseBtn');
const stopBtn = document.getElementById('stopBtn');
const volumeSlider = document.getElementById('volumeSlider');

playPauseBtn.addEventListener('click', togglePlayPause);
stopBtn.addEventListener('click', stopVideo);
volumeSlider.addEventListener('input', adjustVolume);

function togglePlayPause() {
  if (video.paused) {
    video.play();
    playPauseBtn.textContent = 'Pause';
  } else {
    video.pause();
    playPauseBtn.textContent = 'Play';
  }
}

function stopVideo() {
  video.pause();
  video.currentTime = 0;
  playPauseBtn.textContent = 'Play';
}

function adjustVolume() {
  video.volume = volumeSlider.value;
}

// Pause video when it ends
video.addEventListener('ended', () => {
  playPauseBtn.textContent = 'Play';
});
