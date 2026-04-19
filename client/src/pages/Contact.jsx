import { motion } from 'framer-motion';
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import './Contact.css';

export default function Contact() {
  const [formStatus, setFormStatus] = useState('');
  const [errorStatus, setErrorStatus] = useState('');

  const offices = [
    {
      city: "Hyderabad",
      state: "Telangana",
      country: "India",
      pincode: "500016",
      label: "Head Office",
      address: "6-3-852/2/B4, Plot No. 10, Aparajitha Colony, Ameerpet",
      phone: "9494922080, 9849356197",
      email: "contact@sgilogistics.in"
    },
    {
      city: "Visakhapatnam",
      state: "Andhra Pradesh",
      country: "India",
      pincode: "530002",
      label: "Branch Office",
      address: "10-37-27, Rich House, Ram Nagar",
      phone: "9494922080, 9849356197",
      email: "contact@sgilogistics.in"
    },
    {
      city: "Mumbai",
      state: "Maharastra",
      country: "India",
      pincode: "400053",
      label: "Branch Office",
      address: "54, Shalaka, D.N. Nagar, Andheri (West)",
      phone: "9494922080, 9849356197",
      email: "contact@sgilogistics.in"
    },
    {
      city: "Chennai",
      state: "Tamil Nadu",
      country: "India",
      pincode: "600001",
      label: "Branch Office",
      address: "Rama Rau Buildings, 3rd Floor, 299/144, Thambu Chetty Street",
      phone: "9494922080, 9849356197",
      email: "contact@sgilogistics.in"
    },
    {
      city: "Bangalore",
      state: "Karnataka",
      country: "India",
      pincode: "560092",
      label: "Branch Office",
      address: "2555, 13th Main, 9th Cross, E Block, Sahakara Nagar",
      phone: "9494922080, 9849356197",
      email: "contact@sgilogistics.in"
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        setFormStatus('Message sent successfully!');
        setTimeout(() => setFormStatus(''), 3000);
        e.target.reset();
      } else {
        setErrorStatus('Failed to send message.');
        setTimeout(() => setErrorStatus(''), 3000);
      }
    } catch(err) {
      setErrorStatus('Server connection failed.');
      setTimeout(() => setErrorStatus(''), 3000);
    }
  }

  return (
    <div className="contact-page bg-light">
      <Helmet>
        <title>Contact Us - Sri Ganesh Integrated Logistics | Available 24/7</title>
        <meta name="description" content="Get in touch with Sri Ganesh Integrated Logistics. Reach out to our offices in Hyderabad, Mumbai, Chennai, and more for reliable Pan India logistics support." />
        <link rel="canonical" href="https://www.sgilogistics.com/contact" />
      </Helmet>
      <section className="page-header py-56 text-center text-light relative" style={{ backgroundImage: "url('/Gemini_Generated_Image_29yydp29yydp29yy.png')", backgroundSize: 'cover', backgroundPosition: 'center 15%' }}>
        <div className="absolute inset-0 bg-primary opacity-80 z-0"></div>
        <div className="container mt-8 relative z-10">
          <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="font-bold" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
            <span style={{ color: '#ffffff' }}>Contact </span>
            <span style={{ color: '#EF4444' }}>Us</span>
          </motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="text-xl mt-4 max-w-2xl mx-auto" style={{ color: '#ffffff', textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
            Reach out to any of our offices across India. We are available 24/7 to assist you.
          </motion.p>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-2">Our <span className="text-accent">Offices</span></h2>
            <p className="text-muted">Pan-India presence to serve you better</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {offices.map((office, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="office-card"
              >
                <div className="office-card-title">
                  {office.city}
                  {office.label === "Head Office" && (
                    <span className="office-card-badge">Head Office</span>
                  )}
                </div>
                <div className="office-card-row align-top">
                  <MapPin size={15} className="mt-1" />
                  <span>{office.address},<br/>{office.city}, {office.state}, {office.country} - {office.pincode}</span>
                </div>
                {office.phone && (
                  <div className="office-card-row">
                    <Phone size={15} />
                    <span className="office-card-phone">{office.phone}</span>
                  </div>
                )}
                <div className="office-card-row">
                  <Mail size={15} />
                  <a href={`mailto:${office.email}`}>{office.email}</a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container grid md:grid-cols-2 gap-12">
          
          <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="contact-info p-8 card bg-white">
            <h2 className="mb-8">Get In Touch</h2>

            <div className="info-list">
              <div className="contact-info-item">
                <div className="contact-icon-box"><Phone size={22} /></div>
                <div className="contact-info-text">
                  <h4>Head Office Phone</h4>
                  <p>9494922080, 9849356197</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon-box"><Mail size={22} /></div>
                <div className="contact-info-text">
                  <h4>Head Office Email</h4>
                  <p>contact@sgilogistics.in</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon-box"><MapPin size={22} /></div>
                <div className="contact-info-text">
                  <h4>Head Office Address</h4>
                  <p>6-3-852/2/B4, Plot No. 10, Aparajitha Colony,<br/>Ameerpet, Hyderabad, Telangana, India - 500016.</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon-box"><Clock size={22} /></div>
                <div className="contact-info-text">
                  <h4>24/7 Availability</h4>
                  <p>Our support team is always ready to assist you round the clock.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="contact-form p-8 card bg-white">
            <h2 className="mb-6">Send a Message</h2>
            {formStatus && <div className="alert bg-success text-white p-3 rounded mb-4 shadow-glow" style={{backgroundColor: '#28a745'}}>{formStatus}</div>}
            {errorStatus && <div className="alert bg-danger text-white p-3 rounded mb-4 shadow-glow" style={{backgroundColor: '#dc3545'}}>{errorStatus}</div>}
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input type="text" name="fullName" className="form-control" placeholder="John Doe" required />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="form-group">
                  <label className="form-label">Phone</label>
                  <input type="tel" name="phone" className="form-control" placeholder="+91 9494922080" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input type="email" name="email" className="form-control" placeholder="john@email.com" required />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea name="message" className="form-control" rows="5" placeholder="How can we help you?" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full">Send Message</button>
            </form>
          </motion.div>

        </div>
      </section>

      {/* Embedded Map - Ameerpet Hyderabad */}
      <section className="map-section w-full" style={{ height: '400px' }}>
        <iframe 
          src="https://maps.google.com/maps?q=6-3-852/2/B4,Plot+No.+10,Aparajitha+Colony,Ameerpet,Hyderabad,Telangana-500016&t=&z=15&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="400" 
          style={{border:0}} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </section>
    </div>
  );
}
