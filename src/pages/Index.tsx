
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Calender from "@/components/Calender";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 pointer-events-none bg-grid-dark opacity-10"></div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Calender />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
