const navToggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelector('.nav__links');
const yearEl = document.getElementById('year');

if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('is-open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
        navToggle.classList.toggle('is-open', isOpen);
    });
}

document.addEventListener('click', (event) => {
    if (!navLinks || !navToggle) {
        return;
    }

    const target = event.target;
    const isNavLink = target instanceof Element && target.closest('.nav__links');
    const clickedToggle = target instanceof Element && target.closest('.nav__toggle');

    if (!isNavLink && !clickedToggle && navLinks.classList.contains('is-open')) {
        navLinks.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.classList.remove('is-open');
    }
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (event) {
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') {
            return;
        }

        const section = document.querySelector(targetId);
        if (section) {
            event.preventDefault();
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    },
    {
        threshold: 0.2,
    }
);

document.querySelectorAll('.section, .project, .about__card, .timeline__content, .testimonial').forEach((el) => {
    el.classList.add('will-animate');
    observer.observe(el);
});
