/*========== Toggle Menu Icon and Navbar ==========*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x"); // Toggles the menu icon to "close" state
  navbar.classList.toggle("active"); // Toggles the navbar visibility
};

/*========== Highlight Active Section Link on Scroll ==========*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  let top = window.scrollY; // Current scroll position

  // Highlight active section link
  sections.forEach((sec) => {
    let offset = sec.offsetTop - 150; // Section offset position
    let height = sec.offsetHeight; // Section height
    let id = sec.getAttribute("id"); // Section ID

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active"); // Remove active class from all links
        document
          .querySelector(`header nav a[href*="${id}"]`)
          .classList.add("active"); // Add active class to the current section's link
      });
    }
  });

  /*========== Sticky Navbar ==========*/
  let header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 100); // Add 'sticky' class after 100px scroll

  /*========== Close Navbar When Link is Clicked ==========*/
  menuIcon.classList.remove("bx-x"); // Reset menu icon
  navbar.classList.remove("active"); // Hide navbar
};

/*========== Dark/Light Mode Toggle ==========*/
let darkModeIcon = document.querySelector("#darkMode-icon");

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle("bx-sun"); // Toggle between dark and light mode icon
  document.body.classList.toggle("dark-mode"); // Toggle dark mode class on body
};

/*========== Scroll Reveal Animation ==========*/
ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img img", { origin: "left" });
ScrollReveal().reveal(".home-content h3, .home-content p, .about-content", {
  origin: "right",
});

/*========== Swiper for Carousel/Sliders ==========*/
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1, // Display one slide at a time
  spaceBetween: 50, // Space between slides
  loop: true, // Loop the slides
  grabCursor: true, // Change cursor to grabbing hand
  pagination: {
    el: ".swiper-pagination", // Pagination element
    clickable: true, // Allow clicking on pagination bullets
  },
  navigation: {
    nextEl: ".swiper-button-next", // Next button
    prevEl: ".swiper-button-prev", // Previous button
  },
});

// Get the current year
const currentYear = new Date().getFullYear();

// Set it in the span element
document.getElementById("copyright-year").textContent = currentYear;
