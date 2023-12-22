function openModal() {
  document.getElementById("lightboxModal").style.display = "block";
}

function closeModal() {
  document.getElementById("lightboxModal").style.display = "none";
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}


window.onload = function () {
  const items = document.querySelectorAll(".gallery-item");

  function resizeGridItem(item) {
    const grid = document.getElementsByClassName("gallery-grid")[0];
    const rowHeight = parseInt(
      window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
    );
    const rowGap = parseInt(
      window.getComputedStyle(grid).getPropertyValue("grid-gap")
    );
    const rowSpan = Math.ceil(
      (item.querySelector("img").getBoundingClientRect().height + rowGap) /
        (rowHeight + rowGap)
    );
    item.style.gridRowEnd = "span " + rowSpan;
  }

  function resizeAllGridItems() {
    for (let item of items) {
      resizeGridItem(item);
    }
  }

  window.addEventListener("resize", resizeAllGridItems);
  resizeAllGridItems();
};
