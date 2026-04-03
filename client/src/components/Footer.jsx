import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer bg-primary text-light pt-16">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          
          <div className="footer-col">
            <h3 className="text-accent mb-4">Sri Ganesh Integrated Logistics</h3>
            <p className="text-muted mb-4">
              Established in 2009, we are a one-stop integrated logistics and transportation service provider — ISO 9001:2008 certified, serving clients across India and globally.
            </p>
            <div className="social-links flex gap-4">
              <a href="#" className="social-icon"><Facebook size={20} /></a>
              <a href="#" className="social-icon"><Twitter size={20} /></a>
              <a href="#" className="social-icon"><Linkedin size={20} /></a>
              <a href="#" className="social-icon"><Instagram size={20} /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="mb-4">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Our Services</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/quote">Get a Quote</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="mb-4">Services</h4>
            <ul className="footer-links">
              <li><Link to="/services">Freight Forwarding</Link></li>
              <li><Link to="/services">Sea Freight</Link></li>
              <li><Link to="/services">Air Freight</Link></li>
              <li><Link to="/services">Project Forwarding</Link></li>
              <li><Link to="/services">Break Bulk</Link></li>
              <li><Link to="/services">Hazardous Cargo</Link></li>
              <li><Link to="/services">Warehousing</Link></li>
              <li><Link to="/services">Customs Clearance</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="mb-4">Head Office</h4>
            <ul className="footer-contact text-muted">
              <li className="flex gap-2 mb-3">
                <MapPin className="text-accent shrink-0" size={20} />
                <span>Plot No:10, Aparajitha Colony, Near Meridian Plaza, Ameerpet, Hyderabad - 5000 016</span>
              </li>
              <li className="flex gap-2 mb-3">
                <Phone className="text-accent shrink-0" size={20} />
                <span>+91 98493 56197</span>
              </li>
              <li className="flex gap-2 mb-3">
                <Mail className="text-accent shrink-0" size={20} />
                <span>parvender@ggishipping.com</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="footer-bottom border-t border-muted py-6 text-center text-muted">
          <p>&copy; {new Date().getFullYear()} Sri Ganesh Integrated Logistics. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
