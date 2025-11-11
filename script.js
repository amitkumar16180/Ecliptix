function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('active');
}

// Simple form submit effect
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('form-status').innerText = "✅ Message Sent Successfully!";
  this.reset();
});
