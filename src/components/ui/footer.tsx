import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-foreground to-foreground/95 text-background py-12 sm:py-16 lg:py-20 border-t-4 border-primary">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="text-4xl">🐉</span>
              <div>
                <div className="text-2xl font-bold">龍潭古董</div>
                <div className="text-xs opacity-70">Лун Тан</div>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Эксклюзивный китайский антиквариат императорского уровня с подтверждённой историей.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-5 text-secondary">Навигация</h3>
            <ul className="space-y-3 text-sm opacity-80">
              <li>
                <Link to="/about" className="hover:opacity-100 hover:text-secondary transition-all">
                  О магазине
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="hover:opacity-100 hover:text-secondary transition-all">
                  Каталог
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:opacity-100 hover:text-secondary transition-all">
                  Отзывы
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="hover:opacity-100 hover:text-secondary transition-all">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-5 text-secondary">Контакты</h3>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-center gap-2 hover:opacity-100 transition-opacity">
                <Icon name="Mail" size={16} />
                info@luntan.ru
              </li>
              <li className="flex items-center gap-2 hover:opacity-100 transition-opacity">
                <Icon name="Phone" size={16} />
                +7 (495) 123-45-67
              </li>
              <li className="flex items-center gap-2 hover:opacity-100 transition-opacity">
                <Icon name="MapPin" size={16} />
                Москва, ул. Арбат, 12
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-5 text-secondary">Соцсети</h3>
            <div className="flex gap-3">
              <a href="#" className="w-11 h-11 bg-background/10 rounded-xl flex items-center justify-center hover:bg-primary transition-all">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="w-11 h-11 bg-background/10 rounded-xl flex items-center justify-center hover:bg-primary transition-all">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="w-11 h-11 bg-background/10 rounded-xl flex items-center justify-center hover:bg-primary transition-all">
                <Icon name="MessageCircle" size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-10 text-center text-sm opacity-70">
          <p>&copy; 2024 龍潭古董 Лун Тан. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};
