import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import Home from './pages/Home';
import JolVsJolco from './pages/JolVsJolco';
import HowItWorks from './pages/HowItWorks';
import RecentTrends from './pages/RecentTrends';
import ActiveParticipants from './pages/ActiveParticipants';
import Parties from './pages/Parties';
import Economics from './pages/Economics';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content" className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onContactClick={openContactModal} />} />
            <Route path="/jol-vs-jolco" element={<JolVsJolco onContactClick={openContactModal} />} />
            <Route path="/how-it-works" element={<HowItWorks onContactClick={openContactModal} />} />
            <Route path="/recent-trends" element={<RecentTrends onContactClick={openContactModal} />} />
            <Route path="/active-participants" element={<ActiveParticipants onContactClick={openContactModal} />} />
            <Route path="/parties" element={<Parties onContactClick={openContactModal} />} />
            <Route path="/economics" element={<Economics onContactClick={openContactModal} />} />
          </Routes>
        </main>
        <Footer />
        <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
      </div>
    </Router>
  );
}

export default App;
