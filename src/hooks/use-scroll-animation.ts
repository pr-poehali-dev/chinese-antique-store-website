import { useEffect, useRef, useState } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const hasBeenVisible = useRef(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    // Проверка видимости элемента
    const checkVisibility = () => {
      if (!currentRef || hasBeenVisible.current) return false;
      
      const rect = currentRef.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const isInViewport = rect.top <= windowHeight * 1.2 && rect.bottom >= 0;
      
      if (isInViewport) {
        hasBeenVisible.current = true;
        setIsVisible(true);
        return true;
      }
      return false;
    };

    // Проверяем сразу при монтировании и через небольшую задержку
    checkVisibility();
    const timeoutId = setTimeout(checkVisibility, 100);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasBeenVisible.current) {
          hasBeenVisible.current = true;
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(currentRef);
          }
        } else if (!triggerOnce && !entry.isIntersecting) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(currentRef);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
};