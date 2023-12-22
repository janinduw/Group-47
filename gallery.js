window.addEventListener("load", () => {
  const overlay = document.getElementById("page-overlay");

  // Start fading out the overlay
  overlay.style.opacity = "0";

  // After the fade-out transition, remove the overlay and start the underline animation
  setTimeout(() => {
    overlay.style.display = "none";

    // Select the element you want to animate
    const animatedElement = document.querySelector(".animated-underline");

    // Add a class that starts the animation
    if (animatedElement) {
      animatedElement.classList.add("start-animation");
    }
  }, 500); // This duration should match the CSS transition duration
});

setTimeout(() => {
  overlay.style.display = "none";

  // Add a slight delay before starting the animation
  setTimeout(() => {
    const animatedElement = document.querySelector(".animated-underline");
    if (animatedElement) {
      animatedElement.classList.add("start-animation");
    }
  }, 100); // Slight delay to ensure re-render is complete
}, 500);
