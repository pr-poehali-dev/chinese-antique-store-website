import { ReactNode } from 'react';
import { useParallax } from '@/hooks/use-parallax';

interface ParallaxBackgroundProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export const ParallaxBackground = ({ children, speed = 0.3, className = '' }: ParallaxBackgroundProps) => {
  const offset = useParallax(speed);

  return (
    <div className="relative overflow-hidden">
      <div
        className={`absolute inset-0 ${className}`}
        style={{ transform: `translateY(${offset}px)` }}
      >
        {children}
      </div>
    </div>
  );
};
