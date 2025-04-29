import { useEffect, useRef } from 'react';
import Product1 from './assets/product1.jpg';
import Product2 from './assets/product2.jpg';
import Product3 from './assets/product3.jpg';
import Product4 from './assets/product4.jpg';
import './App.css';

export default function Products() {
    const containerRef = useRef(null);

    const products = [
        {
        name: 'Dyson Supersonic™ Hair Dryer',
        description: 'Dyson Airblade™ hand dryers offer the perfect combination of pioneering technology and sophisticated design.',
        image: Product1,
        link: '#'
        },
        {
        name: 'Dyson Airwrap™ Treatment',
        description: 'Engineered with performance and well-being in mind, Dyson purifying fans help create a cleaner, comfortable environment.',
        image: Product2,
        link: '#'
        },
        {
        name: 'Dyson V15 Detect™ Vacuum',
        description: 'From small businesses to large organisations, Dyson’s powerful vacuums can help you clean more efficiently.',
        image: Product3,
        link: '#'
        },
        {
        name: 'Dyson Hair Care™',
        description: 'Intelligent heat control, balanced design, and Air Multiplier™ tech for a guest experience like no other.',
        image: Product4,
        link: '#'
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

        const cards = containerRef.current?.querySelectorAll('.product-card');
        cards?.forEach(card => {
        observer.observe(card);
        });

        return () => {
        cards?.forEach(card => observer.unobserve(card));
        };
    }, []);

    return (
        <section
        id="products"
        className="w-screen min-h-screen pt-28 pb-16 px-6 bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 text-gray-800 font-Poppins"
        >
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-purple-950 drop-shadow-lg">Products</h1>
            <p className="text-md md:text-lg text-purple-950">Technology for your lifestyle & business</p>
        </div>

        <div
            ref={containerRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
        >
            {products.map((product, index) => (
            <div
                key={index}
                className="product-card bg-white/90 backdrop-blur-sm rounded-xl shadow-md border border-purple-100 p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 opacity-0"
                style={{ animationDelay: `${index * 0.2}s` }}
            >
                <img
                src={product.image}
                alt={product.name}
                className="w-full h-36 object-cover rounded-md mb-3"
                />
                <h3 className="text-md font-semibold text-purple-800">{product.name}</h3>
                <p className="text-sm text-gray-600 mt-1 mb-3">{product.description}</p>
                <a
                href={product.link}
                className="text-sm font-semibold text-pink-600 hover:text-pink-800 transition-colors"
                >
                Learn more →
                </a>
            </div>
            ))}
        </div>
        </section>
    );
}
