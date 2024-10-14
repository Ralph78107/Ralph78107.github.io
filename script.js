document.addEventListener("DOMContentLoaded", function () {
    // Dark/Light Mode Toggle
    const themeToggle = document.createElement("button");
    themeToggle.textContent = "Toggle Dark/Light Mode";
    themeToggle.style.margin = "1em";
    document.body.insertBefore(themeToggle, document.body.firstChild);

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // Dynamic Project Addition
    const projectsSection = document.getElementById("projects");
    const addProjectButton = document.createElement("button");
    addProjectButton.textContent = "Add New Project";
    addProjectButton.style.display = "block";
    addProjectButton.style.margin = "1em auto";
    projectsSection.appendChild(addProjectButton);

    addProjectButton.addEventListener("click", () => {
        const projectName = prompt("Enter project name:");
        const projectDescription = prompt("Enter project description:");

        if (projectName && projectDescription) {
            const newProject = document.createElement("div");
            newProject.classList.add("project");
            newProject.innerHTML = `
                <h3>${projectName}</h3>
                <p>${projectDescription}</p>
            `;
            projectsSection.appendChild(newProject);
        } else {
            alert("Project name and description are required!");
        }
    });
});
