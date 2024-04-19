import './style.css';

document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("darkModeToggle");
  const body = document.body;

  darkModeToggle.addEventListener("change", function () {
    if (this.checked) {
      body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  });

  // Check local storage for theme preference
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    body.classList.add("dark-mode");
    darkModeToggle.checked = true;
  }
});

// Get references to the tab buttons and tab contents
const tabButtons = document.querySelectorAll('[role="tab"]');
const tabContents = document.querySelectorAll('[role="tabpanel"]');

// Hide all tab contents initially
tabContents.forEach((tabContent) => {
  tabContent.classList.add("hidden");
});

// Add click event listener to each tab button
tabButtons.forEach((tabButton) => {
  tabButton.addEventListener("click", function (event) {
    // Prevent default behavior of button clicks
    event.preventDefault();

    // Get the ID of the clicked tab button
    const tabId = event.target.getAttribute("aria-controls");

    // Hide all tab contents
    tabContents.forEach((tabContent) => {
      tabContent.classList.add("hidden");
    });

    // Show the corresponding tab content based on the clicked tab button
    const activeTabContent = document.getElementById(tabId);
    activeTabContent.classList.remove("hidden");
  });
});
