import { ReactNode, useEffect, useRef, useState } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  index?: number;
  animation?: 'fade-in-up' | 'scale-in' | 'slide-in-left' | 'slide-in-right' | 'fade-in';
  className?: string;
  delay?: number;
}

export const AnimatedCard = ({ 
  children, 
  index = 0,
  animation = 'scale-in',
  className = '',
  delay
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

  const animationDelay = delay !== undefined ? delay : 0.1 + index * 0.1;

  const getAnimationName = () => {
    switch (animation) {
      case 'fade-in-up': return 'fadeInUp';
      case 'scale-in': return 'scaleIn';
      case 'slide-in-left': return 'slideInLeft';
      case 'slide-in-right': return 'slideInRight';
      case 'fade-in': return 'fadeIn';
      default: return 'scaleIn';
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        animation: isVisible ? `${getAnimationName()} 0.6s ease-out ${animationDelay}s forwards` : 'none'
      }}
    >
      {children}
    </div>
  );
};