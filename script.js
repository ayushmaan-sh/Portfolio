document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar.offsetHeight;

    // Function to handle scroll event
    function handleScroll() {
        if (window.scrollY > navbarHeight) {
            navbar.classList.add('fixed-top');
        } else {
            navbar.classList.remove('fixed-top');
        }
    }

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);
});