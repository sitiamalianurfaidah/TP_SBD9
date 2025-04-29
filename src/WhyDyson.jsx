import { useEffect, useRef } from 'react';
import IconGuarantee from './assets/icon1.jpg';
import IconDelivery from './assets/icon2.jpg';
import IconSupport from './assets/icon3.jpg';
import IconCall from './assets/icon4.jpg';
import './App.css';

export default function WhyDyson() {
    const containerRef = useRef(null);

    const items = [
        {
            title: "2 - 5 year guarantee",
            description: "Including free parts and labour on select technology",
            icon: IconGuarantee
        },
        {
            title: "Free delivery",
            description: "We offer free shipping",
            icon: IconDelivery
        },
        {
            title: "Dedicated business support",
            description: "Dyson experts on hand to help",
            icon: IconSupport
        },
        {
            title: "Phone Customer Service support",
            description: "Reach us with ease anytime you need",
            icon: IconCall
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                        entry.target.classList.remove('opacity-0');
                    }
                });
            },
            { threshold: 0.2 }
        );

        const cards = containerRef.current?.querySelectorAll('.dyson-card');
        cards?.forEach(card => observer.observe(card));

        return () => {
            cards?.forEach(card => observer.unobserve(card));
        };
    }, []);

    return (
        <section
            id="why-dyson"
            className="w-screen min-h-screen py-20 px-6 pt-32 scroll-mt-32 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 text-gray-800 font-Poppins"
        >
            <div className="text-center mb-12 mt-20">
                <h1 className="text-4xl md:text-5xl font-extrabold text-purple-950 drop-shadow-lg">
                    Why Choose Dyson For Business?
                </h1>
            </div>

            <div
                ref={containerRef}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mt-8"
            >
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="dyson-card bg-white/70 backdrop-blur-md rounded-xl shadow-lg p-6 text-center transition duration-300 hover:shadow-xl hover:-translate-y-1 opacity-0"
                        style={{ animationDelay: `${index * 0.2}s`, animationDuration: '0.8s' }}
                    >
                        <img src={item.icon} alt={item.title} className="w-16 h-16 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-purple-800">{item.title}</h3>
                        <p className="text-sm text-gray-600 mt-2">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
