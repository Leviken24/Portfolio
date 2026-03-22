/* Portfolio Scripts */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Intro Animation
    const introOverlay = document.getElementById('intro-overlay');
    if (introOverlay) {
        setTimeout(() => {
            introOverlay.style.transition = 'opacity 1s ease';
            introOverlay.style.opacity = '0';
            setTimeout(() => {
                introOverlay.style.display = 'none';
            }, 1000);
        }, 2500);
    }

    // 2. Particle / Starfield Background with violet tint
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const starContainer = document.getElementById('star-container');

    if (starContainer) {
        starContainer.appendChild(canvas);

        let width, height;
        let stars = [];

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            initStars();
        };

        const initStars = () => {
            stars = [];
            const starCount = Math.floor((width * height) / 3500);
            for (let i = 0; i < starCount; i++) {
                // Mix of white and violet-tinted stars
                const violet = Math.random() > 0.6;
                stars.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    radius: Math.random() * 1.4 + 0.2,
                    vx: (Math.random() - 0.5) * 0.15,
                    vy: (Math.random() - 0.5) * 0.15,
                    alpha: Math.random(),
                    flashSpeed: Math.random() * 0.018 + 0.004,
                    violet: violet
                });
            }
        };

        const animateStars = () => {
            ctx.clearRect(0, 0, width, height);

            stars.forEach(star => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                if (star.violet) {
                    ctx.fillStyle = `rgba(184, 127, 255, ${star.alpha * 0.7})`;
                } else {
                    ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
                }
                ctx.fill();

                star.x += star.vx;
                star.y += star.vy;

                if (star.x < 0) star.x = width;
                if (star.x > width) star.x = 0;
                if (star.y < 0) star.y = height;
                if (star.y > height) star.y = 0;

                star.alpha += star.flashSpeed;
                if (star.alpha > 1 || star.alpha < 0.15) {
                    star.flashSpeed = -star.flashSpeed;
                }
            });

            requestAnimationFrame(animateStars);
        };

        window.addEventListener('resize', resize);
        resize();
        animateStars();
    }

    // 3. Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.glass-panel, .section-title, .hero-content');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08 });

    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(28px)';
        el.style.transition = 'opacity 0.65s ease-out, transform 0.65s ease-out';
        revealObserver.observe(el);
    });

    // 4. Active nav link highlight on scroll
    const sections = document.querySelectorAll('header, section');
    const navLinks = document.querySelectorAll('nav ul li a');

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id || (entry.target.tagName === 'HEADER' ? 'about' : '');
                navLinks.forEach(link => {
                    link.style.opacity = '0.65';
                    link.style.color = '';
                    link.style.borderLeftColor = 'transparent';
                    link.style.background = '';
                });
                const active = document.querySelector(`nav ul li a[href="#${id}"]`);
                if (active) {
                    active.style.opacity = '1';
                    active.style.color = '#b87fff';
                    active.style.borderLeftColor = '#b87fff';
                    active.style.background = 'rgba(184, 127, 255, 0.08)';
                }
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(s => sectionObserver.observe(s));
});
