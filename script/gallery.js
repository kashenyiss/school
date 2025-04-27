const overlay = document.getElementById('fullscreenOverlay');
  const fullscreenImg = document.getElementById('fullscreenImage');

  document.querySelectorAll('.gallery-container img').forEach(img => {
    img.addEventListener('click', () => {
      fullscreenImg.src = img.src;
      overlay.style.display = 'flex';
    });
  });

   // Click anywhere to close
  overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
  });