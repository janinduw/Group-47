document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1200,
    once: true,
  });
});

// document.addEventListener("scroll", function () {
//   const navBar = document.querySelector("nav");
//   if (window.scrollY > 50) {
//     // Adjust the scroll threshold
navBar.classList.add("scrolled");
//   } else {
//     navBar.classList.remove("scrolled");
//   }
// });

// document.addEventListener("scroll", function () {
//   const navBar = document.querySelector("nav");
//   const scrollY = window.scrollY;
//   const maxBlur = 10; // Maximum blur in pixels
//   const blurIntensity = Math.min(scrollY / 100, maxBlur); // Adjust '100' to control speed

//   navBar.style.backdropFilter = `blur(${blurIntensity}px)`;
// });


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
    // ... other settings as needed
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
    // Assuming you have a function to start animations
    startAnimations();
  }, 600);
});

