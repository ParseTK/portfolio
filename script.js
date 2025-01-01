document.addEventListener('DOMContentLoaded', () => {
    console.log("Professional Portfolio Loaded");

    // Add smooth scrolling to navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                window.location.href = targetId;
            }
        });
    });

    // Dynamic Welcome Message for Homepage
    const welcomeMessageElement = document.getElementById('welcome-message');
    if (welcomeMessageElement) {
        const now = new Date();
        const hours = now.getHours();
        let welcomeMessage = '';

        if (hours < 12) {
            welcomeMessage = 'Good Morning!';
        } else if (hours < 18) {
            welcomeMessage = 'Good Afternoon!';
        } else {
            welcomeMessage = 'Good Evening!';
        }

        welcomeMessageElement.textContent = welcomeMessage;

        // Add class to remove caret after typing effect
        setTimeout(() => {
            welcomeMessageElement.classList.add('typing-done');
        }, 1000); // Adjust to match typing animation duration
    }
});
window.addEventListener('resize', () => {
    const bgVideo = document.getElementById('bg-video');
    if (window.innerWidth / window.innerHeight < bgVideo.videoWidth / bgVideo.videoHeight) {
        bgVideo.style.width = '100%';
        bgVideo.style.height = 'auto';
    } else {
        bgVideo.style.width = 'auto';
        bgVideo.style.height = '100%';
    }
});
