import React, { useState, useEffect, useRef } from 'react';

export default function HelpForm() {
    const [question, setQuestion] = useState('');
    const [name, setName] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const handleHelpSubmit = (e) => {
        e.preventDefault();
        if (name.trim() && question.trim()) {
            console.log('Help Submitted:', { name, question });
            setName('');
            setQuestion('');
            alert('Terima kasih telah mengajukan pertanyaan Anda!');
        } else {
            alert('Silakan masukkan nama dan pertanyaan sebelum mengirim.');
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    const faqs = [
        { question: 'How can I reset my password?', answer: 'Click "Forgot Password" on the login page.' },
        { question: 'How do I contact support?', answer: 'Email us at support@example.com.' },
        { question: 'Where can I find the product manual?', answer: 'It’s available on our website under the "Support" section.' },
        { question: 'How can I update my profile?', answer: 'Go to account settings and click "Edit Profile".' },
    ];

    return (
        <div
            id="help-form"
            ref={sectionRef}
            className={`bg-gradient-galaxy-pastel min-h-screen flex items-center justify-center px-2 transition-all duration-1000${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-0'
            }`} >
            <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl">
                
                {/* FAQ + Search Box */}
                <div className="flex-1 bg-white p-6 rounded-lg shadow-xl">
                    <h3 className="text-2xl font-bold mb-4 text-center text-purple-900">Frequently Asked Questions</h3>
                    <input
                        type="text"
                        placeholder="Search FAQs..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-4 py-2 mb-4 rounded-lg text-black focus:outline-none focus:ring-2 focus:bg-slate-100"
                    />
                    <div className="space-y-4 max-h-[300px] overflow-y-auto">
                        {faqs
                            .filter((faq) =>
                                faq.question.toLowerCase().includes(searchQuery.toLowerCase())
                            )
                            .map((faq, index) => (
                                <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-sm">
                                    <h4 className="font-semibold text-lg text-purple-950">{faq.question}</h4>
                                    <p className="text-sm text-gray-700">{faq.answer}</p>
                                </div>
                            ))}
                    </div>
                </div>

                {/* Help Form */}
                <div className="flex-1 bg-white p-6 rounded-lg shadow-xl">
                    <h3 className="text-2xl font-bold mb-4 text-center text-purple-950">Still Need Help?</h3>
                    <form onSubmit={handleHelpSubmit} className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:bg-slate-100"
                        />
                        <textarea
                            placeholder="What would you like to ask?"
                            rows="4"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            className="w-full px-4 py-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:bg-slate-100"
                        />
                        <button
                            type="submit"
                            className="w-full py-2 rounded-lg text-white font-bold bg-purple-950 hover:bg-opacity-90 focus:ring-2 focus:ring-teal-700"
                        >
                            Submit Question
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
