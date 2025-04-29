import { useEffect, useRef } from 'react';
import jamesDysonImage from './assets/james-dyson.jpg'; // pastikan path gambar benar

export default function FoundersQuote() {
    const sectionRef = useRef(null);
    const quoteRef = useRef(null);
    const authorRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        quoteRef.current.classList.add('animate__animated', 'animate__fadeInLeft');
                        authorRef.current.classList.add('animate__animated', 'animate__fadeInLeft', 'animate__delay-1s');
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section
            id="founder-quote"
            ref={sectionRef}
            className="relative founder-section bg-cover bg-center bg-no-repeat min-h-[400px] md:min-h-[600px] flex items-center justify-center text-white"
            style={{ backgroundImage: `url(${jamesDysonImage})` }}
        >
            {/* Overlay */}
            <div className="founder-overlay absolute inset-0 bg-black bg-opacity-60"></div>

            {/* Text content */}
            <div className="founder-content relative z-10 max-w-3xl px-4 sm:px-6 text-center">
                <blockquote
                    ref={quoteRef}
                    className="quote-text text-sm sm:text-base md:text-xl lg:text-2xl font-light leading-relaxed tracking-wide"
                >
                    “What we're interested in is whether our kind of technology can make a big difference and whether it can really do the job much better than the existing products.”
                </blockquote>
                <cite
                    ref={authorRef}
                    className="quote-author block mt-4 text-xs sm:text-sm md:text-base text-gray-200"
                >
                    — <strong>Sir James Dyson</strong><br />
                    Engineer and Founder
                </cite>
            </div>
        </section>
    );
}
