document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("photoModal");
  const modalImg = document.getElementById("modalImage");
  const modalCaption = document.getElementById("modalCaption");
  const closeBtn = document.querySelector(".photo-modal-close");

  document.querySelectorAll(".memorial-card img").forEach((img) => {
    img.addEventListener("click", function () {
      modal.classList.add("show");
      modalImg.src = this.src;
      modalImg.alt = this.alt;

      const cardBody =
        this.closest(".memorial-card").querySelector(".card-body p");
      modalCaption.textContent = cardBody ? cardBody.textContent : this.alt;
    });
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
