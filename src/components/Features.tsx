import Link from "next/link";

export default function Features() {
    return (
        <div className="bg-white text-slate-900 relative overflow-hidden">
            {/* Background accents */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-amber-200/45 blur-3xl" />
                <div className="absolute -bottom-56 -right-56 h-[620px] w-[620px] rounded-full bg-emerald-200/35 blur-3xl" />
                <div className="absolute left-1/2 top-10 h-[420px] w-[740px] -translate-x-1/2 rounded-full bg-slate-200/50 blur-3xl" />
            </div>

            <main className="relative mx-auto w-full max-w-6xl px-6 py-16 lg:py-24">
                {/* Header */}
                <header className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
                    <div className="lg:col-span-7">
                        <p className="text-xs font-semibold tracking-[0.18em] text-slate-500">FEATURES &amp; BENEFITS</p>
                        <h2 className="mt-3 text-3xl tracking-tight sm:text-4xl font-semibold text-slate-900">
                            What your team wins after subscribing
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                            Less manual work. More client-ready output. The workflow you already do—made fast, consistent, and easy to repeat.
                        </p>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="rounded-3xl border border-slate-200/70 bg-white/55 p-5 shadow-[0_18px_44px_-30px_rgba(15,23,42,0.35)] backdrop-blur-xl">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-slate-500">
                                        {/* sparkles */}
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                                        </svg>
                                        VALUE SNAPSHOT
                                    </div>
                                    <div className="mt-3 text-lg font-semibold tracking-tight text-slate-900">
                                        From scattered links → a reusable catalog
                                    </div>
                                    <p className="mt-1 text-sm text-slate-600">
                                        Turn any showroom page into structured products your team can use instantly.
                                    </p>
                                </div>
                                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white/70 shadow-sm">
                                    {/* badge-check */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                                        <path d="m9 12 2 2 4-4" />
                                    </svg>
                                </div>
                            </div>

                            <div className="mt-4 flex flex-wrap gap-2">
                                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700">
                                    {/* clock */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                                    </svg>
                                    Faster workflows
                                </span>
                                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700">
                                    {/* wand */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M15 4V2" /><path d="M15 16v-2" /><path d="M8 9h2" /><path d="M20 9h2" /><path d="M17.8 11.8 19 13" /><path d="M15 9h.01" /><path d="M17.8 6.2 19 5" /><path d="m3 21 9-9" /><path d="M12.2 6.2 11 5" />
                                    </svg>
                                    Cleaner deliverables
                                </span>
                                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700">
                                    {/* repeat */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="m17 2 4 4-4 4" /><path d="M3 11V9a4 4 0 0 1 4-4h14" /><path d="m7 22-4-4 4-4" /><path d="M21 13v2a4 4 0 0 1-4 4H3" />
                                    </svg>
                                    Repeatable process
                                </span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Feature grid */}
                <section className="relative mt-10 lg:mt-14">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">

                        {/* Feature 1 — URL paste & scrape */}
                        <article className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/55 p-6 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.35)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_-34px_rgba(15,23,42,0.42)]">
                            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-amber-200/30 blur-2xl transition-opacity duration-300 group-hover:opacity-80" />
                            <div className="relative">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white/70 shadow-sm">
                                            {/* link-2 */}
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M9 17H7A5 5 0 0 1 7 7h2" /><path d="M15 7h2a5 5 0 1 1 0 10h-2" /><line x1="8" x2="16" y1="12" y2="12" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold tracking-[0.18em] text-slate-500">FEATURE</p>
                                            <h3 className="mt-1 text-xl font-semibold tracking-tight text-slate-900">URL paste &amp; scrape</h3>
                                        </div>
                                    </div>
                                    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm shrink-0">
                                        {/* zap */}
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                                        </svg>
                                        Instant
                                    </div>
                                </div>

                                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                                    Copy a product URL from any showroom site, paste it in, and it scrapes automatically.
                                </p>

                                <div className="mt-5 rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm">
                                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                                        {/* clipboard-paste */}
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z" /><path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2" /><path d="M12 12v6" /><path d="m9 15 3 3 3-3" />
                                        </svg>
                                        Benefit
                                    </div>
                                    <p className="mt-1 text-sm text-slate-700">No manual copying—product info arrives structured and ready to use.</p>
                                    <div className="mt-3 flex items-center gap-2">
                                        <div className="h-8 flex-1 rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-xs font-medium text-slate-400">
                                            Paste URL…
                                        </div>
                                        <div className="inline-flex h-8 items-center justify-center rounded-xl bg-slate-900 px-3 text-xs font-semibold text-white">
                                            Scrape
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* Feature 2 — Moodboard builder */}
                        <article className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/55 p-6 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.35)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_-34px_rgba(15,23,42,0.42)]">
                            <div className="absolute -left-28 -bottom-28 h-72 w-72 rounded-full bg-emerald-200/30 blur-2xl transition-opacity duration-300 group-hover:opacity-80" />
                            <div className="relative">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white/70 shadow-sm">
                                            {/* layout-template */}
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <rect width="18" height="7" x="3" y="3" rx="1" /><rect width="9" height="7" x="3" y="14" rx="1" /><rect width="5" height="7" x="16" y="14" rx="1" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold tracking-[0.18em] text-slate-500">FEATURE</p>
                                            <h3 className="mt-1 text-xl font-semibold tracking-tight text-slate-900">Moodboard builder</h3>
                                        </div>
                                    </div>
                                    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm shrink-0">
                                        {/* palette */}
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" /><circle cx="17.5" cy="10.5" r=".5" fill="currentColor" /><circle cx="8.5" cy="7.5" r=".5" fill="currentColor" /><circle cx="6.5" cy="12.5" r=".5" fill="currentColor" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
                                        </svg>
                                        Visual
                                    </div>
                                </div>

                                <p className="mt-3 text-sm leading-relaxed text-slate-600">Impress end clients visually.</p>

                                <div className="mt-5 rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm">
                                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                                        {/* clipboard-check */}
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="m9 14 2 2 4-4" />
                                        </svg>
                                        Benefit
                                    </div>
                                    <p className="mt-1 text-sm text-slate-700">Present curated selections with consistent styling—no messy design files.</p>

                                    <div className="mt-3 grid grid-cols-3 gap-2">
                                        <div className="aspect-square rounded-xl border border-slate-200 bg-white/80 shadow-sm overflow-hidden">
                                            <img src="https://res.cloudinary.com/dlnakzasq/image/upload/v1772501101/ChatGPT_Image_Mar_3_2026_02_22_39_AM_kpickc.png" alt="Moodboard item 1" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="aspect-square rounded-xl border border-slate-200 bg-white/80 shadow-sm overflow-hidden">
                                            <img src="https://res.cloudinary.com/dlnakzasq/image/upload/v1772501500/ChatGPT_Image_Mar_3_2026_02_30_01_AM_tm7fen.png" alt="Moodboard item 2" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="aspect-square rounded-xl border border-slate-200 bg-white/80 shadow-sm overflow-hidden">
                                            <img src="https://res.cloudinary.com/dlnakzasq/image/upload/v1772501575/ChatGPT_Image_Mar_3_2026_02_31_09_AM_k4nezu.png" alt="Moodboard item 3" className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* Feature 3 — Automated product tables */}
                        <article className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/55 p-6 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.35)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_-34px_rgba(15,23,42,0.42)]">
                            <div className="absolute -right-28 -bottom-28 h-72 w-72 rounded-full bg-slate-200/65 blur-2xl transition-opacity duration-300 group-hover:opacity-80" />
                            <div className="relative">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white/70 shadow-sm">
                                            {/* table-2 */}
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold tracking-[0.18em] text-slate-500">FEATURE</p>
                                            <h3 className="mt-1 text-xl font-semibold tracking-tight text-slate-900">Automated product tables</h3>
                                        </div>
                                    </div>
                                    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm shrink-0">
                                        {/* file-text */}
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M10 9H8" /><path d="M16 13H8" /><path d="M16 17H8" />
                                        </svg>
                                        Pro
                                    </div>
                                </div>

                                <p className="mt-3 text-sm leading-relaxed text-slate-600">Professional proposals in 1 click.</p>

                                <div className="mt-5 rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm">
                                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                                        {/* clipboard-check */}
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="m9 14 2 2 4-4" />
                                        </svg>
                                        Benefit
                                    </div>
                                    <p className="mt-1 text-sm text-slate-700">Generate consistent tables (SKU, price, specs) without spreadsheet cleanup.</p>

                                    <div className="mt-3 overflow-hidden rounded-xl border border-slate-200 bg-white/80">
                                        <div className="grid grid-cols-12 border-b border-slate-200">
                                            <div className="col-span-5 px-3 py-2 text-[11px] font-semibold text-slate-600">Item</div>
                                            <div className="col-span-3 px-3 py-2 text-[11px] font-semibold text-slate-600">Finish</div>
                                            <div className="col-span-2 px-3 py-2 text-[11px] font-semibold text-slate-600">Qty</div>
                                            <div className="col-span-2 px-3 py-2 text-[11px] font-semibold text-slate-600">Price</div>
                                        </div>
                                        <div className="grid grid-cols-12 border-b border-slate-200">
                                            <div className="col-span-5 px-3 py-2 text-[11px] text-slate-700">Dining chair</div>
                                            <div className="col-span-3 px-3 py-2 text-[11px] text-slate-700">Oak</div>
                                            <div className="col-span-2 px-3 py-2 text-[11px] text-slate-700">6</div>
                                            <div className="col-span-2 px-3 py-2 text-[11px] text-slate-700">$—</div>
                                        </div>
                                        <div className="grid grid-cols-12">
                                            <div className="col-span-5 px-3 py-2 text-[11px] text-slate-700">Pendant light</div>
                                            <div className="col-span-3 px-3 py-2 text-[11px] text-slate-700">Brass</div>
                                            <div className="col-span-2 px-3 py-2 text-[11px] text-slate-700">2</div>
                                            <div className="col-span-2 px-3 py-2 text-[11px] text-slate-700">$—</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* Feature 4 — Fast onboarding */}
                        <article className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/55 p-6 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.35)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_-34px_rgba(15,23,42,0.42)]">
                            <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-amber-200/20 blur-2xl transition-opacity duration-300 group-hover:opacity-80" />
                            <div className="relative">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white/70 shadow-sm">
                                            {/* rocket */}
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold tracking-[0.18em] text-slate-500">FEATURE</p>
                                            <h3 className="mt-1 text-xl font-semibold tracking-tight text-slate-900">Fast onboarding</h3>
                                        </div>
                                    </div>
                                    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm shrink-0">
                                        {/* timer */}
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="10" x2="14" y1="2" y2="2" /><line x1="12" x2="15" y1="14" y2="11" /><circle cx="12" cy="14" r="8" />
                                        </svg>
                                        Quick
                                    </div>
                                </div>

                                <p className="mt-3 text-sm leading-relaxed text-slate-600">Ready in minutes, not weeks.</p>

                                <div className="mt-5 rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm">
                                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                                        {/* clipboard-check */}
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="m9 14 2 2 4-4" />
                                        </svg>
                                        Benefit
                                    </div>
                                    <p className="mt-1 text-sm text-slate-700">Start with a URL today—no complex setup, no long implementation cycle.</p>

                                    <div className="mt-3 flex items-center gap-3">
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between text-[11px] font-semibold text-slate-600">
                                                <span>Setup</span>
                                                <span>Done</span>
                                            </div>
                                            <div className="mt-2 h-2 w-full rounded-full bg-slate-200">
                                                <div className="h-2 w-[88%] rounded-full bg-emerald-300/80" />
                                            </div>
                                        </div>
                                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white/80 shadow-sm">
                                            {/* check */}
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M20 6 9 17l-5-5" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>

                    </div>
                </section>

                {/* CTA row */}
                <section className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-slate-200/80 pt-8 sm:flex-row sm:items-center">
                    <div>
                        <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                            Make your next proposal feel effortless.
                        </h3>
                        <p className="mt-1 text-sm text-slate-600">Bring your catalog in once—reuse it across every project.</p>
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                        <Link
                            href="#"
                            className="inline-flex h-11 items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-800 shadow-sm transition-colors hover:bg-slate-50"
                        >
                            View a sample proposal
                        </Link>
                        <a
                            href="#"
                            className="text-sm text-zinc-700 hover:text-zinc-900 transition-colors inline-flex items-center gap-2"
                        >
                            Talk to us
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                            </svg>
                        </a>
                    </div>
                </section>
            </main>


        </div>
    );
}
