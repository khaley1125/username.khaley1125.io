document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");
    
    navLinks.forEach(link => {
        link.addEventListener("mouseover", function() {
            this.style.color = "#ff5555";
        });
        
        link.addEventListener("mouseout", function() {
            this.style.color = "#ffffff";
        });
    });
    
    // Smooth scroll for internal links
    const smoothScrollLinks = document.querySelectorAll("a[href^='#']");
    smoothScrollLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
});
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
  });