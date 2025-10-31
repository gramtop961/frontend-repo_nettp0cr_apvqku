import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-amber-100 to-rose-100" />

      {/* Mandala watermark */}
      <div className="pointer-events-none absolute -right-32 -top-32 opacity-20" aria-hidden>
        <svg width="480" height="480" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="256" cy="256" r="220" stroke="#8B1E3F" strokeOpacity="0.25" strokeWidth="2" />
          <circle cx="256" cy="256" r="180" stroke="#A44" strokeOpacity="0.25" strokeWidth="1.5" />
          <circle cx="256" cy="256" r="140" stroke="#C05" strokeOpacity="0.2" strokeWidth="1.5" />
          {Array.from({ length: 24 }).map((_, i) => (
            <g key={i} transform={`rotate(${(360 / 24) * i} 256 256)`}>
              <path d="M256 56c8 20 16 28 24 44s8 36-24 36-32-20-24-36 16-24 24-44z" fill="#C72" fillOpacity="0.15" />
            </g>
          ))}
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <div className="text-center">
          <span className="inline-block rounded-full border border-amber-300 bg-amber-50/60 px-4 py-1 text-xs tracking-wide text-amber-800 shadow-sm">Since 2005 • Amalapuram</span>
          <h1 className="mt-6 font-serif text-5xl font-bold tracking-tight text-rose-900 sm:text-6xl">
            SRI TAILORS
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-rose-800/80">
            Perfect Fit for Every Style
          </p>

          <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
            {["https://images.unsplash.com/photo-1635321648496-5870a5d83cd6?q=80&w=1200&auto=format&fit=crop","https://images.unsplash.com/photo-1621784563330-6c9f9b7a8274?q=80&w=1200&auto=format&fit=crop","https://images.unsplash.com/photo-1542060748-10c28b62716b?q=80&w=1200&auto=format&fit=crop"].map((src, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-xl border border-amber-200 bg-white/70 shadow-sm backdrop-blur">
                <img src={src} alt="Sri Tailors preview" className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-amber-400/50" />
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <a href="#services" className="rounded-full bg-gradient-to-r from-amber-600 to-rose-600 px-6 py-3 text-sm font-semibold text-amber-50 shadow hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-rose-700/40">
              Explore Services
            </a>
            <a href="#contact" className="rounded-full border border-amber-400/70 bg-white/60 px-6 py-3 text-sm font-semibold text-rose-800 shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-amber-600/30">
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
