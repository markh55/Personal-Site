// Disable automatic scroll restoration (helps with mobile browsers)
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

// Scroll to top on load (works across desktop and mobile)
window.addEventListener("load", () => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 0);
});

// Toggle mobile navigation menu
document.getElementById("nav-toggle").addEventListener("click", function () {
  document.getElementById("nav-links").classList.toggle("show");
});

// Project data
const projects = [
  {
    name: "Dart Quiz",
    description: "A quiz app built with Dart and Flutter.",
    url: "https://markh55.github.io/Dart-Quiz/"
  },
  {
    name: "EWYL",
    description: "Early Warning Youth Locator tool built with JavaScript.",
    url: "https://markh55.github.io/EWYL/"
  },
  {
    name: "Boardwalk Games",
    description: "A retro-styled arcade game website.",
    url: "https://markh55.github.io/Boardwalk-Games/"
  },
  {
    name: "Love Running",
    description: "A running club landing page website.",
    url: "https://markh55.github.io/love-running/"
  }
];

// ✅ Safely get the container and generate cards
const container = document.getElementById("projects-container");

if (container) {
  projects.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    card.innerHTML = `
      <h2>${project.name}</h2>
      <p>${project.description}</p>
      <a href="${project.url}" target="_blank">View Project</a>
    `;

    container.appendChild(card);
  });
}