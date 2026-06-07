import { lazy, Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Lazy-load each slide for code splitting
const Slide01 = lazy(() => import('./slides/Slide01_Cover'));
const Slide02 = lazy(() => import('./slides/Slide02_Overview'));
const Slide03 = lazy(() => import('./slides/Slide03_Location'));
const Slide04 = lazy(() => import('./slides/Slide04_Demographics'));
const Slide05 = lazy(() => import('./slides/Slide05_Retail'));
const Slide06 = lazy(() => import('./slides/Slide06_Luxury'));
const Slide07 = lazy(() => import('./slides/Slide07_Dining'));
const Slide08 = lazy(() => import('./slides/Slide08_EntOverview'));
const Slide09 = lazy(() => import('./slides/Slide09_pvr'));
const Slide10 = lazy(() => import('./slides/Slide10_hamleys'));
const Slide11 = lazy(() => import('./slides/Slide11_shott'));
const Slide12 = lazy(() => import('./slides/Slide12_Events'));
const Slide13 = lazy(() => import('./slides/Slide13_PAC'));
const Slide14 = lazy(() => import('./slides/Slide14_Sponsorship'));
const Slide15 = lazy(() => import('./slides/Slide15_Leasing'));
const Slide16 = lazy(() => import('./slides/Slide16_Contact'));

type ActiveModule = 'events' | 'sponsorship' | 'leasing' | null;

interface DeckPlayerProps {
  currentSlide: number;
  direction: number;
  onOpenModule: (module: ActiveModule) => void;
}

const SLIDES = [
  Slide01, Slide02, Slide03, Slide04, Slide05, Slide06, Slide07, Slide08,
  Slide09, Slide10, Slide11, Slide12, Slide13, Slide14, Slide15, Slide16,
];

const variants = {
  enter: (dir: number) => ({
    opacity: 0,
    scale: dir > 0 ? 0.97 : 1.03,
    x: dir > 0 ? 20 : -20,
  }),
  center: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
  exit: (dir: number) => ({
    opacity: 0,
    scale: dir > 0 ? 1.03 : 0.97,
    x: dir > 0 ? -20 : 20,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function DeckPlayer({ currentSlide, direction, onOpenModule }: DeckPlayerProps) {
  const SlideComponent = SLIDES[currentSlide];

  return (
    <div className="slide-container" style={{ zIndex: 10 }}>
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentSlide}
          className="slide-container"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
        >
          <Suspense
            fallback={
              <div className="slide-container flex items-center justify-center" style={{ background: 'var(--bg)' }}>
                <div style={{ color: 'var(--gold)', fontSize: '0.7rem', letterSpacing: '0.3em' }}>LOADING</div>
              </div>
            }
          >
            {SlideComponent && <SlideComponent onOpenModule={onOpenModule} />}
          </Suspense>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
