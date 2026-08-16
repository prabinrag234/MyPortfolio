import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useMediaQuery } from '../hooks/useMediaQuery';

const INTERACTIVE_SELECTOR = 'a, button, input, textarea, select, [role="button"], [data-cursor="pointer"]';

export function CustomCursor() {
  const isFinePointer = useMediaQuery('(pointer: fine)');
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isDown, setIsDown] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 350, damping: 28, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 350, damping: 28, mass: 0.5 });

  useEffect(() => {
    if (!isFinePointer) return;

    document.documentElement.classList.add('custom-cursor-active');

    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setIsVisible(true);
      const target = e.target as HTMLElement;
      setIsPointer(!!target.closest(INTERACTIVE_SELECTOR));
    };
    const handleLeave = () => setIsVisible(false);
    const handleDown = () => setIsDown(true);
    const handleUp = () => setIsDown(false);

    window.addEventListener('mousemove', handleMove);
    document.documentElement.addEventListener('mouseleave', handleLeave);
    window.addEventListener('mousedown', handleDown);
    window.addEventListener('mouseup', handleUp);

    return () => {
      document.documentElement.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMove);
      document.documentElement.removeEventListener('mouseleave', handleLeave);
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mouseup', handleUp);
    };
  }, [isFinePointer, x, y]);

  if (!isFinePointer) return null;

  return (
    <>
      {/* Precise dot, tracks the pointer exactly */}
      <motion.div
        aria-hidden
        className="fixed top-0 left-0 z-[100] pointer-events-none rounded-full bg-primary"
        style={{
          x,
          y,
          width: 6,
          height: 6,
          marginLeft: -3,
          marginTop: -3,
          opacity: isVisible ? 1 : 0,
        }}
        animate={{ scale: isDown ? 0.6 : 1 }}
        transition={{ duration: 0.15 }}
      />

      {/* Trailing ring — expands into a "</>" code glyph over clickable elements */}
      <motion.div
        aria-hidden
        className="fixed top-0 left-0 z-[100] pointer-events-none rounded-full border flex items-center justify-center font-mono font-semibold select-none"
        style={{
          x: ringX,
          y: ringY,
          opacity: isVisible ? 1 : 0,
          borderColor: 'hsl(var(--primary) / 0.6)',
        }}
        animate={{
          width: isPointer ? 46 : 26,
          height: isPointer ? 46 : 26,
          marginLeft: isPointer ? -23 : -13,
          marginTop: isPointer ? -23 : -13,
          scale: isDown ? 0.85 : 1,
          backgroundColor: isPointer ? 'hsl(var(--primary) / 0.12)' : 'hsl(var(--primary) / 0)',
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        <motion.span
          animate={{ opacity: isPointer ? 1 : 0, fontSize: isPointer ? 11 : 0 }}
          transition={{ duration: 0.15 }}
          className="text-primary"
        >
          {'</>'}
        </motion.span>
      </motion.div>
    </>
  );
}
