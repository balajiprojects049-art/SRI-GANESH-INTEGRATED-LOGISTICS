import { motion } from 'framer-motion';
import { Globe, CheckCircle, ArrowRight, Truck, Ship, Plane, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css';

export default function FreightForwarding() {
  const features = [
    "Air, Ocean, Rail & Road transport through a global agent network",
    "Single-point handling for all Negotiable Documents",
    "Documentation Support System (DSS) solutions",
    "Full and Less-than-Container Load (FCL & LCL) options",
    "Cargo tracking and real-time shipment visibility",
    "Comprehensive supply chain solutions end-to-end",
    "Hazardous cargo handling with full compliance",
    "Multi-modal freight planning and route optimization",
  ];

  const modes = [
    { icon: <Ship size={36} />, title: "Sea Freight", desc: "Cost-effective FCL/LCL ocean shipments to all global ports with consolidated cargo options." },
    { icon: <Plane size={36} />, title: "Air Freight", desc: "Time-critical airfreight solutions with express and standard services worldwide." },
    { icon: <Truck size={36} />, title: "Road Freight", desc: "Domestic and cross-border road transport with real-time tracking and reliable scheduling." },
    { icon: <Package size={36} />, title: "Rail Freight", desc: "Efficient rail logistics for bulk and industrial cargo across India and beyond." },
  ];

  return (
    <div className="service-detail-page">
      {/* Hero Banner */}
      <section className="sd-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop')" }}>
        <div className="sd-hero-overlay"></div>
        <div className="container sd-hero-content">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="sd-breadcrumb">
              <Link to="/">Home</Link> / <Link to="/services">Services</Link> / <span>Freight Forwarding</span>
            </div>
            <div className="sd-hero-icon"><Globe size={48} /></div>
            <h1><span style={{ color: '#fff' }}>Freight </span><span style={{ color: '#EF4444' }}>Forwarding</span></h1>
            <p className="sd-hero-sub">Global multimodal logistics solutions — Air, Sea, Road & Rail — backed by 15+ years of industry expertise.</p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="sd-overview py-20 bg-white">
        <div className="container sd-grid-2">
          <motion.div initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
            <h2>What is <span className="text-accent">Freight Forwarding?</span></h2>
            <p>Freight forwarding is the coordination and shipment of goods from one place to another via single or multiple carriers. Sri Ganesh Integrated Logistics acts as the expert intermediary between you and transportation services — managing the entire export/import process from origin to destination.</p>
            <p style={{ marginTop: '1rem' }}>With our ISO 9001:2008 certified processes and a vast global network, we ensure your cargo reaches its destination safely, on time, and at the best possible cost. Whether you're shipping small parcels or entire factory loads, we have the expertise and infrastructure to manage every detail.</p>
            <Link to="/contact" className="sd-cta-btn">Get a Free Quote <ArrowRight size={16} /></Link>
          </motion.div>
          <motion.div initial={{ x: 30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} className="sd-checklist">
            <h3>Our Freight Forwarding Services Include:</h3>
            <ul>
              {features.map((f, i) => (
                <li key={i}><CheckCircle size={18} className="check-icon" /><span>{f}</span></li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Modes of Transport */}
      <section className="sd-modes py-20 bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2>Modes of <span className="text-accent">Transport</span></h2>
            <p className="text-muted">We offer complete multi-modal logistics options tailored to your shipment type and urgency.</p>
          </div>
          <div className="sd-cards-grid">
            {modes.map((m, i) => (
              <motion.div key={i} whileHover={{ y: -8 }} className="sd-mode-card">
                <div className="sd-mode-icon">{m.icon}</div>
                <h4>{m.title}</h4>
                <p>{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="sd-why py-20 bg-primary text-light">
        <div className="container text-center">
          <h2 style={{ color: '#fff' }}>Why Choose Sri Ganesh for <span style={{ color: '#EF4444' }}>Freight Forwarding?</span></h2>
          <div className="sd-why-grid mt-12">
            {[
              { num: "15+", label: "Years of Experience" },
              { num: "9+", label: "Office Locations Across India" },
              { num: "100+", label: "Global Agent Partners" },
              { num: "ISO", label: "9001:2008 Certified Quality" },
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
          <h2>Ready to Ship <span className="text-accent">Globally?</span></h2>
          <p className="text-muted mt-4 mb-8">Contact us today and let our freight experts design the perfect logistics solution for your business.</p>
          <Link to="/contact" className="sd-cta-btn">Contact Us Today <ArrowRight size={16} /></Link>
        </div>
      </section>
    </div>
  );
}
