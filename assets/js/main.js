// Portfolio Animations - Abakar Oumar Adam
document.addEventListener('DOMContentLoaded', function () {
    console.log('🚀 Initializing portfolio animations...');

    // Fade in des sections au scroll
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
    const appearOnScroll = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => { appearOnScroll.observe(fader); });

    // Hover Neon sur cards (uniquement les project-cards)
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.boxShadow = '0 0 20px #6A00FF, 0 0 40px #00C2FF';
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = '';
            card.style.transform = '';
        });
    });

    // Animation des boutons neon
    const neonButtons = document.querySelectorAll('.neon-btn');
    neonButtons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-3px) scale(1.05)';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = '';
        });
    });

    // Effet parallax léger sur le hero
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Animation des liens de navigation
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.textShadow = '0 0 10px #6A00FF, 0 0 20px #00C2FF';
        });
        link.addEventListener('mouseleave', () => {
            link.style.textShadow = '';
        });
    });

    // Animation des nodes de timeline
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.2}s`;
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'scale(1.05)';
            item.style.boxShadow = '0 0 30px #6A00FF, 0 0 60px #00C2FF';
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = '';
            item.style.boxShadow = '';
        });
    });

    // Animation des cartes de compétences (click seulement)
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.addEventListener('click', () => {
            card.style.transform = 'scale(0.95)';
            setTimeout(() => {
                card.style.transform = '';
            }, 150);
        });
    });

    // Effet de typing pour le titre principal
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Animation du titre au chargement
    window.addEventListener('load', () => {
        const heroTitle = document.querySelector('.hero h1');
        if (heroTitle) {
            const originalText = heroTitle.textContent;
            typeWriter(heroTitle, originalText, 150);
        }
    });

    // Animation des icônes sociales
    const socialIcons = document.querySelectorAll('.socials img');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'scale(1.3) rotate(5deg)';
        });
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = '';
        });
    });

    // Effet de glow sur les éléments neon
    const neonElements = document.querySelectorAll('.neon-text');
    neonElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.textShadow = '0 0 20px #6A00FF, 0 0 40px #00C2FF, 0 0 60px #6A00FF';
        });
        element.addEventListener('mouseleave', () => {
            element.style.textShadow = '';
        });
    });

    // Animation du formulaire de contact
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.style.borderColor = '#6A00FF';
                input.style.boxShadow = '0 0 15px rgba(106, 0, 255, 0.5)';
            });
            input.addEventListener('blur', () => {
                input.style.borderColor = '';
                input.style.boxShadow = '';
            });
        });
    }

    // Effet de particules en arrière-plan
    function createParticle() {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.width = '2px';
        particle.style.height = '2px';
        particle.style.background = '#6A00FF';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '-1';
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.top = window.innerHeight + 'px';
        particle.style.opacity = '0.6';

        document.body.appendChild(particle);

        const animation = particle.animate([
            { transform: 'translateY(0px)', opacity: 0.6 },
            { transform: `translateY(-${window.innerHeight + 100}px)`, opacity: 0 }
        ], {
            duration: Math.random() * 3000 + 2000,
            easing: 'linear'
        });

        animation.onfinish = () => {
            particle.remove();
        };
    }

    // Créer des particules périodiquement
    setInterval(createParticle, 2000);

    // Animation de la vidéo placeholder
    const videoPlaceholder = document.querySelector('.video-placeholder');
    if (videoPlaceholder) {
        videoPlaceholder.addEventListener('mouseenter', () => {
            videoPlaceholder.style.transform = 'scale(1.05)';
            videoPlaceholder.style.boxShadow = '0 0 30px #6A00FF, 0 0 60px #00C2FF';
        });
        videoPlaceholder.addEventListener('mouseleave', () => {
            videoPlaceholder.style.transform = '';
            videoPlaceholder.style.boxShadow = '';
        });
    }

    // Effet de ripple sur les boutons
    function createRipple(event) {
        const button = event.currentTarget;
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    // Ajouter l'effet ripple aux boutons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', createRipple);
    });

    // Smooth scroll pour les liens internes
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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

    // Animation au changement de page (effet de transition)
    window.addEventListener('beforeunload', () => {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.3s ease';
    });

    // Effet de loading progressif
    window.addEventListener('load', () => {
        document.body.style.opacity = '1';
        document.body.style.transition = 'opacity 0.5s ease';
    });

    console.log('✅ Portfolio animations loaded successfully!');
});

// Fonction pour le formulaire de contact
function submitContact(e) {
    e.preventDefault();
    alert("Formulaire envoyé ! (à connecter avec backend/EmailJS)");
}

// Fonctions utilitaires
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message message-${type}`;
    messageDiv.textContent = message;

    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;

    if (type === 'success') {
        messageDiv.style.backgroundColor = '#10b981';
    } else if (type === 'error') {
        messageDiv.style.backgroundColor = '#ef4444';
    }

    document.body.appendChild(messageDiv);

    setTimeout(() => {
        messageDiv.style.transform = 'translateX(0)';
    }, 100);

    setTimeout(() => {
        messageDiv.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(messageDiv);
        }, 300);
    }, 5000);
}

// Fonction pour copier l'email
function copyEmail() {
    const email = 'abakar@example.com';
    navigator.clipboard.writeText(email).then(() => {
        showMessage('Email copié dans le presse-papiers !', 'success');
    }).catch(() => {
        showMessage('Impossible de copier l\'email.', 'error');
    });
}

// Fonction pour télécharger le CV
function downloadCV() {
    showMessage('Téléchargement du CV en cours...', 'success');
}

// Fonction pour le mode sombre
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
}

// Charger la préférence de mode sombre
document.addEventListener('DOMContentLoaded', function () {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'true') {
        document.body.classList.add('dark-mode');
    }
});

// Barre de progression au scroll
function updateScrollProgress() {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    let progressBar = document.querySelector('.scroll-progress');
    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, #6A00FF, #00C2FF);
            z-index: 1001;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);
    }

    progressBar.style.width = scrollPercent + '%';
}

window.addEventListener('scroll', updateScrollProgress);
