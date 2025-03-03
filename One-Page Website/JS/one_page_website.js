// Select all images inside the gallery
const images = document.querySelectorAll(".gallery img");

// Create a lightbox container
const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

// Close lightbox when clicked
lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
});

// Add event listener to images
images.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.classList.add("active");
        const imgElement = document.createElement("img");
        imgElement.src = img.dataset.large; // Ensure each <img> has a data-large attribute with the full-size image
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(imgElement);
    });
});
