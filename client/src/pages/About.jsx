import { motion } from 'framer-motion';
import { Target, Eye, Award, CheckCircle, ShieldCheck } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import './About.css';

export default function About() {
  return (
    <div className="about-page">
      <Helmet>
        <title>About Us - Sri Ganesh Integrated Logistics | Established 2001</title>
        <meta name="description" content="Discover the journey of Sri Ganesh Integrated Logistics. From a focused transport venture in 2001 to a leading integrated logistics provider across India." />
        <link rel="canonical" href="https://www.sgilogistics.com/about" />
      </Helmet>
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
            Established in 2001 – a trusted name in end-to-end transportation solutions.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-light">
        <div className="container grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
            <h2 className="mb-6">Our <span className="text-accent">Story</span></h2>
            <p className="mb-4 text-lg">
              Established in the year 2001, Sri Ganesh Integrated Logistics has grown from a focused transportation venture into a full-scale, one-stop integrated logistics and transportation service provider - offering a comprehensive range of high-quality solutions across the shipping and transportation segment.
            </p>
            <p className="text-muted mb-4">
              With over two decades of experience and deep-rooted expertise across every facet of the industry, we are ideally positioned to deliver solutions that give our clients a true competitive advantage in navigating today's complex and ever-evolving logistics landscape.
            </p>
            <p className="text-muted mb-4">
              Our services span a wide spectrum - from Reefer Containers, Regular Containers, and Hazardous Cargo to ISO Tankers, Liquid Tankers, Break Bulk, Out of Dimension (ODC) Cargo, and Freight Forwarding - touching every critical area of the supply chain.
            </p>
            <p className="text-muted mb-8">
              Leveraging a strong and trusted network of industry contacts built over the years, we are well-positioned to provide our clients seamless access to international ship owners, operators, and charters - helping them unlock greater cost efficiencies and smarter freight solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-4">
              <div className="flex gap-2 items-center text-primary font-bold"><CheckCircle className="text-accent" size={18} /> Reliable Services</div>
              <div className="flex gap-2 items-center text-primary font-bold"><CheckCircle className="text-accent" size={18} /> 20+ Years of Experience</div>
              <div className="flex gap-2 items-center text-primary font-bold"><CheckCircle className="text-accent" size={18} /> Global Freight Forwarding</div>
              <div className="flex gap-2 items-center text-primary font-bold"><CheckCircle className="text-accent" size={18} /> End-to-End Solutions</div>
              <div className="flex gap-2 items-center text-primary font-bold"><CheckCircle className="text-accent" size={18} /> Pan India Network</div>
              <div className="flex gap-2 items-center text-primary font-bold"><CheckCircle className="text-accent" size={18} /> Cold Chain Specialists</div>
            </div>
            <p className="mt-16 p-8 bg-white border-l-4 border-accent italic text-lg shadow-sm">
              "At Sri Ganesh Integrated Logistics, we don't just move cargo - we deliver trust, reliability, and over two decades of logistics excellence, because your business deserves a partner that goes the extra mile."
            </p>
          </motion.div>
          <motion.div initial={{ x: 30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} className="relative">
            <img src="/Gemini_Generated_Image_qn8unaqn8unaqn8u.png" alt="Cargo Ship" className="rounded-lg shadow-lg" />
            <div className="experience-badge glass-dark text-light p-6 absolute bottom-[-30px] left-[-30px] rounded-lg shadow-glow">
              <h3 className="text-4xl text-gradient">20+</h3>
              <p className="font-bold text-sm uppercase letter-spacing">Years of<br />Excellence</p>
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
              To be a one-stop integrated transportation service provider, delivering reliable and high-quality solutions across Pan India and global routes - with integrity, trust, and a commitment to helping our clients achieve their goals with maximum efficiency and at optimal costs.
            </p>
          </motion.div>
          <motion.div whileHover={{ y: -10 }} className="card bg-light border-secondary">
            <Eye size={48} className="text-secondary mx-auto mb-6" />
            <h3 className="mb-4">Our Vision</h3>
            <p className="text-muted">
              To be recognized as a leading transportation partner across India and beyond - known for our expertise, operational excellence, and unwavering commitment to delivering customized solutions that drive lasting value for every client we serve.
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
