import { ReactNode } from 'react';

interface PageHeroProps {
  title: string;
  description?: string;
  gradient?: string;
  children?: ReactNode;
}

export const PageHero = ({ 
  title, 
  description, 
  gradient = 'from-primary/10 via-background to-secondary/5',
  children 
}: PageHeroProps) => {
  return (
    <section className={`py-16 sm:py-20 lg:py-24 bg-gradient-to-br ${gradient}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {title}
          </h1>
          {description && (
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
};
