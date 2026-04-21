"use client";

import { useState } from "react";
import Link from "next/link";
import { supabase } from "../lib/supabase";

const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
};

const CHECK_ICON = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

const X_ICON = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

const MINUS_ICON = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
);

const SPARKLES_ICON = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    </svg>
);

const freeFeatures = [
    "Unlimited product imports from retailer websites",
    "Unlimited moodboard projects",
    " Smart pricing lists with images, SKUs, and totals",
    "One-click PDF export",
    "Premium presentation templates",
    "Dedicated email support",
];

const proFeatures = [
    "Everything in Standard",
    "AI furniture inpainting and visual edits",
    "AI-generated lifestyle room scenes",
    "One-click presentation polishing",
    "Premium export resolution",
    "Full branding customization",
    "VIP support",
];


const comparisonRows = [
    {
        label: "Product Imports",
        sub: "From retailer websites",
        free: <span className="font-semibold text-slate-800">Unlimited</span>,
        pro: <span className="font-semibold text-emerald-600">Unlimited</span>,
    },
    {
        label: "Moodboard Projects",
        sub: null,
        free: <span className="font-semibold text-slate-800">Unlimited</span>,
        pro: <span className="font-semibold text-emerald-600">Unlimited</span>,
    },
    {
        label: "Smart Pricing Lists",
        sub: "Includes images, SKUs & totals",
        free: <span className="text-emerald-500">{CHECK_ICON}</span>,
        pro: <span className="text-emerald-500">{CHECK_ICON}</span>,
    },
    {
        label: "PDF Export",
        sub: null,
        free: <span className="font-semibold text-slate-800">One-click</span>,
        pro: <span className="font-semibold text-emerald-600">Premium Resolution</span>,
    },
    {
        label: "Presentation Templates",
        sub: null,
        free: <span className="font-semibold text-slate-800">Premium</span>,
        pro: <span className="font-semibold text-emerald-600">One-click Polishing</span>,
    },
    {
        label: "Custom Branding",
        sub: null,
        free: <span className="text-slate-300">{MINUS_ICON}</span>,
        pro: <span className="text-emerald-500">{CHECK_ICON}</span>,
    },
    {
        label: "AI Generation",
        sub: "Inpainting & Lifestyle scenes",
        free: <span className="text-slate-300">{X_ICON}</span>,
        pro: <span className="text-emerald-500">{CHECK_ICON}</span>,
    },
    {
        label: "Support Level",
        sub: null,
        free: <span className="font-semibold text-slate-800">Dedicated Email</span>,
        pro: <span className="font-semibold text-emerald-600">VIP Support</span>,
    },
];

const CHECKOUT_LINKS = {
    standard: {
        monthly: process.env.NEXT_PUBLIC_POLAR_STANDARD_MONTHLY || "",
        annual: process.env.NEXT_PUBLIC_POLAR_STANDARD_ANNUAL || ""
    },
    premium: {
        monthly: process.env.NEXT_PUBLIC_POLAR_PREMIUM_MONTHLY || "",
        annual: process.env.NEXT_PUBLIC_POLAR_PREMIUM_ANNUAL || ""
    }
};

