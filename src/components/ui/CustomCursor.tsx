'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

type CursorState = 'default' | 'hover' | 'click' | 'text' | 'drag';

export default function CustomCursor() {
  const [cursorState, setCursorState] = useState<CursorState>('default');
  const [label, setLabel] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  // Raw mouse position
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  // Dot follows instantly
  const dotX = useSpring(mouseX, { damping: 50, stiffness: 600, mass: 0.3 });
  const dotY = useSpring(mouseY, { damping: 50, stiffness: 600, mass: 0.3 });

  // Ring lags behind for the trailing effect
  const ringX = useSpring(mouseX, { damping: 28, stiffness: 140, mass: 0.8 });
  const ringY = useSpring(mouseY, { damping: 28, stiffness: 140, mass: 0.8 });

  const prevState = useRef<CursorState>('default');

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);

    const onMouseDown = () => {
      prevState.current = cursorState;
      setCursorState('click');
    };
    const onMouseUp = () => setCursorState(prevState.current);

    // Detect interactive targets
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const el = target.closest(
        'a, button, [data-cursor], input, textarea, select, label, [role="button"]'
      ) as HTMLElement | null;

      if (el) {
        const type = el.getAttribute('data-cursor');
        if (type === 'drag') {
          setCursorState('drag');
          setLabel('Drag');
        } else if (type === 'view') {
          setCursorState('hover');
          setLabel('View');
        } else if (
          target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA'
        ) {
          setCursorState('text');
          setLabel('');
        } else {
          setCursorState('hover');
          setLabel('');
        }
      } else {
        setCursorState('default');
        setLabel('');
      }
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);
    window.addEventListener('mouseenter', onEnter);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mouseover', onOver);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('mouseenter', onEnter);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseover', onOver);
    };
  }, [mouseX, mouseY, isVisible, cursorState]);

  // Ring size/opacity variants
  const ringVariants: Record<CursorState, { width: number; height: number; opacity: number; borderColor: string }> = {
    default: { width: 36,  height: 36,  opacity: 0.6, borderColor: 'rgba(240,237,229,0.5)' },
    hover:   { width: 64,  height: 64,  opacity: 1,   borderColor: 'rgba(245,185,21,0.9)'   },
    click:   { width: 20,  height: 20,  opacity: 1,   borderColor: 'rgba(245,185,21,1)'     },
    text:    { width: 4,   height: 36,  opacity: 0.8, borderColor: 'rgba(245,185,21,0.9)'   },
    drag:    { width: 80,  height: 80,  opacity: 1,   borderColor: 'rgba(245,185,21,0.7)'   },
  };

  const dotVariants: Record<CursorState, { width: number; height: number; opacity: number; background: string }> = {
    default: { width: 6,  height: 6,  opacity: 1,   background: '#f0ede5' },
    hover:   { width: 6,  height: 6,  opacity: 0,   background: '#f5b915' },
    click:   { width: 10, height: 10, opacity: 1,   background: '#f5b915' },
    text:    { width: 2,  height: 2,  opacity: 0,   background: '#f5b915' },
    drag:    { width: 6,  height: 6,  opacity: 0,   background: '#f5b915' },
  };

  const rv = ringVariants[cursorState];
  const dv = dotVariants[cursorState];

  return (
    <>
      {/* ── Inner dot ── */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 99999,
          pointerEvents: 'none',
          borderRadius: '50%',
        }}
        animate={{
          width:      dv.width,
          height:     dv.height,
          opacity:    isVisible ? dv.opacity : 0,
          background: dv.background,
        }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
      />

      {/* ── Outer ring ── */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 99998,
          pointerEvents: 'none',
          borderRadius: cursorState === 'text' ? '2px' : '50%',
          border: `1.5px solid ${rv.borderColor}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        animate={{
          width:       rv.width,
          height:      rv.height,
          opacity:     isVisible ? rv.opacity : 0,
          borderColor: rv.borderColor,
          rotate:      cursorState === 'drag' ? 45 : 0,
        }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Label inside ring on hover/drag */}
        {label && (
          <motion.span
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.2 }}
            style={{
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#f5b915',
              userSelect: 'none',
              fontFamily: 'var(--font-montserrat)',
            }}
          >
            {label}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
