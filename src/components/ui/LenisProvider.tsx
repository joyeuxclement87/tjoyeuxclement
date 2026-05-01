'use client';

import { ReactLenis } from 'lenis/react';
import CustomCursor from '@/components/ui/CustomCursor';

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root>
      <CustomCursor />
      {children}
    </ReactLenis>
  );
}
