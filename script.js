// Typing effect
const typingText = document.getElementById('typing-text');
const text = "Premal Shah";
let index = 0;


// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference or default to dark theme
const currentTheme = localStorage.getItem('theme') || 'dark';
body.classList.toggle('light-theme', currentTheme === 'light');
updateToggleButton(currentTheme);

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    const theme = body.classList.contains('light-theme') ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
    updateToggleButton(theme);
});

function updateToggleButton(theme) {
    if (theme === 'light') {
        themeToggle.textContent = '🌙 Dark Mode';
    } else {
        themeToggle.textContent = '☀️ Light Mode';
    }
}

// Existing code...

// More About Me modal
const moreAboutMeBtn = document.getElementById('more-about-me');
const modal = document.createElement('div');
modal.className = 'modal';
modal.innerHTML = `
    <div class="modal-content">
        <span class="close">&times;</span>
        <h2>More About Premal Shah</h2>
        <p>Premal Shah is a passionate data scientist and software developer with a keen interest in machine learning and cloud computing. Currently pursuing an MS in Data Science at the University of Maryland, Premal is dedicated to leveraging cutting-edge technologies to solve real-world problems.</p>
        <p>With experience in projects ranging from agricultural analytics to energy demand forecasting, Premal has demonstrated a versatile skill set and a commitment to innovation. His motto, "Veni, Vidi, Vici," reflects his approach to tackling challenges head-on and achieving success through determination and expertise.</p>
    </div>
`;
document.body.appendChild(modal);

const closeBtn = modal.querySelector('.close');

moreAboutMeBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Remove the existing modal-related code

// Download CV button animation
const downloadCvBtn = document.getElementById('download-cv');
downloadCvBtn.addEventListener('click', (e) => {
    e.preventDefault();
    downloadCvBtn.classList.add('downloading');
    downloadCvBtn.querySelector('.btn-text').textContent = 'Opening CV...';
    
    // Simulate a short delay before opening the link
    setTimeout(() => {
        window.open(downloadCvBtn.href, '_blank');
        downloadCvBtn.classList.remove('downloading');
        downloadCvBtn.querySelector('.btn-text').textContent = 'Download CV';
    }, 1000);
});


// 3D Quote Animation
const quote3d = document.getElementById('quote3d');

document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 25;
    const y = (window.innerHeight / 2 - e.pageY) / 25;
    quote3d.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

// Contact Form Submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Here you would typically send the form data to a server
    // For this example, we'll just log it to the console
    console.log('Form submitted:', { name, email, message });

    // Simulate sending email
    alert('Thank you for your message! It has been sent to premalshah204@gmail.com');
    contactForm.reset();
});

function typeWriter() {
    if (index < text.length) {
        typingText.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

document.addEventListener('DOMContentLoaded', typeWriter);

// Custom cursor
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.addEventListener('mousedown', () => cursor.style.transform = 'scale(0.8)');
document.addEventListener('mouseup', () => cursor.style.transform = 'scale(1)');

// Scroll progress
const scrollProgress = document.getElementById('scroll-progress');

window.addEventListener('scroll', () => {
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    scrollProgress.style.width = scrollPercentage + '%';
});

// Animate skill bars on scroll
const skillBars = document.querySelectorAll('.skill-progress');
const animateSkillBars = () => {
    skillBars.forEach(bar => {
        const barTop = bar.getBoundingClientRect().top;
        if (barTop < window.innerHeight) {
            bar.style.width = bar.getAttribute('data-width') + '%';
        }
    });
};

window.addEventListener('scroll', animateSkillBars);
animateSkillBars(); // Initial check on page load

// Project card hover effect
const projectCards = document.querySelectorAll('.project-card, .research-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Parallax effect for sections
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const scrollPosition = window.pageYOffset;
        const sectionSpeed = section.dataset.speed || 0.5;
        section.style.transform = `translateY(${scrollPosition * sectionSpeed}px)`;
    });
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar highlight on scroll
const navLinks = document.querySelectorAll('#navbar a');
const observerOptions = {
    threshold: 0.7
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach(link => {
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});