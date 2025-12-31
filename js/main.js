// Main JavaScript for animations and interactions

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all elements with fade-in class
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
});

// Mobile menu toggle
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) {
    menu.classList.toggle('hidden');
  }
}

// Like button animation
function toggleLike(button) {
  button.classList.toggle('liked');
  const icon = button.querySelector('svg');
  if (button.classList.contains('liked')) {
    icon.classList.add('text-red-500', 'animate-pulse');
  } else {
    icon.classList.remove('text-red-500', 'animate-pulse');
  }
}

// Search functionality
function handleSearch(event) {
  event.preventDefault();
  const searchTerm = event.target.querySelector('input').value;
  console.log('Searching for:', searchTerm);
  // Implement search logic
}

// Form validation
function validateForm(form) {
  const inputs = form.querySelectorAll('input[required], textarea[required]');
  let isValid = true;
  
  inputs.forEach(input => {
    if (!input.value.trim()) {
      input.classList.add('border-red-500');
      isValid = false;
    } else {
      input.classList.remove('border-red-500');
    }
  });
  
  return isValid;
}

// Account menu toggle
function toggleAccountMenu() {
  const menu = document.getElementById('account-menu');
  const arrow = document.getElementById('account-arrow');
  if (menu) {
    menu.classList.toggle('hidden');
    if (arrow) {
      arrow.classList.toggle('rotate-180');
    }
  }
}

// Close account menu when mouse leaves
function closeAccountMenu() {
  const menu = document.getElementById('account-menu');
  const arrow = document.getElementById('account-arrow');
  if (menu && !menu.classList.contains('hidden')) {
    menu.classList.add('hidden');
    if (arrow) {
      arrow.classList.remove('rotate-180');
    }
  }
}

// Close account menu when clicking outside or on a link
document.addEventListener('click', (event) => {
  const accountMenu = document.getElementById('account-menu');
  const accountButton = event.target.closest('[onclick="toggleAccountMenu()"]');
  const isLink = event.target.closest('a[href]');
  
  if (accountMenu && !accountMenu.classList.contains('hidden')) {
    if (!accountButton && !accountMenu.contains(event.target) || (isLink && accountMenu.contains(isLink))) {
      closeAccountMenu();
    }
  }
});


