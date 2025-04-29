import React from 'react';

export default function Footer() {
    return (
        <footer
            id="footer"
            className="bg-gray-900 text-white py-12 px-6 mt-0 text-sm"
        >
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                
                {/* Kolom 1: Lokasi */}
                <div>
                    <h4 className="font-bold mb-2 text-lg">Indonesia</h4>
                    <p className="text-gray-400">© Dyson 2022</p>
                </div>

                {/* Kolom 2: Informasi Kebijakan */}
                <div className="space-y-2">
                    <a href="#" className="block hover:underline text-gray-300">Privacy policy</a>
                    <a href="#" className="block hover:underline text-gray-300">Cookies policy</a>
                    <a href="#" className="block hover:underline text-gray-300">Press</a>
                    <a href="#" className="block hover:underline text-gray-300">Careers</a>
                </div>

                {/* Kolom 3: Ketentuan & Layanan */}
                <div className="space-y-2">
                    <a href="#" className="block hover:underline text-gray-300">Terms and Conditions</a>
                    <a href="#" className="block hover:underline text-gray-300">Delivery policy</a>
                    <a href="#" className="block hover:underline text-gray-300">Warranty service</a>
                    <a href="#" className="block hover:underline text-gray-300">James Dyson Foundation</a>
                </div>

                {/* Kolom 4: Kontak */}
                <div className="space-y-2">
                    <h4 className="font-bold mb-2 text-lg">Contact Us</h4>
                    <p className="text-gray-300">Phone: <a href="tel:+628123456789" className="hover:underline">+62 812-3456-789</a></p>
                    <p className="text-gray-300">Email: <a href="mailto:support@dyson.co.id" className="hover:underline">support@dyson.co.id</a></p>
                </div>
            </div>
        </footer>
    );
}
