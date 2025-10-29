import { ReactNode } from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  children?: ReactNode;
}

export const SectionHeader = ({ 
  title, 
  subtitle, 
  description, 
  align = 'center',
  className = '',
  children 
}: SectionHeaderProps) => {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';
  const itemsClass = align === 'center' ? 'items-center' : 'items-start';

  return (
    <div className={`mb-12 sm:mb-16 ${alignClass} ${className}`}>
      <div className={`flex flex-col ${itemsClass} gap-4`}>
        {subtitle && (
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            {subtitle}
          </span>
        )}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          {title}
        </h2>
        {description && (
          <p className="text-lg text-muted-foreground max-w-2xl">
            {description}
          </p>
        )}
        {children}
      </div>
    </div>
  );
};
