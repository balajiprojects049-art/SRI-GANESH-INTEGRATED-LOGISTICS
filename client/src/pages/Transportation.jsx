import { motion } from 'framer-motion';
import { Truck, CheckCircle, ArrowRight, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css';

export default function Transportation() {
  const features = [
    "Full truck load (FTL) and part truck load (PTL) shipments",
    "Multi-axle heavy vehicle transport for industrial cargo",
    "Temperature-controlled transport for pharma & chemicals",
    "Real-time GPS tracking across all vehicles",
    "Pan-India coverage with 9+ office support hubs",
    "Door-to-door pickup and delivery services",
    "Night convoy services for time-sensitive deliveries",
    "Experienced drivers trained in handling hazardous cargo",
  ];

  const fleet = [
    { icon: <Truck size={36} />, title: "Heavy Trucks & Trailers", desc: "Multi-axle flatbed and closed-body trailers for industrial, pharma, and commercial cargo of all sizes." },
    { icon: <ShieldCheck size={36} />, title: "Hazmat Certified Vehicles", desc: "Specially equipped tankers and container trucks compliant with Indian hazardous goods transport regulations." },
    { icon: <Clock size={36} />, title: "Express Delivery Vans", desc: "Fast and flexible last-mile delivery vehicles for urgent, time-critical shipments within metro cities." },
    { icon: <MapPin size={36} />, title: "Pan-India Network", desc: "A vast transportation network connecting all major industrial belts, ports, and commercial hubs across India." },
  ];

  return (
    <div className="service-detail-page">
      {/* Hero Banner */}
      <section className="sd-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop')" }}>
        <div className="sd-hero-overlay"></div>
        <div className="container sd-hero-content">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="sd-breadcrumb">
              <Link to="/">Home</Link> / <Link to="/services">Services</Link> / <span>Transportation</span>
            </div>
            <div className="sd-hero-icon"><Truck size={48} /></div>
            <h1><span style={{ color: '#fff' }}>Transportation </span><span style={{ color: '#EF4444' }}>Services</span></h1>
            <p className="sd-hero-sub">Reliable, GPS-tracked road freight solutions connecting every corner of India — on time, every time.</p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="sd-overview py-20 bg-white">
        <div className="container sd-grid-2">
          <motion.div initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
            <h2>Nationwide <span className="text-accent">Road Transport</span></h2>
            <p>Our transportation arm is the backbone of Sri Ganesh Integrated Logistics' domestic supply chain operations. We operate a robust fleet of vehicles across India's major industrial corridors, connecting factories, warehouses, ports, and airports with clockwork precision.</p>
            <p style={{ marginTop: '1rem' }}>Whether you need a single truck for a local delivery or an entire fleet for a pan-India distribution campaign, our transportation team is equipped and ready. We specialize in FTL, PTL, and specialized cargo — including pharma, chemicals, and over-dimensional industrial equipment.</p>
            <Link to="/contact" className="sd-cta-btn">Book Transportation <ArrowRight size={16} /></Link>
          </motion.div>
          <motion.div initial={{ x: 30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} className="sd-checklist">
            <h3>Our Transportation Solutions Include:</h3>
            <ul>
              {features.map((f, i) => (
                <li key={i}><CheckCircle size={18} className="check-icon" /><span>{f}</span></li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Fleet */}
      <section className="sd-modes py-20 bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2>Our <span className="text-accent">Fleet & Capabilities</span></h2>
            <p className="text-muted">A modern, well-maintained fleet designed for every type of cargo and route requirement.</p>
          </div>
          <div className="sd-cards-grid">
            {fleet.map((f, i) => (
              <motion.div key={i} whileHover={{ y: -8 }} className="sd-mode-card">
                <div className="sd-mode-icon">{f.icon}</div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="sd-why py-20 bg-primary text-light">
        <div className="container text-center">
          <h2 style={{ color: '#fff' }}>Why Our <span style={{ color: '#EF4444' }}>Transport Network?</span></h2>
          <div className="sd-why-grid mt-12">
            {[
              { num: "9+", label: "Offices Across India" },
              { num: "100%", label: "GPS Tracked Shipments" },
              { num: "24/7", label: "Operations & Support" },
              { num: "15+", label: "Years of Road Expertise" },
            ].map((s, i) => (
              <div key={i} className="sd-stat">
                <h2 style={{ color: 'var(--accent-color)', fontSize: '3rem' }}>{s.num}</h2>
                <p style={{ color: '#ccd6f0' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sd-bottom-cta py-16 bg-light text-center">
        <div className="container">
          <h2>Need Reliable <span className="text-accent">Road Transport?</span></h2>
          <p className="text-muted mt-4 mb-8">Contact us and let our team arrange the perfect road freight solution for your next shipment.</p>
          <Link to="/contact" className="sd-cta-btn">Get In Touch <ArrowRight size={16} /></Link>
        </div>
      </section>
    </div>
  );
}
