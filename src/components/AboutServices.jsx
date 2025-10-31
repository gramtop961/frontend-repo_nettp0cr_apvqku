import React from 'react';
import { Star, Scissors, Wand2, Crown, Heart } from 'lucide-react';

const services = [
  { title: 'Ladies Custom Stitching', icon: Scissors },
  { title: 'Designer Blouses', icon: Star },
  { title: 'Lehengas', icon: Crown },
  { title: 'Alterations', icon: Scissors },
  { title: 'Ladies Frocks', icon: Heart },
  { title: 'Kids Frocks', icon: Wand2 },
  { title: 'Custom Dresses', icon: Star },
];

const AboutServices = () => {
  return (
    <section id="about" className="relative bg-white/70">
      {/* Soft mandala watermark */}
      <div className="pointer-events-none absolute left-0 top-0 -ml-40 -mt-24 opacity-10" aria-hidden>
        <svg width="460" height="460" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="256" cy="256" r="220" stroke="#A21C3C" strokeOpacity="0.3" strokeWidth="1.5" />
          {Array.from({ length: 16 }).map((_, i) => (
            <g key={i} transform={`rotate(${(360 / 16) * i} 256 256)`}>
              <path d="M256 96c12 18 22 26 30 38 8 12 10 28-30 28s-38-16-30-28c8-12 18-20 30-38z" fill="#F59E0B" fillOpacity="0.15" />
            </g>
          ))}
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl font-bold text-rose-900 sm:text-4xl">About Sri Tailors</h2>
            <p className="mt-4 text-rose-800/80">
              Led by <span className="font-semibold text-rose-900">Vithanala Srinivas</span>, Sri Tailors is a boutique ladies tailoring studio in Amalapuram known for elegant custom stitching and impeccable finishing. From classic silhouettes to contemporary couture, we bring your ideas to life with precise measurements, premium fabrics, and handcrafted detailing.
            </p>
            <p className="mt-4 text-rose-800/80">
              Every dress is made to fit beautifully—capturing your personality, occasion, and comfort. We pride ourselves on prompt delivery and a warm, personalized experience.
            </p>
          </div>

          <div id="services">
            <h3 className="font-serif text-2xl font-semibold text-rose-900">Our Services</h3>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {services.map(({ title, icon: Icon }) => (
                <div key={title} className="group flex items-center gap-3 rounded-xl border border-amber-200 bg-amber-50/60 p-4 shadow-sm transition hover:bg-amber-50">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-rose-600 to-amber-600 text-amber-50 shadow">
                    <Icon size={18} />
                  </div>
                  <p className="text-sm font-medium text-rose-900">{title}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-lg border border-amber-300 bg-white/70 p-4 text-sm text-rose-800/80">
              Custom embroidery, lace work, tassels, and alterations available on request.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutServices;
