"use client";

import React, { useState, useRef, useEffect } from 'react';
import jsPDF from 'jspdf';

const ZOOM_STEPS = [1, 1.5, 2.2, 3.5];

export default function HowItWorks() {
    const [modalOpen, setModalOpen] = useState(false);
    const [playingVideo, setPlayingVideo] = useState(false);
    const [isExporting, setIsExporting] = useState(false);
    const [isSwapped, setIsSwapped] = useState(false);
    const [zoomIdx, setZoomIdx] = useState(0);
    const [pan, setPan] = useState({ x: 0, y: 0 });
    const dragRef = useRef({ active: false, startX: 0, startY: 0, panX: 0, panY: 0 });

    // Handle smooth scrolling
    const scrollToSection = (e: React.MouseEvent, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    };

    const handleOpenModal = () => {
        setModalOpen(true);
        setZoomIdx(0);
        setPan({ x: 0, y: 0 });
        setIsSwapped(false);
    };

    const handleSwap = () => {
        setIsSwapped(!isSwapped);
        setZoomIdx(0);
        setPan({ x: 0, y: 0 });
    };

    const handleExport = async () => {
        setIsExporting(true);
        const doc = new jsPDF({ orientation: 'l', unit: 'px', format: [1600, 1200] });
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = isSwapped
            ? "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/bab97295-ed84-4cbb-b211-c97c0fed3bf3/1772587742425-6cb6e3db/5M.png"
            : "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/bab97295-ed84-4cbb-b211-c97c0fed3bf3/1772587735889-9ebe8e5e/4M.png";

        img.onload = () => {
            doc.addImage(img, 'PNG', 0, 0, 1600, 1200);
            doc.save(`Moodboard-Export-${Date.now()}.pdf`);
            setIsExporting(false);
        };
    };

    // ── Drag & Zoom logic ──
    const onMouseDown = (e: React.MouseEvent) => {
        if (zoomIdx === 0) {
            setZoomIdx(1);
            return;
        }
        dragRef.current = { active: true, startX: e.clientX, startY: e.clientY, panX: pan.x, panY: pan.y };
    };

    const onMouseMove = (e: React.MouseEvent) => {
        if (!dragRef.current.active) return;
        const dx = e.clientX - dragRef.current.startX;
        const dy = e.clientY - dragRef.current.startY;
        setPan({ x: dragRef.current.panX + dx, y: dragRef.current.panY + dy });
    };

    const onMouseUp = () => { dragRef.current.active = false; };
    const onMouseLeave = () => { dragRef.current.active = false; };

    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            if (!modalOpen) return;
            if (e.ctrlKey) {
                e.preventDefault();
                setZoomIdx(prev => Math.min(ZOOM_STEPS.length - 1, Math.max(0, e.deltaY < 0 ? prev + 1 : prev - 1)));
            }
        };
        window.addEventListener('wheel', handleWheel, { passive: false });
        return () => window.removeEventListener('wheel', handleWheel);
    }, [modalOpen]);

    return (
        <section id="how-it-works" className="relative bg-white overflow-hidden min-h-screen flex flex-col items-center justify-center p-8 lg:p-24">

            {/* Background accents (matching ProblemSection) */}
            <div className="absolute inset-0 pointer-events-none -z-10">
                <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-amber-300/20 blur-3xl" />
                <div className="absolute -bottom-28 -right-28 h-[520px] w-[520px] rounded-full bg-emerald-300/15 blur-3xl" />
                <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)",
                        backgroundSize: "72px 72px",
                    }}
                />
            </div>

            {/* Header Section */}
            <div className="max-w-4xl w-full text-center mb-16 md:mb-24 relative z-10">
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-zinc-500 mb-4 block">HOW IT WORKS</span>
                <h2 className="text-4xl md:text-6xl font-general font-bold text-zinc-900 tracking-tight mb-6">
                    From URL to proposal-ready <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">in minutes</span>
                </h2>
                <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
                    A simple three-step flow that turns a messy catalog into a clean, searchable workspace—then into client-ready deliverables.
                </p>
            </div>

            {/* Main Content Grid */}
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">

                {/* Left Steps (1 & 2) */}
                <div className="lg:col-span-3 space-y-8 order-2 lg:order-1">
                    {/* Step 1 Card */}
                    <div className="glass-card p-8 rounded-[2.5rem] relative group border border-zinc-200/60">
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center border border-zinc-100">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M3 7V5a2 2 0 0 1 2-2h2" /><path d="M17 3h2a2 2 0 0 1 2 2v2" /><path d="M21 17v2a2 2 0 0 1-2 2h-2" /><path d="M7 21H5a2 2 0 0 1-2-2v-2" /><circle cx="12" cy="12" r="3" /><path d="m16 16-1.9-1.9" /></svg>
                            </div>
                            <span className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center font-bold text-zinc-400">1</span>
                        </div>
                        <h3 className="text-xl font-bold text-zinc-900 mb-3">We Scrape Your Catalog</h3>
                        <p className="text-sm text-zinc-600 leading-relaxed mb-6">Give us your website URL, tool extracts products, photos, prices & specs.</p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 rounded-full bg-zinc-100 text-[10px] font-bold text-zinc-500">URL INPUT</span>
                            <span className="px-3 py-1 rounded-full bg-zinc-100 text-[10px] font-bold text-zinc-500">PHOTOS</span>
                        </div>
                    </div>

                    {/* Step 2 Card */}
                    <div className="glass-card p-8 rounded-[2.5rem] relative group border border-zinc-200/60">
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center border border-zinc-100">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500"><rect width="7" height="7" x="3" y="3" rx="1" /><rect width="7" height="7" x="14" y="3" rx="1" /><rect width="7" height="7" x="14" y="14" rx="1" /><rect width="7" height="7" x="3" y="14" rx="1" /></svg>
                            </div>
                            <span className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center font-bold text-zinc-400">2</span>
                        </div>
                        <h3 className="text-xl font-bold text-zinc-900 mb-3">Lives in Platform</h3>
                        <p className="text-sm text-zinc-600 leading-relaxed mb-6">All furniture searchable, filterable and organized in your workspace.</p>
                        <div className="w-full h-8 bg-zinc-100 rounded-lg flex items-center px-3 gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                            <div className="h-1.5 w-2/3 bg-zinc-300 rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* Center Video Block */}
                <div className="lg:col-span-6 order-1 lg:order-2 space-y-10">
                    <div className="video-container group relative border border-zinc-200/50 bg-black">
                        {playingVideo ? (
                            <iframe
                                src="https://www.youtube.com/embed/BNLhRGwF7AY?autoplay=1"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        ) : (
                            <>
                                {/* Thumbnail/Image Placeholder */}
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1600" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Tutorial Preview" />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-zinc-900/10 group-hover:bg-zinc-900/5 transition-colors"></div>

                                {/* Play Button Overlay */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <button onClick={() => setPlayingVideo(true)} className="play-button w-24 h-24 rounded-full flex items-center justify-center mb-6 shadow-2xl">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-800 ml-2"><polygon points="6 3 20 12 6 21 6 3" /></svg>
                                    </button>
                                    <div className="bg-white/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/50">
                                        <span className="text-zinc-800 font-bold text-[10px] tracking-widest">TUTORIAL — 2 MINS</span>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                    {/* Video CTA */}
                    <div className="flex justify-center">
                        <button onClick={(e) => scrollToSection(e, 'pricing')} className="glass-card px-10 py-5 rounded-[2rem] text-zinc-900 font-bold text-sm tracking-tight flex items-center gap-4 hover:scale-105 active:scale-95 border border-zinc-200/60 shadow-lg">
                            <div className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                            </div>
                            Subscribe to unlock full features
                        </button>
                    </div>
                </div>

                {/* Right Step (3) & Bonus */}
                <div className="lg:col-span-3 space-y-8 order-3">
                    {/* Step 3 Card */}
                    <div className="glass-card p-8 rounded-[2.5rem] relative group lg:h-full border border-zinc-200/60">
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center border border-zinc-100">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
                            </div>
                            <span className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center font-bold text-zinc-400">3</span>
                        </div>
                        <h3 className="text-xl font-bold text-zinc-900 mb-3">Create, Design & Send</h3>
                        <p className="text-sm text-zinc-600 leading-relaxed mb-6">Build moodboards, generate product tables, send proposals in minutes.</p>
                        <div className="space-y-3">
                            <div className="w-full h-12 bg-white/60 border border-zinc-200/50 rounded-xl flex items-center justify-between px-4">
                                <span className="text-[10px] font-bold text-zinc-400">Proposal ready →</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                            </div>
                            <div className="flex -space-x-3">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="https://i.pravatar.cc/100?u=1" alt="User" className="w-10 h-10 rounded-full border-2 border-white bg-slate-100" />
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="https://i.pravatar.cc/100?u=2" alt="User" className="w-10 h-10 rounded-full border-2 border-white bg-slate-100" />
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="https://i.pravatar.cc/100?u=3" alt="User" className="w-10 h-10 rounded-full border-2 border-white bg-slate-100" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom Footer Section */}
            <div className="w-full max-w-7xl mt-24 pt-16 border-t border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                <div className="flex flex-col items-center md:items-start">
                    <h4 className="text-2xl font-bold text-zinc-900 mb-2">Ready to transform your workflow?</h4>
                    <p className="text-zinc-600 font-medium text-center md:text-left">Paste a URL and watch your products organize themselves.</p>
                </div>
                <button
                    onClick={handleOpenModal}
                    className="bg-zinc-900 text-white px-10 py-5 rounded-[2rem] font-bold flex items-center gap-4 transition-all hover:bg-black hover:shadow-2xl active:scale-95 group"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-125 transition-transform"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
                    View example output
                </button>
            </div>

            {/* ── EXAMPLE OUTPUT MODAL ── */}
            {modalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Example output modal"
                >
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-zinc-900/60 backdrop-blur-sm animate-[fadeIn_220ms_ease-out_both]"
                        onClick={() => setModalOpen(false)}
                    />

                    {/* Modal container */}
                    <div className="relative w-full max-w-5xl animate-[popIn_380ms_cubic-bezier(.2,.9,.2,1)_both] rounded-[32px] border border-zinc-200 bg-white/95 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)] backdrop-blur-xl overflow-hidden flex flex-col max-h-[90vh]">

                        {/* Modal header */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-6 py-5 border-b border-zinc-100">
                            <div className="flex items-start gap-3">
                                <div className="mt-0.5 w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-zinc-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" />
                                    </svg>
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold text-zinc-900 tracking-tight">Client deliverable preview</h2>
                                    <p className="text-xs text-zinc-500">Moodboard (main) + product table (overlay).</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <button
                                    type="button"
                                    onClick={handleExport}
                                    disabled={isExporting}
                                    className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs font-bold text-zinc-700 hover:bg-zinc-50 transition-colors disabled:opacity-60"
                                >
                                    {isExporting ? "Exporting…" : "Export PDF"}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                                    </svg>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setModalOpen(false)}
                                    className="w-10 h-10 rounded-full border border-zinc-200 bg-white flex items-center justify-center text-zinc-500 hover:bg-zinc-50 transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Modal body */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            <div className="relative">
                                {/* MAIN panel */}
                                <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 relative group">
                                    <div className="flex items-center justify-between gap-4 px-4 py-2 bg-white/80 backdrop-blur border-b border-zinc-100 relative z-10">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{isSwapped ? "Product Table" : "Moodboard View"}</span>
                                            <span className="w-1 h-1 rounded-full bg-zinc-300"></span>
                                            <span className="text-[10px] font-bold text-zinc-500">Living room set — Sage</span>
                                        </div>
                                    </div>
                                    <div
                                        className="h-[400px] flex items-center justify-center overflow-hidden"
                                        style={{ cursor: dragRef.current.active ? 'grabbing' : zoomIdx > 0 ? 'grab' : 'zoom-in' }}
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
                                            alt="Preview"
                                            className="w-full h-full object-contain select-none"
                                            style={{
                                                transform: `translate(${pan.x}px, ${pan.y}px) scale(${ZOOM_STEPS[zoomIdx]})`,
                                                transition: dragRef.current.active ? 'none' : 'transform 350ms cubic-bezier(.2,.9,.2,1)',
                                            }}
                                            draggable={false}
                                        />
                                    </div>
                                </div>

                                {/* PiP overlay */}
                                <div className="absolute right-4 bottom-4 w-64 animate-[floatIn_420ms_cubic-bezier(.2,.9,.2,1)_70ms_both]">
                                    <div className="rounded-2xl border border-zinc-200 bg-white shadow-2xl overflow-hidden">
                                        <div className="flex items-center justify-between px-3 py-2 border-b border-zinc-100 bg-zinc-50/50">
                                            <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">{isSwapped ? "Moodboard" : "Table"}</span>
                                            <button onClick={handleSwap} className="p-1 hover:bg-zinc-100 rounded-md transition-colors text-zinc-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" /><line x1="21" y1="3" x2="14" y2="10" /><line x1="3" y1="21" x2="10" y2="14" /></svg>
                                            </button>
                                        </div>
                                        <div className="p-2">
                                            <div className="rounded-lg overflow-hidden border border-zinc-100 h-32 bg-zinc-50">
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img
                                                    src={isSwapped
                                                        ? "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/bab97295-ed84-4cbb-b211-c97c0fed3bf3/1772587735889-9ebe8e5e/4M.png"
                                                        : "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/bab97295-ed84-4cbb-b211-c97c0fed3bf3/1772587742425-6cb6e3db/5M.png"
                                                    }
                                                    alt="PiP"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Modal footer */}
                        <div className="px-6 py-4 bg-zinc-50 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                                <span className="text-emerald-500 flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                Live Sync — Accurate pricing & images
                            </div>
                            <button onClick={() => setModalOpen(false)} className="w-full sm:w-auto bg-zinc-900 text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-black transition-all active:scale-95">
                                Try it now
                            </button>
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
                    from { opacity: 0; transform: translateY(20px) scale(0.96); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }
                @keyframes floatIn {
                    from { opacity: 0; transform: translate(10px, 10px) scale(0.96); }
                    to { opacity: 1; transform: translate(0, 0) scale(1); }
                }
            `}</style>
        </section>
    );
}