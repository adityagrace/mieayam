// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Form submission handler
document.getElementById('franchiseForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form values
  const nama = this.nama.value;
  const whatsapp = this.whatsapp.value;
  const email = this.email.value;
  
  // Redirect to WhatsApp with pre-filled message
  const whatsappUrl = `https://wa.me/6281934569555?text=Halo,%20saya%20${encodeURIComponent(nama)}.%20Saya%20minat%20franchise%20mie%20ayam.%20Nomor%20saya:%20${whatsapp}%20Email:%20${email}`;
  
  window.open(whatsappUrl, '_blank');
  
  // Reset form
  this.reset();
  
  // Show confirmation
  alert('Terima kasih! Anda akan diarahkan ke WhatsApp untuk proses selanjutnya.');
});

// Mobile menu toggle (optional)
const mobileMenuToggle = document.createElement('div');
mobileMenuToggle.className = 'mobile-menu-toggle';
mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
document.querySelector('header .container').appendChild(mobileMenuToggle);

mobileMenuToggle.addEventListener('click', function() {
  document.querySelector('nav').classList.toggle('active');
});