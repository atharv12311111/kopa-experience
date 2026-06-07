import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import IntroScreen from './components/IntroScreen';
import DeckPlayer from './components/DeckPlayer';
import DeckNavigation from './components/DeckNavigation';
import SlideMenu, { SLIDE_TITLES } from './components/SlideMenu';

import EventsModule from './components/modules/EventsModule';
import SponsorshipModule from './components/modules/SponsorshipModule';
import LeasingModule from './components/modules/LeasingModule';

import { useSlideNav } from './hooks/useSlideNav';

type ActiveModule = 'events' | 'sponsorship' | 'leasing' | null;

const TOTAL_SLIDES = SLIDE_TITLES.length;

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeModule, setActiveModule] = useState<ActiveModule>(null);

  const goTo = (index: number) => {
    setDirection(index >= currentSlide ? 1 : -1);
    setCurrentSlide(index);
    setMenuOpen(false);
  };

  /* Lock body scroll when deck is active */
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  /* Lock body scroll when module open (already hidden but belt-and-suspenders) */
  useEffect(() => {
    if (activeModule) document.body.style.overflow = 'hidden';
  }, [activeModule]);

  /* Keyboard navigation */
  useSlideNav(currentSlide, TOTAL_SLIDES, goTo, setMenuOpen, menuOpen);

  const handleEnter = () => setShowIntro(false);
  const closeModule = () => setActiveModule(null);

  return (
    <>
      {/* ── Intro / Splash ───────────────────────────────────── */}
      <AnimatePresence>
        {showIntro && <IntroScreen key="intro" onEnter={handleEnter} />}
      </AnimatePresence>

      {/* ── Deck ─────────────────────────────────────────────── */}
      {!showIntro && (
        <>
          <DeckPlayer
            currentSlide={currentSlide}
            direction={direction}
            onOpenModule={setActiveModule}
          />

          <DeckNavigation
            current={currentSlide}
            total={TOTAL_SLIDES}
            onGoTo={goTo}
            onMenuToggle={() => setMenuOpen(true)}
            slideTitle={SLIDE_TITLES[currentSlide]}
          />

          <AnimatePresence>
            {menuOpen && (
              <SlideMenu
                key="menu"
                current={currentSlide}
                onGoTo={goTo}
                onClose={() => setMenuOpen(false)}
              />
            )}
          </AnimatePresence>
        </>
      )}

      {/* ── Expandable Modules ────────────────────────────────── */}
      <AnimatePresence>
        {activeModule === 'events' && (
          <EventsModule key="events" onClose={closeModule} />
        )}
        {activeModule === 'sponsorship' && (
          <SponsorshipModule key="sponsorship" onClose={closeModule} />
        )}
        {activeModule === 'leasing' && (
          <LeasingModule key="leasing" onClose={closeModule} />
        )}
      </AnimatePresence>
    </>
  );
}
