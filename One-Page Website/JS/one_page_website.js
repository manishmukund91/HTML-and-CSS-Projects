document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".gallery img");
    const lightboxContainer = document.createElement("div");
    lightboxContainer.id = "lightbox";
    document.body.appendChild(lightboxContainer);

    const imgElement = document.createElement("img");
    const prevButton = document.createElement("button");
    const nextButton = document.createElement("button");

    let currentIndex = 0; 

    // Lightbox Styling & Buttons
    lightboxContainer.appendChild(prevButton);
    lightboxContainer.appendChild(imgElement);
    lightboxContainer.appendChild(nextButton);

    prevButton.innerHTML = "&#10094;"; // Left arrow
    nextButton.innerHTML = "&#10095;"; // Right arrow

    prevButton.id = "prevButton";
    nextButton.id = "nextButton";

    images.forEach((image, index) => {
        image.addEventListener("click", function () {
            currentIndex = index;
            updateLightbox();
            lightboxContainer.classList.add("active");
        });
    });

    function updateLightbox() {
        imgElement.src = images[currentIndex].getAttribute("data-large");
    }

    prevButton.addEventListener("click", function (event) {
        event.stopPropagation();
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateLightbox();
    });

    nextButton.addEventListener("click", function (event) {
        event.stopPropagation();
        currentIndex = (currentIndex + 1) % images.length;
        updateLightbox();
    });

    lightboxContainer.addEventListener("click", function () {
        lightboxContainer.classList.remove("active");
    });
});
