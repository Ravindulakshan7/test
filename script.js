// Dental Hospital Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.querySelector('i').classList.add('fa-bars');
                mobileMenuBtn.querySelector('i').classList.remove('fa-times');
            });
        });
    }
    
    // Header scroll effect
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') return;
            
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');
    const body = document.body;
    
    // Toggle theme function
    function toggleTheme() {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
            showNotification('Light mode activated');
        } else {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
            showNotification('Dark mode activated');
        }
    }
    
    // Add event listeners to theme toggle buttons
    if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
    if (themeToggleMobile) themeToggleMobile.addEventListener('click', toggleTheme);
    
    // Form submission
    const appointmentForm = document.getElementById('appointmentForm');
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for booking an appointment! We will contact you shortly to confirm.');
            appointmentForm.reset();
        });
    }
    
    // Simple text animation for hero section
    const heroText = document.querySelector('.hero h1');
    const heroParagraph = document.querySelector('.hero p');
    const heroButton = document.querySelector('.hero .cta-button');
    const heroImage = document.querySelector('.hero-image');
    
    setTimeout(() => {
        if (heroText) heroText.style.animation = 'fadeUp 1s forwards 0.3s';
        if (heroParagraph) heroParagraph.style.animation = 'fadeUp 1s forwards 0.6s';
        if (heroButton) heroButton.style.animation = 'fadeUp 1s forwards 0.9s';
        if (heroImage) heroImage.style.animation = 'fadeUp 1s forwards 1.2s';
    }, 100);
    
    // Emergency button
    const emergencyBtn = document.createElement('button');
    emergencyBtn.id = 'emergency-btn';
    emergencyBtn.innerHTML = '<i class="fas fa-phone-alt"></i> Emergency';
    emergencyBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: linear-gradient(135deg, #f44336, #d32f2f);
        color: white;
        border: none;
        border-radius: 50px;
        padding: 15px 25px;
        font-weight: bold;
        font-size: 1rem;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(244, 67, 54, 0.3);
        z-index: 1000;
        display: flex;
        align-items: center;
        gap: 10px;
        transition: all 0.3s ease;
    `;
    
    emergencyBtn.addEventListener('click', () => {
        const confirmed = confirm('Call emergency dental line: +1 (555) 987-6543\n\nClick OK to call or Cancel to copy number.');
        
        if (confirmed) {
            window.location.href = 'tel:+15559876543';
        } else {
            navigator.clipboard.writeText('+1 (555) 987-6543');
            alert('Emergency number copied to clipboard: +1 (555) 987-6543');
        }
    });
    
    document.body.appendChild(emergencyBtn);
    
    // Back to top button
    const backToTopBtn = document.createElement('button');
    backToTopBtn.id = 'back-to-top';
    backToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 80px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 1.2rem;
        cursor: pointer;
        box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        z-index: 999;
        display: none;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
    `;
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    document.body.appendChild(backToTopBtn);
    
    // Show/hide back to top button
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'flex';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });
    
    // Notification function
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: #4CAF50;
            color: white;
            padding: 15px 25px;
            border-radius: 5px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            z-index: 9999;
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
        
        // Add animation styles
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        
        if (!document.querySelector('#notification-styles')) {
            style.id = 'notification-styles';
            document.head.appendChild(style);
        }
    }
});

// Global function for scheduling appointments
window.scheduleAppointment = function(service) {
    const appointmentForm = document.getElementById('appointmentForm');
    if (appointmentForm) {
        const serviceSelect = appointmentForm.querySelector('select');
        if (serviceSelect) {
            serviceSelect.value = service;
        }
        
        document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' });
    }
};