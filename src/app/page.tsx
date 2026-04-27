import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Experience from '@/components/home/Experience';
import Education from '@/components/home/Education';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import Contact from '@/components/home/Contact';

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <FeaturedProjects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
