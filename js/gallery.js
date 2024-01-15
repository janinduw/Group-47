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


//LIGHTBOX MODAL

let slideIndex = 1;

window.onload = function() {
    // Add click event to gallery images
    const galleryImages = document.querySelectorAll('.gallery-container img');
    galleryImages.forEach((img, index) => {
        img.onclick = function() {
            openModal();
            currentSlide(index + 1);
        };
    });
};

function openModal() {
    document.getElementById("lightboxModal").style.display = "block";
}

function closeModal() {
    document.getElementById("lightboxModal").style.display = "none";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.querySelectorAll(".gallery-container img");
    let modalSlides = document.querySelector(".lightbox-content");

// Clear previous slides
modalSlides.innerHTML = '';

// Loop to create slides
for (let i = 0; i < slides.length; i++) {
    let slideDiv = document.createElement("div");
    slideDiv.className = "mySlides";
    slideDiv.style.display = "none";

    let numbertextDiv = document.createElement("div");
    numbertextDiv.className = "numbertext";
    numbertextDiv.innerText = `${i + 1} / ${slides.length}`;

    let imgElement = document.createElement("img");
    imgElement.src = slides[i].src;
    imgElement.style.width = "100%";

    slideDiv.appendChild(numbertextDiv);
    slideDiv.appendChild(imgElement);
    modalSlides.appendChild(slideDiv);
}

if (n > slides.length) { slideIndex = 1 }
if (n < 1) { slideIndex = slides.length }

modalSlides.getElementsByClassName("mySlides")[slideIndex - 1].style.display = "block";
}

