import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Truck, Ship, ShieldCheck, Package, Globe, ArrowRight, CheckCircle, Clock, Thermometer } from 'lucide-react';
import './ServiceDetail.css';

const servicesData = {
  "reefer-containers": {
    title: "Reefer Containers",
    icon: <Thermometer size={48} />,
    image: "/Gemini_Generated_Image_uq4cbuuq4cbuuq4c.png",
    subtitle: "Pan India temperature-controlled cold chain logistics specialist.",
    description: "We provide PAN India movement of temperature-sensitive products, ensuring seamless and efficient cold logistics. Our services cater to industries requiring precise temperature control, including pharmaceuticals, dairy, frozen foods, seafood, meat, and other perishable goods.",
    features: [
      "Precise temperature control from -25°C to +25°C",
      "Real-time temperature and location tracking",
      "Fleet of modern, reliable refrigerated containers",
      "Expertise in cold chain for pharmaceuticals and food",
      "End-to-end multi-modal cold logistics solutions",
      "Adherence to international safety and quality standards"
    ],
    industries: ["Pharmaceuticals & Healthcare", "Dairy & Frozen Foods", "Fresh Produce & Perishables", "Meat & Seafood Exports"]
  },
  "regular-containers": {
    title: "Regular Containers",
    icon: <Package size={48} />,
    image: "/Gemini_Generated_Image_3qui9k3qui9k3qui.png",
    subtitle: "Reliable and cost-effective Pan India container movement.",
    description: "We provide reliable and cost-effective PAN India movement of goods using regular containers. Our services cater to a wide range of industries, including FMCG, textiles, electronics, automobile parts, and general merchandise.",
    features: [
      "Standard 20ft and 40ft dry container movements",
      "Secure and weather-proof cargo handling",
      "GPS-tracked fleet for real-time shipment monitoring",
      "Cost-optimized route planning across India",
      "Dedicated account management for large volume shipments",
      "Seamless port-to-factory and factory-to-port logistics"
    ],
    industries: ["FMCG & Consumer Goods", "Textiles & Garments", "Automobile Parts", "Electronics & Industrial Gear"]
  },
  "hazardous-cargo": {
    title: "Hazardous Cargo",
    icon: <ShieldCheck size={48} />,
    image: "/Gemini_Generated_Image_wugz9twugz9twugz.png",
    subtitle: "Safe and compliant transportation of dangerous goods.",
    description: "We provide safe and compliant transportation of hazardous materials across India, including dedicated trailer movements from port to factory and factory to port. Adhering to all regulatory guidelines and safety standards, our services cater to industries dealing with chemicals, flammable substances, industrial gases, and other dangerous goods.",
    features: [
      "Strict adherence to IMDG and ADR safety standards",
      "Specially trained drivers and handling crews",
      "Specially equipped trailers for dangerous goods",
      "Regulatory documentation and compliance support",
      "Advanced emergency response protocols",
      "Secure port-to-factory hazardous material transit"
    ],
    industries: ["Chemical & Petrochemical", "Industrial Gases", "Paint & Resin Industries", "Agrochemicals"]
  },
  "iso-tankers": {
    title: "ISO Tankers",
    icon: <Ship size={48} />,
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
    subtitle: "Pan India transportation of bulk liquids and gases.",
    description: "We provide Pan India transportation of bulk liquids and gases using certified ISO tank containers. We provide dedicated trailer movements from port to factory and factory to port, ensuring safe and contamination-free movement. Our services cater to chemicals, petrochemicals, and food-grade liquids.",
    features: [
      "Safe transport of bulk liquids and industrial gases",
      "Certified ISO tank container handling",
      "Contamination-free loading and unloading",
      "Dedicated port-to-industry trailer logistics",
      "Regular tanker cleaning and inspection protocols",
      "Highly stable and secure bulk transit"
    ],
    industries: ["Bulk Chemicals", "Industrial Gases", "Food-Grade Liquids", "Petroleum Products"]
  },
  "liquid-tankers": {
    title: "Liquid Tankers",
    icon: <Truck size={48} />,
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop",
    subtitle: "Efficient transport for edible oils and chemical liquids.",
    description: "We provide efficient and reliable transportation of liquid cargo across India, specialized in edible oils, beverages, chemicals, and water. Our fleet of specialized tankers is designed to ensure hygienic, leak-proof, and timely delivery from source to destination.",
    features: [
      "Specialized tankers for edible and chemical liquids",
      "Hygienic and leak-proof transport containers",
      "Temperature-controlled liquid tankers when required",
      "Timely delivery for perishable liquid goods",
      "Strict quality control and safety standards",
      "Experienced drivers for liquid cargo handling"
    ],
    industries: ["Edible Oil & Beverages", "Bulk Industrial Liquids", "Chemical Processing", "Water Distribution"]
  },
  "break-bulk-cargo": {
    title: "Break Bulk Cargo",
    icon: <Package size={48} />,
    image: "https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=2070&auto=format&fit=crop",
    subtitle: "Expert handling of oversized and non-containerized cargo.",
    description: "We offer seamless handling and transportation of break bulk cargo — managing goods that cannot be containerized due to their size, weight, or nature. We ensure efficient loading, secure transit, and cost-effective operations for non-standard shipments. We cater to industries like steel, construction, and large machinery.",
    features: [
      "Handling of non-containerized heavy goods",
      "Specialized rigging and loading equipment",
      "Cost-effective transit for bulk commodities",
      "Expertise in steel and industrial machinery",
      "On-site cargo monitoring and security",
      "Customized route planning for oversized items"
    ],
    industries: ["Steel & Metal Industries", "Construction & Infrastructure", "Power Plant Equipment", "Heavy Engineering"]
  },
  "odc-cargo": {
    title: "ODC Cargo",
    icon: <Truck size={48} />,
    image: "https://images.unsplash.com/photo-1494412574743-01947f15b6b7?q=80&w=2070&auto=format&fit=crop",
    subtitle: "Advanced logistics for over-dimensional heavy cargo.",
    description: "We specialize in the movement of over-dimensional and heavy-lift cargo across India (ODC). With a dedicated team, we manage complex routes, technical clearances, and specialized specialized trailers to move oversized items that exceed standard container dimensions. Our services cater to heavy infrastructure, power, oil & gas, and mechanical engineering projects.",
    features: [
      "Expertise in heavy-lift and over-sized cargo",
      "Technical route surveys and bridge clearances",
      "Multi-axle hydraulic trailer support",
      "End-to-end heavy project logistics management",
      "Police and authority escort coordination",
      "Risk assessment and full cargo insurance"
    ],
    industries: ["Oil & Gas Infrastructure", "Power Generation & Distribution", "Mechanical Engineering", "Civil Construction Projects"]
  },
  "freight-forwarding": {
    title: "Freight Forwarding",
    icon: <Globe size={48} />,
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop",
    subtitle: "Global multimodal logistics backing your business expansion.",
    description: "We provide comprehensive freight forwarding services across domestic and international trade routes. Combining sea, air, and road transport, we offer end-to-end management of shipments, including customs clearance, documentation, and last-mile delivery, providing our clients with single-window logistics support.",
    features: [
      "Global network of sea and air freight partners",
      "Single-window support for multi-modal logistics",
      "Complete import and export documentation",
      "Competitive freight rates via global charters",
      "Customs house agent (CHA) coordination",
      "Real-time global shipment visibility"
    ],
    industries: ["International Trade & Exports", "Import Logistics", "Global Supply Chain Partners", "Retail & Wholesale Supply"]
  }
};

