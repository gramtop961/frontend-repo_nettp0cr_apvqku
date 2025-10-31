import React, { useState } from 'react';
import { Phone, MapPin, MessageCircle, Clock } from 'lucide-react';

const PHONE_DISPLAY = '9849345653';
const PHONE_WHATSAPP = '919849345653';

const ContactFooter = () => {
  const [form, setForm] = useState({ name: '', phone: '', date: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Appointment Request%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0ADate: ${encodeURIComponent(form.date)}%0AMessage: ${encodeURIComponent(form.message)}`;
    const url = `https://wa.me/${PHONE_WHATSAPP}?text=${text}`;
    window.open(url, '_blank');
    setForm({ name: '', phone: '', date: '', message: '' });
  };

  return (
    <section id="contact" className="relative bg-gradient-to-t from-rose-50 to-amber-50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl font-bold text-rose-900">Contact Us</h2>
            <p className="mt-2 text-rose-800/80">We would love to be part of your special occasions. Visit us, call, or send a WhatsApp message.</p>
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 text-rose-700" size={18} />
                <p className="text-rose-900">Tarakarama Nagar Colony, College Road, Amalapuram</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-rose-700" size={18} />
                <a href={`tel:${PHONE_DISPLAY}`} className="font-medium text-rose-900 hover:underline">{PHONE_DISPLAY}</a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="text-rose-700" size={18} />
                <p className="text-rose-900">Mon–Sat: 10:00 AM – 8:30 PM</p>
              </div>
              <div>
                <a
                  href={`https://wa.me/${PHONE_WHATSAPP}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 px-5 py-2 text-sm font-semibold text-white shadow hover:brightness-110"
                >
                  <MessageCircle size={16} /> Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-xl border border-amber-200 shadow-sm">
              <iframe
                title="Sri Tailors Location"
                src="https://www.google.com/maps?q=Tarakarama%20Nagar%20Colony%2C%20College%20Road%2C%20Amalapuram&output=embed"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div>
            <h3 className="font-serif text-2xl font-semibold text-rose-900">Book an Appointment</h3>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4 rounded-2xl border border-amber-200 bg-white/70 p-6 shadow-sm backdrop-blur">
              <div>
                <label className="block text-sm font-medium text-rose-900">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1 w-full rounded-md border border-amber-300 bg-white/80 px-3 py-2 text-rose-900 placeholder-rose-400 focus:border-rose-400 focus:outline-none focus:ring-1 focus:ring-rose-400"
                  placeholder="Your full name"
                />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-rose-900">Phone</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="mt-1 w-full rounded-md border border-amber-300 bg-white/80 px-3 py-2 text-rose-900 placeholder-rose-400 focus:border-rose-400 focus:outline-none focus:ring-1 focus:ring-rose-400"
                    placeholder="Mobile number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-rose-900">Preferred Date</label>
                  <input
                    type="date"
                    required
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="mt-1 w-full rounded-md border border-amber-300 bg-white/80 px-3 py-2 text-rose-900 placeholder-rose-400 focus:border-rose-400 focus:outline-none focus:ring-1 focus:ring-rose-400"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-rose-900">Message</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-1 w-full rounded-md border border-amber-300 bg-white/80 px-3 py-2 text-rose-900 placeholder-rose-400 focus:border-rose-400 focus:outline-none focus:ring-1 focus:ring-rose-400"
                  placeholder="Tell us about the outfit / occasion"
                />
              </div>
              <div className="flex items-center gap-3">
                <button type="submit" className="rounded-full bg-gradient-to-r from-amber-600 to-rose-600 px-6 py-2.5 text-sm font-semibold text-amber-50 shadow hover:brightness-110">Submit</button>
                <p className="text-xs text-rose-700/70">We usually respond within 30 minutes during working hours.</p>
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 rounded-t-2xl border-t border-amber-200 pt-8 text-center">
          <p className="font-serif text-xl font-semibold text-rose-900">“Stitching dreams with elegance and perfection.”</p>
          <p className="mt-2 text-sm text-rose-800/80">Sri Tailors • Tarakarama Nagar Colony, College Road, Amalapuram • {PHONE_DISPLAY}</p>
        </div>
      </div>
    </section>
  );
};

export default ContactFooter;
