// Define a boolean variable to track the current theme
var islight = true;
// Function to toggle the theme
function toggleTheme() {
  var themeLink = document.getElementById("theme-link");
  // Toggle the theme by changing the href attribute of the link element
  if (islight) {
    themeLink.href = "style.css";
  } else {
    themeLink.href = "light.css";
  }
  // Update the theme toggle state
  islight = !islight;
}

var themeToggleBtn = document.getElementById("theme-toggle");
if (themeToggleBtn) themeToggleBtn.addEventListener("click", toggleTheme);

window.addEventListener("load", function () {
  var themeLink = document.getElementById("theme-link");
  var islight = localStorage.getItem("theme") === "light";

  if (!islight) {
    themeLink.href = "light.css";
  }
});
