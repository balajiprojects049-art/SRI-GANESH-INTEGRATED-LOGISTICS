import { motion } from 'framer-motion';
import { Warehouse, CheckCircle, ArrowRight, Package, ShieldCheck, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css';

export default function WarehousingPage() {
  const features = [
    "Short and long-term storage solutions across India",
    "Climate-controlled facilities for pharma and chemical products",
    "Advanced Warehouse Management System (WMS)",
    "Real-time inventory visibility and reporting",
    "Bonded warehousing for import/export goods",
    "Pick & pack, palletizing, and order fulfillment services",
    "24/7 CCTV surveillance and security personnel",
    "Seamless integration with transportation and distribution",
  ];

  const services = [
    { icon: <Package size={36} />, title: "Bonded Warehousing", desc: "Secure, customs-approved bonded facilities for imported goods awaiting clearance — reducing duty costs and improving cash flow." },
    { icon: <ShieldCheck size={36} />, title: "Hazmat Storage", desc: "Licensed facilities for the safe storage of flammable, chemical, and other classified hazardous materials in compliance with all regulations." },
    { icon: <Warehouse size={36} />, title: "Contract Warehousing", desc: "Dedicated, long-term warehousing contracts tailored to your business volume with scalable space options as you grow." },
    { icon: <Clock size={36} />, title: "Distribution Center", desc: "Value-added services including order processing, kitting, labeling, and last-mile distribution from our strategically located hubs." },
  ];

  return (
    <div className="service-detail-page">
      {/* Hero Banner */}
      <section className="sd-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop')" }}>
        <div className="sd-hero-overlay"></div>
        <div className="container sd-hero-content">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="sd-breadcrumb">
              <Link to="/">Home</Link> / <Link to="/services">Services</Link> / <span>Warehousing</span>
            </div>
            <div className="sd-hero-icon"><Warehouse size={48} /></div>
            <h1><span style={{ color: '#fff' }}>Warehousing & </span><span style={{ color: '#EF4444' }}>Storage</span></h1>
            <p className="sd-hero-sub">Secure, scalable, and technology-driven warehousing solutions for every industry across India.</p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="sd-overview py-20 bg-white">
        <div className="container sd-grid-2">
          <motion.div initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
            <h2>Strategic <span className="text-accent">Warehousing Solutions</span></h2>
            <p>In today's fast-moving supply chain landscape, warehousing is far more than just storage — it's a critical link that connects manufacturing to market. Sri Ganesh Integrated Logistics offers state-of-the-art warehousing facilities strategically located near major Indian ports, airports, and industrial hubs.</p>
            <p style={{ marginTop: '1rem' }}>Our warehouses are equipped with modern technology, security systems, and experienced staff to ensure your goods are handled with the utmost care. From bonded warehousing for customs-pending cargo to climate-controlled storage for pharmaceutical products, we have the right solution for every need.</p>
            <Link to="/contact" className="sd-cta-btn">Request Warehouse Space <ArrowRight size={16} /></Link>
          </motion.div>
          <motion.div initial={{ x: 30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} className="sd-checklist">
            <h3>Our Warehousing Services Include:</h3>
            <ul>
              {features.map((f, i) => (
                <li key={i}><CheckCircle size={18} className="check-icon" /><span>{f}</span></li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="sd-modes py-20 bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2>Types of <span className="text-accent">Storage We Offer</span></h2>
            <p className="text-muted">From bonded to hazmat, from contract to fulfilment — we have the right facility for your cargo.</p>
          </div>
          <div className="sd-cards-grid">
            {services.map((s, i) => (
              <motion.div key={i} whileHover={{ y: -8 }} className="sd-mode-card">
                <div className="sd-mode-icon">{s.icon}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="sd-why py-20 bg-primary text-light">
        <div className="container text-center">
          <h2 style={{ color: '#fff' }}>Our <span style={{ color: '#EF4444' }}>Warehouse Advantage</span></h2>
          <div className="sd-why-grid mt-12">
            {[
              { num: "9+", label: "Strategic Locations" },
              { num: "24/7", label: "Security & Monitoring" },
              { num: "WMS", label: "Digital Inventory System" },
              { num: "ISO", label: "Certified Operations" },
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
          <h2>Looking for Reliable <span className="text-accent">Warehouse Space?</span></h2>
          <p className="text-muted mt-4 mb-8">Talk to our team and find the right storage solution for your business today.</p>
          <Link to="/contact" className="sd-cta-btn">Contact Us Now <ArrowRight size={16} /></Link>
        </div>
      </section>
    </div>
  );
}
