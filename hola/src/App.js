import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route  } from 'react-router-dom';

import Navbar from './components/NavBar.js';
import Homepage from './pages/homepage.js';
import AboutUs from './pages/aboutUs.js';

import FAQ from './pages/faq.js';
import Testimonies from './pages/testimonies.js';
import ContactUs from './pages/contactUs.js';
import Footer from './components/footer.js';
import Bachelors from './pages/Bachelors.js';
import Donate from './pages/donate.js';
import TermsAndConditions from './pages/termsAndConditions';
import Donations from './pages/donations';
import { useState } from 'react';


function App() {

  const [lang, setLang] = useState('en');
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainContent lang={lang} />} />
          <Route path="/bachelors" element={<Bachelors />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/termsAndConditions" element={<TermsAndConditions />} />
       
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

function MainContent() {
  return (
    <div>
      <Homepage />
      <AboutUs />
      <Donations/>
      <FAQ />
      <Testimonies />
      <ContactUs />
    </div>
  );
}

export default App;
