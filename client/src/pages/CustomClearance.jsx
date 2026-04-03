import { motion } from 'framer-motion';
import { FileCheck, CheckCircle, ArrowRight, ShieldCheck, Globe, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css';

export default function CustomClearance() {
  const features = [
    "Import & Export customs documentation and filing",
    "Classification of goods under correct HS codes",
    "Duty drawback and exemption advisory services",
    "Liaison with Customs, DGFT, and Port Authorities",
    "Handling of special licenses: EXIM, DFIA, EPCG",
    "EDI (Electronic Data Interchange) filing expertise",
    "Hazardous cargo clearance with full compliance",
    "Post-clearance audits and regulatory consulting",
  ];

  const steps = [
    { icon: <FileCheck size={36} />, title: "Document Preparation", desc: "Our specialists prepare and verify all shipping documents — Bill of Lading, invoices, packing lists, and certificates — to ensure zero discrepancies." },
    { icon: <Globe size={36} />, title: "Regulatory Filing", desc: "We handle the technicalities of EDI filing and regulatory submissions with Indian Customs authorities across all major ports." },
    { icon: <ShieldCheck size={36} />, title: "Duty & Compliance Advisory", desc: "We advise on applicable duties, exemptions, and special schemes (EPCG, DFIA, Duty Drawback) to minimize your tax burden legally." },
    { icon: <Clock size={36} />, title: "Fast Cargo Release", desc: "With our strong Port & Customs relationships and systematic approach, we achieve the fastest possible cargo release timelines." },
  ];

  return (
    <div className="service-detail-page">
      {/* Hero Banner */}
      <section className="sd-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop')" }}>
        <div className="sd-hero-overlay"></div>
        <div className="container sd-hero-content">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="sd-breadcrumb">
              <Link to="/">Home</Link> / <Link to="/services">Services</Link> / <span>Custom Clearance</span>
            </div>
            <div className="sd-hero-icon"><FileCheck size={48} /></div>
            <h1><span style={{ color: '#fff' }}>Custom </span><span style={{ color: '#EF4444' }}>Clearance</span></h1>
            <p className="sd-hero-sub">Expert customs brokerage services — navigating complex regulations so your cargo clears borders without delays or penalties.</p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="sd-overview py-20 bg-white">
        <div className="container sd-grid-2">
          <motion.div initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
            <h2>Seamless <span className="text-accent">Customs Brokerage</span></h2>
            <p>Our expertise and sound knowledge in customs-related matters makes us an ideal Custom Clearing Agent for all your Import and Export requirements. With offices near India's major seaports and airports, we are positioned to deliver the fastest possible clearances with precision and full regulatory compliance.</p>
            <p style={{ marginTop: '1rem' }}>We handle everything from standard commercial shipments to complex hazardous goods, oversized project cargo, and temperature-sensitive pharmaceutical imports. Our licensed CHA (Customs House Agent) team ensures that your goods are cleared correctly, lawfully, and at the lowest duty liability — saving you both time and money.</p>
            <Link to="/contact" className="sd-cta-btn">Get Clearance Support <ArrowRight size={16} /></Link>
          </motion.div>
          <motion.div initial={{ x: 30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} className="sd-checklist">
            <h3>Our Custom Clearance Services:</h3>
            <ul>
              {features.map((f, i) => (
                <li key={i}><CheckCircle size={18} className="check-icon" /><span>{f}</span></li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="sd-modes py-20 bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2>Our Clearance <span className="text-accent">Process</span></h2>
            <p className="text-muted">A transparent, step-by-step approach that ensures your cargo clears seamlessly every time.</p>
          </div>
          <div className="sd-cards-grid">
            {steps.map((s, i) => (
              <motion.div key={i} whileHover={{ y: -8 }} className="sd-mode-card">
                <div className="sd-step-num">{i + 1}</div>
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
          <h2 style={{ color: '#fff' }}>Why Trust Us for <span style={{ color: '#EF4444' }}>Custom Clearance?</span></h2>
          <div className="sd-why-grid mt-12">
            {[
              { num: "15+", label: "Years of CHA Experience" },
              { num: "Zero", label: "Penalty Track Record" },
              { num: "9+", label: "Port & Airport Locations" },
              { num: "24/7", label: "Regulatory Support" },
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
          <h2>Need Fast & Compliant <span className="text-accent">Customs Clearance?</span></h2>
          <p className="text-muted mt-4 mb-8">Our licensed CHA experts are available now to handle your import/export clearance requirements.</p>
          <Link to="/contact" className="sd-cta-btn">Contact Our CHA Team <ArrowRight size={16} /></Link>
        </div>
      </section>
    </div>
  );
}
