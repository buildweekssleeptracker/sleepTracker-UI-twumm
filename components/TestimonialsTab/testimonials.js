class Testimonials {
  constructor(testimonialsCarousel) {
    this.testimonialsCarousel = testimonialsCarousel;
    // Get all testimonials in the testimonials class
    this.testimonials = testimonialsCarousel.querySelectorAll('.testimonial');
    
  }
}

// Get articles section from document
const testimonialsCarousel = document.querySelector('.testimonials');
new Testimonials(testimonialsCarousel);
