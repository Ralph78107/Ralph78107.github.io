document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("projectModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const modalLink = document.getElementById("modalLink");
  const closeModal = document.querySelector(".close");

  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("click", () => {
      const index = card.dataset.index;
      const project = projects[index];
      modalTitle.textContent = project.title;
      modalDescription.textContent = project.description;
      modalLink.href = project.link;
      modal.style.display = "block";
    });
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
