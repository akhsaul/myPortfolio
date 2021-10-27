(function() {
  "use strict"; // Start of use strict

  const scrollToTop = document.querySelector('.scroll-to-top');

  if (scrollToTop) {
    
    // Scroll to top button appear
    window.addEventListener('scroll', function() {
      const scrollDistance = window.pageYOffset;

      if (scrollDistance > 100) {
        scrollToTop.style.display = 'block';
      } else {
        scrollToTop.style.display = 'none';
      }
    });
  }

  const mainNav = document.querySelector('#mainNav');

  if (mainNav) {

    const navbarCollapse = mainNav.querySelector('.navbar-collapse');

    if (navbarCollapse) {

      const collapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false
      });

      const navbarItems = navbarCollapse.querySelectorAll('a');

      // Closes responsive menu when a scroll trigger link is clicked
      for (const item of navbarItems) {
        item.addEventListener('click', function () {
          collapse.hide();
        });
      }
    }

    // Collapse Navbar
    const collapseNavbar = function () {

      const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

      if (scrollTop > 100) {
        mainNav.classList.add("navbar-shrink");
      } else {
        mainNav.classList.remove("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    collapseNavbar();
    // Collapse the navbar when page is scrolled
    document.addEventListener("scroll", collapseNavbar);
  }

})(); // End of use strict
