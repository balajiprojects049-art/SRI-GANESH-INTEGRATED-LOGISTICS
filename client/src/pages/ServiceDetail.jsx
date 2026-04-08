import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Truck, Ship, ShieldCheck, Package, Globe, ArrowRight, CheckCircle, Clock, Thermometer } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import './ServiceDetail.css';

const servicesData = {
  "reefer-containers": {
    title: "Reefer Containers",
    icon: <Thermometer size={48} />,
    image: "/reefer-containers-detail.png",
    subtitle: "Pan India movement of temperature-sensitive products with end-to-end cold chain integrity.",
    description: "We provide Pan India movement of temperature-sensitive products, ensuring seamless and efficient cold chain logistics. Our reefer containers are equipped with advanced temperature control technology, maintaining precise conditions throughout the entire journey from pickup to final delivery.",
    features: [
      "Precise temperature control from -25°C to +25°C",
      "24/7 real-time temperature monitoring",
      "Multi-temperature zone options",
      "GPS-enabled fleet for live tracking",
      "Trained and experienced cold chain handlers",
      "Compliance with FSSAI, WHO, and GDP guidelines",
      "Pan India network coverage including remote locations"
    ],
    industries: ["Pharmaceuticals", "Dairy", "Frozen Foods", "Seafood", "Meat", "Fresh Fruits & Vegetables", "Confectionery", "Other Perishable Goods"],
    industriesTitle: "Industries We Serve",
    whyChoose: "We understand that even a minor temperature deviation can compromise the quality and safety of your products. Our dedicated cold chain team ensures end-to-end visibility, timely delivery, and zero temperature breach giving you complete peace of mind."
  },
  "regular-containers": {
    title: "Regular Containers",
    icon: <Package size={48} />,
    image: "/regular-containers-detail.png",
    subtitle: "Reliable and cost-effective Pan India movement of goods using standard dry containers.",
    description: "We provide reliable and cost-effective Pan India movement of goods using standard dry containers. Our well-maintained fleet and wide logistics network ensure your cargo reaches its destination safely, on time, and in perfect condition.",
    features: [
      "Standard 20ft and 40ft dry container movements",
      "Well-maintained and weatherproof containers",
      "GPS-enabled fleet for real-time tracking",
      "Flexible pick-up and delivery scheduling",
      "Safe loading, securing, and unloading of cargo",
      "Pan India coverage including tier 2 and tier 3 cities",
      "Competitive pricing with no hidden charges"
    ],
    industries: ["FMCG", "Textiles", "Electronics", "Automobile Parts", "Retail", "E-commerce", "General Merchandise", "Consumer Goods"],
    industriesTitle: "Industries We Serve",
    whyChoose: "Whether you are moving bulk goods or regular consignments, we offer dependable container solutions backed by a strong logistics network, experienced team, and a commitment to on-time delivery every single time."
  },
  "hazardous-cargo": {
    title: "Hazardous Cargo",
    icon: <ShieldCheck size={48} />,
    image: "/hazardous-cargo-detail.png",
    subtitle: "Safe, secure, and fully compliant transportation of hazardous materials across India.",
    description: "We provide safe, secure, and fully compliant transportation of hazardous materials across India, including dedicated trailer movements from port to factory and factory to port. Our operations strictly adhere to all national and international regulatory guidelines, ensuring that dangerous goods are handled, packed, and transported with the highest level of safety and care.",
    features: [
      "Dedicated trailer services from port to factory and factory to port",
      "Full compliance with IMDG, ADR, and Indian regulatory standards",
      "Specially trained and certified hazardous cargo handling crew",
      "Proper labelling, marking, and placarding of all shipments",
      "Emergency response planning and spill containment measures",
      "Dedicated vehicles equipped for hazardous material transport",
      "Real-time tracking and route monitoring",
      "Complete documentation and regulatory support"
    ],
    industries: ["Chemicals", "Petrochemicals", "Flammable Substances", "Industrial Gases", "Agrochemicals", "Paints & Coatings", "Explosives", "Radioactive Materials"],
    industriesTitle: "Industries We Serve",
    whyChoose: "Handling hazardous cargo demands expertise, precision, and zero tolerance for error. Our certified team, purpose-built infrastructure, and dedicated port-to-factory trailer operations ensure every dangerous goods shipment is moved with maximum safety, full regulatory compliance, and complete accountability."
  },
  "iso-tankers": {
    title: "ISO Tankers",
    icon: <Ship size={48} />,
    image: "/iso-tankers-detail.png",
    subtitle: "Pan India transportation of bulk liquids and gases using internationally certified ISO tankers.",
    description: "We provide Pan India transportation of bulk liquids and gases using internationally certified ISO tankers, including dedicated trailer movements from port to factory and factory to port. Our fleet ensures safe, contamination-free, and efficient movement of sensitive bulk materials across industries that demand the highest standards of handling and hygiene.",
    features: [
      "Dedicated trailer services from port to factory and factory to port",
      "Internationally certified ISO tank containers",
      "Suitable for hazardous and non-hazardous liquid cargo",
      "Contamination-free and hygienic tank maintenance",
      "Available in various capacities to suit cargo volume",
      "Compliance with international safety and quality standards",
      "GPS tracking for real-time shipment visibility",
      "Experienced operators trained in bulk liquid handling"
    ],
    industries: ["Chemicals", "Petrochemicals", "Food-Grade Liquids", "Industrial Gases", "Pharmaceuticals", "Agricultural Liquids"],
    industriesTitle: "Industries We Serve",
    whyChoose: "Our ISO tankers are built to handle the most demanding bulk liquid and gas transportation requirements. With certified equipment, dedicated port-to-factory trailer operations, and a strong Pan India network, we deliver your cargo safely, efficiently, and on schedule."
  },
  "liquid-tankers": {
    title: "Liquid Tankers",
    icon: <Truck size={48} />,
    image: "/liquid-tankers-detail.png",
    subtitle: "Efficient and reliable transportation of liquid cargo across India.",
    description: "We provide efficient and reliable transportation of liquid cargo across India using specialized liquid tankers, including dedicated trailer movements from port to factory and factory to port. Our fleet is designed to handle a diverse range of liquid commodities, ensuring safe, hygienic, and timely delivery from source to destination.",
    features: [
      "Dedicated trailer services from port to factory and factory to port",
      "Specialized tankers for food-grade and chemical-grade liquids",
      "Strict hygiene and cleaning protocols between loads",
      "Available in multiple capacities for varied cargo volumes",
      "Leak-proof and contamination-resistant tank design",
      "GPS-enabled fleet for real-time tracking",
      "Experienced drivers trained in liquid cargo handling",
      "Pan India coverage with flexible scheduling"
    ],
    industries: ["Edible Oils", "Beverages", "Dairy", "Chemicals", "Water", "Liquid Fertilizers", "Solvents", "Other Liquid Commodities"],
    industriesTitle: "Industries We Serve",
    whyChoose: "Liquid cargo demands specialized equipment and careful handling. Our dedicated liquid tanker fleet, port-to-factory trailer operations, strict hygiene standards, and experienced operations team ensure your liquid cargo is transported safely and delivered in perfect condition every time."
  },
  "break-bulk-cargo": {
    title: "Break Bulk Cargo",
    icon: <Package size={48} />,
    image: "/break-bulk-detail.png",
    subtitle: "Seamless handling and transportation of non-containerized cargo across India.",
    description: "We offer seamless handling and transportation of break bulk cargo across India, managing goods that cannot be containerized due to their size, weight, or nature. Our experienced team and specialized equipment ensure safe loading, secure transit, and efficient delivery of every consignment.",
    features: [
      "Expertise in handling non-containerized and oversized cargo",
      "Specialized equipment including cranes, forklifts, and flatbeds",
      "Careful cargo lashing, securing, and protection during transit",
      "Coordination with ports, warehouses, and project sites",
      "Experienced break bulk handling and operations team",
      "Flexible solutions for one-time and regular project cargo",
      "Pan India coverage with multimodal transport options"
    ],
    industries: ["Steel", "Construction", "Machinery", "Project Cargo", "Timber", "Paper Rolls", "Pipes", "Heavy Industrial Equipment"],
    industriesTitle: "Industries We Serve",
    whyChoose: "Break bulk cargo requires more than just transportation. It demands careful planning, specialized equipment, and an experienced team. We bring all three together to ensure your cargo, no matter how complex, is handled with precision and delivered without damage."
  },
  "odc-cargo": {
    title: "Out of Dimension Cargo (ODC)",
    icon: <Truck size={48} />,
    image: "/odc-cargo-detail.png",
    subtitle: "Movement of over-dimensional and heavy-lift cargo across India.",
    description: "We specialize in the movement of over-dimensional and heavy-lift cargo across India, handling shipments that exceed standard size and weight limits. Our dedicated ODC team manages every aspect of the move from route surveys and statutory permissions to safe execution and final delivery.",
    features: [
      "Transportation of oversized, overweight, and heavy-lift cargo",
      "Detailed route survey and feasibility assessment",
      "Procurement of statutory permissions and escort arrangements",
      "Specialized trailers including hydraulic axle and low-bed trailers",
      "Experienced ODC movement coordinators and pilot vehicle support",
      "Night movement and police escort coordination where required",
      "End-to-end project management from origin to destination"
    ],
    industries: ["Infrastructure", "Power & Energy", "Oil & Gas", "Heavy Engineering", "Wind Energy", "Construction", "Defence"],
    industriesTitle: "Industries We Serve",
    whyChoose: "Moving out-of-dimension cargo is one of the most complex logistics challenges. Our experienced ODC team, specialized fleet, and thorough planning process ensures that even the most demanding heavy-lift movements are executed safely, on time, and without disruption."
  },
  "freight-forwarding": {
    title: "Freight Forwarding",
    icon: <Globe size={48} />,
    image: "/freight-forwarding-detail.png",
    subtitle: "End-to-end freight forwarding across domestic and international routes.",
    description: "We provide end-to-end freight forwarding services, managing the complete movement of goods across domestic and international routes. As a single-window logistics partner, we coordinate every aspect of your shipment ensuring seamless, efficient, and cost-effective delivery from origin to destination.",
    features: [
      "Air freight solutions for time-critical shipments",
      "Sea freight options including FCL and LCL shipments",
      "Reliable last-mile delivery across Pan India locations",
      "Coordination with carriers, ports, and logistics partners",
      "Real-time shipment tracking and status updates",
      "Dedicated freight forwarding team for personalized support",
      "Flexible solutions for all cargo types and industries"
    ],
    industries: ["Air Freight", "Sea Freight", "Last-Mile Delivery"],
    industriesTitle: "Services We Cover",
    whyChoose: "Navigating the complexities of domestic and international freight requires an experienced partner you can trust. We bring together a strong carrier network, deep industry expertise, and a customer-first approach ensuring your goods move smoothly, efficiently, and without unnecessary delays."
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
      <Helmet>
        <title>{service.title} Services - Sri Ganesh Integrated Logistics</title>
        <meta name="description" content={service.subtitle} />
        <link rel="canonical" href={`https://www.sgilogistics.com/services/${id}`} />
      </Helmet>
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
      <section className="sd-main-content py-20 bg-white">
        <div className="container sd-grid-2">
          <motion.div initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
            <h2 className="mb-6">Service <span className="text-accent">Overview</span></h2>
            <p className="text-lg leading-relaxed">{service.description}</p>
            <div className="mt-10">
              <h3 className="mb-4">{service.industriesTitle || "Industries We Serve"}</h3>
              <div className="sd-industry-list">
                {service.industries.map((industry, index) => (
                  <span key={index} className="sd-industry-chip">
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
            <div className="sd-why-choose-note">
              <h4>Why Choose Us:</h4>
              <p>{service.whyChoose}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="sd-why py-20 text-light">
        <div className="container text-center">
          <h2 className="sd-why-heading">Why Choose <span className="text-accent">Sri Ganesh Integrated Logistics?</span></h2>
          <div className="sd-why-grid mt-12">
            {[
              { num: "20+", label: "Years Experience" },
              { num: "24/7", label: "Operations Support" },
              { num: "Pan India", label: "Network Coverage" },
              { num: "Safety", label: "Reliable & Secure" },
            ].map((s, i) => (
              <div key={i} className="sd-stat">
                <h3 className="sd-stat-value">{s.num}</h3>
                <p className="sd-stat-label">{s.label}</p>
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
