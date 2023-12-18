// Add this code to a separate JavaScript file, e.g., script.js

document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll for navigation links
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
  
    for (const scrollLink of scrollLinks) {
        scrollLink.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
  
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    }
});
