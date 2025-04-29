import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Products from './Products';
import Why from './WhyDyson';
import BusinessSectors from './BusinessSectors';
import FounderQuote from './FounderQuote';
import HelpForm from './HelpForm';
import Footer from './Footer'; 

import './App.css';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const container = document.querySelector('#main-content');
    if (!container) return;

    // Bersihkan highlight sebelumnya
    const spans = document.querySelectorAll('mark.highlight');
    spans.forEach(span => {
      const parent = span.parentNode;
      parent.replaceChild(document.createTextNode(span.textContent), span);
      parent.normalize();
    });

    // Kalau ga ada search, ga usah lanjut
    if (!searchTerm.trim()) {
      return;
    }

    const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT);
    const found = [];

    while (walker.nextNode()) {
      const node = walker.currentNode;
      const idx = node.textContent.toLowerCase().indexOf(searchTerm.toLowerCase());

      if (idx !== -1) {
        const mark = document.createElement('mark');
        mark.className = 'highlight bg-yellow-200 text-black px-1 rounded';
        mark.textContent = node.textContent.substring(idx, idx + searchTerm.length);

        const before = document.createTextNode(node.textContent.substring(0, idx));
        const after = document.createTextNode(node.textContent.substring(idx + searchTerm.length));

        const parent = node.parentNode;
        parent.replaceChild(after, node);
        parent.insertBefore(mark, after);
        parent.insertBefore(before, mark);

        found.push(mark);
      }
    }

    // Scroll ke hasil hanya jika ada dan hanya saat search aktif
    if (found.length > 0) {
      found[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [searchTerm]);

  return (
    <div>
      <Navbar onSearch={setSearchTerm} className="navbar-pretty-galaxy" />

      <div id="main-content">
        {/* Hero Section with Pastel Galaxy Gradient */}
        <section id="home" className="w-screen h-screen bg-gradient-galaxy-pastel text-purple-900 flex flex-col justify-center items-center fade-in">
          <div className="flex flex-col md:flex-row items-center gap-6 px-4">
            <div className="text-left max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg animate__animated animate__fadeInUp animate__delay-1s">
                Dyson Technology for Business
              </h1>

              <div className="card-container space-y-4 animate__animated animate__fadeInUp animate__delay-2s">
                <p className="text-md md:text-lg leading-relaxed">
                  From hand dryers and hair dryers, to vacuums and purifying fans, Dyson technology is engineered with your employees and guests in mind.
                </p>
              </div>

              <button className="bg-purple-900 text-white font-semibold px-6 py-2 mt-6 rounded-full hover:bg-pink-300 transition duration-300 animate__animated animate__zoomIn animate__delay-3s">
                Enquire Now
              </button>
            </div>
          </div>
        </section>

        {/* Section dengan Gradient Pastel */}
        <section id="products" className="fade-in bg-gradient-dmj-pastel animate__animated animate__zoomIn">
          <Products />
        </section>

        <section id="why-dyson" className="fade-in bg-gradient-os-pastel animate__animated animate__fadeIn animate__delay-1s">
          <Why />
        </section>

        <section id="business-sectors" className="fade-in bg-gradient-aslab-pastel animate__animated animate__fadeInUp animate__delay-2s">
          <BusinessSectors />
        </section>

        <section id="founder-quote" className="fade-in bg-gradient-os-pastel animate__animated animate__fadeIn animate__delay-3s">
          <FounderQuote />
        </section>

        <section id="help-form" className="fade-in bg-gradient-os-pastel animate__animated animate__fadeIn animate__delay-4s">
          <HelpForm />
        </section>

        <section id="footer" className="fade-in bg-gradient-os-pastel animate__animated animate__fadeIn animate__delay-5s">
          <Footer />
        </section>
      </div>
    </div>
  );
}
