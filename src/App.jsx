import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import WorldMap from './components/WorldMap';
import GameUI from './components/GameUI';
import About from './components/About';
import CV from './components/CV';
// Reuse existing components for now, we will restyle them later
import Contact from './components/Contact';

function App() {
  const [currentView, setCurrentView] = useState('map');

  const renderView = () => {
    switch (currentView) {
      case 'about': return <About />;
      case 'research': return <div className="h-screen flex items-center justify-center text-white font-pixel">Research Lab Under Construction</div>; // Placeholder
      case 'publications': return <div className="h-screen flex items-center justify-center text-white font-pixel">Library Under Construction</div>; // Placeholder
      case 'cv': return <CV />;
      default: return null;
    }
  };

  return (
    <div className="bg-primary min-h-screen text-white font-sans">
      <GameUI
        onInventoryClick={() => setCurrentView('cv')}
        onSettingsClick={() => alert('Settings menu coming soon!')}
      />

      <AnimatePresence mode="wait">
        {currentView === 'map' ? (
          <motion.div
            key="map"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <WorldMap onNavigate={setCurrentView} />
          </motion.div>
        ) : (
          <motion.div
            key="section"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative min-h-screen bg-slate-900"
          >
            {/* Back Button */}
            <button
              onClick={() => setCurrentView('map')}
              className="fixed top-20 left-4 z-50 px-4 py-2 bg-slate-800 border-2 border-slate-600 text-white font-pixel text-xs rounded hover:bg-slate-700 transition-colors flex items-center gap-2"
            >
              <ArrowLeft size={16} /> Return to Map
            </button>

            <div className="pt-16">
              {renderView()}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
