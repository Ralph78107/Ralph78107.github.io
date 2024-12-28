// Array of projects
const projects = [
    {
      title: "Quiz App",
      description: "A web-based quiz application using HTML, CSS, and JavaScript with questions pulled from a CSV file.",
      link: "https://github.com/yourusername/quiz-app"
    },
    {
      title: "Robot Control System",
      description: "A Python program for guiding a robot, including features like detecting color changes and drawing shapes.",
      link: "https://github.com/yourusername/robot-control-system"
    }
  ];
  
  // Modal elements
  const modal = document.getElementById("projectModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const modalLink = document.getElementById("modalLink");
  const closeModal = document.querySelector(".close");
  
  // Add click events to project elements
  document.querySelectorAll(".project").forEach((projectElement) => {
    projectElement.addEventListener("click", () => {
      const index = projectElement.dataset.index; // Get index from data attribute
      const project = projects[index]; // Find corresponding project
  
      // Update modal content
      modalTitle.textContent = project.title;
      modalDescription.textContent = project.description;
      modalLink.href = project.link;
  
      // Show modal
      modal.style.display = "block";
    });
  });
  
  // Close modal
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });
  
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
  