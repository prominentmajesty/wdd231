// Accessible hamburger navigation
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('navToggle');
    const primaryNav = document.getElementById('primaryNav');
    if (!navToggle || !primaryNav) return;

    navToggle.addEventListener('click', () => {
        const expanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', String(!expanded));
        const hidden = primaryNav.getAttribute('aria-hidden') === 'true';
        primaryNav.setAttribute('aria-hidden', String(!hidden));
    });

    // Close menu when a link is clicked (mobile)
    primaryNav.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            if (window.innerWidth <= 600) {
                navToggle.setAttribute('aria-expanded', 'false');
                primaryNav.setAttribute('aria-hidden', 'true');
            }
        })
    })

    // set initial state
    primaryNav.setAttribute('aria-hidden', 'true');
});
