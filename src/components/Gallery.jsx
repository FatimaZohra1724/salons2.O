import React from 'react';
import BridalLook from '../assets/Mediafiles/BridalLook.jpg';
import Eyeshadow from '../assets/Mediafiles/Eyeshadow.jpg';
import Makeup from '../assets/Mediafiles/Makeup.jpg';
import PartyLook from '../assets/Mediafiles/PartyLook.jpg';
import Pedicure from '../assets/Mediafiles/Pedicure.jpg';
import Threading from '../assets/Mediafiles/Threading.jpg';

const galleryImages = [
  { src: BridalLook, alt: 'Bridal Makeup' },
  { src: Eyeshadow, alt: 'Eyeshadow Artistry' },
  { src: Makeup, alt: 'Full Face Makeup' },
  { src: PartyLook, alt: 'Party Glam Look' },
  { src: Pedicure, alt: 'Luxury Pedicure' },
  { src: Threading, alt: 'Precision Threading' }
];

export default function Gallery() {
  return (
    <section id="gallery" className="section alt">
      <div className="section-header">
        <h2>Gallery</h2>
        <p>Stunning transformations at Zohra Salon</p>
      </div>
      
      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <div className="gallery-card" key={index}>
            <div className="gallery-image">
              <img 
                src={image.src} 
                alt={image.alt} 
                loading="lazy" 
              />
            </div>
            <div className="gallery-overlay">
              <h3>{image.alt}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
