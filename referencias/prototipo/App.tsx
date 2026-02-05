import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Conditions from './components/Conditions';
import Testimonials from './components/Testimonials';
import Steps from './components/Steps';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-sand font-sans text-gray-900 selection:bg-brand-green selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Conditions />
        <Steps />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;