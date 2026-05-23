import Link from "next/link";

export default function RefundCancellationPolicyPage() {
    return (
        <main className="min-h-screen bg-white px-6 py-16 text-slate-900">
            <div className="mx-auto max-w-4xl">
                <Link href="/" className="text-sm font-semibold text-emerald-600 hover:text-emerald-500">
                    Back to Home
                </Link>
                <h1 className="mt-6 text-4xl font-semibold tracking-tight">Refund / Cancellation Policy</h1>
                <p className="mt-6 text-sm leading-7 text-slate-600">
                    This policy explains how cancellations and refunds are handled for subscriptions purchased through
                    our website.
                </p>

                <section className="mt-10 space-y-4 text-sm leading-7 text-slate-700">
                    <h2 className="text-lg font-semibold text-slate-900">1. Cancellation</h2>
                    <p>
                        You can cancel your subscription at any time. Cancellation takes effect at the end of the
                        current billing period unless otherwise required by law.
                    </p>

                    <h2 className="text-lg font-semibold text-slate-900">2. Refund Eligibility</h2>
                    <p>
                        Refund requests are reviewed on a case-by-case basis. If you believe you were charged in error,
                        please contact support with your payment details.
                    </p>

                    <h2 className="text-lg font-semibold text-slate-900">3. Non-Refundable Cases</h2>
                    <p>
                        Unless required by applicable consumer law, completed billing periods and previously delivered
                        service access may not be eligible for refund.
                    </p>

                    <h2 className="text-lg font-semibold text-slate-900">4. Processing Time</h2>
                    <p>
                        Approved refunds are generally processed to the original payment method and may take several
                        business days to appear, depending on your bank or card provider.
                    </p>

                    <h2 className="text-lg font-semibold text-slate-900">5. Contact</h2>
                    <p>
                        For cancellation and refund requests, email{" "}
                        <a className="text-emerald-600 hover:text-emerald-500" href="mailto:double.a.digitalfuture@gmail.com">
                            double.a.digitalfuture@gmail.com
                        </a>.
                    </p>
                </section>
            </div>
        </main>
    );
}
