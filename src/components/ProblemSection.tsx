"use client";

export default function ProblemSection() {
    const scrollToSection = (e: React.MouseEvent, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    };

    const cards = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-zinc-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="M10 11h4" /><path d="M10 15h4" /><path d="M10 7h4" />
                </svg>
            ),
            title: "Manually copying product data takes hours",
            description:
                "Re-entering specs, SKUs, pricing, and materials across tools drains time and focus.",
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-zinc-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l-5.5 9h11z" /><rect x="3" y="13" width="7" height="7" /><circle cx="17.5" cy="16.5" r="3.5" />
                </svg>
            ),
            title: "Moodboards are made in Canva/Photoshop — slow and messy",
            description:
                "Versions sprawl, exports multiply, and small updates become repetitive rework.",
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-zinc-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                </svg>
            ),
            title: "No centralized place for their catalog",
            description:
                "The source of truth is scattered across inboxes, drives, spreadsheets, and PDFs.",
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-zinc-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
            ),
            title: "Sending proposals to end customers is painful",
            description:
                "Broken links, missing images, and inconsistent formatting create avoidable back-and-forth.",
        },
    ];

    return (
        <section id="pain-points" className="relative bg-white overflow-hidden">
            {/* Background accents */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-amber-300/25 blur-3xl" />
                <div className="absolute -bottom-28 -right-28 h-[520px] w-[520px] rounded-full bg-emerald-300/20 blur-3xl" />
                <div
                    className="absolute inset-0 opacity-[0.08]"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, rgba(0,0,0,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.14) 1px, transparent 1px)",
                        backgroundSize: "72px 72px",
                    }}
                />
            </div>

            <div className="relative max-w-[1100px] mx-auto px-6 sm:px-10 pt-16 pb-20">
                {/* Header */}
                <div className="max-w-2xl">
                    <p className="text-xs tracking-[0.22em] uppercase text-zinc-500">
                        Pain points
                    </p>
                    <h2 className="mt-3 font-semibold tracking-tight text-3xl sm:text-4xl md:text-5xl leading-[1.05] text-zinc-900">
                        Four friction points that slow teams down
                    </h2>
                    <p className="mt-4 text-zinc-600 leading-relaxed">
                        Clean, clear, and repeatable problems — perfect candidates for
                        automation.
                    </p>
                </div>

                {/* 2×2 grid */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {cards.map((card, i) => (
                        <article
                            key={i}
                            className="group rounded-3xl border border-zinc-200/70 bg-white/60 backdrop-blur-md p-7 shadow-[0_18px_50px_rgba(15,23,42,0.10)] transition-all duration-300 hover:bg-white/75 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(15,23,42,0.14)]"
                        >
                            <div className="flex items-start gap-4">
                                {/* Icon box */}
                                <div className="h-12 w-12 shrink-0 rounded-2xl border border-zinc-200/70 bg-white/70 backdrop-blur flex items-center justify-center shadow-[0_10px_24px_rgba(15,23,42,0.08)]">
                                    {card.icon}
                                </div>
                                <div className="min-w-0">
                                    <h3 className="font-semibold tracking-tight text-xl text-zinc-900">
                                        {card.title}
                                    </h3>
                                    <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Footer row */}
                <div className="mt-10 flex items-center justify-between gap-6">
                    <p className="text-xs tracking-[0.22em] uppercase text-zinc-500">
                        Clear problems. Clear fixes.
                    </p>
                    <button
                        onClick={(e) => scrollToSection(e, 'get-in-touch')}
                        className="text-sm text-zinc-700 hover:text-zinc-900 transition-colors inline-flex items-center gap-2 cursor-pointer"
                    >
                        Talk to us
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
