import Link from "next/link";

export default function HowItWorks() {
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
                <header className="max-w-2xl">
                    <p className="text-xs font-semibold tracking-[0.18em] text-slate-500">
                        HOW IT WORKS
                    </p>
                    <h2 className="mt-3 text-3xl tracking-tight sm:text-4xl font-semibold text-slate-900">
                        From URL to proposal-ready in minutes
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                        A simple three-step flow that turns a messy catalog into a clean,
                        searchable workspace—then into client-ready deliverables.
                    </p>
                </header>

                {/* Steps */}
                <section className="relative mt-10 lg:mt-14">
                    {/* Connector line — desktop only */}
                    <div className="pointer-events-none absolute left-0 right-0 top-[44px] hidden lg:block">
                        <div className="mx-10 h-px bg-gradient-to-r from-transparent via-slate-300/70 to-transparent" />
                    </div>

                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
                        {/* ── Card 1 ── */}
                        <article className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/55 p-6 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.35)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_-34px_rgba(15,23,42,0.42)]">
                            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-amber-200/35 blur-2xl transition-opacity duration-300 group-hover:opacity-80" />
                            <div className="relative">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="inline-flex items-center gap-3">
                                        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white/70 shadow-sm">
                                            {/* scan-search icon */}
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M3 7V5a2 2 0 0 1 2-2h2" /><path d="M17 3h2a2 2 0 0 1 2 2v2" />
                                                <path d="M21 17v2a2 2 0 0 1-2 2h-2" /><path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                                                <circle cx="12" cy="12" r="3" /><path d="m16 16-1.9-1.9" />
                                            </svg>
                                        </div>
                                        <div className="text-sm font-semibold tracking-tight text-slate-700">Step</div>
                                    </div>
                                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white/70 text-xl font-semibold tracking-tight text-slate-900 shadow-sm">
                                        1
                                    </div>
                                </div>

                                <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-900">
                                    We Scrape Your Catalog
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                    Give us your website URL, tool extracts products, photos, prices &amp; specs.
                                </p>

                                <div className="mt-5 flex flex-wrap gap-2">
                                    {[
                                        { label: "URL input", icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg> },
                                        { label: "Photos", icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg> },
                                        { label: "Prices", icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></svg> },
                                    ].map(({ label, icon }) => (
                                        <span key={label} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700">
                                            {icon}
                                            {label}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </article>

                        {/* ── Card 2 ── */}
                        <article className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/55 p-6 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.35)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_-34px_rgba(15,23,42,0.42)]">
                            <div className="absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-emerald-200/30 blur-2xl transition-opacity duration-300 group-hover:opacity-80" />
                            <div className="relative">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="inline-flex items-center gap-3">
                                        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white/70 shadow-sm">
                                            {/* layout-grid icon */}
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
                                                <rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
                                            </svg>
                                        </div>
                                        <div className="text-sm font-semibold tracking-tight text-slate-700">Step</div>
                                    </div>
                                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white/70 text-xl font-semibold tracking-tight text-slate-900 shadow-sm">
                                        2
                                    </div>
                                </div>

                                <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-900">
                                    Your Catalog Lives in the Platform
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                    All furniture searchable, filterable in workspace.
                                </p>

                                <div className="mt-5 grid grid-cols-2 gap-3">
                                    <div className="rounded-2xl border border-slate-200 bg-white/70 p-3">
                                        <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                                            </svg>
                                            Search
                                        </div>
                                        <div className="mt-2 h-2 w-full rounded-full bg-slate-200">
                                            <div className="h-2 w-2/3 rounded-full bg-slate-900/70" />
                                        </div>
                                    </div>
                                    <div className="rounded-2xl border border-slate-200 bg-white/70 p-3">
                                        <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="4" y1="6" x2="20" y2="6" /><line x1="8" y1="12" x2="16" y2="12" /><line x1="11" y1="18" x2="13" y2="18" />
                                            </svg>
                                            Filters
                                        </div>
                                        <div className="mt-2 flex gap-2">
                                            <span className="h-2 w-10 rounded-full bg-emerald-300/70" />
                                            <span className="h-2 w-16 rounded-full bg-amber-300/70" />
                                            <span className="h-2 w-8 rounded-full bg-slate-300" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* ── Card 3 ── */}
                        <article className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/55 p-6 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.35)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_-34px_rgba(15,23,42,0.42)]">
                            <div className="absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-slate-200/60 blur-2xl transition-opacity duration-300 group-hover:opacity-80" />
                            <div className="relative">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="inline-flex items-center gap-3">
                                        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white/70 shadow-sm">
                                            {/* send icon */}
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                                            </svg>
                                        </div>
                                        <div className="text-sm font-semibold tracking-tight text-slate-700">Step</div>
                                    </div>
                                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white/70 text-xl font-semibold tracking-tight text-slate-900 shadow-sm">
                                        3
                                    </div>
                                </div>

                                <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-900">
                                    Create, Design &amp; Send
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                    Build moodboards, generate product tables, send proposals in minutes.
                                </p>

                                <div className="mt-5 flex items-center gap-3">
                                    <div className="flex -space-x-2">
                                        <div className="h-9 w-9 rounded-2xl border border-slate-200 bg-white/80 shadow-sm" />
                                        <div className="h-9 w-9 rounded-2xl border border-slate-200 bg-white/80 shadow-sm" />
                                        <div className="h-9 w-9 rounded-2xl border border-slate-200 bg-white/80 shadow-sm" />
                                    </div>
                                    <div className="h-9 flex-1 rounded-2xl border border-slate-200 bg-white/70 px-3 py-2 text-xs font-medium text-slate-700 shadow-sm">
                                        Proposal ready →
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>

                    {/* Mobile connector hints */}
                    <div className="mt-6 lg:hidden">
                        <div className="flex items-center gap-3 text-xs font-medium text-slate-500">
                            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white/70">1</span>
                            <div className="h-px flex-1 bg-slate-200" />
                            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white/70">2</span>
                            <div className="h-px flex-1 bg-slate-200" />
                            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white/70">3</span>
                        </div>
                    </div>
                </section>

                {/* CTA row */}
                <section className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-slate-200/80 pt-8 sm:flex-row sm:items-center">
                    <div>
                        <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                            Ready to see it on your catalog?
                        </h3>
                        <p className="mt-1 text-sm text-slate-600">
                            Paste a URL and watch your products organize themselves.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                        <Link
                            href="#"
                            className="inline-flex h-11 items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-800 shadow-sm transition-colors hover:bg-slate-50"
                        >
                            View example output
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