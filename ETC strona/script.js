
document.addEventListener("DOMContentLoaded", function() {
    // Ensure the DOM is fully loaded before attaching event listeners

    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileNav = document.querySelector('.mobile-nav');

    if (hamburgerMenu && mobileNav) { // Check if elements exist
        hamburgerMenu.addEventListener('click', function() {
            mobileNav.classList.toggle('active');
        });
    }
});

