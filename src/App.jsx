import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import WorldMap from './components/WorldMap';
import GameUI from './components/GameUI';
import About from './components/About';
import CV from './components/CV';
import Publications from './components/Publications';
import Research from './components/Research';
import Teaching from './components/Teaching';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import ClassicMode from './components/ClassicMode';

function App() {
  const [currentView, setCurrentView] = useState('map');
  const [isClassicMode, setIsClassicMode] = useState(false);

  const renderView = () => {
    switch (currentView) {
      case 'about': return <About />;
      case 'research': return <Research />;
      case 'publications': return <Publications />;
      case 'cv': return <CV />;
      case 'teaching': return <Teaching />;
      default: return null;
    }
  };

  if (isClassicMode) {
    return <ClassicMode onSwitchToRPG={() => setIsClassicMode(false)} />;
  }

  const hp = currentView === 'publications' ? 50 : 100;

  return (
    <div className="bg-primary min-h-screen text-white font-sans">
      <GameUI
        onInventoryClick={() => setCurrentView('cv')}
        onSettingsClick={() => setIsClassicMode(true)}
        hp={hp}
      />

      <AnimatePresence mode="wait">
        {currentView === 'map' ? (
          <motion.div
            key="map"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <WorldMap onNavigate={(view) => {
              if (view === 'classic-mode') {
                setIsClassicMode(true);
              } else {
                setCurrentView(view);
              }
            }} />
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
