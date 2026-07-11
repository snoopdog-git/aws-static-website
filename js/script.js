// Welcome message in browser console
console.log("Welcome to Sagar's AWS Portfolio!");

// Display current year automatically in footer (if an element exists)
const footerYear = document.getElementById("year");

if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
}

// Show a welcome alert only once per browser session
if (!sessionStorage.getItem("visited")) {
    alert("Welcome to Sagar's AWS Portfolio 🚀");
    sessionStorage.setItem("visited", "true");
}