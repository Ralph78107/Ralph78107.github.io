// Modal Elements
const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalLink = document.getElementById("modalLink");
const closeModal = document.querySelector(".close");

// Project Data (Example)
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

// Add Event Listeners to Projects
document.querySelectorAll(".project").forEach((projectElement, index) => {
  projectElement.addEventListener("click", () => {
    // Populate Modal with Project Data
    modalTitle.textContent = projects[index].title;
    modalDescription.textContent = projects[index].description;
    modalLink.href = projects[index].link;

    // Display Modal
    modal.style.display = "block";
  });
});

// Close Modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
