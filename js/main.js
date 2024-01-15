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

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission behavior.

    const formData = new FormData(form);

    fetch("sendmail.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => {
        if (data === "success") {
          // Handle success, e.g., display a success message.
          alert("Message sent successfully!");
          form.reset(); // Clear the form fields.
        } else if (data === "error") {
          // Handle error, e.g., display an error message.
          alert("Message sending failed. Please try again.");
        } else {
          // Handle other cases (empty fields, direct access error, etc.).
          alert("An error occurred. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
      });
  });
});

