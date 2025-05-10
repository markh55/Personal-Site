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

// Function to fetch the last commit date from GitHub API
function updateProjectDate(repoName, card) {
  const apiUrl = `https://api.github.com/repos/markh55/${repoName}/commits`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(commits => {
      // Get the date of the most recent commit
      const lastUpdated = commits[0].commit.author.date;
      const formattedDate = new Date(lastUpdated).toLocaleDateString();

      // Update the project card with the last updated date
      card.querySelector('.updated').textContent = `Last updated - ${formattedDate}`;
    })
    .catch(error => {
      console.error("Error fetching commit data:", error);
      card.querySelector('.updated').textContent = "Last updated date not available";
    });
}

// Update each project card with the last updated date
document.querySelectorAll('.project-card').forEach(card => {
  const repoName = card.getAttribute('data-repo');
  updateProjectDate(repoName, card);
});

// Project data (used for dynamically generating project cards in HTML)
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
    card.setAttribute("data-repo", project.name.replace(/\s+/g, '-')); // Set the repo name in the data-repo attribute

    card.innerHTML = `
      <div class="icon-container"><i class="fas fa-bullseye"></i></div>
      <h2>${project.name}</h2>
      <p>${project.description}</p>
      <p class="updated">Loading last updated date...</p>
      <a href="${project.url}" target="_blank">View Project</a>
    `;

    container.appendChild(card);
  });
}