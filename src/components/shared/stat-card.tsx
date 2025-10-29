import Icon from '@/components/ui/icon';

interface StatCardProps {
  icon: string;
  value: string;
  label: string;
  iconColor?: string;
}

export const StatCard = ({ icon, value, label, iconColor = 'text-primary' }: StatCardProps) => {
  return (
    <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-primary/10 hover:border-primary/20 transition-all duration-300 hover:shadow-lg group">
      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon name={icon as any} size={28} className={iconColor} />
      </div>
      <div className="text-4xl font-bold text-primary mb-2">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
};
