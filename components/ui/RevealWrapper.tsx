'use client';

import { useReveal } from '@/lib/useReveal';

interface RevealWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function RevealWrapper({ children, className = '' }: RevealWrapperProps) {
  const ref = useReveal();
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
