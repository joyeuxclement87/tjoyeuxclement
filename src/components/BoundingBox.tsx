import React from 'react';

export default function BoundingBox({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <span className={`relative inline-block border-[1.5px] border-dashed border-[#f5b915] bg-transparent ${className}`}>
      {children}
      {/* Corner Handles */}
      <span className="absolute -top-[5px] -left-[5px] w-[9px] h-[9px] border-[1.5px] border-[#f5b915] bg-[#004643]" />
      <span className="absolute -top-[5px] -right-[5px] w-[9px] h-[9px] border-[1.5px] border-[#f5b915] bg-[#004643]" />
      <span className="absolute -bottom-[5px] -left-[5px] w-[9px] h-[9px] border-[1.5px] border-[#f5b915] bg-[#004643]" />
      {/* Active Resizing Handle (Bottom Right) */}
      <span className="absolute -bottom-[6px] -right-[6px] w-[11px] h-[11px] border-[1.5px] border-[#f5b915] bg-[#f5b915]" />
      
      {/* Midpoint Handles */}
      <span className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-[9px] h-[9px] border-[1.5px] border-[#f5b915] bg-[#004643]" />
      <span className="absolute -bottom-[5px] left-1/2 -translate-x-1/2 w-[9px] h-[9px] border-[1.5px] border-[#f5b915] bg-[#004643]" />
      <span className="absolute top-1/2 -translate-y-1/2 -left-[5px] w-[9px] h-[9px] border-[1.5px] border-[#f5b915] bg-[#004643]" />
      <span className="absolute top-1/2 -translate-y-1/2 -right-[5px] w-[9px] h-[9px] border-[1.5px] border-[#f5b915] bg-[#004643]" />
    </span>
  );
}
