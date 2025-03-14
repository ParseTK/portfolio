document.addEventListener('DOMContentLoaded', () => {
    console.log("Website Loaded Successfully");

    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId.startsWith("#")) {
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                window.location.href = targetId;
            }
        });
    });

    // Dynamic welcome message
    const welcomeMessageElement = document.getElementById('welcome-message');
    if (welcomeMessageElement) {
        const now = new Date();
        const hours = now.getHours();
        let greeting = "Welcome to My Portfolio";
        if (hours < 12) greeting = "Good Morning! Welcome to My Portfolio";
        else if (hours < 18) greeting = "Good Afternoon! Welcome to My Portfolio";
        else greeting = "Good Evening! Welcome to My Portfolio";
        welcomeMessageElement.textContent = greeting;
    }

    // Hover effects for projects/skills
    document.querySelectorAll('.project, .skill').forEach(item => {
        item.addEventListener('mouseenter', () => item.classList.add('hovered'));
        item.addEventListener('mouseleave', () => item.classList.remove('hovered'));
    });

    // Button click animation
    document.querySelectorAll('nav a, .read-more, button').forEach(button => {
        button.addEventListener('mousedown', () => button.classList.add('button-clicked'));
        button.addEventListener('mouseup', () => setTimeout(() => button.classList.remove('button-clicked'), 150));
    });
});
