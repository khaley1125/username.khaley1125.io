document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');

    // Toggle mobile menu with animation
    const toggleMenu = () => {
        menuToggle.classList.toggle('active');
        nav.classList.toggle('active');
        header.classList.toggle('menu-open');

        if (nav.classList.contains('active')) {
            // Focus the first focusable element in the menu
            const firstLink = nav.querySelector('a');
            if(firstLink){
                firstLink.focus();
            }

        } else {
            // Return focus to the menu toggle button.
            menuToggle.focus();
        }
    };

    menuToggle.addEventListener('click', toggleMenu);

    // Close menu when clicking outside or on a link
    document.addEventListener('click', (e) => {
        if (nav.classList.contains('active') &&
            !e.target.closest('nav') &&
            !e.target.closest('.menu-toggle')) {
            toggleMenu();
        }
    });

    // Smooth scroll functionality with header offset
    const smoothScroll = (e) => {
        const targetLink = e.target.closest('a[href^="#"]');
        if (targetLink && targetLink.getAttribute('href') !== "#") {
            e.preventDefault();
            const targetId = targetLink.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);

            if (target) {
                const headerHeight = header.offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu after navigation
                if (nav.classList.contains('active')) toggleMenu();
            }
        }
    };

    // Event delegation for all navigation links
    document.addEventListener('click', smoothScroll);

    // Add aria attributes for accessibility
    nav.querySelectorAll('a').forEach(link => {
        link.setAttribute('aria-current',
            link.href === window.location.href ? 'page' : 'false');
    });

    // Handle ESC key to close menu
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && nav.classList.contains('active')) {
            toggleMenu();
        }
    });
});