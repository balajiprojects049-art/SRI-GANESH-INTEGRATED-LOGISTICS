import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Globe, Clock, Star, MapPin, Phone, Mail, ThermometerSnowflake, Container, Cylinder, Droplets, Biohazard, PackageOpen, Maximize2, ShieldCheck, Truck, Package, Ship } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './Home.css';
import './Contact.css';

const heroImages = [
  '/Hero1.png',
  '/Hero2.png',
  '/Hero3.png'
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("Reefer Containers");
  const [currentHero, setCurrentHero] = useState(0);
  const [establishedCount, setEstablishedCount] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);
  const [hasStatsAnimated, setHasStatsAnimated] = useState(false);
  const statsSectionRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (hasStatsAnimated || !statsSectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStatsAnimated(true);
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(statsSectionRef.current);
    return () => observer.disconnect();
  }, [hasStatsAnimated]);

  useEffect(() => {
    if (!hasStatsAnimated) return;

    const establishedTarget = 2001;
    const yearsTarget = 25;
    const durationMs = 1600;
    let animationFrameId;

    const animateCount = (startTime) => {
      const step = (currentTime) => {
        const progress = Math.min((currentTime - startTime) / durationMs, 1);
        const eased = 1 - Math.pow(1 - progress, 3);

        setEstablishedCount(Math.floor(establishedTarget * eased));
        setYearsCount(Math.floor(yearsTarget * eased));

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(step);
          return;
        }

        setEstablishedCount(establishedTarget);
        setYearsCount(yearsTarget);
      };

      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(animateCount);

    return () => cancelAnimationFrame(animationFrameId);
  }, [hasStatsAnimated]);

  const tabData = {
    "Reefer Containers": {
      route: "/services/reefer-containers",
      image: "/reefer-containers-home.png",
      text: "We provide PAN India movement of temperature-sensitive products, ensuring seamless and efficient cold logistics. Our services cater to industries requiring precise temperature control, including pharmaceuticals, dairy, frozen foods, seafood, meat, and other perishable goods."
    },
    "Regular Containers": {
      route: "/services/regular-containers",
      image: "/regular-containers-card.png",
      text: "We provide reliable and cost-effective PAN India transportation of goods using regular containers. Our services cater to a wide range of industries, including FMCG, textiles, electronics, automobile parts, and general merchandise."
    },
    "ISO Tankers": {
      route: "/services/iso-tankers",
      image: "/iso-tankers-home.png",
      text: "We provide Pan India transportation of bulk liquids and gases using certified ISO tank containers. Ensuring safe and contamination-free delivery of chemicals, petrochemicals, and food-grade liquids."
    },
    "Liquid Tankers": {
      route: "/services/liquid-tankers",
      image: "/liquid-tankers-home.png",
      text: "We provide efficient and reliable transportation of liquid cargo across India, specialized in edible oils, beverages, chemicals, and water - ensuring hygienic, leak-proof, and timely delivery from source to destination."
    },
    "Hazardous Cargo": {
      route: "/services/hazardous-cargo",
      image: "/hazardous-cargo-home.png",
      text: "We provide safe and compliant transportation of hazardous materials across India - including chemicals, flammable substances, industrial gases, and other dangerous goods - adhering to all regulatory safety standards."
    },
    "Break Bulk Cargo": {
      route: "/services/break-bulk-cargo",
      image: "/break-bulk-home.png",
      text: "We offer seamless handling and transportation of break bulk cargo managing goods that cannot be containerized due to their size, weight, or nature. We cater to industries like steel, construction, and large machinery."
    },
    "Over Dimensional Cargo": {
      route: "/services/odc-cargo",
      image: "/odc-cargo-home.png",
      text: "We specialize in the movement of over-dimensional and heavy-lift cargo across India (ODC). Our services cater to heavy infrastructure, power, oil & gas, and mechanical engineering projects."
    },
    "Freight Forwarding": {
      route: "/services/freight-forwarding",
      image: "/freight-forwarding-home.png",
      text: "We provide end-to-end freight forwarding services, managing the complete movement of goods across domestic and international routes. Our services cover air freight, sea freight, and last-mile delivery — offering a single-window solution for businesses."
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
      <Helmet>
        <title>Sri Ganesh Integrated Logistics - 25+ Years in Pan India Transportation</title>
        <meta name="description" content="One-stop integrated transportation service provider delivering reliable solutions across Pan India. Specialists in Reefer, Hazardous, and ISO Tankers cargo." />
        <link rel="canonical" href="https://www.sgilogistics.com" />
      </Helmet>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <AnimatePresence mode='wait'>
          <motion.div 
            key={currentHero}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="hero-bg" 
            style={{ backgroundImage: `url(${heroImages[currentHero]})` }}
          ></motion.div>
        </AnimatePresence>

        <div className="container hero-content">
          <motion.div initial="hidden" animate="visible" variants={containerVariants} className="hero-text">
            <motion.h1 variants={itemVariants} className="text-light">
              Reliable Logistics. <br />
              <span style={{ color: 'var(--accent-color)' }}>Delivered </span>
              <span style={{ color: '#8bbce3' }}>Globally.</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="hero-desc">
              Sri Ganesh Integrated Logistics is your complete one-stop partner for all business logistics needs. We provide a comprehensive range of services — from transportation via Reefer Containers, Regular Containers, ISO Tankers, and Liquid Tankers, to expert handling and movement of Hazardous Cargo, Break Bulk Cargo, and Over Dimensional Cargo (ODC), along with end-to-end Freight Forwarding services. From the first mile to the last, we manage every leg of your shipment — so your business never misses a beat.
            </motion.p>
            <motion.div variants={itemVariants} className="hero-ctas flex gap-4 mt-8">
              <Link to="/quote" className="btn btn-primary">Get Quote</Link>
              <Link to="/services" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>Our Services</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsSectionRef} className="stats-section py-16">
        <div className="container">
          <div className="stats-highlight-grid">
            <motion.div whileHover={{ y: -4 }} className="stats-highlight-item">
              <h2 className="stats-highlight-value">{establishedCount}</h2>
              <p className="stats-highlight-label">Established</p>
            </motion.div>
            <motion.div whileHover={{ y: -4 }} className="stats-highlight-item">
              <h2 className="stats-highlight-value">{yearsCount}+</h2>
              <p className="stats-highlight-label">Years of Expertise</p>
            </motion.div>
            <motion.div whileHover={{ y: -4 }} className="stats-highlight-item">
              <h2 className="stats-highlight-value">PAN</h2>
              <p className="stats-highlight-label">India Coverage</p>
            </motion.div>
            <motion.div whileHover={{ y: -4 }} className="stats-highlight-item">
              <h2 className="stats-highlight-value stats-highlight-value-global">Global</h2>
              <p className="stats-highlight-label">Freight Network</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Welcome & Interactive Showcase */}
      {/* Welcome Section */}
      <section className="welcome-section py-24 bg-white">
        <div className="container text-center">
          <div style={{ maxWidth: '950px', margin: '0 auto' }}>
            <h2 className="section-title mb-8 welcome-logo-title"><span className="logo-blue">WELCOME TO </span><span className="logo-red">SRI GANESH</span><span className="logo-blue"> INTEGRATED LOGISTICS</span></h2>
            <div className="welcome-text-centered text-lg leading-relaxed">
              <p className="mb-6 welcome-intro-line" style={{ color: 'var(--primary-color)', fontWeight: 500 }}>
                Your complete, single-source partner for all logistics and transportation needs across India and beyond.
              </p>
              <p className="mb-6 text-muted">
                We offer a comprehensive range of logistics services — spanning Reefer Containers, Regular Containers, ISO Tankers, Liquid Tankers, specialized handling and transportation of Hazardous Cargo, Break Bulk Cargo, and Over Dimensional Cargo (ODC), along with complete Freight Forwarding solutions — each tailored to meet the unique demands of every industry we serve.
              </p>
              <p className="mb-6 text-muted">
                From temperature-controlled cold chain logistics to the safe movement of hazardous materials, from oversized heavy-lift cargo to seamless international freight forwarding, we have the expertise, infrastructure, and commitment to handle it all under one roof.
              </p>
              <p className="mb-8 text-muted">
                Driven by a culture of excellence and operational precision, we go beyond simply moving cargo - we build lasting partnerships with our customers and business associates, grounded in integrity, transparency, and a strong commitment to outcomes that matter to your business.
              </p>
              <div className="mt-12">
                <p className="text-2xl font-bold tracking-tight italic" style={{ lineHeight: '1.4', color: 'var(--primary-color)', borderLeft: '4px solid var(--accent-color)', paddingLeft: '1.5rem' }}>
                  "At Sri Ganesh Integrated Logistics, your cargo is not just a shipment - it's a promise delivered without compromise."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Services Showcase */}
      <section className="interactive-showcase py-20 bg-light border-y border-gray-100">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Explore Our <span className="text-accent">Solutions</span></h2>
            <p className="text-muted">Select a service to learn more about our specialized capabilities</p>
          </div>
          
          <div className="interactive-grid">
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
                  <Link to={tabData[activeTab].route} className="font-bold text-primary hover:text-accent transition-colors">
                    View Details →
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: Tab Menu */}
            <div className="welcome-tab-menu" style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
              {Object.keys(tabData).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`welcome-tab-btn${activeTab === tab ? ' active' : ''}`}
                  style={{ textDecoration: 'none' }}
                >
                  {tab}
                </button>
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

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Reefer Containers", icon: <ThermometerSnowflake size={32} color="#3b82f6" />, desc: "Pan India movement of temperature-sensitive products, ensuring seamless and efficient cold chain logistics.", image: "/reefer-containers-card.png" },
              { title: "Regular Containers", icon: <Container size={32} color="#0891b2" />, desc: "Reliable and cost-effective Pan India movement of goods using standard dry containers.", image: "/regular-containers-card.png" },
              { title: "ISO Tankers", icon: <Cylinder size={32} color="#22c55e" />, desc: "Pan India transportation of bulk liquids and gases using internationally certified ISO tankers.", image: "/iso-tankers-card.png" },
              { title: "Liquid Tankers", icon: <Droplets size={32} color="#6366f1" />, desc: "Efficient and reliable transportation of edible oils, chemicals, and industrial liquids via specialized tankers.", image: "/liquid-tankers-card.png" },
              { title: "Hazardous Cargo", icon: <Biohazard size={32} color="#ef4444" />, desc: "Safe, secure, and fully compliant transportation of hazardous materials including port-to-factory movements.", image: "/hazardous-cargo-card.png" },
              { title: "Break Bulk Cargo", icon: <PackageOpen size={32} color="#eab308" />, desc: "Handling and transportation of non-containerized goods that require specialized loading and secure transit.", image: "/break-bulk-card.png" },
              { title: "Over Dimensional Cargo", icon: <Maximize2 size={32} color="#f97316" />, desc: "Expertise in moving over-dimensional and heavy-lift cargo that exceeds standard size and weight limits.", image: "/odc-cargo-card.png" },
              { title: "Freight Forwarding", icon: <Globe size={32} color="#a855f7" />, desc: "End-to-end freight forwarding services managing the complete movement of goods across domestic and international routes.", image: "/freight-forwarding-card.png" }
            ].map((service, idx) => (
              <motion.div key={idx} whileHover={{ y: -10 }} className="card service-card">
                <div className="card-icon">{service.icon}</div>
                <h3 className="text-xl mb-2">{service.title}</h3>
                <p className="text-muted mb-4">{service.desc}</p>
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
            <h2 className="mb-8">Why Choose <br /><span className="text-gradient">Sri Ganesh Integrated Logistics?</span></h2>
            <div className="features-list">
              {[
                { title: "Pan India & Global Reach", icon: <Globe />, text: "Extensive network spanning road, sea and air routes across India and international destinations - ensuring seamless connectivity for every shipment." },
                { title: "Timely Delivery", icon: <Clock />, text: "24/7 dedicated operations team with a proven track record of on-time delivery - because your deadlines are our priority." },
                { title: "25+ Years of Experience", icon: <ShieldCheck />, text: "Over two decades of industry expertise - trusted by leading pharmaceutical, FMCG, and industrial companies across India." }
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
            <h2 className="section-title">Our <span className="text-accent">Offices</span></h2>
            <p className="text-muted">Pan-India presence to serve you better</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { city: "Hyderabad", label: "Head Office", address: "6-3-852/2/B4, Plot No. 10, Aparajitha Colony, Ameerpet, Hyderabad, Telengana - 500016.", phone: "9494922080, 9849356197", email: "contact.sgilogistics@gmail.com" },
              { city: "Vishakapatnam", label: "Branch Office", address: "10-37-27, Rich House, Ram Nagar, Vishakapatnam - 530002, Andhra Pradesh, India", phone: "9494922080, 9849356197", email: "contact.sgilogistics@gmail.com" },
              { city: "Mumbai", label: "Branch Office", address: "54, Shalaka, D. N Nagar, Andheri (W), Mumbai - 400 053", phone: "9494922080, 9849356197", email: "contact.sgilogistics@gmail.com" },
              { city: "Chennai", label: "Branch Office", address: "Ramarau Buildings, 3rd Floor, 299/144, Thambuchetty Street, Chennai - 600001", phone: "9494922080, 9849356197", email: "contact.sgilogistics@gmail.com" },
              { city: "Bangalore", label: "Branch Office", address: "2555, 13th Mai, 9th Cross, E Nagar, Sahakarnagar, Bangalore - 560092", phone: "9494922080, 9849356197", email: "contact.sgilogistics@gmail.com" },
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
