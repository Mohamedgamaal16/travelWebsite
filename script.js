// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Gallery Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

if (filterButtons.length > 0 && galleryItems.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            galleryItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Form Validation and Submission
const inquiryForm = document.getElementById('inquiryForm');
if (inquiryForm) {
    inquiryForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (name && email && message) {
            // In a real application, you would send this data to a server
            alert('Thank you for your message! We will get back to you soon.');
            inquiryForm.reset();
        } else {
            alert('Please fill in all required fields.');
        }
    });
}

// Login Form Validation
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Simple validation
        if (email && password) {
            // In a real application, you would authenticate with a server
            alert('Login successful! Welcome back.');
            loginForm.reset();
        } else {
            alert('Please enter both email and password.');
        }
    });
}

// Registration Form
const signupLink = document.querySelector('.signup-link');
const registerModal = document.getElementById('registerModal');
const closeModal = document.querySelector('.close');
const registerForm = document.getElementById('registerForm');

if (signupLink) {
    signupLink.addEventListener('click', function(e) {
        e.preventDefault();
        registerModal.style.display = 'block';
    });
}

if (closeModal) {
    closeModal.addEventListener('click', function() {
        registerModal.style.display = 'none';
    });
}

if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('regEmail').value;
        const password = document.getElementById('regPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        // Simple validation
        if (firstName && lastName && email && password && confirmPassword) {
            if (password === confirmPassword) {
                // In a real application, you would send this data to a server
                alert('Account created successfully! You can now log in.');
                registerForm.reset();
                registerModal.style.display = 'none';
            } else {
                alert('Passwords do not match.');
            }
        } else {
            alert('Please fill in all required fields.');
        }
    });
}

// Close modal when clicking outside of it
window.addEventListener('click', function(event) {
    if (event.target === registerModal) {
        registerModal.style.display = 'none';
    }
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animation on Scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.feature-card, .destination-card, .service-card, .gallery-item');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial state for animated elements
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.feature-card, .destination-card, .service-card, .gallery-item');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Trigger animation on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Trigger once on load
    animateOnScroll();
});

// Testimonial Slider
let currentTestimonial = 0;
const testimonials = [
    {
        text: "TravelEase made our honeymoon planning so easy! Everything was perfectly organized.",
        client: "Sarah & John, Maldives"
    },
    {
        text: "The customer service was exceptional. They helped us when our flight was canceled and found us a great alternative.",
        client: "Michael Rodriguez, Spain"
    },
    {
        text: "Booking through TravelEase saved us over $500 on our family vacation. Highly recommended!",
        client: "The Johnson Family, Hawaii"
    }
];

const updateTestimonial = () => {
    const testimonialElement = document.querySelector('.testimonial p');
    const clientElement = document.querySelector('.client span');
    
    if (testimonialElement && clientElement) {
        testimonialElement.textContent = testimonials[currentTestimonial].text;
        clientElement.textContent = `- ${testimonials[currentTestimonial].client}`;
    }
};

// Rotate testimonials every 5 seconds
if (document.querySelector('.testimonial')) {
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        updateTestimonial();
    }, 5000);
}