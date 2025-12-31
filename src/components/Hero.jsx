import { useEffect, useState, useCallback } from 'react';

// Your exact asset paths
import imageHero from '../assets/Mediafiles/imageHero.jpg';
import makeup from '../assets/Mediafiles/Makeup.jpg';
import hairStyling from '../assets/Mediafiles/Hair styling.jpg';

const images = [
  { src: imageHero, alt: 'Zohra Salon Luxury' },
  { src: makeup, alt: 'Professional Makeup' },
  { src: hairStyling, alt: 'Hair Styling Expertise' }
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextImage = useCallback(() => {
    setIndex((prev) => (prev + 1) % images.length);
  }, []);

  useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(nextImage, 4000); // 4 seconds
    }
    return () => clearInterval(interval);
  }, [nextImage, isHovered]);

  const goToSlide = (slideIndex) => setIndex(slideIndex);

  return (
    <section id="home" className="hero">
      {/* Background slider */}
      <div 
        className="hero-images"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {images.map((image, i) => (
          <img
            key={i}
            src={image.src}
            alt={image.alt}
            className={`hero-image ${i === index ? 'active' : ''}`}
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        ))}
      </div>

      {/* Content overlay */}
      <div className="hero-content">
        <h1>Timeless Beauty, Modern Luxury</h1>
        <p>A refined sanctuary for bespoke beauty, hair and self-care.</p>
        <div className="hero-actions">
          <a href="#booking" className="btn primary">Book Appointment</a>
          <a href="#services" className="btn secondary">View Services</a>
        </div>
        
        {/* Navigation dots */}
        <div className="hero-dots">
          {images.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === index ? 'active' : ''}`}
              onClick={() => goToSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
