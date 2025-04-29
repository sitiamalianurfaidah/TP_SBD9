import { useState } from 'react';
import { Search } from 'lucide-react';

export default function Navbar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value);
    };

    const navItems = [
        { label: 'Home', href: '#home' },
        { label: 'Favorite Films', href: '#films' },
        { label: 'Counter', href: '#counter' },
    ];

    return (
        <nav className="bg-white text-black shadow-md sticky top-0 z-50 px-6 py-6 font-Poppins">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                
                {/* Nama - Siti Amalia Nurfaidah */}
                <div className="flex items-center space-x-2">
                    <span className="text-lg md:text-xl font-Poppins font-semibold tracking-wide text-[#5a189a]">
                        Siti Amalia Nurfaidah
                    </span>
                </div>



                {/* Nav Items */}
                <div className="flex-1 flex justify-center">
                    <ul className="flex space-x-8 font-bold text-text-base md:text-lg">
                        {navItems.map(item => (
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    className="galaxy-text no-underline transition-all duration-300 ease-in-out transform hover:scale-[1.05] hover:brightness-125"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Search */}
                <div className="relative w-full md:w-64">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearch}
                        placeholder="Search anything..."
                        className="bg-[#f5f3ff] border border-gray-300 rounded pl-10 pr-3 py-1 text-sm w-full focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm placeholder-gray-500"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                </div>
            </div>
        </nav>
    );
}
