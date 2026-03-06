"use client";

import { useRef, useState } from "react";

const ZOOM_STEPS = [1, 1.5, 2];

export default function HowItWorks() {
    const scrollToSection = (e: React.MouseEvent, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    };
    const [modalOpen, setModalOpen] = useState(false);
    const [isSwapped, setIsSwapped] = useState(false);
    const [zoomIdx, setZoomIdx] = useState(0);
    const [pan, setPan] = useState({ x: 0, y: 0 });
    // Drag state kept in a ref so mouse handlers never go stale
    const dragRef = useRef({ active: false, startX: 0, startY: 0, panX: 0, panY: 0, moved: false });

    function resetView() {
        setZoomIdx(0);
        setPan({ x: 0, y: 0 });
        dragRef.current = { active: false, startX: 0, startY: 0, panX: 0, panY: 0, moved: false };
    }

    function handleOpenModal() {
        setIsSwapped(false);
        resetView();
        setModalOpen(true);
    }

    function handleSwap() {
        setIsSwapped(s => !s);
        resetView();
    }

    function handleZoomClick() {
        setZoomIdx(i => {
            const next = (i + 1) % ZOOM_STEPS.length;
            if (next === 0) setPan({ x: 0, y: 0 });
            return next;
        });
    }

    // ── Drag-to-pan handlers ──
    function onMouseDown(e: React.MouseEvent) {
        e.preventDefault();
        dragRef.current.active = true;
        dragRef.current.moved = false;
        dragRef.current.startX = e.clientX - dragRef.current.panX;
        dragRef.current.startY = e.clientY - dragRef.current.panY;
    }

    function onMouseMove(e: React.MouseEvent) {
        if (!dragRef.current.active || zoomIdx === 0) return; // only pan when zoomed
        dragRef.current.moved = true;
        dragRef.current.panX = e.clientX - dragRef.current.startX;
        dragRef.current.panY = e.clientY - dragRef.current.startY;
        setPan({ x: dragRef.current.panX, y: dragRef.current.panY });
    }

    function onMouseUp() {
        if (!dragRef.current.active) return;
        dragRef.current.active = false;
        // If barely moved (or not zoomed), treat as a zoom click
        if (!dragRef.current.moved) handleZoomClick();
    }

    function onMouseLeave() {
        dragRef.current.active = false;
    }

    // ── PDF Export ──
    const [isExporting, setIsExporting] = useState(false);

    async function loadImageAsDataUrl(url: string): Promise<string> {
        const res = await fetch(url);
        const blob = await res.blob();
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    }

    async function handleExport() {
        setIsExporting(true);
        try {
            const { jsPDF } = await import('jspdf');
            const MOODBOARD_URL = 'https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/bab97295-ed84-4cbb-b211-c97c0fed3bf3/1772587735889-9ebe8e5e/4M.png';
            const TABLE_URL = 'https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/bab97295-ed84-4cbb-b211-c97c0fed3bf3/1772587742425-6cb6e3db/5M.png';

            const [moodboardData, tableData] = await Promise.all([
                loadImageAsDataUrl(MOODBOARD_URL),
                loadImageAsDataUrl(TABLE_URL),
            ]);

            // Page 1 uses A4 landscape (wide — for moodboard)
            // Page 2 uses A4 portrait (tall — for product table)
            const MARGIN = 10;
            const LABEL_H = 10;

            // Get natural pixel dimensions from a data URL
            function getImageSize(dataUrl: string): Promise<{ w: number; h: number }> {
                return new Promise(resolve => {
                    const img = new Image();
                    img.onload = () => resolve({ w: img.naturalWidth, h: img.naturalHeight });
                    img.src = dataUrl;
                });
            }

            const [mbSize, tblSize] = await Promise.all([
                getImageSize(moodboardData),
                getImageSize(tableData),
            ]);

            // Add image, fitting without stretching, centered in the available area
            function addContainedImage(
                pdf: InstanceType<typeof jsPDF>,
                data: string, imgW: number, imgH: number,
                areaX: number, areaY: number, areaW: number, areaH: number
            ) {
                const scale = Math.min(areaW / imgW, areaH / imgH);
                const fitW = imgW * scale;
                const fitH = imgH * scale;
                const x = areaX + (areaW - fitW) / 2;
                const y = areaY + (areaH - fitH) / 2;
                pdf.addImage(data, 'PNG', x, y, fitW, fitH, undefined, 'FAST');
            }

            // ── Page 1: A4 Landscape (297 × 210 mm) — Moodboard ──
            const pdf = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
            let W = pdf.internal.pageSize.getWidth();   // 297
            let H = pdf.internal.pageSize.getHeight();  // 210

            pdf.setFillColor(255, 255, 255);
            pdf.rect(0, 0, W, H, 'F');
            pdf.setFont('helvetica', 'bold');
            pdf.setFontSize(10);
            pdf.setTextColor(100, 100, 100);
            pdf.text('Moodboard  —  Living room set, Sage / Natural', MARGIN, LABEL_H);
            addContainedImage(pdf, moodboardData, mbSize.w, mbSize.h,
                MARGIN, LABEL_H + 2, W - MARGIN * 2, H - LABEL_H - MARGIN - 2);

            // ── Page 2: A4 Portrait (210 × 297 mm) — Product table ──
            pdf.addPage('a4', 'portrait');
            W = pdf.internal.pageSize.getWidth();   // 210
            H = pdf.internal.pageSize.getHeight();  // 297

            pdf.setFillColor(255, 255, 255);
            pdf.rect(0, 0, W, H, 'F');
            pdf.setFont('helvetica', 'bold');
            pdf.setFontSize(9);
            pdf.setTextColor(100, 100, 100);
            pdf.text('Product Table  —  Codes + pricing', MARGIN, LABEL_H);
            addContainedImage(pdf, tableData, tblSize.w, tblSize.h,
                MARGIN, LABEL_H + 2, W - MARGIN * 2, H - LABEL_H - MARGIN - 2);

            pdf.save('client-deliverable.pdf');
        } catch (err) {
            console.error('PDF export failed', err);
        } finally {
            setIsExporting(false);
        }
    }

    return (
        <div id="how-it-works" className="bg-white text-slate-900 relative overflow-hidden">
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
                        <button
                            type="button"
                            onClick={handleOpenModal}
                            className="inline-flex h-11 items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-800 shadow-sm transition-colors hover:bg-slate-50 cursor-pointer"
                        >
                            View example output
                        </button>
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
                </section>
            </main>

            {/* ── EXAMPLE OUTPUT MODAL ── */}
            {modalOpen && (
                <div
                    className="fixed inset-0 z-50"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Example output modal"
                >
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-slate-900/40 animate-[fadeIn_220ms_ease-out_both]"
                        onClick={() => setModalOpen(false)}
                    />

                    {/* Modal container */}
                    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10 h-full overflow-y-auto">
                        <div className="animate-[popIn_380ms_cubic-bezier(.2,.9,.2,1)_both] relative rounded-[28px] border border-white/60 bg-white/70 shadow-[0_30px_90px_-50px_rgba(15,23,42,0.65)] backdrop-blur-xl">

                            {/* Modal header */}
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-5 sm:px-7 pt-5 sm:pt-6">
                                <div className="flex items-start gap-3">
                                    <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/70 bg-white/60">
                                        {/* picture-in-picture icon */}
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M8 3H5a2 2 0 0 0-2 2v3" /><path d="M21 8V5a2 2 0 0 0-2-2h-3" />
                                            <path d="M3 16v3a2 2 0 0 0 2 2h3" /><path d="M21 16v3a2 2 0 0 0-2 2h-3" />
                                            <rect x="9" y="9" width="13" height="8" rx="1" />
                                        </svg>
                                    </span>
                                    <div>
                                        <h2 className="text-base sm:text-lg font-semibold tracking-tight text-slate-900">Client deliverable preview</h2>
                                        <p className="mt-1 text-sm text-slate-600">Moodboard (main) + product table (overlay).</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <button
                                        type="button"
                                        onClick={handleExport}
                                        disabled={isExporting}
                                        className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/60 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-white/80 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                                    >
                                        {isExporting ? (
                                            <>
                                                <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                                                </svg>
                                                Exporting…
                                            </>
                                        ) : (
                                            <>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                                                </svg>
                                                Export PDF
                                            </>
                                        )}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setModalOpen(false)}
                                        className="inline-flex items-center justify-center rounded-full border border-white/70 bg-white/60 p-2.5 text-slate-700 hover:bg-white/80 transition-colors"
                                        aria-label="Close modal"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Modal body */}
                            <div className="mt-5 sm:mt-6 px-5 sm:px-7 pb-6 sm:pb-7">
                                <div className="relative">

                                    {/* ── MAIN panel ── shows moodboard normally, product table when swapped */}
                                    <div className="overflow-hidden rounded-3xl border border-white/70 bg-white shadow-sm">
                                        <div className="flex items-center justify-between gap-4 px-4 sm:px-5 py-3 border-b border-slate-200/60 bg-white/60">
                                            <div className="flex items-center gap-2">
                                                <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-white/70 bg-white/70">
                                                    {isSwapped ? (
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                            <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M3 15h18" /><path d="M9 9v12" />
                                                        </svg>
                                                    ) : (
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                            <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" />
                                                        </svg>
                                                    )}
                                                </span>
                                                <p className="text-sm font-semibold tracking-tight text-slate-900">
                                                    {isSwapped ? "Product table" : "Moodboard"}
                                                </p>
                                                {!isSwapped && (
                                                    <span className="hidden sm:inline-flex items-center rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-600">Living room set — Sage / Natural</span>
                                                )}
                                            </div>
                                        </div>
                                        <div
                                            className="bg-white overflow-hidden h-[320px] sm:h-[440px] flex items-center justify-center"
                                            style={{
                                                cursor: dragRef.current.active
                                                    ? 'grabbing'
                                                    : zoomIdx > 0
                                                        ? 'grab'
                                                        : 'zoom-in',
                                            }}
                                            onMouseDown={onMouseDown}
                                            onMouseMove={onMouseMove}
                                            onMouseUp={onMouseUp}
                                            onMouseLeave={onMouseLeave}
                                        >
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={isSwapped
                                                    ? "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/bab97295-ed84-4cbb-b211-c97c0fed3bf3/1772587742425-6cb6e3db/5M.png"
                                                    : "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/bab97295-ed84-4cbb-b211-c97c0fed3bf3/1772587735889-9ebe8e5e/4M.png"
                                                }
                                                alt={isSwapped ? "Product table preview" : "Moodboard preview"}
                                                className="w-full h-full object-contain select-none"
                                                style={{
                                                    transform: `translate(${pan.x}px, ${pan.y}px) scale(${ZOOM_STEPS[zoomIdx]})`,
                                                    transition: dragRef.current.active ? 'none' : 'transform 350ms cubic-bezier(.2,.9,.2,1)',
                                                }}
                                                draggable={false}
                                            />
                                        </div>
                                    </div>

                                    {/* ── PiP overlay ── shows product table normally, moodboard when swapped */}
                                    <div className="animate-[floatIn_420ms_cubic-bezier(.2,.9,.2,1)_70ms_both] absolute right-3 sm:right-6 bottom-3 sm:bottom-6 w-[230px] sm:w-[300px] md:w-[340px]">
                                        <div className="rounded-3xl border border-white/70 bg-white/75 shadow-[0_22px_70px_-45px_rgba(15,23,42,0.7)] backdrop-blur-xl overflow-hidden">
                                            <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-slate-200/60 bg-white/65">
                                                <div className="flex items-center gap-2 min-w-0">
                                                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-white/70 bg-white/70 shrink-0">
                                                        {isSwapped ? (
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" />
                                                            </svg>
                                                        ) : (
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M3 15h18" /><path d="M9 9v12" />
                                                            </svg>
                                                        )}
                                                    </span>
                                                    <div className="min-w-0">
                                                        <p className="text-sm font-semibold tracking-tight truncate text-slate-900">
                                                            {isSwapped ? "Moodboard" : "Product table"}
                                                        </p>
                                                        <p className="text-xs text-slate-600 truncate">
                                                            {isSwapped ? "Living room set — Sage / Natural" : "Codes + prices (client-ready)"}
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* Expand button — swaps main ↔ PiP */}
                                                <button
                                                    type="button"
                                                    onClick={handleSwap}
                                                    className="inline-flex items-center justify-center rounded-xl border border-white/70 bg-white/70 p-2 text-slate-700 hover:bg-white transition-colors shrink-0"
                                                    aria-label="Expand to main view"
                                                    title="Expand to main view"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" />
                                                        <line x1="21" y1="3" x2="14" y2="10" /><line x1="3" y1="21" x2="10" y2="14" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="p-3 bg-white/40">
                                                <div className="overflow-hidden rounded-2xl border border-slate-200/70 bg-white">
                                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                                    <img
                                                        src={isSwapped
                                                            ? "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/bab97295-ed84-4cbb-b211-c97c0fed3bf3/1772587735889-9ebe8e5e/4M.png"
                                                            : "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/bab97295-ed84-4cbb-b211-c97c0fed3bf3/1772587742425-6cb6e3db/5M.png"
                                                        }
                                                        alt={isSwapped ? "Moodboard preview" : "Product table preview"}
                                                        className="w-full h-[200px] sm:h-[240px] object-cover transition-all duration-500"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        {/* Hint tag */}
                                        <div className="mt-2 flex justify-end">
                                            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-medium text-slate-600 shadow-sm">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z" /><path d="m13 13 6 6" /></svg>
                                                Picture-in-picture
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Modal footer */}
                                <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                                    <div className="flex items-center gap-2 text-xs text-slate-600">
                                        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/70 bg-white/60 px-3 py-1.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                            Generated in 5 seconds
                                        </span>
                                        <span className="hidden sm:inline text-slate-400">•</span>
                                        <span className="hidden sm:inline">Accurate images, SKU, codes & pricing</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <a href="#" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 transition-colors">
                                            Try it on your catalog
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Keyframe styles */}
            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes popIn {
                    from { opacity: 0; transform: translateY(10px) scale(0.98); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }
                @keyframes floatIn {
                    from { opacity: 0; transform: translate(10px, 10px) scale(0.98); }
                    to { opacity: 1; transform: translate(0, 0) scale(1); }
                }
            `}</style>
        </div>
    );
}