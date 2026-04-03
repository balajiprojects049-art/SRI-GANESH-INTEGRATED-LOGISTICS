import { Link, useLocation } from 'react-router-dom';
import { Home, Package, FileText, Phone } from 'lucide-react';
import './MobileNav.css';

export default function MobileNav() {
  const location = useLocation();
  
  return (
    <div className="mobile-only mobile-bottom-nav">
      <Link to="/" className={`mobile-nav-item ${location.pathname === '/' ? 'active' : ''}`}>
        <Home size={24} />
        <span>Home</span>
      </Link>
      <Link to="/services" className={`mobile-nav-item ${location.pathname === '/services' ? 'active' : ''}`}>
        <Package size={24} />
        <span>Services</span>
      </Link>
      <Link to="/quote" className={`mobile-nav-item ${location.pathname === '/quote' ? 'active' : ''}`}>
        <FileText size={24} />
        <span>Quote</span>
      </Link>
      <Link to="/contact" className={`mobile-nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
        <Phone size={24} />
        <span>Contact</span>
      </Link>
    </div>
  );
}
