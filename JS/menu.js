document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const menuItems = document.querySelector('.show-menu-items');

    // Function to toggle the menu
    function toggleMenu() {
        menuItems.classList.toggle('show');
    }

    // Event listener for hamburger menu click
    hamburgerMenu.addEventListener('click', function() {
        toggleMenu();
    });
});