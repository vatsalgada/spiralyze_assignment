// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('thankYouModal').style.display = 'block';
});

// Video player
document.getElementById('playButton').addEventListener('click', function() {
    const videoModal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('videoPlayer');
    videoModal.style.display = 'block';
    videoPlayer.play();
});

// Close modals
document.querySelectorAll('.close-modal').forEach(function(closeBtn) {
    closeBtn.addEventListener('click', function() {
        const modal = this.closest('.modal');
        modal.style.display = 'none';
        const video = modal.querySelector('video');
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
    });
});

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
        const video = event.target.querySelector('video');
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
    }
});
