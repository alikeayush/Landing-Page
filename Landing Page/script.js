document.addEventListener('DOMContentLoaded', function() {
  // Hamburger menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navItems = document.querySelector('.nav-items');

  hamburger.addEventListener('click', function() {
    navItems.classList.toggle('active');
  });

  // Smooth scrolling for links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Dropdown toggle for Company section
  document.querySelector('.dropdown-toggle').addEventListener('mouseover', function(e) {
    e.preventDefault();
    const dropdownContent = this.nextElementSibling;
    dropdownContent.style.display = 'block';
  });

  document.querySelector('.dropdown').addEventListener('mouseleave', function(e) {
    const dropdownContent = this.querySelector('.dropdown-content');
    dropdownContent.style.display = 'none';
  });

  // Testimonial carousel
  const testimonialsContainer = document.querySelector('.testimonials-container');
  const testimonials = document.querySelectorAll('.testimonial');
  const prevBtn = document.querySelector('.testimonial-prev');
  const nextBtn = document.querySelector('.testimonial-next');
  let scrollIndex = 0;

  function updateTestimonials() {
    testimonials.forEach((testimonial, index) => {
      if (index < scrollIndex || index >= scrollIndex + 2) {
        testimonial.style.display = 'none';
      } else {
        testimonial.style.display = 'flex';
      }
    });
  }

  nextBtn.addEventListener('click', () => {
    if (scrollIndex < testimonials.length - 2) {
      scrollIndex++;
      updateTestimonials();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (scrollIndex > 0) {
      scrollIndex--;
      updateTestimonials();
    }
  });

  // Initialize testimonials
  updateTestimonials();
});
