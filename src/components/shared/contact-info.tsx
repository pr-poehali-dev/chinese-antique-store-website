import Icon from '@/components/ui/icon';

interface ContactInfoItemProps {
  icon: string;
  title: string;
  content: string | string[];
  href?: string;
}

export const ContactInfoItem = ({ icon, title, content, href }: ContactInfoItemProps) => {
  const ContentWrapper = href ? 'a' : 'div';
  const wrapperProps = href ? { href, className: 'hover:text-primary transition-colors' } : {};

  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
        <Icon name={icon as any} size={20} className="text-primary" />
      </div>
      <div>
        <div className="font-semibold text-foreground mb-1">{title}</div>
        {Array.isArray(content) ? (
          <div className="space-y-1">
            {content.map((line, i) => (
              <div key={i} className="text-sm text-muted-foreground">{line}</div>
            ))}
          </div>
        ) : (
          <ContentWrapper {...wrapperProps} className={`text-sm text-muted-foreground ${href ? 'hover:text-primary transition-colors' : ''}`}>
            {content}
          </ContentWrapper>
        )}
      </div>
    </div>
  );
};
