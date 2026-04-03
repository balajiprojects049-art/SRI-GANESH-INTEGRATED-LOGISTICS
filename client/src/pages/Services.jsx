import { motion } from 'framer-motion';
import { Truck, Plane, Ship, Package, AlertTriangle, Warehouse, FileCheck, ArrowRight, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Services.css';

export default function Services() {
  const services = [
    {
      id: "freight-forwarding",
      title: "Freight Forwarding",
      icon: <Globe size={40} />,
      desc: "Air, Ocean, Rail, and Road transport facilities through a global agent network. We provide single-point handling for Negotiable Documents, Documentation Support System solutions, and comprehensive supply chain solutions.",
      bg: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "sea-freight",
      title: "Sea Freight",
      icon: <Ship size={40} />,
      desc: "Efficient, cost-effective, and safe ocean freight services to all global destinations. Our logistics package includes Cargo Tracking, Consolidation, Documentation, Shipping Insurance, Customs Clearance, and Inland Transportation.",
      bg: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "air-freight",
      title: "Air Freight",
      icon: <Plane size={40} />,
      desc: "High-speed delivery handling cargo of any shape or size, with specialized expertise in Super Large and Heavy cargo. Ideal for time-sensitive shipments requiring priority handling worldwide.",
      bg: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop"
    },
    {
      id: "project-forwarding",
      title: "Project Forwarding",
      icon: <Package size={40} />,
      desc: "Dedicated on-site staff for international projects. Specializing in Super Large Cargo (single items exceeding 1090\" L × 111\" W × 105\" H) with savvy vendor coordination, hub consolidation, and significant cost savings on freight and documentation.",
      bg: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "break-bulk",
      title: "Break Bulk",
      icon: <Truck size={40} />,
      desc: "Expert handling of general cargo that must be loaded individually (non-containerized). We ensure safe, efficient, and cost-effective break-bulk operations for oversized or unconventional shipments.",
      bg: "https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "hazardous-cargo",
      title: "Hazardous Cargo",
      icon: <AlertTriangle size={40} />,
      desc: "Specialized documentation and shipment handling for dangerous goods. Our team is trained in compliance, safety protocols, and regulatory requirements for the safe transport of hazardous materials.",
      bg: "https://images.unsplash.com/photo-1580911465729-9e59d6a5b1e2?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "warehousing",
      title: "Warehousing",
      icon: <Warehouse size={40} />,
      desc: "Secure storage solutions for various types of cargo. Our warehousing facilities offer flexible, scalable space with real-time inventory management to keep your supply chain moving smoothly.",
      bg: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "customs-clearance",
      title: "Customs Clearance",
      icon: <FileCheck size={40} />,
      desc: "Professional handling of all regulatory documentation and clearance processes. We ensure smooth, compliant, and timely customs procedures for both import and export shipments.",
      bg: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="services-page">
      <section className="page-header py-24 text-center text-light relative" style={{ backgroundImage: "url('/Gemini_Generated_Image_tfd595tfd595tfd5.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-primary opacity-80 z-0"></div>
        <div className="container mt-8 relative z-10">
          <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="font-bold" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
            <span style={{ color: '#ffffff' }}>Our </span>
            <span style={{ color: '#EF4444' }}>Services</span>
          </motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="text-xl mt-4 max-w-2xl mx-auto" style={{ color: '#ffffff', textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
            Comprehensive global logistics solutions — from freight forwarding to customs clearance, customized for your needs.
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
                    to={`/services/${service.id === 'customs-clearance' ? 'custom-clearance' : service.id === 'sea-freight' || service.id === 'air-freight' ? 'freight-forwarding' : service.id}`} 
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
            Contact our experts today and we will tailor our services to meet your exact supply chain demands.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.2rem', boxShadow: '0 8px 24px rgba(0,0,0,0.4)' }}>
              Contact Experts
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
