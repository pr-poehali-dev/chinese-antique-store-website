import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleContactClick = () => {
    if (location.pathname === '/') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/contacts');
    }
    setMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-primary/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-card/95"></div>
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-96 opacity-[0.08]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='80' viewBox='0 0 200 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23dc143c'%3E%3Cpath d='M100,15 L105,25 L115,25 L107,32 L110,42 L100,35 L90,42 L93,32 L85,25 L95,25 Z'/%3E%3Cpath d='M70,40 Q75,30 80,40 T90,40' fill='none' stroke='%23dc143c' stroke-width='1.5'/%3E%3Cpath d='M110,40 Q115,30 120,40 T130,40' fill='none' stroke='%23dc143c' stroke-width='1.5'/%3E%3Ccircle cx='65' cy='40' r='4' fill='%23daa520'/%3E%3Ccircle cx='135' cy='40' r='4' fill='%23daa520'/%3E%3Cpath d='M95,55 L97,60 L102,60 L98,63 L100,68 L95,65 L90,68 L92,63 L88,60 L93,60 Z' fill='%23daa520' opacity='0.6'/%3E%3Cpath d='M105,55 L107,60 L112,60 L108,63 L110,68 L105,65 L100,68 L102,63 L98,60 L103,60 Z' fill='%23daa520' opacity='0.6'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '200px 80px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}></div>
      
      {/* Top info bar - desktop only */}
      <div className="hidden xl:block border-b border-primary/5 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between py-2.5 text-sm">
            <div className="flex items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={16} className="text-primary" />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={16} className="text-primary" />
                <span>info@luntang-antiques.ru</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={16} className="text-primary" />
                <span>Пн-Пт: 10:00 - 19:00, Сб: 11:00 - 17:00</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon name="Award" size={16} className="text-gold" />
                <span className="text-xs font-medium">15 лет экспертизы</span>
              </div>
              <div className="w-px h-4 bg-border"></div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon name="Star" size={16} className="text-gold fill-gold" />
                <span className="text-xs font-medium">Рейтинг 4.8/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <nav className="container mx-auto px-4 sm:px-6 py-4 xl:py-5 flex items-center justify-between relative z-10">
        <button onClick={handleLogoClick} className="flex items-center gap-3 group">
          <div className="text-3xl sm:text-4xl transition-transform group-hover:scale-110 duration-300">🐉</div>
          <div>
            <div className="text-xl sm:text-2xl font-bold text-primary tracking-tight">龍潭古董</div>
            <div className="text-xs text-muted-foreground -mt-0.5 hidden sm:block">Лун Тан • Китайский Антиквариат</div>
          </div>
        </button>
        
        <ul className="hidden lg:flex gap-8 xl:gap-10 text-sm font-medium text-foreground/80">
          <li>
            <Link 
              to="/" 
              className={`transition-colors ${isActive('/') ? 'text-primary font-semibold' : 'hover:text-primary'}`}
            >
              Главная
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={`transition-colors ${isActive('/about') ? 'text-primary font-semibold' : 'hover:text-primary'}`}
            >
              О магазине
            </Link>
          </li>
          <li>
            <Link 
              to="/catalog" 
              className={`transition-colors ${isActive('/catalog') ? 'text-primary font-semibold' : 'hover:text-primary'}`}
            >
              Каталог
            </Link>
          </li>
          <li>
            <Link 
              to="/reviews" 
              className={`transition-colors ${isActive('/reviews') ? 'text-primary font-semibold' : 'hover:text-primary'}`}
            >
              Отзывы
            </Link>
          </li>
          <li>
            <Link 
              to="/contacts" 
              className={`transition-colors ${isActive('/contacts') ? 'text-primary font-semibold' : 'hover:text-primary'}`}
            >
              Контакты
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          <Button onClick={handleContactClick} size="default" className="hidden sm:flex bg-primary hover:bg-primary/90 text-primary-foreground">
            Связаться
          </Button>
          
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Icon name="Menu" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px]">
              <div className="flex flex-col gap-6 mt-8">
                <Link 
                  to="/" 
                  className={`text-left text-lg font-medium transition-colors py-2 ${isActive('/') ? 'text-primary font-semibold' : 'hover:text-primary'}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Главная
                </Link>
                <Link 
                  to="/about" 
                  className={`text-left text-lg font-medium transition-colors py-2 ${isActive('/about') ? 'text-primary font-semibold' : 'hover:text-primary'}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  О магазине
                </Link>
                <Link 
                  to="/catalog" 
                  className={`text-left text-lg font-medium transition-colors py-2 ${isActive('/catalog') ? 'text-primary font-semibold' : 'hover:text-primary'}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Каталог
                </Link>
                <Link 
                  to="/reviews" 
                  className={`text-left text-lg font-medium transition-colors py-2 ${isActive('/reviews') ? 'text-primary font-semibold' : 'hover:text-primary'}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Отзывы
                </Link>
                <Link 
                  to="/contacts" 
                  className={`text-left text-lg font-medium transition-colors py-2 ${isActive('/contacts') ? 'text-primary font-semibold' : 'hover:text-primary'}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Контакты
                </Link>
                <Button onClick={handleContactClick} className="bg-primary hover:bg-primary/90 text-primary-foreground w-full mt-4">
                  Связаться
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};