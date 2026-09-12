const video = document.getElementById('background-video');
const toggle = document.getElementById('background-toggle');

if (video instanceof HTMLVideoElement && toggle instanceof HTMLButtonElement) {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let manuallyPaused = false;

  function updatePlayback() {
    toggle.hidden = reducedMotion.matches;
    if (reducedMotion.matches) {
      video.pause();
      video.hidden = true;
      return;
    }

    if (document.hidden || manuallyPaused) {
      video.pause();
      return;
    }

    // Defer the download until motion is allowed. The CSS poster also works without JS.
    if (!video.hasAttribute('src')) video.src = video.dataset.src;
    video.play().catch((error) => {
      if (error.name !== 'AbortError') {
        video.hidden = true;
        toggle.textContent = 'Play background';
      }
    });
  }

  video.addEventListener('playing', () => {
    if (reducedMotion.matches || document.hidden || manuallyPaused) {
      video.pause();
      return;
    }
    video.hidden = false;
    toggle.textContent = 'Pause background';
  });
  video.addEventListener('pause', () => {
    toggle.textContent = 'Play background';
  });
  video.addEventListener('error', () => {
    video.hidden = true;
    toggle.hidden = true;
  });
  toggle.addEventListener('click', () => {
    manuallyPaused = !video.paused;
    updatePlayback();
  });
  reducedMotion.addEventListener('change', updatePlayback);
  document.addEventListener('visibilitychange', updatePlayback);
  updatePlayback();
}
