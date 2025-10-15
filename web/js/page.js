document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("photoModal");
  const modalImg = document.getElementById("modalImage");
  const modalCaption = document.getElementById("modalCaption");
  const closeBtn = document.querySelector(".photo-modal-close");
  const photosContainer = document.getElementById("photos");

  photosContainer.addEventListener("click", function (e) {
    if (e.target.matches(".memorial-card img")) {
      const img = e.target;
      modal.classList.add("show");
      modalImg.src = img.src;
      modalImg.alt = img.alt;

      const cardBody = img
        .closest(".memorial-card")
        .querySelector(".card-body p");
      modalCaption.textContent = cardBody ? cardBody.textContent : img.alt;
    }
  });

  closeBtn.addEventListener("click", function () {
    modal.classList.remove("show");
  });

  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.classList.remove("show");
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.classList.contains("show")) {
      modal.classList.remove("show");
    }
  });
});
