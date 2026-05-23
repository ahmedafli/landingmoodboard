"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const CHECK_CIRCLE = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
);

const MAIL_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
);

const CLOCK_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
    </svg>
);

const ROCKET_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
);

const steps = [
    {
        icon: MAIL_ICON,
        title: "Check your email",
        description: "You will find your invoice and billing plan in the confirmation email already sent to you.",
    },
    {
        icon: CLOCK_ICON,
        title: "Account setup (within 24h)",
        description: "Our team will personally set up your account and send your login credentials via email.",
    },
    {
        icon: ROCKET_ICON,
        title: "Start creating",
        description: "Log in to your dashboard and start building stunning moodboards instantly.",
    },
];

export default function ThankYouPage() {
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    if (!isHydrated) return null;

    return (
        <main className="relative min-h-screen overflow-hidden bg-white">
            {/* Background decoration */}
            <div className="pointer-events-none absolute inset-0 z-0">
                <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-emerald-200/40 blur-[120px]" />
                <div className="absolute -right-40 -bottom-40 h-[500px] w-[500px] rounded-full bg-amber-200/30 blur-[120px]" />
                <div className="absolute left-1/2 top-1/3 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-slate-100/50 blur-[100px]" />
            </div>

            {/* Animated floating dots */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                {[...Array(18)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full"
                        style={{
                            width: `${4 + (i % 3) * 3}px`,
                            height: `${4 + (i % 3) * 3}px`,
                            left: `${5 + (i * 5.5) % 90}%`,
                            top: `${8 + (i * 7.3) % 55}%`,
                            backgroundColor: [
                                "#10b981", "#f59e0b", "#6366f1",
                                "#ec4899", "#14b8a6", "#8b5cf6",
                            ][i % 6],
                            opacity: 0.15 + (i % 4) * 0.05,
                            animation: `thankyou-float ${3 + (i % 4)}s ease-in-out infinite`,
                            animationDelay: `${(i % 5) * 0.6}s`,
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-20">
                {/* Success icon with pulse */}
                <div className="relative mb-8">
                    <div
                        className="absolute inset-0 rounded-full bg-emerald-400/20 blur-xl"
                        style={{ animation: "thankyou-pulse 2s ease-in-out infinite" }}
                    />
                    <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-emerald-50 to-emerald-100 text-emerald-500 shadow-lg shadow-emerald-100/50">
                        {CHECK_CIRCLE}
                    </div>
                </div>

                {/* Main heading */}
                <h1
                    className="mb-4 text-center text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl"
                    style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                >
                    Payment Successful!
                </h1>
                <p className="mx-auto mb-16 max-w-lg text-center text-lg leading-relaxed text-slate-600">
                    Thank you for subscribing. Your investment in streamlining your design
                    workflow starts now.
                </p>

                {/* What happens next — 3 step cards */}
                <div className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
                    {steps.map((step, index) => (
                        <div
                            key={step.title}
                            className="group relative flex flex-col items-center rounded-[28px] p-8 text-center transition-all duration-500 hover:-translate-y-1"
                            style={{
                                background: "rgba(255,255,255,0.6)",
                                backdropFilter: "blur(16px)",
                                border: "1px solid rgba(226,232,240,0.7)",
                                boxShadow: "0 12px 40px -20px rgba(15,23,42,0.15)",
                            }}
                        >
                            {/* Step number badge */}
                            <div className="absolute -top-3 left-6">
                                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-[10px] font-bold text-white shadow-md">
                                    {index + 1}
                                </span>
                            </div>
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-slate-700 transition-colors duration-300 group-hover:bg-emerald-50 group-hover:text-emerald-600">
                                {step.icon}
                            </div>
                            <h3
                                className="mb-2 text-sm font-semibold tracking-tight text-slate-900"
                                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
                            >
                                {step.title}
                            </h3>
                            <p className="text-xs leading-relaxed text-slate-500">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Billing Management Block */}
                <div className="mx-auto mt-16 w-full max-w-3xl rounded-[28px] border border-emerald-100 bg-emerald-50/50 p-8 sm:p-10 transition-all hover:shadow-md">
                    <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                        <div className="text-center sm:text-left">
                            <div className="mb-2 flex items-center justify-center gap-2 sm:justify-start">
                                <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <h3 className="text-lg font-semibold text-slate-900" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                                    Invoices & Billing Plan
                                </h3>
                            </div>
                            <p className="max-w-md text-sm leading-relaxed text-slate-600">
                                Your invoice and billing plan details have been sent to your email. If you need any assistance, feel free to contact support.
                            </p>
                        </div>
                        <a
                            href="mailto:double.a.digitalfuture@gmail.com"
                            className="inline-flex h-12 w-full shrink-0 items-center justify-center rounded-2xl bg-emerald-600 px-6 text-sm font-semibold text-white shadow-lg transition-all hover:bg-emerald-500 hover:shadow-xl active:scale-[0.98] sm:w-auto"
                        >
                            Contact Support
                        </a>
                    </div>
                </div>

                {/* CTA buttons */}
                <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
                    <Link
                        href="/"
                        className="inline-flex h-12 items-center justify-center rounded-2xl bg-slate-900 px-8 text-sm font-semibold text-white shadow-lg transition-all hover:bg-slate-800 hover:shadow-xl active:scale-[0.98]"
                    >
                        Back to Home
                    </Link>
                    <a
                        href="mailto:double.a.digitalfuture@gmail.com"
                        className="inline-flex h-12 items-center justify-center rounded-2xl border border-slate-200 bg-white px-8 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-50"
                    >
                        Contact Support
                    </a>
                </div>

                {/* Trust badge */}
                <p className="mt-12 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    Secure checkout powered by Polar.sh · 100% Money-back guarantee
                </p>
            </div>

            {/* Keyframe animations */}
            <style>{`
                @keyframes thankyou-float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-18px); }
                }
                @keyframes thankyou-pulse {
                    0%, 100% { transform: scale(1); opacity: 0.4; }
                    50% { transform: scale(1.3); opacity: 0.15; }
                }
            `}</style>
        </main>
    );
}
