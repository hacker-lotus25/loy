setInterval(createConfetti, 150);document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navbar = document.querySelector('.navbar');

  menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });

  // Close the menu when a link is clicked
  document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
      if (navbar.classList.contains('active')) {
        navbar.classList.remove('active');
      }
    });
  });

  // Simple scroll animation for sections
  const sections = document.querySelectorAll('section');
  const options = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px"
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, options);

  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
  });
  const btn = document.getElementById("surpriseBtn");
  const surprise = document.getElementById("surpriseText");

  btn.addEventListener("click", () => {
    if (surprise.style.display === "none" || surprise.style.display === "") {
      surprise.style.display = "block";
      btn.textContent = "🙈 Hide Surprise";
    } else {
      surprise.style.display = "none";
      btn.textContent = "🎁 Click for a Surprise";
    }
  });
  function openThankYouPage(event) {
    event.preventDefault(); // stop form from refreshing
    window.open("thankyou.html", "_blank"); // open thankyou page in new tab
  }
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

  });

    });
    
});

