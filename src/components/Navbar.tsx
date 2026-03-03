import Link from 'next/link';

export default function Navbar() {
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
                        <Link href="#" className="flex items-center hover:opacity-70 transition-opacity">
                            Pages
                            <svg className="w-3.5 h-3.5 ml-1.5 opacity-80" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:opacity-70 transition-opacity">Home</Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:opacity-70 transition-opacity">About</Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:opacity-70 transition-opacity">Service</Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:opacity-70 transition-opacity">Blog</Link>
                    </li>
                </ul>

                {/* Right: Cart & CTA */}
                <div className="flex items-center space-x-5 mr-1 text-[#1A1A1A]">
                    <button className="hover:opacity-70 transition-opacity" aria-label="Cart">
                        <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                    </button>
                    <button className="bg-[#1A1A1A] text-white rounded-[30px] px-6 py-2.5 text-sm font-medium hover:bg-black transition-colors">
                        Get in touch
                    </button>
                </div>
            </nav>
        </div>
    );
}
