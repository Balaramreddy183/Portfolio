//scroll animation start here
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
//scroll animation ends here

//pop over started here 

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
  // popover ends here
  // work section  start
function WorkSectionButtonNotAllowed () {
  const btnWorkSectionElement1 = document.getElementById('workButtonOne');
  const btnWorkSectionElement2 = document.getElementById('workButtonTwo');
  btnWorkSectionElement1.textContent = "🚫 Confidential";
  btnWorkSectionElement2.textContent = "🚫 Confidential";
  
}



  // $("#work").hover(function () {
   // $(".img1").css("opacity", "0");
   // $(".img2").css("opacity", "0");
   // $(".img3").css("opacity", "0");
   // $(".img4").css("opacity", "0");
  //}
  //, function () {
  //  $(".img1").css("opacity", "1");
   // $(".img2").css("opacity", "1");
   // $(".img3").css("opacity", "1");
   // $(".img4").css("opacity", "1");
    //})
    // work section end







  document.getElementById('formSubmit').addEventListener('click',(e)=>{
    e.preventDefault();
    const formdata=document.getElementById('contactForm');
    var data = new FormData(formdata);

    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
      console.log(this.responseText);
      formdata.reset();
    }
  });
  xhr.open("POST", "https://inforium-jxyh.onrender.com/ContactUsFormSubmission/");
  xhr.send(data);
  })
  


  