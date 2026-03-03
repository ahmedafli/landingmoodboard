export default function HeroSection() {
    return (
        <section className="relative w-full h-screen bg-black overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source src="https://res.cloudinary.com/dlnakzasq/video/upload/v1772410180/bgvideohouse_i9hbnp.mp4" type="video/mp4" />
            </video>

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/30 to-black/10 pointer-events-none"></div>

            {/* Content wrapper */}
            <div className="absolute z-20 bottom-10 left-8 right-8 flex flex-col md:flex-row justify-between items-end">

                {/* Top-left area (relative to the bottom container) */}
                <div className="flex flex-col max-w-lg mb-8 md:mb-0">
                    <h1 className="font-bebas-neue text-6xl md:text-8xl text-white leading-none tracking-wide">
                        Instant Product Moodboards
                    </h1>

                    <div className="flex items-center mt-4">
                        <div className="flex text-yellow-400 text-lg">
                            ★★★★★
                        </div>
                        <span className="text-white text-sm ml-2 font-medium">
                            Ratings Points 4.8
                        </span>
                    </div>

                    <p className="text-white/80 text-sm max-w-xs mt-3 leading-relaxed">
                        Add your products and automatically turn them into beautiful moodboards with pricing and details automatically organized into clean, presentation-ready tables.
                    </p>
                </div>

                {/* Bottom-right area */}
                <div className="w-full md:w-auto mt-4 md:mt-0">
                    <div className="flex bg-white rounded-full overflow-hidden items-center p-1.5 pl-4 gap-2 shadow-lg max-w-md w-full">
                        <input
                            type="email"
                            placeholder="Type your email address"
                            className="text-sm text-gray-800 outline-none bg-transparent flex-1 placeholder-gray-400 min-w-0"
                        />
                        <button className="bg-[#1A1A1A] text-white rounded-full px-5 py-2.5 text-sm font-medium hover:bg-black transition-colors whitespace-nowrap">
                            Get Started
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}
