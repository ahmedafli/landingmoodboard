import Link from "next/link";

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-white px-6 py-16 text-slate-900">
            <div className="mx-auto max-w-4xl">
                <Link href="/" className="text-sm font-semibold text-emerald-600 hover:text-emerald-500">
                    Back to Home
                </Link>
                <h1 className="mt-6 text-4xl font-semibold tracking-tight">Privacy Policy</h1>
                <p className="mt-6 text-sm leading-7 text-slate-600">
                    This Privacy Policy explains what information we collect, how we use it, and the choices you have
                    regarding your information when using our website and services.
                </p>

                <section className="mt-10 space-y-4 text-sm leading-7 text-slate-700">
                    <h2 className="text-lg font-semibold text-slate-900">1. Information We Collect</h2>
                    <p>
                        We may collect contact details (such as email), account information, payment-related metadata,
                        and usage analytics to operate and improve our service.
                    </p>

                    <h2 className="text-lg font-semibold text-slate-900">2. How We Use Information</h2>
                    <p>
                        We use collected information to provide services, process subscriptions, communicate updates,
                        and improve product performance and reliability.
                    </p>

                    <h2 className="text-lg font-semibold text-slate-900">3. Data Sharing</h2>
                    <p>
                        We do not sell your personal data. We may share limited data with trusted providers for
                        hosting, analytics, and payment processing.
                    </p>

                    <h2 className="text-lg font-semibold text-slate-900">4. Data Security</h2>
                    <p>
                        We implement reasonable technical and organizational safeguards to protect your information from
                        unauthorized access, loss, or misuse.
                    </p>

                    <h2 className="text-lg font-semibold text-slate-900">5. Contact</h2>
                    <p>
                        For privacy questions or requests, contact{" "}
                        <a className="text-emerald-600 hover:text-emerald-500" href="mailto:double.a.digitalfuture@gmail.com">
                        double.a.digitalfuture@gmail.com
                        </a>.
                    </p>
                </section>
            </div>
        </main>
    );
}
