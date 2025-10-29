import Icon from '@/components/ui/icon';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  iconColor?: string;
  className?: string;
  delay?: number;
}

export const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  iconColor = 'text-primary',
  className = '',
  delay = 0
}: FeatureCardProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`flex items-start gap-4 ${className} ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
        <Icon name={icon as any} className={iconColor} size={24} />
      </div>
      <div>
        <div className="font-semibold text-foreground mb-2">{title}</div>
        <div className="text-sm text-muted-foreground leading-relaxed">{description}</div>
      </div>
    </div>
  );
};