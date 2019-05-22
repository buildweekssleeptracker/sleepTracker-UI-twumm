class Testimonials {
  constructor(testimonialsCarousel) {
    this.testimonialsCarousel = testimonialsCarousel;
    // Get all testimonials in the testimonials class
    this.testimonials = testimonialsCarousel.querySelectorAll('.testimonial');
    
    // Get left and right buttons
    this.leftButton = this.testimonialsCarousel.querySelector('left-button');
    this.rightButton = this.testimonialsCarousel.querySelector('right-button');
  }
}

// Get articles section from document
const testimonialsCarousel = document.querySelector('.testimonials');
new Testimonials(testimonialsCarousel);
