import SalonGallery from '../assets/Mediafiles/SalonGallery.jpg';  // RECEPTION
import NailArtist from '../assets/Mediafiles/NailArtist.jpg';     // NAIL BAR
import Hairbar from '../assets/Mediafiles/Hairbar.jpg';           // HAIR LOUNGE
import FacialTreatment from '../assets/Mediafiles/FacialTreatment.jpg'; // TREATMENT

export default function Interior() {
  return (
    <section id="interior" className="section alt">
      <div className="section-header">
        <h2>Salon Experience</h2>
        <p>Premium interiors crafted for luxury beauty treatments</p>
      </div>
      <div className="grid">
        {/* RECEPTION */}
        <div className="interior-card">
          <div className="interior-image">
            <img src={SalonGallery} alt="Luxury Reception" loading="lazy" />
          </div>
          <div className="interior-overlay">
            <h3>Reception</h3>
            <p>Luxury welcome experience</p>
          </div>
        </div>
        
        {/* HAIR LOUNGE */}
        <div className="interior-card">
          <div className="interior-image">
            <img src={Hairbar} alt="Hair Lounge" loading="lazy" />
          </div>
          <div className="interior-overlay">
            <h3>Hair Lounge</h3>
            <p>Premium styling stations</p>
          </div>
        </div>
        
        {/* NAIL BAR */}
        <div className="interior-card">
          <div className="interior-image">
            <img src={NailArtist} alt="Nail Bar" loading="lazy" />
          </div>
          <div className="interior-overlay">
            <h3>Nail Bar</h3>
            <p>Professional nail artistry</p>
          </div>
        </div>
        
        {/* TREATMENT ROOMS */}
        <div className="interior-card">
          <div className="interior-image">
            <img src={FacialTreatment} alt="Treatment Rooms" loading="lazy" />
          </div>
          <div className="interior-overlay">
            <h3>Treatment Rooms</h3>
            <p>Spa facial therapy</p>
          </div>
        </div>
      </div>
    </section>
  );
}
