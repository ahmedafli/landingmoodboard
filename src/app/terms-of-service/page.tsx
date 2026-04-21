import Link from "next/link";

export default function TermsOfServicePage() {
    return (
        <main className="min-h-screen bg-white px-6 py-16 text-slate-900">
            <div className="mx-auto max-w-4xl">
                <Link href="/" className="text-sm font-semibold text-emerald-600 hover:text-emerald-500">
                    Back to Home
                </Link>
                <h1 className="mt-6 text-4xl font-semibold tracking-tight">Terms of Service</h1>
                <p className="mt-6 text-sm leading-7 text-slate-600">
                    By using this website and purchasing a subscription, you agree to these Terms of Service.
                    Please review them carefully before using our services.
                </p>

                <section className="mt-10 space-y-4 text-sm leading-7 text-slate-700">
                    <h2 className="text-lg font-semibold text-slate-900">1. Services</h2>
                    <p>
                        We provide a software platform for creating and managing moodboards and related design
                        assets. Features may evolve over time to improve service quality.
                    </p>

                    <h2 className="text-lg font-semibold text-slate-900">2. Accounts and Use</h2>
                    <p>
                        You are responsible for maintaining the confidentiality of your account access and for any
                        activity under your account. You agree not to misuse the service or violate applicable laws.
                    </p>

                    <h2 className="text-lg font-semibold text-slate-900">3. Payments</h2>
                    <p>
                        Subscription payments are processed securely through our payment provider. By subscribing, you
                        authorize recurring billing according to your selected plan.
                    </p>

                    <h2 className="text-lg font-semibold text-slate-900">4. Termination</h2>
                    <p>
                        We may suspend or terminate access for violations of these terms. You may cancel your
                        subscription at any time according to the applicable policy.
                    </p>

                    <h2 className="text-lg font-semibold text-slate-900">5. Contact</h2>
                    <p>
                        For questions regarding these terms, contact{" "}
                        <a className="text-emerald-600 hover:text-emerald-500" href="mailto:support@doubleadigitalfuture.com">
                        double.a.digitalfuture@gmail.com
                        </a>.
                    </p>
                </section>
            </div>
        </main>
    );
}
