import { useEffect } from 'react';

export function useSlideNav(
  current: number,
  total: number,
  goTo: (index: number) => void,
  setMenuOpen: (open: boolean) => void,
  menuOpen: boolean,
): void {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        if (current < total - 1) goTo(current + 1);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        if (current > 0) goTo(current - 1);
      } else if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      } else if (e.key === 'm' || e.key === 'M') {
        setMenuOpen(!menuOpen);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [current, total, goTo, setMenuOpen, menuOpen]);
}