export default function ServiceDetail() {
  const { id } = useParams();
  const service = servicesData[id];

  if (!service) {
    return (
      <div className="py-24 text-center">
        <h2>Service Not Found</h2>
        <Link to="/services" className="text-accent">Back to Services</Link>
      </div>
    );
  }

  return (
    <div className="service-detail-page">
      {/* Hero Section */}
      <section className="sd-hero" style={{ backgroundImage: `url(${service.image})` }}>
        <div className="sd-hero-overlay"></div>
        <div className="container sd-hero-content">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="sd-breadcrumb">
              <Link to="/">Home</Link> / <Link to="/services">Services</Link> / <span>{service.title}</span>
            </div>
            <div className="sd-hero-icon">{service.icon}</div>
            <h1><span style={{ color: '#fff' }}>{service.title.split(' ')[0]} </span><span style={{ color: '#EF4444' }}>{service.title.split(' ').slice(1).join(' ')}</span></h1>
            <p className="sd-hero-sub">{service.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container sd-grid-2">
          <motion.div initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
            <h2 className="mb-6">Service <span className="text-accent">Overview</span></h2>
            <p className="text-lg leading-relaxed">{service.description}</p>
            <div className="mt-10">
              <h3 className="mb-4">Industries <span className="text-accent">We Serve</span></h3>
              <div className="flex flex-wrap gap-3">
                {service.industries.map((industry, index) => (
                  <span key={index} className="px-4 py-2 bg-light rounded-full text-primary font-semibold border-l-4 border-accent shadow-sm">
                    {industry}
                  </span>
                ))}
              </div>
            </div>
            <Link to="/contact" className="sd-cta-btn mt-12">Get a Custom Quote <ArrowRight size={16} /></Link>
          </motion.div>

          <motion.div initial={{ x: 30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} className="sd-checklist">
            <h3>Key Service Features:</h3>
            <ul>
              {service.features.map((feature, i) => (
                <li key={i}><CheckCircle size={18} className="check-icon" /><span>{feature}</span></li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-light">
        <div className="container text-center">
          <h2 style={{ color: '#fff' }}>Why Choose <span style={{ color: '#EF4444' }}>Sri Ganesh Logistics?</span></h2>
          <div className="sd-why-grid mt-12">
            {[
              { num: "20+", label: "Years Experience" },
              { num: "24/7", label: "Operations Support" },
              { num: "Pan India", label: "Network Coverage" },
              { num: "Safety", label: "Reliable & Secure" },
            ].map((s, i) => (
              <div key={i} className="sd-stat">
                <h3 style={{ color: 'var(--accent-color)', fontSize: '3rem' }}>{s.num}</h3>
                <p style={{ color: '#ccd6f0' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-light text-center">
        <div className="container">
          <h2>Ready to <span className="text-accent">Get Started?</span></h2>
          <p className="text-muted mt-4 mb-8">Connect with our logistics experts today for a tailored solution that fits your business perfectly.</p>
          <div className="flex gap-4 justify-center">
            <Link to="/contact" className="btn btn-primary">Contact Us</Link>
            <Link to="/quote" className="btn btn-outline">Request Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
