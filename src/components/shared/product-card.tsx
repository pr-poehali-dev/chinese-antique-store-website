import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  id: number;
  name: string;
  price: string;
  period: string;
  image: string;
  onDetailsClick?: () => void;
}

export const ProductCard = ({ name, price, period, image, onDetailsClick }: ProductCardProps) => {
  return (
    <Card className="border-0 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
      <div className="relative overflow-hidden aspect-square bg-muted">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
        />
      </div>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg leading-tight">{name}</CardTitle>
        <p className="text-xs text-muted-foreground mt-1">{period}</p>
      </CardHeader>
      <CardFooter className="flex justify-between items-center pt-0">
        <div className="text-2xl font-bold text-primary">{price} ₽</div>
        <Button 
          size="sm" 
          variant="outline"
          onClick={onDetailsClick}
        >
          Подробнее
        </Button>
      </CardFooter>
    </Card>
  );
};