export default function Subscriptions() {
    const [annual, setAnnual] = useState(false);
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const standardPrice = annual ? 75 : 79;
    const proPrice = annual ? 150 : 159;

    const handleEarlyAccessSubmit = async (e: React.FormEvent) => {
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
        <section id="pricing" className="relative overflow-hidden bg-white">
            {/* Background blobs */}
            <div className="pointer-events-none absolute inset-0 z-0">
                <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-amber-200/35 blur-[100px]" />
                <div className="absolute -right-56 -bottom-56 h-[620px] w-[620px] rounded-full bg-emerald-200/25 blur-[120px]" />
                <div className="absolute left-1/2 top-10 h-[420px] w-[740px] -translate-x-1/2 rounded-full bg-slate-200/40 blur-[100px]" />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-16 pb-8 lg:pt-24 lg:pb-8">
                {/* Header */}
                <header className="mb-16 text-center lg:mb-24">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                        Pricing &amp; Plans
                    </p>
                    <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                        Choose the plan that fits your team
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
                        Scale your workflow from personal catalogs to team-wide automation.
                        Simple pricing for every stage of your agency&apos;s growth.
                    </p>

                    {/* Billing toggle */}
                    <div className="mt-10 flex items-center justify-center gap-4 text-sm font-semibold">
                        <span className="text-slate-900">Monthly</span>
                        <button
                            id="billing-toggle"
                            onClick={() => setAnnual(!annual)}
                            className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none"
                            style={{ backgroundColor: annual ? "#10b981" : "#e2e8f0" }}
                            aria-label="Toggle annual billing"
                        >
                            <span
                                className="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200"
                                style={{ transform: annual ? "translateX(20px)" : "translateX(0px)" }}
                            />
                        </button>
                        <span className="text-slate-500">
                            Annual{" "}
                            <span className="ml-1 font-bold text-emerald-600">Save</span>
                        </span>
                    </div>
                </header>

                {/* Pricing cards */}
                <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
                    {/* Free card */}
                    <article
                        className="relative flex flex-col rounded-[32px] p-8 transition-all duration-500 hover:-translate-y-2"
                        style={{
                            background: "rgba(255,255,255,0.55)",
                            backdropFilter: "blur(16px)",
                            border: "1px solid rgba(226,232,240,0.7)",
                            boxShadow: "0 18px 44px -30px rgba(15,23,42,0.2)",
                        }}
                    >
                        <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-amber-100/30 blur-2xl" />
                        <div className="relative flex-1">
                            <div className="mb-6 flex items-center gap-3">
                                <div
                                    className="flex h-10 w-10 items-center justify-center rounded-xl shadow-sm"
                                    style={{
                                        background: "rgba(255,255,255,0.7)",
                                        border: "1px solid rgba(226,232,240,1)",
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-800">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold tracking-tight text-slate-900" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Standard Plan</h3>
                            </div>
                            <div className="mb-6">
                                <span className="text-4xl font-bold tracking-tight text-slate-900">${standardPrice}</span>
                                <span className="ml-1 text-sm text-slate-500">/month</span>
                                {annual && (
                                    <span className="ml-2 text-xs font-semibold text-amber-600">
                                        billed annually
                                    </span>
                                )}
                            </div>
                            <p className="mb-8 text-sm leading-relaxed text-slate-600">
                                Built for interior designers and furniture retailers who need a fast, professional way to create client-ready moodboards and pricing lists.
                            </p>
                            <ul className="mb-8 space-y-4">
                                {freeFeatures.map((f) => (
                                    <li key={f} className="flex items-start gap-3 text-sm text-slate-600">
                                        <span className="mt-0.5 text-amber-500">{CHECK_ICON}</span>
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <a href={annual ? CHECKOUT_LINKS.standard.annual : CHECKOUT_LINKS.standard.monthly} className="mt-auto inline-flex h-12 w-full items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-800 transition-all hover:bg-slate-50 cursor-pointer">Select plan</a>
                    </article>

                    {/* Pro card */}
                    <article
                        className="relative flex flex-col rounded-[32px] p-8 transition-all duration-500 hover:-translate-y-2"
                        style={{
                            background: "rgba(255,255,255,0.55)",
                            backdropFilter: "blur(16px)",
                            border: "1px solid rgba(226,232,240,0.7)",
                            boxShadow: "0 18px 44px -30px rgba(15,23,42,0.2), 0 0 0 2px rgba(52,211,153,0.3)",
                        }}
                    >
                        <div className="absolute -right-4 -top-4 z-10">
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-[10px] font-bold text-emerald-700 shadow-sm">
                                MOST POPULAR
                            </span>
                        </div>
                        <div className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-emerald-100/40 blur-3xl" />
                        <div className="relative flex-1">
                            <div className="mb-6 flex items-center gap-3">
                                <div
                                    className="flex h-10 w-10 items-center justify-center rounded-xl shadow-sm"
                                    style={{
                                        background: "rgba(255,255,255,0.7)",
                                        border: "1px solid rgba(226,232,240,1)",
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600">
                                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold tracking-tight text-slate-900" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Premium Plan</h3>
                            </div>
                            <div className="mb-6">
                                <span className="text-4xl font-bold tracking-tight text-slate-900">${proPrice}</span>
                                <span className="ml-1 text-sm text-slate-500">/month</span>
                                {annual && (
                                    <span className="ml-2 text-xs font-semibold text-emerald-600">
                                        billed annually
                                    </span>
                                )}
                            </div>
                            <p className="mb-8 text-sm leading-relaxed text-slate-600">
                                For studios, retailers, and design professionals who need faster workflows and premium AI-powered client presentations.

                            </p>
                            <ul className="mb-8 space-y-4">
                                {proFeatures.map((f) => (
                                    <li key={f} className="flex items-start gap-3 text-sm text-slate-600">
                                        <span className="mt-0.5 text-emerald-500">{CHECK_ICON}</span>
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <a href={annual ? CHECKOUT_LINKS.premium.annual : CHECKOUT_LINKS.premium.monthly} className="mt-auto inline-flex h-12 w-full items-center justify-center rounded-2xl bg-slate-900 px-6 text-sm font-semibold text-white shadow-lg transition-all hover:bg-slate-800 cursor-pointer">Select plan</a>
                    </article>
                </div>

                {/* Feature comparison table */}
                <div className="mt-32">
                    <div className="mb-12 text-center">
                        <h2 className="text-2xl font-semibold tracking-tight text-slate-900" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                            Compare all features
                        </h2>
                    </div>
                    <div
                        className="mx-auto max-w-4xl overflow-hidden rounded-[32px]"
                        style={{
                            background: "rgba(255,255,255,0.55)",
                            backdropFilter: "blur(16px)",
                            border: "1px solid rgba(226,232,240,0.7)",
                            boxShadow: "0 18px 44px -30px rgba(15,23,42,0.2)",
                        }}
                    >
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-left">
                                <thead className="bg-slate-50/50">
                                    <tr>
                                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                                            Core Features
                                        </th>
                                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-900">
                                            Standard Plan
                                        </th>
                                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-emerald-600">
                                            Premium Plan
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {comparisonRows.map((row) => (
                                        <tr key={row.label} className="transition-colors hover:bg-white/40">
                                            <td className="px-6 py-5">
                                                <p className="text-sm font-semibold text-slate-700">{row.label}</p>
                                                {row.sub && <p className="text-xs text-slate-400">{row.sub}</p>}
                                            </td>
                                            <td className="px-6 py-5 text-sm">{row.free}</td>
                                            <td className="px-6 py-5 text-sm">{row.pro}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Early access CTA */}
                <div className="relative mt-32 overflow-hidden rounded-[40px] bg-slate-900 p-12 text-center lg:p-20">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-[100px]" />
                        <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-amber-500/10 blur-[100px]" />
                    </div>
                    <div className="relative z-10 mx-auto max-w-2xl">
                        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                            Ready to streamline your workflow?
                        </h2>
                        <div className="mt-10">
                            <form
                                className="group mx-auto flex max-w-lg flex-col gap-2 rounded-[22px] border border-white/10 bg-white/5 p-1.5 shadow-2xl backdrop-blur-xl transition-all focus-within:border-white/25 focus-within:bg-white/10 sm:flex-row"
                                onSubmit={handleEarlyAccessSubmit}
                            >
                                <input
                                    type="email"
                                    id="email-early-access-input"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email..."
                                    className="flex-1 border-none bg-transparent px-6 py-4 text-sm text-white placeholder-white/30 focus:outline-none focus:ring-0"
                                    required
                                    disabled={status === "loading" || status === "success"}
                                />
                                <button
                                    type="submit"
                                    id="email-early-access-submit"
                                    className="inline-flex h-12 items-center justify-center rounded-2xl border border-white/20 bg-slate-950 px-8 text-sm font-bold text-white shadow-lg transition-all hover:bg-slate-900 active:scale-95 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                    disabled={status === "loading" || status === "success"}
                                >
                                    {status === "loading" ? "Submitting..." : status === "success" ? "Joined!" : "Get Early Access"}
                                </button>
                            </form>
                            {status === "error" && (
                                <p className="mt-2 text-sm text-red-400">Something went wrong. Please try again.</p>
                            )}
                            {status === "success" && (
                                <p className="mt-2 text-sm text-emerald-400">Thanks for joining! We'll be in touch soon.</p>
                            )}
                            <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                                We&apos;ll reach out within 24 hours to help you get started
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="mt-20 border-t border-slate-100 pt-10">
                    <div id="get-in-touch" className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                            <span className="text-amber-400">{SPARKLES_ICON}</span>
                            Subscription wins: scrape faster, present better, send sooner.
                        </div>
                        <div className="flex items-center gap-8 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                            <Link href="/privacy-policy" id="footer-pricing-privacy-link" className="transition-colors hover:text-slate-900 cursor-pointer">
                                Privacy Policy
                            </Link>
                            <Link href="/terms-of-service" id="footer-pricing-terms-link" className="transition-colors hover:text-slate-900 cursor-pointer">
                                Terms of Service
                            </Link>
                            <Link href="/refund-cancellation-policy" id="footer-pricing-refund-link" className="transition-colors hover:text-slate-900 cursor-pointer">
                                Refund / Cancellation Policy
                            </Link>
                            <a id="footer-pricing-contact-link" className="transition-colors hover:text-slate-900 cursor-pointer">
                                Contact Support
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    );
}
