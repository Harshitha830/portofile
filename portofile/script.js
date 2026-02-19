// Simple section switching without heavy animations
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

// Mobile navigation toggle
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Show/Hide sections functionality
function showSection(sectionId) {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.style.display = "none";
  });

  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.style.display = "block";
  }

  // Update active nav link
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${sectionId}`) {
      link.classList.add("active");
    }
  });

  navMenu.classList.remove("active");
}

// Navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const sectionId = this.getAttribute("href").substring(1);
    showSection(sectionId);
  });
});

// Show home by default
showSection("home");

// Simple typing animation
const typingText = document.querySelector(".typing-text");
if (typingText) {
  const texts = [
    "Computer Science Student",
    "Software Developer",
    "Problem Solver",
  ];
  let i = 0;

  setInterval(() => {
    typingText.textContent = texts[i];
    i = (i + 1) % texts.length;
  }, 3000);
}

// Modal functions for certificates
function openModal(imageSrc) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  modal.style.display = "block";
  modalImg.src = imageSrc;
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}
