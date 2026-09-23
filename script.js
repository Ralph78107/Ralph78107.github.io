document.addEventListener("DOMContentLoaded", () => {

  const modal = document.getElementById("projectModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const modalLink = document.getElementById("modalLink");
  const closeModal = document.querySelector(".close");

  const projectCards = document.querySelectorAll(".project-card");


  function openProject(card) {

    const index = Number(card.dataset.index);
    const project = projects[index];

    if (!project) {
      return;
    }

    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;

    modalLink.href = project.link;

    modal.style.display = "block";

    closeModal.focus();
  }


  function closeProject() {

    modal.style.display = "none";
  }


  projectCards.forEach((card) => {

    card.addEventListener("click", () => {
      openProject(card);
    });


    card.addEventListener("keydown", (event) => {

      if (event.key === "Enter" || event.key === " ") {

        event.preventDefault();

        openProject(card);
      }

    });

  });


  closeModal.addEventListener("click", closeProject);


  window.addEventListener("click", (event) => {

    if (event.target === modal) {
      closeProject();
    }

  });


  window.addEventListener("keydown", (event) => {

    if (event.key === "Escape" && modal.style.display === "block") {
      closeProject();
    }

  });

});