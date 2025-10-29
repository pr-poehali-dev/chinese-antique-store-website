import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface ReviewCardProps {
  name: string;
  rating: number;
  date: string;
  text: string;
  verified?: boolean;
}

export const ReviewCard = ({ name, rating, date, text, verified = true }: ReviewCardProps) => {
  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between mb-2">
          <div>
            <div className="font-semibold text-foreground flex items-center gap-2">
              {name}
              {verified && (
                <Icon name="BadgeCheck" size={16} className="text-primary" />
              )}
            </div>
            <div className="text-xs text-muted-foreground mt-1">{date}</div>
          </div>
        </div>
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Icon
              key={i}
              name="Star"
              size={16}
              className={i < rating ? 'text-gold fill-gold' : 'text-muted'}
            />
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
      </CardContent>
    </Card>
  );
};
