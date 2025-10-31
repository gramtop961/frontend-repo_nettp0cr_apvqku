import React from 'react';

const galleryImages = [
  'https://images.unsplash.com/photo-1542060748-10c28b62716b?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1604882737272-067f4fd3abaf?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1627060324768-6aceb9d24f67?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1583391733956-8512382d1b39?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1603575449299-0b2201b58ef7?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1541685261372-58f05d9200bf?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop',
];

const Gallery = () => {
  return (
    <section id="gallery" className="relative bg-gradient-to-b from-white/70 to-amber-50/70 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-rose-900 sm:text-4xl">Gallery</h2>
          <p className="mx-auto mt-2 max-w-2xl text-rose-800/80">A glimpse of our handcrafted designs and elegant finishes.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((src, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-xl border border-amber-200 bg-white/60 shadow-sm">
              <img
                src={src}
                alt={`Sri Tailors design ${idx + 1}`}
                className="h-52 w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-amber-400/50" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
