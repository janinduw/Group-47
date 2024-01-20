document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1200,
    once: true,
  });
});



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


document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("contactForm");
  var formMessage = document.getElementById("formMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var formData = new FormData(form);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "contact.php", true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        formMessage.textContent = xhr.responseText;
        form.reset();
      } else {
        formMessage.textContent = "Oops! Something went wrong.";
      }
    };
    xhr.send(formData);
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector("nav");
  window.addEventListener("scroll", function () {
    // Check if the page is scrolled more than 50 pixels
    if (window.scrollY > 600) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector("nav");
  const heroSection = document.querySelector("#hero"); // Adjust the selector if needed
  const heroHeight = heroSection.offsetHeight;

  window.addEventListener("scroll", function () {
    if (window.scrollY > heroHeight) {
      nav.classList.add("dark-text");
    } else {
      nav.classList.remove("dark-text");
    }
  });
});
