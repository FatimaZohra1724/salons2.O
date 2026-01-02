import Haircutting from '../assets/Mediafiles/Haircutting.jpg';
import Color from '../assets/Mediafiles/color.jpg';
import Manicure from '../assets/Mediafiles/Manicure.jpg';
import FacialTreatment from '../assets/Mediafiles/FacialTreatment.jpg';
import Massage from '../assets/Mediafiles/Massage.jpg';
import Waxing from '../assets/Mediafiles/Waxing.jpg';
const services = [
  { 
    name: 'Signature Haircut', 
    price: '₹2,000+', 
    time: '60 min',
    image: Haircutting,
    description: 'Precision haircut tailored to your face shape with wash, cut & style'
  },
  { 
    name: 'Balayage & Highlights', 
    price: '₹6,000+', 
    time: '3 hrs',
    image: Color,
    description: 'Hand-painted balayage for natural sun-kissed highlights'
  },
  { 
    name: 'Luxury Manicure', 
    price: '₹1,200+', 
    time: '45 min',
    image: Manicure,
    description: 'Complete nail care with massage, cuticle work & gel polish'
  },
  { 
    name: 'Facial Therapy', 
    price: '₹2,500+', 
    time: '75 min',
    image: FacialTreatment,
    description: 'Deep cleansing with LED therapy & hydrating serum'
  },
  { 
  name: 'Full Body Massage', 
  price: '₹3,000+', 
  time: '90 min',
  image: Massage,
  description: 'Deeply relaxing full body massage to relieve stress, improve circulation, and restore balance'
},
{ 
  name: 'Luxury Waxing', 
  price: '₹1,500+', 
  time: '45 min',
  image: Waxing,
  description: 'Gentle full-area waxing using premium products for smooth, long-lasting results'
}
];

export default function Services() {
  return (
    <section id="services" className="section alt">
      <div className="section-header">
        <h2>Our Services</h2>
        <p>Premium beauty treatments crafted for perfection</p>
      </div>
      
      <div className="grid">
        {services.map((service) => (
          <div className="service-card" key={service.name}>
            <div className="service-image">
              <img src={service.image} alt={service.name} loading="lazy" />
            </div>
            <div className="service-content">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.name}</h3>
              <p className="service-description">{service.description}</p> {/* NEW */}
              <p className="service-time">{service.time}</p>
              <div className="service-price">
                <strong>{service.price}</strong>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
