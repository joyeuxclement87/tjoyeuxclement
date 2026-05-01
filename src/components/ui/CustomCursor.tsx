'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'motion/react';

type CursorState = 'default' | 'hover' | 'click' | 'text' | 'drag';
type ColorTheme  = 'gold' | 'dark';

function getBgTheme(el: HTMLElement): ColorTheme {
  let current: HTMLElement | null = el;
  while (current && current !== document.body) {
    const bg = window.getComputedStyle(current).backgroundColor;
    if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') {
      const m = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (m) {
        const lum = (0.299 * +m[1] + 0.587 * +m[2] + 0.114 * +m[3]) / 255;
        return lum > 0.45 ? 'dark' : 'gold';
      }
    }
    current = current.parentElement;
  }
  return 'gold';
}

/* ─────────────────────────────────────────────
   Pen-tool SVG — sleek illustrator-style pen tool.
   Tip (hotspot) sits at the bottom-left corner.
───────────────────────────────────────────── */
function PenNib({ color }: { color: string }) {
  const isGold = color === '#f5b915';
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: 'translate(2px, -28px)', display: 'block' }}
    >
      {/* Pen body fill */}
      <path
        d="M5 25L11 19L9 11L20 4L26 10L19 21L11 19L5 25Z"
        fill={isGold ? "rgba(245,185,21,0.12)" : "rgba(0,70,67,0.12)"}
        stroke={color}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      {/* Nib divider line */}
      <line
        x1="9" y1="11" x2="19" y2="21"
        stroke={color}
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.5"
      />
      {/* Tip stroke */}
      <line
        x1="5" y1="25" x2="11" y2="19"
        stroke={isGold ? "#f0ede5" : "#001a18"}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Anchor point at body centre */}
      <circle cx="14.5" cy="14.5" r="1.6" fill={color} />
      {/* Hotspot dot at tip */}
      <circle cx="5" cy="25" r="1.4" fill={color} />
    </svg>
  );
}

export default function CustomCursor() {
  const [cursorState, setCursorState] = useState<CursorState>('default');
  const [colorTheme,  setColorTheme]  = useState<ColorTheme>('gold');
  const [label,       setLabel]       = useState('');
  const [isVisible,   setIsVisible]   = useState(false);
  const [isTouch,     setIsTouch]     = useState(false);

  const mouseX = useMotionValue(-300);
  const mouseY = useMotionValue(-300);

  // Snappy dot
  const dotX = useSpring(mouseX, { damping: 50, stiffness: 600, mass: 0.3 });
  const dotY = useSpring(mouseY, { damping: 50, stiffness: 600, mass: 0.3 });

  // Laggy ring
  const ringX = useSpring(mouseX, { damping: 28, stiffness: 140, mass: 0.8 });
  const ringY = useSpring(mouseY, { damping: 28, stiffness: 140, mass: 0.8 });

  const prevState = useRef<CursorState>('default');

  useEffect(() => {
    // Detect touch devices
    if (typeof window !== 'undefined') {
      setIsTouch(window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window);
    }

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

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      const cursorEl = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorEl) {
        const type = cursorEl.getAttribute('data-cursor');
        setColorTheme(getBgTheme(cursorEl));
        if (type === 'drag') { setCursorState('drag'); setLabel('Drag'); }
        else if (type === 'view') { setCursorState('hover'); setLabel('View'); }
        return;
      }

      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        setCursorState('text');
        setLabel('');
        setColorTheme('gold');
        return;
      }

      const linkEl = target.closest('a') as HTMLAnchorElement | null;
      if (linkEl) {
        setCursorState('hover');
        setLabel('Open');
        setColorTheme(getBgTheme(linkEl));
        return;
      }

      const btnEl = target.closest('button, [role="button"]') as HTMLElement | null;
      if (btnEl) {
        setCursorState('hover');
        setLabel('');
        setColorTheme(getBgTheme(btnEl));
        return;
      }

      setCursorState('default');
      setLabel('');
      setColorTheme('gold');
    };

    window.addEventListener('mousemove',  onMove);
    window.addEventListener('mouseleave', onLeave);
    window.addEventListener('mouseenter', onEnter);
    window.addEventListener('mousedown',  onMouseDown);
    window.addEventListener('mouseup',    onMouseUp);
    window.addEventListener('mouseover',  onOver);

    return () => {
      window.removeEventListener('mousemove',  onMove);
      window.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('mouseenter', onEnter);
      window.removeEventListener('mousedown',  onMouseDown);
      window.removeEventListener('mouseup',    onMouseUp);
      window.removeEventListener('mouseover',  onOver);
    };
  }, [mouseX, mouseY, isVisible, cursorState]);

  // Don't render custom cursor on touch devices at all
  if (isTouch) return null;

  const isDefault = cursorState === 'default';

  const ringColor  = colorTheme === 'gold' ? 'rgba(245,185,21,0.9)' : 'rgba(0,70,67,0.9)';
  const labelColor = colorTheme === 'gold' ? '#f5b915' : '#001a18';

  const ringVariants: Record<CursorState, { size: number; opacity: number }> = {
    default: { size: 0,  opacity: 0   },
    hover:   { size: 64, opacity: 1   },
    click:   { size: 22, opacity: 1   },
    text:    { size: 0,  opacity: 0   }, 
    drag:    { size: 84, opacity: 1   },
  };

  const rv = ringVariants[cursorState];

  const nibColor   = colorTheme === 'gold' ? '#f5b915' : '#004643';

  return (
    <>
      {/* ══ PEN NIB (default state) ══ */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 99999,
          pointerEvents: 'none',
        }}
      >
        <AnimatePresence>
          {isVisible && isDefault && (
            <motion.div
              key="pen"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
            >
              <PenNib color={nibColor} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* ══ CLICK DOT (non-default) ══ */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          transform: 'translate(-50%, -50%)',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 99999,
          pointerEvents: 'none',
          borderRadius: '50%',
          background: labelColor,
        }}
        animate={{
          width:   cursorState === 'click' ? 10 : 0,
          height:  cursorState === 'click' ? 10 : 0,
          opacity: isVisible && cursorState === 'click' ? 1 : 0,
        }}
        transition={{ duration: 0.12 }}
      />

      {/* ══ TEXT-CURSOR BAR ══ */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          transform: 'translate(-50%, -50%)',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 99999,
          pointerEvents: 'none',
          borderRadius: '2px',
          background: ringColor,
        }}
        animate={{
          width:   cursorState === 'text' ? 2.5 : 0,
          height:  cursorState === 'text' ? 36  : 0,
          opacity: isVisible && cursorState === 'text' ? 0.9 : 0,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* ══ OUTER RING (hover / click / drag) ══ */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          transform: 'translate(-50%, -50%)',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 99998,
          pointerEvents: 'none',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: `1.5px solid ${ringColor}`,
        }}
        animate={{
          width:       rv.size,
          height:      rv.size,
          opacity:     isVisible && !isDefault ? rv.opacity : 0,
          borderColor: ringColor,
          rotate:      cursorState === 'drag' ? 45 : 0,
          scale:       cursorState === 'click' ? 0.6 : 1,
        }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Label inside ring */}
        <AnimatePresence>
          {label && cursorState !== 'click' && !isDefault && (
            <motion.span
              key={label}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.16 }}
              style={{
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: labelColor,
                userSelect: 'none',
                fontFamily: 'var(--font-montserrat)',
                whiteSpace: 'nowrap',
              }}
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
