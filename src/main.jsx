import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { useRoute } from './hooks.js';
import HomePage from './pages/Home.jsx';
import PatientsPage from './pages/Patients.jsx';
import SponsorsPage from './pages/Sponsors.jsx';
import FqhcPage from './pages/Fqhc.jsx';
import AboutPage from './pages/About.jsx';
import ContactPage from './pages/Contact.jsx';

function App() {
  const route = useRoute();

  useEffect(() => {
    const titles = {
      "":        "Veris Research — Clinical research, engineered for community",
      patients:  "For Patients — Veris Research",
      sponsors:  "For Sponsors & CROs — Veris Research",
      fqhc:      "For FQHC Partners — Veris Research",
      about:     "Mission — Veris Research",
      contact:   "Contact — Veris Research",
    };
    document.title = titles[route] || titles[""];
  }, [route]);

  switch (route) {
    case "patients": return <PatientsPage />;
    case "sponsors": return <SponsorsPage />;
    case "fqhc":     return <FqhcPage />;
    case "about":    return <AboutPage />;
    case "contact":  return <ContactPage />;
    default:         return <HomePage />;
  }
}

createRoot(document.getElementById('root')).render(<App />);
