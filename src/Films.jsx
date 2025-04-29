import { useEffect, useRef } from 'react';
import Imperfect from './assets/imperfect.jpg';
import SusahSinyal from './assets/susah-sinyal.jpg';
import CekTokoSebelah from './assets/cek-toko-sebelah.jpg';
import Comic8 from './assets/comic8.jpg';
import GaraGaraWarisan from './assets/gara-gara-warisan.jpg';
import './App.css';

export default function Films() {
    const containerRef = useRef(null);

    const films = [
        {
            title: 'Imperfect',
            body: 'A film about the struggle of accepting oneself and beauty standards, directed by Ernest Prakasa.',
            image: Imperfect
        },
        {
            title: 'Susah Sinyal',
            body: 'A heartwarming story of a relationship between mother and daughter during a communication breakdown.',
            image: SusahSinyal
        },
        {
            title: 'Cek Toko Sebelah',
            body: 'A family drama with comedic tones that portrays generational conflict and a family-run business.',
            image: CekTokoSebelah
        },
        {
            title: 'Comic 8',
            body: 'A hilarious action-comedy about eight stand-up comedians involved in a bank robbery.',
            image: Comic8
        },
        {
            title: 'Gara-Gara Warisan',
            body: 'A comedic drama about siblings competing for inheritance in ridiculous and dramatic ways.',
            image: GaraGaraWarisan
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate__animated', 'animate__zoomIn');
                        entry.target.classList.remove('opacity-0');
                    }
                });
            },
            {
                threshold: 0.2
            }
        );

        const cards = containerRef.current?.querySelectorAll('.film-card');
        cards?.forEach(card => observer.observe(card));

        return () => {
            cards?.forEach(card => observer.unobserve(card));
        };
    }, []);

    return (
        <section
            id="films"
            className="w-screen min-h-screen pt-32 pb-16 px-6 bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 text-gray-800 font-Poppins"
        >
            <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-purple-950 drop-shadow-lg">My Favorite Films</h1>
                <p className="text-md md:text-lg text-purple-950">Five amazing films starring or directed by Ernest Prakasa that I really enjoy</p>
            </div>

            <div
                ref={containerRef}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto"
            >
                {films.map((film, index) => (
                    <div
                        key={index}
                        className="film-card bg-white/90 backdrop-blur-sm rounded-xl shadow-md border border-purple-100 p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 opacity-0"
                        style={{ animationDelay: `${index * 0.2}s` }}
                    >
                        <img
                            src={film.image}
                            alt={film.title}
                            className="w-full h-40 object-cover rounded-md mb-3"
                        />
                        <h3 className="text-md font-semibold text-purple-800 text-center">{film.title}</h3>
                        <p className="text-sm text-gray-600 mt-1 text-justify leading-relaxed tracking-tight max-w-[85%] mx-auto p-1">{film.body}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
