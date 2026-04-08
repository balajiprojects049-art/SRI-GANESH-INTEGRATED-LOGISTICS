import { motion } from 'framer-motion';
import { Truck, Plane, Ship, Package, AlertTriangle, Warehouse, FileCheck, ArrowRight, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './Services.css';

export default function Services() {
  const services = [
    {
      id: "reefer-containers",
      title: "Reefer Containers",
      icon: <Truck size={40} />,
      desc: "Pan India movement of temperature-sensitive products including pharmaceuticals, dairy, and frozen foods. Equipped with advanced temperature control maintaining -25°C to +25°C.",
      bg: "/reefer-containers-card.png"
    },
    {
      id: "regular-containers",
      title: "Regular Containers",
      icon: <Package size={40} />,
      desc: "Reliable and cost-effective Pan India movement of goods using 20ft and 40ft dry containers for FMCG, textiles, and general merchandise.",
      bg: "/regular-containers-card.png"
    },
    {
      id: "hazardous-cargo",
      title: "Hazardous Cargo",
      icon: <AlertTriangle size={40} />,
      desc: "Safe and compliant transportation of hazardous materials across India. Full compliance with IMDG and ADR standards with specially trained handling crews.",
      bg: "/hazardous-cargo-card.png"
    },
    {
      id: "iso-tankers",
      title: "ISO Tankers",
      icon: <Ship size={40} />,
      desc: "Pan India transportation of bulk liquids and gases using certified ISO tankers. Dedicated trailer movements from port to factory ensure safe, contamination-free handling.",
      bg: "/iso-tankers-card.png"
    },
    {
      id: "liquid-tankers",
      title: "Liquid Tankers",
      icon: <Truck size={40} />,
      desc: "Efficient movement of food-grade and chemical-grade liquids including edible oils and beverages. Specialized tankers ensure hygienic and timely delivery.",
      bg: "/liquid-tankers-card.png"
    },
    {
      id: "break-bulk",
      title: "Break Bulk Cargo",
      icon: <Package size={40} />,
      desc: "Seamless handling and transportation of non-containerized cargo like steel, machinery, and project goods requiring specialized loading and security.",
      bg: "/break-bulk-card.png"
    },
    {
      id: "odc-cargo",
      title: "Out of Dimension Cargo (ODC)",
      icon: <Truck size={40} />,
      desc: "Specialized movement of over-dimensional and heavy-lift cargo including infrastructure and power plant equipment, managed by a dedicated ODC team.",
      bg: "/odc-cargo-card.png"
    },
    {
      id: "freight-forwarding",
      title: "Freight Forwarding",
      icon: <Globe size={40} />,
      desc: "End-to-end management of domestic and international shipments covering air freight, sea freight, and last-mile delivery with single-window support.",
      bg: "/freight-forwarding-card.png"
    }
  ];

  return (
    <div className="services-page">
      <Helmet>
        <title>Our Logistics Services - Sri Ganesh Integrated Logistics</title>
        <meta name="description" content="Explore our range of 8 core integrated logistics solutions including Reefer Containers, Hazardous Cargo, ISO Tankers, ODC Cargo, and Freight Forwarding." />
        <link rel="canonical" href="https://www.sgilogistics.com/services" />
      </Helmet>
      <section className="page-header py-24 text-center text-light relative" style={{ backgroundImage: "url('/Gemini_Generated_Image_tfd595tfd595tfd5.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-primary opacity-80 z-0"></div>
        <div className="container mt-8 relative z-10">
          <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="font-bold" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
            <span style={{ color: '#ffffff' }}>Our </span>
            <span style={{ color: '#EF4444' }}>Services</span>
          </motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="text-xl mt-4 max-w-2xl mx-auto" style={{ color: '#ffffff', textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}>
            Comprehensive pan-India and global logistics solutions - from temperature-controlled reefer containers to heavy-lift ODC cargo, tailored to meet your business needs.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-light">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={service.id} 
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="service-detail-card card overflow-hidden p-0 flex flex-col"
              >
                <div className="service-img-wrap h-64 relative overflow-hidden">
                  <img src={service.bg} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                  <div className="absolute top-4 left-4 glass p-3 rounded-full text-accent shadow-lg">
                    {service.icon}
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h2 className="text-2xl mb-4">{service.title}</h2>
                  <p className="text-muted mb-6 flex-1">{service.desc}</p>
                  <Link 
                    to={`/services/${service.id}`} 
                    className="btn btn-outline w-full justify-center group"
                  >
                    Explore Service <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section (Parallax) */}
      <section 
        className="text-center relative" 
        style={{ 
          padding: '7rem 0',
          backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          borderBottom: '4px solid var(--accent-color)'
        }}
      >
        {/* Dark overlay for text readability */}
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(20, 30, 80, 0.88)' }}></div>
        
        <div className="container relative" style={{ zIndex: 2 }}>
          <h2 style={{ color: '#ffffff', marginBottom: '1rem', fontSize: '2.5rem', textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>
            Need a Custom Solution?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.95)', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem auto', fontSize: '1.1rem', textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}>
          Contact us today and we will tailor our services to meet your exact business logistics demands.          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.2rem', boxShadow: '0 8px 24px rgba(0,0,0,0.4)' }}>
              Contact Us
            </Link>
            <Link to="/quote" className="btn btn-primary" style={{ backgroundColor: '#ffffff', color: 'var(--primary-color)', padding: '1rem 2.5rem', fontSize: '1.2rem', boxShadow: '0 8px 24px rgba(0,0,0,0.4)' }}>
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
