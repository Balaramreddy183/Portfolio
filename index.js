document.addEventListener("DOMContentLoaded", function() {
    let navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    let navbarToggler = document.querySelector('.navbar-toggler');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            let targetId = this.getAttribute("data-target");
            let targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Close the navigation menu for small devices
                if (window.innerWidth < 992) {
                    navbarToggler.click();
                }
            }
        });
    });
});