import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Films from './Films';
import CounterBox from './Counter';

import './App.css';
import AmelPhoto from './assets/amel.jpg'; // Import the photo

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
        <section id="home" className="w-screen h-screen bg-gradient-galaxy-pastel text-purple-900 flex flex-col md:flex-row justify-center items-center gap-6 px-4 py-8 fade-in">
          <div className="flex flex-col md:flex-row items-center gap-6 w-full max-w-6xl"> {/* Adjust width to make text more spread out */}
            {/* Photo Section */}
            <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-purple-900">
              <img src={AmelPhoto} alt="Siti Amalia Nurfaidah" className="object-cover w-full h-full" />
            </div>

            {/* Text Section */}
            <div className="text-left w-full max-w-4xl"> {/* Increased width for text */}
              <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg animate__animated animate__fadeInUp animate__delay-1s">
                About Me
              </h1>

              <div className="card-container space-y-4 animate__animated animate__fadeInUp animate__delay-2s">
                <p className="text-md md:text-lg leading-relaxed tracking-wide text-justify">
                  I always admired Ernest Prakasa's journey—from a comedian to an actor, director, and now a producer with his own production house, Imajinari. His success and growth in the film industry inspire me greatly. Because of this admiration, I’ve actively sought opportunities to immerse myself in media and film. I’ve participated in various organizations related to these fields, including Media BEM FTUI, Sinematografi UI, and Creative Exercise FTUI.
                </p>
              </div>


              {/* Button with anchor link to #films */}
              <a href="#films">
                <button className="bg-purple-900 text-white font-semibold px-6 py-2 mt-6 rounded-full hover:bg-pink-300 transition duration-300 animate__animated animate__zoomIn animate__delay-3s">
                  My Favorite Films
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* Section with Gradient Pastel */}
        <section id="films" className="fade-in bg-gradient-dmj-pastel animate__animated animate__zoomIn">
          <Films />
        </section>

        <section id="counter" className="fade-in bg-gradient-os-pastel animate__animated animate__fadeIn animate__delay-1s">
          <CounterBox />
        </section>

      </div>
    </div>
  );
}
