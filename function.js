// Define a boolean variable to track the current theme
var islight = true;
// Function to toggle the theme
function toggleTheme() {
    var themeLink = document.getElementById("theme-link");
    // Toggle the theme by changing the href attribute of the link element
    if (islight) {
        themeLink.href = "style.css";
    }
    else {
        themeLink.href = "light.css";
    }
    // Update the theme toggle state
    islight = !islight;
}
// Add a click event listener to the button
var themeToggleBtn = document.getElementById("theme-toggle");
if (themeToggleBtn)
    themeToggleBtn.addEventListener("click", toggleTheme);
