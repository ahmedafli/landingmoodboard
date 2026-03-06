import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Subscriptions from "@/components/Subscriptions";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-black">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <HowItWorks />
      <Features />
      <Subscriptions />
    </main>
  );
}
