window.addEventListener("load", () => {
  const overlay = document.getElementById("page-overlay");

  // fading out the overlay
  overlay.style.opacity = "0";

  // After the fade-out transition, remove the overlay and start the underline animation
  setTimeout(() => {
    overlay.style.display = "none";

    const animatedElement = document.querySelector(".animated-underline");

    if (animatedElement) {
      animatedElement.classList.add("start-animation");
    }
  }, 500); 
});

setTimeout(() => {
  overlay.style.display = "none";

  // slight delay before starting the animation
  setTimeout(() => {
    const animatedElement = document.querySelector(".animated-underline");
    if (animatedElement) {
      animatedElement.classList.add("start-animation");
    }
  }, 100); 
}, 500);
