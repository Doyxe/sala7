// Scroll suave a secciones
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Modal de imagen (galería)
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".modal-close");

document.querySelectorAll(".galeria-img").forEach(img => {
  img.addEventListener("click", function () {
    modal.style.display = "block";
    modalImg.src = this.getAttribute("data-img");
  });
});

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});

