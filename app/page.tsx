import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="relative h-screen w-full min-h-screen items-center justify-center bg-white">
      <Navbar />
      <main className="flex min-h-screen w-full max-w-full flex-col items-center justify-between py-32 px-16 sm:items-start">
        <Hero />
      </main>
        <Footer />
    </div>
  );
}
