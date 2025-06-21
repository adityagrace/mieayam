document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  
  menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    nav.classList.toggle('active');
  });
  
  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      if (this.classList.contains('menu-toggle')) return;
      
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
      
      // Close mobile menu after click
      menuToggle.classList.remove('active');
      nav.classList.remove('active');
    });
  });
  
  // Form Submission
  const form = document.getElementById('franchiseForm');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Here you can add AJAX/Fetch to send data to server
    console.log('Form data:', data);
    
    // Show success message
    alert('Terima kasih! Tim kami akan menghubungi Anda via WhatsApp dalam 1x24 jam.');
    
    // Redirect to WhatsApp
    const whatsappUrl = `https://wa.me/6281934569555?text=Halo,%20saya%20${encodeURIComponent(data.nama)}%20sudah%20mengisi%20form%20franchise.%20Berikut%20detailnya:%0A%0AWhatsApp:%20${encodeURIComponent(data.whatsapp)}%0AKota:%20${encodeURIComponent(data.kota)}%0APertanyaan:%20${encodeURIComponent(data.pertanyaan || '-')}`;
    
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    form.reset();
  });
  
  // Instagram Feed
  if (document.getElementById('instafeed')) {
    // Note: You need to get your own Instagram Access Token
    // This is just a placeholder - won't work without real token
    const userFeed = new Instafeed({
      accessToken: 'IGQVJ...', // Replace with your token
      target: 'instafeed',
      limit: 8,
      resolution: 'low_resolution',
      template: '<a href="{{link}}" target="_blank"><img src="{{image}}" alt="{{caption}}" loading="lazy" /></a>'
    });
    
    try {
      userFeed.run();
    } catch (error) {
      console.log('Instagram feed error:', error);
      document.getElementById('instafeed').innerHTML = '<p>Follow kami di <a href="https://instagram.com/mieayamcakman" target="_blank">@mieayamcakman</a> untuk melihat update terbaru!</p>';
    }
  }
});
