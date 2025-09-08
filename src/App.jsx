import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experiences from './components/Experiences';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Navbar />
      <Hero />
      <Experiences />
      <CTA />
    </div>
  );
}

export default App;
