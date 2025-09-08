// Dark Mode Toggle
const toggleDark = document.getElementById("toggle-dark");
toggleDark.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const icon = toggleDark.querySelector("i");
  if (document.body.classList.contains("dark-mode")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Rotating typing effect with fade
const typedTextElement = document.querySelector(".typed-text");
const words = [
  { text: "Passionate Software Developer", class: "role-developer" },
  { text: "QA Specialist", class: "role-qa" },
  { text: "IT Support Expert", class: "role-it" },
  { text: "Full-Stack Developer", class: "role-fullstack" }
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let erasingDelay = 50;
let nextWordDelay = 2000; // Pause after finishing a word

function typeEffect() {
  const currentWord = words[wordIndex];
  const fullText = currentWord.text;

  // Add fade class for smooth transition
  typedTextElement.classList.add("fade-text");

  if (!isDeleting && charIndex < fullText.length) {
    // Typing forward
    typedTextElement.innerHTML =
      `<span class="${currentWord.class}">` +
      fullText.substring(0, charIndex + 1) +
      "</span>";
    charIndex++;
    setTimeout(typeEffect, typingDelay);
  } 
  else if (isDeleting && charIndex > 0) {
    // Deleting backward
    typedTextElement.innerHTML =
      `<span class="${currentWord.class}">` +
      fullText.substring(0, charIndex - 1) +
      "</span>";
    charIndex--;
    setTimeout(typeEffect, erasingDelay);
  } 
  else if (!isDeleting && charIndex === fullText.length) {
    // Pause at full word before deleting
    setTimeout(() => {
      isDeleting = true;
      typeEffect();
    }, nextWordDelay);
  } 
  else if (isDeleting && charIndex === 0) {
    // Switch to next word
    isDeleting = false;
    wordIndex++;
    if (wordIndex >= words.length) wordIndex = 0;
    setTimeout(typeEffect, typingDelay);
  }
}

// Start typing effect
document.addEventListener("DOMContentLoaded", () => {
  if (typedTextElement) typeEffect();
});
