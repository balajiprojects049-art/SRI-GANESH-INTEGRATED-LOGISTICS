import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Quote from './pages/Quote';
// import FreightForwarding from './pages/FreightForwarding';
import ProjectForwarding from './pages/ProjectForwarding';
import Transportation from './pages/Transportation';
import WarehousingPage from './pages/WarehousingPage';
import CustomClearance from './pages/CustomClearance';
import ServiceDetail from './pages/ServiceDetail';
import './App.css';

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          {/* <Route path="/services/freight-forwarding" element={<FreightForwarding />} /> */}
          <Route path="/services/project-forwarding" element={<ProjectForwarding />} />
          <Route path="/services/transportation" element={<Transportation />} />
          <Route path="/services/warehousing" element={<WarehousingPage />} />
          <Route path="/services/custom-clearance" element={<CustomClearance />} />
        </Routes>
      </main>
      <Footer />
      <MobileNav />
      {/* Floating Call Button for Mobile */}
      <a href="tel:9494922080" className="mobile-only floating-action-btn">
        📞
      </a>
    </div>
  );
}

export default App;
