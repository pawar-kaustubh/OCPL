
import Navbar from './pages/Navbar';
import Hero from './pages/Hero';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-cyan-500/30">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
    </div>

  );
}

export default App;
