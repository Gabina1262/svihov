const sipkas = document.querySelectorAll('.sipka');

// Add click event listener to each sipka
sipkas.forEach(function(sipka) {
    sipka.addEventListener('click', function() {
        // Get the content associated with this sipka
        const content = this.parentNode.querySelector('.content');

        // Toggle visibility of the content
        if (content) {
            content.style.display = (content.style.display === 'none' || content.style.display === '') ? 'block' : 'none';
        }
    });
});

const hovers = document.querySelectorAll('.hover');
// Add click event listener to each sipka
hovers.forEach(function(hover) {
    hover.addEventListener('click', function() {
        // Get the content associated with this sipka
        const content = this.parentNode.querySelector('.content');

        // Toggle visibility of the content
        if (content) {
            content.style.display = (content.style.display === 'none' || content.style.display === '') ? 'block' : 'none';
        }
    });
});

const hamburgers = document.querySelectorAll('.hamburger-menu');

// Add click event listener to each sipka
hamburgers.forEach(function(hamburger) {
    hamburger.addEventListener('click', function() {
        // Get the content associated with this hamburger
        const content = this.parentNode.querySelector('.content');

        // Toggle visibility of the content
        if (content) {
            content.style.display = (content.style.display === 'none' || content.style.display === '') ? 'block' : 'none';
        }
    });
});

function toggleMenu() {
    var menuContent = document.getElementById(".nav-list");
    menuContent.classList.toggle(".menu-open");
  }