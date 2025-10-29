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
    setMobileMenuOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  const menuItems = [
    { path: '/', label: 'Главная', icon: 'Home' },
    { path: '/about', label: 'О магазине', icon: 'Info' },
    { path: '/catalog', label: 'Каталог', icon: 'ShoppingBag' },
    { path: '/reviews', label: 'Отзывы', icon: 'Star' },
    { path: '/contacts', label: 'Контакты', icon: 'MessageCircle' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-primary/10 relative overflow-hidden shadow-sm">
      <div className="absolute inset-0 bg-card/95"></div>
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-96 opacity-[0.08]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='80' viewBox='0 0 200 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23dc143c'%3E%3Cpath d='M100,15 L105,25 L115,25 L107,32 L110,42 L100,35 L90,42 L93,32 L85,25 L95,25 Z'/%3E%3Cpath d='M70,40 Q75,30 80,40 T90,40' fill='none' stroke='%23dc143c' stroke-width='1.5'/%3E%3Cpath d='M110,40 Q115,30 120,40 T130,40' fill='none' stroke='%23dc143c' stroke-width='1.5'/%3E%3Ccircle cx='65' cy='40' r='4' fill='%23daa520'/%3E%3Ccircle cx='135' cy='40' r='4' fill='%23daa520'/%3E%3Cpath d='M95,55 L97,60 L102,60 L98,63 L100,68 L95,65 L90,68 L92,63 L88,60 L93,60 Z' fill='%23daa520' opacity='0.6'/%3E%3Cpath d='M105,55 L107,60 L112,60 L108,63 L110,68 L105,65 L100,68 L102,63 L98,60 L103,60 Z' fill='%23daa520' opacity='0.6'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '200px 80px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <button onClick={handleLogoClick} className="flex items-center gap-2.5 group">
            <div className="text-3xl transition-transform group-hover:scale-110 duration-300">🐉</div>
            <div>
              <div className="text-xl font-bold text-primary tracking-tight">龍潭古董</div>
              <div className="text-xs text-muted-foreground -mt-0.5 hidden sm:block">Лун Тан</div>
            </div>
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? 'bg-primary/10 text-primary'
                    : 'text-foreground/70 hover:text-primary hover:bg-primary/5'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side - Contact info + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex flex-col items-end">
              <a href="tel:+74951234567" className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                +7 (495) 123-45-67
              </a>
              <span className="text-xs text-muted-foreground">Пн-Пт: 10:00-19:00</span>
            </div>
            <Button 
              onClick={handleContactClick} 
              size="default" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all"
            >
              <Icon name="MessageCircle" size={16} className="mr-2" />
              Связаться
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Icon name="Menu" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <div className="flex flex-col h-full">
                {/* Mobile Logo */}
                <button onClick={handleLogoClick} className="flex items-center gap-2.5 mb-8 group">
                  <div className="text-3xl">🐉</div>
                  <div>
                    <div className="text-xl font-bold text-primary">龍潭古董</div>
                    <div className="text-xs text-muted-foreground">Лун Тан</div>
                  </div>
                </button>

                {/* Mobile Navigation */}
                <nav className="flex flex-col gap-2 flex-1">
                  {menuItems.map(item => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                        isActive(item.path)
                          ? 'bg-primary/10 text-primary'
                          : 'text-foreground/70 hover:text-primary hover:bg-primary/5'
                      }`}
                    >
                      <Icon name={item.icon as any} size={20} />
                      {item.label}
                    </Link>
                  ))}
                </nav>

                {/* Mobile Contact Info */}
                <div className="border-t border-border pt-6 mt-6 space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <Icon name="Phone" size={18} className="text-primary" />
                    <div>
                      <a href="tel:+74951234567" className="font-semibold text-primary hover:underline">
                        +7 (495) 123-45-67
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Icon name="Mail" size={18} className="text-primary" />
                    <a href="mailto:info@luntang-antiques.ru" className="text-muted-foreground hover:text-primary hover:underline">
                      info@luntang-antiques.ru
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Icon name="Clock" size={18} className="text-primary" />
                    <span className="text-muted-foreground">Пн-Пт: 10:00-19:00</span>
                  </div>
                  
                  <Button 
                    onClick={handleContactClick} 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground w-full mt-4 shadow-md"
                  >
                    <Icon name="MessageCircle" size={16} className="mr-2" />
                    Связаться с нами
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
