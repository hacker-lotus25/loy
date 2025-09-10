 // collect form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // open new tab with a thank you page
    const newTab = window.open("", "_blank");
    newTab.document.write(
        );
          // simple confetti effect
          function createConfetti() {
            const el = document.createElement("div");
            el.className = "confetti";
            el.style.left = Math.random() * 100 + "vw";
            el.style.background = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            el.style.animationDuration = (2 + Math.random() * 2) + "s";
            document.body.appendChild(el);
            setTimeout(() => el.remove(), 4000);
          }
          document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    window.open("thankyou.html", "_blank"); // opens your thank you page
  });
});