import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <div className="dark:bg-grid-white/[0.05] bg-grid-black/[0.2]">
      <div className="max-w-7xl mx-auto sm:p-5 overflow-hidden">
        <Navbar />
        <HeroSection />
      </div>
    </div>
    <div className="max-w-7xl mx-auto sm :p-5 overflow-hidden mt-20">
      <Skills />
    </div>
    <div>
      <Projects />
    </div>
      <Footer />
    </div>
  );
}
