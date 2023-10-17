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


$(document).ready(function(){
    // Initialize the popover
    $('#popoverButton').popover({
      title: 'Java Script Projects',
      content: function() {
        return $('#popoverContent').html();
      }, 
      html:true,
  
    });

    // Show the popover when the button is clicked
    $('#popoverButton').on('click', function() {
      $(this).popover('show');
    });
  }); 

  // Close the popover when clicking outside
$(document).on('click', function (e) {
    if (!$(e.target).is('#popoverButton') && !$(e.target).parents().is('.popover')) {
      $('#popoverButton').popover('hide');
    }
  });
  