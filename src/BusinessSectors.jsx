import React, { useEffect, useRef } from 'react';
import HotelImage from './assets/hotel.jpg';
import OfficeImage from './assets/office.jpg';
import EducationImage from './assets/education.jpg';
import TransportImage from './assets/transport.jpg';
import './App.css'; // include bg-gradient-os-pastel and animate.css

export default function BusinessSectors() {
    const containerRef = useRef(null);

    const sectors = [
        {
            title: 'Dyson machines in hotel room',
            description: 'Small details affect the way your guests perceive their stay. Enhance your customer experience by installing five star Dyson technology.',
            price: '$2500',
            image: HotelImage
        },
        {
            title: 'Dyson machines in office setting',
            description: 'For technology to have a positive effect, it must work properly. We strive to set new standards for performance and well-being in business and leisure environments.',
            price: '$1500',
            image: OfficeImage
        },
        {
            title: 'Dyson technology in students study hall',
            description: 'Dyson technology can help you deliver an improved study environment by addressing conditions that can affect students\' well-being.',
            price: '$1200',
            image: EducationImage
        },
        {
            title: 'Aeroplane taking off',
            description: 'Today\'s travellers expect a more sophisticated travel experience. See how Dyson technology can help your business deliver a 5 star washroom environment.',
            price: '$5000',
            image: TransportImage
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate__animated', 'animate__slideInLeft');
                    entry.target.classList.remove('opacity-0');
                }
            });
        }, {
            threshold: 0.2
        });

        const cards = containerRef.current?.querySelectorAll('.sector-card');
        cards?.forEach(card => observer.observe(card));

        return () => {
            cards?.forEach(card => observer.unobserve(card));
        };
    }, []);

    return (
        <section
            id="business-sectors"
            className="bg-gradient-os-pastel w-full min-h-screen pt-24 pb-20 px-6 text-gray-900 flex flex-col items-center justify-center"
        >
            <div className="max-w-7xl w-full flex flex-col items-center">
                <h2 className="text-5xl font-extrabold text-center mb-8 text-purple-900 drop-shadow-md">
                    Business Sectors
                </h2>

                <div
                    ref={containerRef}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full"
                >
                    {sectors.map((sector, index) => (
                        <div
                            key={index}
                            className="sector-card opacity-0 bg-white/60 backdrop-blur-xl rounded-xl shadow-lg p-6 text-center transition duration-300 hover:shadow-2xl hover:-translate-y-1"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <img src={sector.image} alt={sector.title} className="w-full h-48 object-cover rounded-md mb-4" />
                            <h3 className="text-lg font-semibold text-purple-800">{sector.title}</h3>
                            <p className="text-sm text-gray-700 mt-2 mb-4">{sector.description}</p>
                            <p className="text-md font-bold text-gray-800">{sector.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
