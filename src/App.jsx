import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import About from './components/sections/about/About';
import Contact from './components/sections/contact/Contact';
import Hero from './components/sections/hero/Hero';
import Projects from './components/sections/projects/Projects';
import Skills from './components/sections/skills/Skills';
import Ticker from './components/sections/Ticker';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
