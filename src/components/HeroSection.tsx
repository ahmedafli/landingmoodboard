"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function HeroSection() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus("loading");
        const { error } = await supabase
            .from("early_access")
            .insert([{ email }]);

        if (error) {
            console.error("Supabase error:", error);
            setStatus("error");
        } else {
            setStatus("success");
            setEmail("");
        }
    };
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
                    <form
                        onSubmit={handleSubmit}
                        className="flex bg-white rounded-full overflow-hidden items-center p-1.5 pl-4 gap-2 shadow-lg max-w-md w-full"
                    >
                        <input
                            type="email"
                            placeholder="Type your email address"
                            id="email-early-access-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="text-sm text-gray-800 outline-none bg-transparent flex-1 placeholder-gray-400 min-w-0"
                            required
                            disabled={status === "loading" || status === "success"}
                        />
                        <button
                            className="bg-[#1A1A1A] text-white rounded-full px-5 py-2.5 text-sm font-medium hover:bg-black transition-colors whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                            type="submit"
                            id="get-started-email"
                            disabled={status === "loading" || status === "success"}
                        >
                            {status === "loading" ? "..." : status === "success" ? "Joined!" : "Get Started"}
                        </button>
                    </form>
                    {status === "error" && (
                        <p className="mt-2 text-xs text-red-400 ml-4 absolute">Something went wrong. Please try again.</p>
                    )}
                    {status === "success" && (
                        <p className="mt-2 text-xs text-emerald-400 ml-4 absolute">Thanks for joining! We'll be in touch soon.</p>
                    )}
                </div>

            </div>
        </section>
    );
}
