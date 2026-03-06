"use client";

import Link from 'next/link';

export default function Navbar() {
    const scrollToContact = (e: React.MouseEvent) => {
        e.preventDefault();
        const element = document.getElementById('get-in-touch');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    };

    const scrollToSection = (e: React.MouseEvent, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    };

    return (
        <div className="absolute top-6 w-full z-50 flex justify-center px-4 md:px-8">
            <nav className="flex w-full max-w-5xl items-center justify-between rounded-[40px] bg-[#F4F4F2] py-2 pl-6 pr-2 shadow-sm">
                {/* Left: Logo */}
                <div className="flex items-center">
                    <Link href="/" aria-label="Home" className="relative flex items-center justify-center -ml-2">
                        <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* Bottom/left grey parallelogram */}
                            <path d="M4 18H16L19 10H7L4 18Z" fill="#9CA3AF" />
                            {/* Top/right black parallelogram */}
                            <path d="M12 14H24L27 6H15L12 14Z" fill="#1A1A1A" />
                        </svg>
                    </Link>
                </div>

                {/* Center: Links */}
                <ul className="hidden md:flex items-center space-x-7 text-[#1A1A1A] font-sans text-sm font-medium">
                    <li>
                        <button className="flex items-center hover:opacity-70 transition-opacity">
                            Pages
                            <svg className="w-3.5 h-3.5 ml-1.5 opacity-80" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </li>
                    <li>
                        <button onClick={(e) => scrollToSection(e, 'home')} className="hover:opacity-70 transition-opacity cursor-pointer">Home</button>
                    </li>
                    <li>
                        <button onClick={(e) => scrollToSection(e, 'pain-points')} className="hover:opacity-70 transition-opacity cursor-pointer">Pain Points</button>
                    </li>
                    <li>
                        <button onClick={(e) => scrollToSection(e, 'how-it-works')} className="hover:opacity-70 transition-opacity cursor-pointer">How it works</button>
                    </li>
                    <li>
                        <button onClick={(e) => scrollToSection(e, 'features')} className="hover:opacity-70 transition-opacity cursor-pointer">Features</button>
                    </li>
                    <li>
                        <button onClick={(e) => scrollToSection(e, 'pricing')} className="hover:opacity-70 transition-opacity cursor-pointer">Pricing</button>
                    </li>
                </ul>

                {/* Right: Cart & CTA */}
                <div className="flex items-center space-x-5 mr-1 text-[#1A1A1A]">
                    <button onClick={scrollToContact} className="group flex items-center justify-center bg-[#1A1A1A] text-white rounded-[30px] px-6 py-2.5 text-sm font-medium hover:bg-black transition-all cursor-pointer overflow-hidden">
                        <span className="whitespace-nowrap transition-transform duration-300 group-hover:-translate-x-1">Get in touch</span>
                        <span className="inline-block max-w-0 opacity-0 overflow-hidden transition-all duration-300 group-hover:max-w-[20px] group-hover:opacity-100 group-hover:translate-x-1 group-hover:-rotate-12 origin-bottom">
                            👋
                        </span>
                    </button>
                </div>
            </nav>
        </div>
    );
}
