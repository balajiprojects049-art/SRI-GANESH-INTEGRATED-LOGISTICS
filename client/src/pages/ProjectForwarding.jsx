import { motion } from 'framer-motion';
import { Package, CheckCircle, ArrowRight, Truck, ShieldCheck, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css';

export default function ProjectForwarding() {
  const features = [
    "Turn-key solutions for Super Large & Over-Dimensional Cargo (ODC)",
    "Dedicated on-site project management teams",
    "Multi-modal transportation: Sea, Air, Road & Rail",
    "Heavy lift & crane operations management",
    "Route survey and transportation feasibility studies",
    "Import/Export documentation and customs clearance",
    "Rigorous safety protocols and compliance with international standards",
    "Significant cost savings through freight optimization",
  ];

  const sectors = [
    { icon: <Wrench size={36} />, title: "Oil & Gas", desc: "Safe and compliant transportation of drilling equipment, refinery modules, and pipeline infrastructure across India and globally." },
    { icon: <Package size={36} />, title: "Power & Energy", desc: "Specialized logistics for turbines, generators, transformers, and renewable energy equipment with heavy-lift expertise." },
    { icon: <Truck size={36} />, title: "Industrial Plants", desc: "Complete project logistics for plant relocation, machinery installation, and factory equipment shipments." },
    { icon: <ShieldCheck size={36} />, title: "Infrastructure", desc: "Safe transit of bridge segments, construction materials, and large-scale civil engineering equipment." },
  ];

  return (
    <div className="service-detail-page">
      {/* Hero Banner */}
      <section className="sd-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop')" }}>
        <div className="sd-hero-overlay"></div>
        <div className="container sd-hero-content">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="sd-breadcrumb">
              <Link to="/">Home</Link> / <Link to="/services">Services</Link> / <span>Project Forwarding</span>
            </div>
            <div className="sd-hero-icon"><Package size={48} /></div>
            <h1><span style={{ color: '#fff' }}>Project </span><span style={{ color: '#EF4444' }}>Forwarding</span></h1>
            <p className="sd-hero-sub">Specialized heavy cargo and over-dimensional logistics — engineered for India's most complex industrial projects.</p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="sd-overview py-20 bg-white">
        <div className="container sd-grid-2">
          <motion.div initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
            <h2>Expert <span className="text-accent">Project Logistics</span></h2>
            <p>Project forwarding requires more than standard shipping — it demands precision engineering, strategic planning, and hands-on expertise. At Sri Ganesh Integrated Logistics, we specialize in moving the unmovable: oversized industrial machinery, massive infrastructure components, and sensitive high-value project cargo.</p>
            <p style={{ marginTop: '1rem' }}>Our dedicated project teams conduct thorough feasibility studies, route surveys, and risk assessments before every shipment. We coordinate with port authorities, government agencies, and specialized transport vendors to ensure a seamless, safe, and cost-optimized delivery without any surprises.</p>
            <Link to="/contact" className="sd-cta-btn">Discuss Your Project <ArrowRight size={16} /></Link>
          </motion.div>
          <motion.div initial={{ x: 30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} className="sd-checklist">
            <h3>Our Project Forwarding Capabilities:</h3>
            <ul>
              {features.map((f, i) => (
                <li key={i}><CheckCircle size={18} className="check-icon" /><span>{f}</span></li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Sectors */}
      <section className="sd-modes py-20 bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2>Industries We <span className="text-accent">Serve</span></h2>
            <p className="text-muted">Our project forwarding expertise spans across multiple high-demand industries in India and abroad.</p>
          </div>
          <div className="sd-cards-grid">
            {sectors.map((s, i) => (
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
          <h2 style={{ color: '#fff' }}>Our <span style={{ color: '#EF4444' }}>Project Track Record</span></h2>
          <div className="sd-why-grid mt-12">
            {[
              { num: "500+", label: "Successful Project Shipments" },
              { num: "50+", label: "Tons — Heaviest Single Piece Moved" },
              { num: "ODC", label: "Over-Dimensional Cargo Experts" },
              { num: "24/7", label: "Dedicated Project Support" },
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
          <h2>Planning a <span className="text-accent">Complex Shipment?</span></h2>
          <p className="text-muted mt-4 mb-8">Our project logistics experts are ready to assess your cargo requirements and build a custom plan.</p>
          <Link to="/contact" className="sd-cta-btn">Speak to an Expert <ArrowRight size={16} /></Link>
        </div>
      </section>
    </div>
  );
}
