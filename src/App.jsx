import React from 'react';
import Hero from './components/Hero';
import AboutServices from './components/AboutServices';
import Gallery from './components/Gallery';
import ContactFooter from './components/ContactFooter';

const App = () => {
  return (
    <div className="min-h-screen scroll-smooth bg-gradient-to-b from-amber-50 via-amber-100 to-rose-100">
      {/* Top navigation */}
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between py-3">
            <a href="#home" className="font-serif text-xl font-bold tracking-wide text-rose-900">SRI TAILORS</a>
            <nav className="hidden gap-6 sm:flex">
              <a href="#about" className="text-sm font-medium text-rose-900 hover:text-rose-700">About</a>
              <a href="#services" className="text-sm font-medium text-rose-900 hover:text-rose-700">Services</a>
              <a href="#gallery" className="text-sm font-medium text-rose-900 hover:text-rose-700">Gallery</a>
              <a href="#contact" className="text-sm font-medium text-rose-900 hover:text-rose-700">Contact</a>
            </nav>
            <a href="#contact" className="rounded-full bg-gradient-to-r from-amber-600 to-rose-600 px-4 py-2 text-xs font-semibold text-amber-50 shadow sm:text-sm">Book Now</a>
          </div>
        </div>
      </header>

      {/* Sections */}
      <Hero />
      <AboutServices />
      <Gallery />
      <ContactFooter />
    </div>
  );
};

export default App;
