let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = "none"; 
        slide.style.opacity = "0";
    });

    slides[index].style.display = "block"; 
    setTimeout(() => {
        slides[index].style.opacity = "1"; 
    }, 10);
}


next.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
});

prev.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
});


showSlide(currentIndex);
