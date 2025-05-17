import BackgroundImage from "@/components/BackGroundImage";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative z-10">
      <BackgroundImage />
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
