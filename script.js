
document.addEventListener("DOMContentLoaded", function () {
// Dark/Light Mode Toggle
    const themeToggle = document.createElement("button"); // create function
    themeToggle.textContent = "Toggle Dark/Light Mode";
    themeToggle.style.margin = "2em";
    document.body.insertBefore(themeToggle, document.body.firstChild);

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });