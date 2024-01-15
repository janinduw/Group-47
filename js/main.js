document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1200,
    once: true,
  });
});

navBar.classList.add("scrolled");


    document.addEventListener("DOMContentLoaded", function() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    });

document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    easing: "ease-out-cubic", // Adjust the easing effect
    once: true, // Whether animation should happen only once
  });
});


window.addEventListener('load', () => {
  // When the page has fully loaded, fade out the overlay
  document.getElementById('page-overlay').style.opacity = '0';

  // After the fade-out transition, set display to 'none'
  setTimeout(() => {
    document.getElementById('page-overlay').style.display = 'none';
  }, 500); // This duration should match the CSS transition duration

  // Start the animations after the overlay is hidden
  setTimeout(() => {
    startAnimations();
  }, 600);
});

