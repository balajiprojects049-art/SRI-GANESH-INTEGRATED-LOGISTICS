import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, ShieldCheck, Clock, Truck, Ship, Plane, Star, Package, Warehouse, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';
import './Contact.css';

export default function Home() {
  const [activeTab, setActiveTab] = useState("Custom Clearance");

  const tabData = {
    "Freight Forwarding": {
      route: "/services/freight-forwarding",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
      text: "Our global reach and robust network ensure seamless Freight Forwarding solutions. With strategic partnerships across air, sea, and road networks, we optimize freight routes for unparalleled cost-efficiency and speed-to-market."
    },
    "Project Forwarding": {
      route: "/services/project-forwarding",
      image: "https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=800&auto=format&fit=crop",
      text: "Specializing in Over-Dimensional Cargo (ODC) and Super Large structures. We execute highly complex turn-key Project Forwarding operations with dedicated on-site teams, guaranteeing precision engineering and safety."
    },
    "Transportation": {
      route: "/services/transportation",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&auto=format&fit=crop",
      text: "Offering a comprehensive fleet of transport vehicles designed for every requirement. From last-mile delivery to cross-border heavy hauling, our Transportation framework is the backbone of India's leading supply chains."
    },
    "Warehousing": {
      route: "/services/warehousing",
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800&auto=format&fit=crop",
      text: "State-of-the-art warehousing facilities equipped with modern inventory management. Secure, climate-controlled, and highly flexible storage options ensuring your assets are protected and readily deployable."
    },
    "Custom Clearance": {
      route: "/services/custom-clearance",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
      text: "Our expertise and sound knowledge in customs related matters makes us an ideal Custom Clearing Agent, for all your Custom Clearance issues. We navigate complex regulatory gateways seamlessly."
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop')" }}></div>
        
        <div className="container hero-content">
          <motion.div initial="hidden" animate="visible" variants={containerVariants} className="hero-text">
            <motion.h1 variants={itemVariants} className="text-light">
              Reliable Logistics. <br /> 
              <span style={{ color: 'var(--accent-color)' }}>Delivered </span>
              <span style={{ color: '#8bbce3' }}>Globally.</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="hero-desc">
              Sri Ganesh Integrated Logistics is a one-stop integrated logistics and transportation service provider — offering comprehensive, high-quality solutions in shipping, freight forwarding, and supply chain management since 2009.
            </motion.p>
            <motion.div variants={itemVariants} className="hero-ctas flex gap-4 mt-8">
              <Link to="/quote" className="btn btn-primary">Get Quote</Link>
              <Link to="/services" className="btn btn-outline" style={{borderColor: 'white', color: 'white'}}>Our Services</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section bg-white py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 text-center stats-grid">
            <motion.div whileHover={{ scale: 1.05 }} className="stat-card p-6 glass shadow-sm rounded-lg">
              <h2 className="stat-number text-gradient">2009</h2>
              <p className="stat-label">Established</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="stat-card p-6 glass shadow-sm rounded-lg">
              <h2 className="stat-number text-gradient">15+</h2>
              <p className="stat-label">Years Experience</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="stat-card p-6 glass shadow-sm rounded-lg">
              <h2 className="stat-number text-gradient">6</h2>
              <p className="stat-label">Office Locations</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="stat-card p-6 glass shadow-sm rounded-lg">
              <h2 className="stat-number text-gradient">ISO</h2>
              <p className="stat-label">9001:2008 Certified</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Welcome & Interactive Showcase */}
      <section className="welcome-interactive">
        <div className="container" style={{ padding: '4rem 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr 0.8fr', gap: '2.5rem', alignItems: 'stretch' }}>
            
            {/* Left: Welcome Text */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h2>Welcome</h2>
              <p>
                A total one-resource integrated logistics and transportation service provider, <strong style={{ color: 'var(--primary-color)' }}>Sri Ganesh Integrated Logistics</strong> offers a wide range of quality solutions in areas ranging from Transport Operations to Freight booking, Project Forwarding, Documentation and shipment of Hazardous cargo, etc.
              </p>
              <p>
                Driven by the desire for excellence, we are committed to provide customers, result-oriented services and maintaining sound relationship based on integrity and trust with our customers and partners.
              </p>
              <p style={{ fontWeight: 600, color: 'var(--primary-color)' }}>
                Get in touch with us to understand how we can help fulfill your requirements.
              </p>
              <h4 className="iso-label" style={{ color: 'var(--accent-color)', fontWeight: 700, fontSize: '1rem', marginTop: '1rem' }}>
                NS-EN ISO 9001:2008 / ISO 9001:2008
              </h4>
            </div>

            {/* Middle: Image + Description */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="welcome-image-box"
              >
                <img src={tabData[activeTab].image} alt={activeTab} />
              </motion.div>
              <div className="welcome-desc-box">
                <p>{tabData[activeTab].text}</p>
                <div style={{ textAlign: 'right' }}>
                  <Link to={tabData[activeTab].route}>More...</Link>
                </div>
              </div>
            </div>

            {/* Right: Tab Menu */}
            <div className="welcome-tab-menu" style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
              {Object.keys(tabData).map((tab) => (
                <Link
                  key={tab}
                  to={tabData[tab].route}
                  onMouseEnter={() => setActiveTab(tab)}
                  className={`welcome-tab-btn${activeTab === tab ? ' active' : ''}`}
                  style={{ textDecoration: 'none' }}
                >
                  {tab}
                </Link>
              ))}
            </div>

          </div>
        </div>
      </section>


      {/* Services Preview Section */}
      <section className="services-preview py-24 bg-light">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Core <span className="text-accent">Services</span></h2>
            <p className="section-subtitle text-muted">End-to-end logistics solutions for every industry need</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Sea Freight", icon: <Ship size={32} />, desc: "Cost-effective ocean shipping including FCL, LCL, cargo tracking, consolidation, and customs clearance to all global destinations." },
              { title: "Air Freight", icon: <Plane size={32} />, desc: "High-speed delivery for cargo of any shape or size, with specialized expertise in Super Large and Heavy cargo shipments." },
              { title: "Project Forwarding", icon: <Package size={32} />, desc: "Dedicated on-site teams for international projects, specializing in Super Large Cargo with significant cost savings on freight." },
              { title: "Freight Forwarding", icon: <Globe size={32} />, desc: "Air, Ocean, Rail, and Road transport via a global agent network with single-point document handling and documentation support." },
              { title: "Warehousing", icon: <Warehouse size={32} />, desc: "Secure, flexible storage solutions with real-time inventory management to keep your global supply chain running smoothly." },
              { title: "Customs Clearance", icon: <Truck size={32} />, desc: "Professional handling of all regulatory documentation and clearance processes for seamless import and export operations." }
            ].map((service, idx) => (
              <motion.div key={idx} whileHover={{ y: -10 }} className="card service-card">
                <div className="card-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p className="text-muted mt-2 mb-4">{service.desc}</p>
                <Link to="/services" className="link-arrow flex items-center text-accent fw-bold">
                  Learn More <ArrowRight size={16} className="ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us py-24">
        <div className="container grid md:grid-cols-2 gap-16 items-center">
          <div className="why-us-content">
            <h2 className="mb-8">Why Choose <br/><span className="text-gradient">Sri Ganesh Integrated Logistics?</span></h2>
            <div className="features-list">
              {[
                { title: "Global Reach", icon: <Globe />, text: "Extensive agent network spanning air, ocean, rail, and road across all continents." },
                { title: "ISO Certified Quality", icon: <ShieldCheck />, text: "NS-EN ISO 9001:2008 certified — ensuring highest standards in every shipment." },
                { title: "Timely Delivery", icon: <Clock />, text: "24/7 dedicated support with a proven track record of on-time delivery worldwide." }
              ].map((feat, i) => (
                <div key={i} className="feature-item flex gap-4 mb-6">
                  <div className="feature-icon mt-1 text-accent">{feat.icon}</div>
                  <div>
                    <h4 className="mb-1">{feat.title}</h4>
                    <p className="text-muted">{feat.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/about" className="btn btn-secondary mt-4">Discover Our History</Link>
          </div>
          <div className="why-us-image relative">
            <div className="image-wrapper rounded-lg overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=2070&auto=format&fit=crop" alt="Logistics Team" />
            </div>
            <div className="floating-card">
              <div className="stars-container">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} fill="#eab308" stroke="none" size={22} />
                ))}
              </div>
              <p className="font-bold" style={{ margin: 0, color: 'var(--text-dark)' }}>Trusted by Aurobindo Pharma & more</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients / Testimonials */}
      <section className="py-16 bg-white text-center">
        <div className="container">
          <h2 className="mb-4 section-title">Trusted By <span className="text-accent">Industry Leaders</span></h2>
          <p className="text-muted mb-12">Recognized by major pharmaceutical and chemical companies across India</p>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {[
              { name: "Aurobindo Pharma Limited", industry: "Pharmaceuticals" },
              { name: "Divyot Chemicals Pvt. Ltd.", industry: "Chemicals" }
            ].map((client, i) => (
              <motion.div key={i} whileHover={{ scale: 1.03 }} className="card flex flex-col items-center gap-3 p-8">
                <div className="stars-container flex gap-1 mb-2">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} fill="#eab308" stroke="none" size={18} />
                  ))}
                </div>
                <h4 className="text-primary">{client.name}</h4>
                <p className="text-muted text-sm">{client.industry}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Our <span className="text-accent">Locations</span></h2>
            <p className="text-muted">Serving you across major Indian cities and ports</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { city: "Hyderabad", label: "Head Office", address: "Plot No:10, Aparajitha Colony, Near Meridian Plaza, Ameerpet, Hyderabad - 5000 016", phone: "+91 98493 56197", email: "parvender@ggishipping.com" },
              { city: "Vishakapatnam", label: "Branch Office", address: "10-37-27, Rich House, Ram Nagar, Vishakapatnam - 530002, Andhra Pradesh", phone: "+91 90006 01100", email: "parvender@ggishipping.com" },
              { city: "Krishnapatinam", label: "Branch Office", address: "No. 306, 3rd Floor, DNJ Commercial Complex, Gopala Puram Village, Muthukur Mandal, Nellore, AP - 524344", phone: "", email: "parvender@ggishipping.com" },
              { city: "Mumbai", label: "Branch Office", address: "54, Shalaka, D. N Nagar, Andheri (W), Mumbai - 400 053", phone: "+91 90000 01007 / +91 93228 89957", email: "parvender@ggishipping.com" },
              { city: "Chennai", label: "Branch Office", address: "Ramarau Buildings, 3rd Floor, 299/144, Thambuchetty Street, Chennai - 600001", phone: "", email: "parvender@ggishipping.com" },
              { city: "Delhi", label: "Branch Office", address: "A-111, Pariyavaran Complex, Neb Sari Road, New Delhi - 30", phone: "+91 90000 01007 / +91 98112 09066", email: "parvender@ggishipping.com" },
              { city: "Ahmedabad", label: "Branch Office", address: "Block No-31A, 3rd Floor, Prime Plaza, Judge Bunglow Road, Ahmedabad", phone: "+91 90000 01007 / +91 93755 31688", email: "parvender@ggishipping.com" },
              { city: "Gujarat (Kandala)", label: "Branch Office", address: "12, 275/12B, Gandhi Dham, Gujarat", phone: "+91 90000 01007", email: "parvender@ggishipping.com" },
              { city: "Bangalore", label: "Branch Office", address: "2555, 13th Mai, 9th Cross, E Block, Sahakarnagar, Bangalore - 560092", phone: "+91 91000 08009", email: "parvender@ggishipping.com" },
            ].map((loc, i) => (
              <motion.div key={i} whileHover={{ y: -6 }} className="office-card">
                <div className="office-card-title">
                  {loc.city}
                  {loc.label === "Head Office" && <span className="office-card-badge">Head Office</span>}
                </div>
                <div className="office-card-row">
                  <MapPin size={14} />
                  <span>{loc.address}</span>
                </div>
                {loc.phone && (
                  <div className="office-card-row">
                    <Phone size={14} />
                    <span className="office-card-phone">{loc.phone}</span>
                  </div>
                )}
                <div className="office-card-row">
                  <Mail size={14} />
                  <span>{loc.email}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner mt-auto py-16 text-center text-light">
        <div className="container relative z-10">
          <h2 className="mb-4">Ready to move your cargo?</h2>
          <p className="mb-8 text-xl max-w-2xl mx-auto">Get a competitive quote today and experience hassle-free shipping with Sri Ganesh Integrated Logistics.</p>
          <Link to="/quote" className="btn btn-primary btn-lg">Request a Quote</Link>
        </div>
        <div className="cta-overlay absolute inset-0 bg-primary opacity-90 z-0"></div>
      </section>
    </div>
  );
}
