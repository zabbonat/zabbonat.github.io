import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CV from './components/CV';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-primary min-h-screen text-white">
      <Navbar />
      <Hero />
      <About />
      <CV />
      <Contact />

      {/* Footer */}
      <footer className="py-8 text-center text-slate-500 text-sm bg-slate-900 border-t border-slate-800">
        <p>© {new Date().getFullYear()} Diletta Abbonato. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
