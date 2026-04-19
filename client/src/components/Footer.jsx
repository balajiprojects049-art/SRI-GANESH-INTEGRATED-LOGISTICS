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
              Established in 2001, we are your one-stop solution for all your business logistics needs, serving customers across India and globally.            </p>
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
              <li><Link to="/services/reefer-containers">Reefer Containers</Link></li>
              <li><Link to="/services/regular-containers">Regular Containers</Link></li>
              <li><Link to="/services/iso-tankers">ISO Tankers</Link></li>
              <li><Link to="/services/liquid-tankers">Liquid Tankers</Link></li>
              <li><Link to="/services/hazardous-cargo">Hazardous Cargo</Link></li>
              <li><Link to="/services/break-bulk-cargo">Break Bulk Cargo</Link></li>
              <li><Link to="/services/odc-cargo">ODC Cargo</Link></li>
              <li><Link to="/services/freight-forwarding">Freight Forwarding</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="mb-4">Head Office</h4>
            <ul className="footer-contact text-muted">
              <li className="flex gap-2 mb-3">
                <MapPin className="text-accent shrink-0 mt-1" size={20} />
                <span>6-3-852/2/B4, Plot No. 10, Aparajitha Colony, Ameerpet,<br/>Hyderabad, Telangana, India - 500016.</span>
              </li>
              <li className="flex gap-2 mb-3">
                <Phone className="text-accent shrink-0" size={20} />
                <span>9494922080, 9849356197</span>
              </li>
              <li className="flex gap-2 mb-3">
                <Mail className="text-accent shrink-0" size={20} />
                <span>contact@sgilogistics.in</span>
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
