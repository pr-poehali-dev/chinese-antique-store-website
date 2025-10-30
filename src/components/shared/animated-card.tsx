import { ReactNode, useEffect, useRef, useState } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  index: number;
  animation?: 'fade-in-up' | 'scale-in';
  className?: string;
}

export const AnimatedCard = ({ 
  children, 
  index,
  animation = 'scale-in',
  className = '' 
}: AnimatedCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(currentRef);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    observer.observe(currentRef);

    return () => {
      observer.disconnect();
    };
  }, []);

  const delay = 0.1 + index * 0.1;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        animation: isVisible ? `${animation === 'scale-in' ? 'scaleIn' : 'fadeInUp'} 0.5s ease-out ${delay}s forwards` : 'none'
      }}
    >
      {children}
    </div>
  );
};