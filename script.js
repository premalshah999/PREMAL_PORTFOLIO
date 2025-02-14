// Typing effect
const typingText = document.getElementById('typing-text');
const textToType = "Hi! I'm Premal Shah";
let charIndex = 0;

function typeWriter() {
    typingText.textContent = textToType.slice(0, charIndex);
    
    if (charIndex < textToType.length) {
        charIndex++;
        setTimeout(typeWriter, 30);
    }
}

// Start the typing effect
typeWriter();

// Custom cursor
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
    const cursor = document.getElementById('cursor');
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

// Particle effect
function createParticles() {
    const hero = document.getElementById('hero');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        hero.appendChild(particle);

        animateParticle(particle);
    }
}

function animateParticle(particle) {
    const animationDuration = Math.random() * 15 + 5;
    const heroRect = document.getElementById('hero').getBoundingClientRect();

    particle.style.left = Math.random() * heroRect.width + 'px';
    particle.style.top = Math.random() * heroRect.height + 'px';
    particle.style.animation = `float ${animationDuration}s infinite ease-in-out`;

    particle.addEventListener('animationiteration', () => {
        particle.style.left = Math.random() * heroRect.width + 'px';
        particle.style.top = Math.random() * heroRect.height + 'px';
    });
}

// Add this to your existing scroll event listener
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const hero = document.getElementById('hero');
    const particles = hero.querySelectorAll('.particle');

    particles.forEach(particle => {
        const speed = parseFloat(particle.style.animationDuration) * 0.1;
        particle.style.transform = `translateY(${scrollPosition * speed}px)`;
    });

    // ... (keep your existing scroll-related code here)
});

document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('checkbox');
    const body = document.body;

    // Check for saved theme preference or default to dark theme
    const currentTheme = localStorage.getItem('theme') || 'dark';
    body.classList.toggle('light-theme', currentTheme === 'light');
    themeSwitch.checked = currentTheme === 'light';

    themeSwitch.addEventListener('change', () => {
        body.classList.toggle('light-theme');
        const theme = body.classList.contains('light-theme') ? 'light' : 'dark';
        localStorage.setItem('theme', theme);
    });

    const typingText = document.getElementById('typing-text');
    const subtitleText = document.getElementById('subtitle-text');
    const nameToType = "Hi! I'm Premal Shah";
    const subtitleToType = "Data Science | Software Development | Machine Learning | Cloud Computing";
    let nameIndex = 0;
    let subtitleIndex = 0;

    function typeWriter() {
        if (nameIndex < nameToType.length) {
            typingText.textContent = nameToType.slice(0, nameIndex + 1);
            nameIndex++;
            setTimeout(typeWriter, 30);
        } else if (subtitleIndex < subtitleToType.length) {
            subtitleText.textContent = subtitleToType.slice(0, subtitleIndex + 1);
            subtitleIndex++;
            setTimeout(typeWriter, 30);
        }
    }

    typeWriter();

    // Skills animation
    function animateSkills() {
        const skillLevels = document.querySelectorAll('.skill-level');
        skillLevels.forEach(level => {
            const targetLevel = level.getAttribute('data-level');
            level.style.width = targetLevel + '%';
        });
    }

    // Intersection Observer for skills section
    const skillsSection = document.querySelector('#skills-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    if (skillsSection) {
        observer.observe(skillsSection);
    }

    // Managerial Skills Star Rating
    function setStarRatings() {
        const starRatings = document.querySelectorAll('.star-rating');
        starRatings.forEach(rating => {
            const ratingValue = parseFloat(rating.getAttribute('data-rating'));
            const percent = (ratingValue / 5) * 100;
            rating.style.setProperty('--percent', `${percent}%`);
            
            // Add the numeric rating next to the stars
            const numericRating = document.createElement('span');
            numericRating.textContent = `${ratingValue}/5`;
            numericRating.classList.add('numeric-rating');
            rating.appendChild(numericRating);
        });
    }

    // Call this function when the page loads
    document.addEventListener('DOMContentLoaded', () => {
        // ... (existing code)
        setStarRatings();
    });

    const cursor = document.getElementById('custom-cursor');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    // Project modal functionality
    const modal = document.getElementById("project-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const closeBtn = document.getElementsByClassName("close")[0];
    const projectButtons = document.querySelectorAll(".project-details-btn");

    projectButtons.forEach(button => {
        button.addEventListener("click", function() {
            const projectCard = this.closest(".project-card");
            const projectTitle = projectCard.querySelector("h3").textContent;
            const projectDescription = projectCard.querySelector("p").textContent;
            
            modalTitle.textContent = projectTitle;
            modalDescription.textContent = projectDescription;
            modal.style.display = "block";

            // Show pop-up message
            alert("View it on my GitHub");
        });
    });

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    const hamburger = document.querySelector(".hamburger-menu");
    const navMenu = document.querySelector(".nav-list");
    const navLinks = document.querySelectorAll(".nav-link");

    hamburger.addEventListener("click", mobileMenu);
    navLinks.forEach(n => n.addEventListener("click", closeMenu));

    function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }

    function closeMenu() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }

    function sendEmail(event) {
        event.preventDefault(); // Prevent the default form submission

        const name = event.target.name.value;
        const email = event.target.email.value;
        const message = event.target.message.value;

        const subject = encodeURIComponent(`Message from ${name}`);
        const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
        const mailtoLink = `mailto:premalshah204@gmail.com?subject=${subject}&body=${body}`;

        window.location.href = mailtoLink; // Open the user's email client
    }
});
