import { motion } from 'framer-motion';
import { Target, Eye, Award, CheckCircle, ShieldCheck } from 'lucide-react';
import './About.css';

export default function About() {
  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="page-header py-24 text-center text-light relative" style={{ backgroundImage: "url('/Gemini_Generated_Image_qn8unaqn8unaqn8u.png')", backgroundSize: 'cover', backgroundPosition: 'center 25%' }}>
        <div className="absolute inset-0 bg-primary opacity-80 z-0"></div>
        <div className="container mt-8 relative z-10">
          <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="font-bold" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
            <span style={{ color: '#ffffff' }}>About </span>
            <span style={{ color: '#60A5FA' }}>Sri Ganesh </span>
            <span style={{ color: '#EF4444' }}>Integrated Logistics</span>
          </motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="text-xl mt-4 max-w-2xl mx-auto" style={{ color: '#ffffff', textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
            Established in 2009 — a trusted name in integrated logistics and transportation solutions.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-light">
        <div className="container grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
            <h2 className="mb-6">Our <span className="text-accent">Story</span></h2>
            <p className="mb-4 text-lg">
              Established in the year 2009 by Mr. Parvender Singh, Sri Ganesh Integrated Logistics is a one-stop integrated logistics and transportation service provider, offering a comprehensive range of high-quality solutions in the shipping and transportation segment.
            </p>
            <p className="text-muted mb-4">
              With a wealth of experience and expertise in various facets of the industry, we are ideally placed to offer solutions that give our clients a competitive advantage in navigating the complex global shipping environment.
            </p>
            <p className="text-muted mb-8">
              Our solutions touch upon a host of areas ranging from Transport Operations to Freight Booking, Project Forwarding, Documentation, and shipment of Hazardous cargo. Leveraging our strong network of contacts, we are well-positioned to provide our clients easy access to international ship owners, operators, and charters — helping them extract greater cost-efficiencies in freight.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex gap-2 items-center text-primary font-bold"><CheckCircle className="text-accent" /> Reliable Services</div>
              <div className="flex gap-2 items-center text-primary font-bold"><CheckCircle className="text-accent" /> Global Network</div>
              <div className="flex gap-2 items-center text-primary font-bold"><CheckCircle className="text-accent" /> ISO 9001:2008 Certified</div>
              <div className="flex gap-2 items-center text-primary font-bold"><CheckCircle className="text-accent" /> Hazardous Cargo Experts</div>
            </div>
          </motion.div>
          <motion.div initial={{ x: 30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} className="relative">
             <img src="/Gemini_Generated_Image_qn8unaqn8unaqn8u.png" alt="Cargo Ship" className="rounded-lg shadow-lg" />
             <div className="experience-badge glass-dark text-light p-6 absolute bottom-[-30px] left-[-30px] rounded-lg shadow-glow">
               <h3 className="text-3xl text-gradient">15+</h3>
               <p className="font-bold text-sm uppercase letter-spacing">Years of<br/>Excellence</p>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white text-center">
        <div className="container grid md:grid-cols-2 gap-12">
          <motion.div whileHover={{ y: -10 }} className="card bg-light border-accent">
            <Target size={48} className="text-accent mx-auto mb-6" />
            <h3 className="mb-4">Our Mission</h3>
            <p className="text-muted">
              To be a one-stop integrated logistics and transportation service provider, offering quality solutions with integrity and trust — enabling our clients to achieve their goals with maximum efficiency and at optimal costs.
            </p>
          </motion.div>
          <motion.div whileHover={{ y: -10 }} className="card bg-light border-secondary">
            <Eye size={48} className="text-secondary mx-auto mb-6" />
            <h3 className="mb-4">Our Vision</h3>
            <p className="text-muted">
              To carve a niche as a market leader recognized for providing result-oriented, customized logistics solutions — building lasting trust through reliability, transparency, and operational excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certification */}
      <section className="py-16 bg-light text-center">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card max-w-xl mx-auto flex flex-col items-center gap-4">
            <ShieldCheck size={48} className="text-accent" />
            <h3>ISO 9001:2008 Certified</h3>
            <p className="text-muted">
              Sri Ganesh Integrated Logistics is certified under <strong>NS-EN ISO 9001:2008</strong>, affirming our commitment to quality management systems and continuous improvement in service delivery.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
