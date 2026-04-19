import { motion } from 'framer-motion';
import { useState } from 'react';
import { ThermometerSnowflake, Container, Cylinder, Droplets, Biohazard, PackageOpen, Maximize2, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import './Quote.css';

export default function Quote() {
  const [shipmentType, setShipmentType] = useState('Reefer Containers');
  const [submitted, setSubmitted] = useState(false);

  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    // Construct the professional "box" WhatsApp message using monospaced block
    const message = "```" + `
=================================
       NEW QUOTE REQUEST       
 SRI GANESH INTEGRATED LOGISTICS 
=================================

[CUSTOMER DETAILS]
Name          : ${data.name}
Company       : ${data.companyName}
Phone         : ${data.phone}
Email         : ${data.email}

[SHIPMENT DETAILS]
Service Type  : ${shipmentType}
Commodity     : ${data.commodity}
Weight        : ${data.weight} MT

[ROUTING]
Pickup From   : ${data.pickupLocation}
Delivery To   : ${data.deliveryLocation}

[REQUIREMENTS]
${data.requirements}
` + "```";

    // WhatsApp API URL
    const whatsappNumber = "919494922080";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Show local success state and reset
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    e.target.reset();
  };

  return (
    <div className="quote-page bg-light py-24">
      <Helmet>
        <title>Get a Quote - Sri Ganesh Integrated Logistics</title>
        <meta name="description" content="Request a personalized logistics quote from Sri Ganesh Integrated Logistics. Expert planning for Reefer, Hazardous, ISO Tankers, and multimodal transport." />
        <link rel="canonical" href="https://www.sgilogistics.com/quote" />
      </Helmet>
      <div className="container max-w-4xl">
        <motion.div initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-center mb-12">
          <h1 className="text-primary text-5xl mb-4">Request a <span className="text-accent">Quote</span></h1>
          <p className="text-muted text-xl">Get accurate pricing for your transportation needs instantly.</p>
        </motion.div>

        <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="card p-8 md:p-12 shadow-lg">
          {submitted ? (
             <div className="success-message text-center p-8 bg-green-50 text-green-700 rounded-lg">
                <h3 className="text-2xl mb-2">Quote Request Submitted!</h3>
                <p>Our team will get back to you with the details shortly.</p>
             </div>
          ) : (
            <form onSubmit={handleSubmit} className="quote-form">
              {/* Type Selection */}
              <div className="mb-8">
                <h3 className="mb-4 text-xl border-b pb-2">1. Select Shipment Type</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { id: 'Reefer Containers', icon: <ThermometerSnowflake /> },
                    { id: 'Regular Containers', icon: <Container /> },
                    { id: 'ISO Tankers', icon: <Cylinder /> },
                    { id: 'Liquid Tankers', icon: <Droplets /> },
                    { id: 'Hazardous Cargo', icon: <Biohazard /> },
                    { id: 'Break Bulk Cargo', icon: <PackageOpen /> },
                    { id: 'ODC Cargo', icon: <Maximize2 /> },
                    { id: 'Freight Forwarding', icon: <Globe /> }
                  ].map(type => (
                    <div 
                      key={type.id}
                      className={`type-card ${shipmentType === type.id ? 'selected' : ''}`}
                      onClick={() => setShipmentType(type.id)}
                    >
                      {type.icon}
                      <span>{type.id}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="mb-8">
                <h3 className="mb-4 text-xl border-b pb-2">2. Route Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label className="form-label">Pickup Location</label>
                    <input type="text" name="pickupLocation" className="form-control" placeholder="City, Country" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Delivery Location</label>
                    <input type="text" name="deliveryLocation" className="form-control" placeholder="City, Country" required />
                  </div>
                </div>
              </div>

              {/* Cargo Details */}
              <div className="mb-8">
                <h3 className="mb-4 text-xl border-b pb-2">3. Cargo Details</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label className="form-label">Weight (MT)</label>
                    <input type="number" name="weight" className="form-control" placeholder="e.g. 500" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Cargo Commodity</label>
                    <input type="text" name="commodity" className="form-control" placeholder="e.g. Electronics" required />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-8">
                <h3 className="mb-4 text-xl border-b pb-2">4. Your Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input type="text" name="name" className="form-control" placeholder="Enter your full name" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Company Name</label>
                    <input type="text" name="companyName" className="form-control" placeholder="Enter your company name" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input type="email" name="email" className="form-control" placeholder="email@company.com" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone / WhatsApp</label>
                    <input type="tel" name="phone" className="form-control" placeholder="+91 Your Number" required />
                  </div>
                  <div className="form-group md:col-span-2">
                    <label className="form-label">Company Requirements</label>
                    <textarea name="requirements" className="form-control" rows="4" placeholder="Briefly describe your specific logistics requirements..." required></textarea>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8">
                <button type="submit" className="btn btn-primary btn-lg w-full md:w-auto px-12 py-4 shadow-glow">
                  Submit Request
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
