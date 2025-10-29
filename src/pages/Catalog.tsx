import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { Link, useNavigate } from 'react-router-dom';

const catalogData = {
  'porcelain': [
    { id: 1, name: 'Ваза с драконами династии Мин', price: '128,000', period: 'XV век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/2e1518a1-eb0e-425b-a53d-829fd86ef1ea.jpg' },
    { id: 7, name: 'Чайный сервиз династии Цин', price: '95,000', period: 'XVIII век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/00584e49-4b26-4c52-868a-0a7a821999d7.jpg' },
    { id: 8, name: 'Тарелка с росписью синим кобальтом', price: '45,000', period: 'XVII век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/2e1518a1-eb0e-425b-a53d-829fd86ef1ea.jpg' },
    { id: 9, name: 'Ваза с пионами', price: '156,000', period: 'XVI век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/00584e49-4b26-4c52-868a-0a7a821999d7.jpg' },
  ],
  'jade': [
    { id: 2, name: 'Нефритовый Будда', price: '245,000', period: 'XVIII век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/f50c2c77-6fd6-4a76-9c5e-54002a5c0e6b.jpg' },
    { id: 10, name: 'Нефритовая подвеска Би', price: '67,000', period: 'XIX век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/f50c2c77-6fd6-4a76-9c5e-54002a5c0e6b.jpg' },
    { id: 11, name: 'Резная нефритовая статуэтка', price: '189,000', period: 'XVII век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/f50c2c77-6fd6-4a76-9c5e-54002a5c0e6b.jpg' },
  ],
  'bronze': [
    { id: 3, name: 'Бронзовая курильница с драконами', price: '89,500', period: 'XVII век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/7c2996c3-1e7f-46e8-b5cd-ddca4f50d0a2.jpg' },
    { id: 12, name: 'Бронзовый сосуд для вина', price: '134,000', period: 'XVI век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/7c2996c3-1e7f-46e8-b5cd-ddca4f50d0a2.jpg' },
    { id: 13, name: 'Бронзовое зеркало с узорами', price: '56,000', period: 'XVIII век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/7c2996c3-1e7f-46e8-b5cd-ddca4f50d0a2.jpg' },
  ],
  'painting': [
    { id: 4, name: 'Свиток с горным пейзажем', price: '156,000', period: 'XIX век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/2fef96fa-fca1-455d-ba2c-8c2872105bf6.jpg' },
    { id: 14, name: 'Каллиграфия мастера Чжао', price: '289,000', period: 'XVIII век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/2fef96fa-fca1-455d-ba2c-8c2872105bf6.jpg' },
    { id: 15, name: 'Свиток с цветами и птицами', price: '178,000', period: 'XIX век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/2fef96fa-fca1-455d-ba2c-8c2872105bf6.jpg' },
  ],
  'wood': [
    { id: 5, name: 'Резная панель с фениксом', price: '67,000', period: 'XVIII век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/1dbb28f4-226a-440a-a46c-15f668473e02.jpg' },
    { id: 16, name: 'Деревянная ширма с резьбой', price: '234,000', period: 'XVII век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/1dbb28f4-226a-440a-a46c-15f668473e02.jpg' },
    { id: 17, name: 'Резной столик для чайной церемонии', price: '145,000', period: 'XIX век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/1dbb28f4-226a-440a-a46c-15f668473e02.jpg' },
  ],
  'enamel': [
    { id: 6, name: 'Перегородчатая эмаль клуазоне', price: '112,000', period: 'XIX век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/00584e49-4b26-4c52-868a-0a7a821999d7.jpg' },
    { id: 18, name: 'Ваза клуазоне с драконами', price: '198,000', period: 'XVIII век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/00584e49-4b26-4c52-868a-0a7a821999d7.jpg' },
  ],
};

const categories = [
  { id: 'all', name: 'Все предметы', icon: 'Grid3x3' },
  { id: 'porcelain', name: 'Фарфор', icon: 'Wine' },
  { id: 'jade', name: 'Нефрит', icon: 'Gem' },
  { id: 'bronze', name: 'Бронза', icon: 'Sparkles' },
  { id: 'painting', name: 'Живопись', icon: 'Image' },
  { id: 'wood', name: 'Дерево', icon: 'Trees' },
  { id: 'enamel', name: 'Эмаль', icon: 'Palette' },
];

const Catalog = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [searchQuery, setSearchQuery] = useState('');

  const scrollToSection = (id: string) => {
    if (id === 'home') {
      navigate('/');
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    setMobileMenuOpen(false);
  };

  const getAllItems = () => {
    if (selectedCategory === 'all') {
      return Object.values(catalogData).flat();
    }
    return catalogData[selectedCategory as keyof typeof catalogData] || [];
  };

  const filteredItems = getAllItems()
    .filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'price-asc') return parseInt(a.price.replace(',', '')) - parseInt(b.price.replace(',', ''));
      if (sortBy === 'price-desc') return parseInt(b.price.replace(',', '')) - parseInt(a.price.replace(',', ''));
      return a.name.localeCompare(b.name);
    });

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-primary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-card/95 via-card/80 to-card/95"></div>
        <div className="absolute left-0 top-0 bottom-0 w-48 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='80' viewBox='0 0 100 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20,40 Q30,20 40,40 T60,40 L60,45 Q50,25 40,45 T20,45 Z' fill='%23dc143c'/%3E%3Ccircle cx='40' cy='40' r='3' fill='%23daa520'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 80px',
          backgroundRepeat: 'repeat-x'
        }}></div>
        <div className="absolute right-0 top-0 bottom-0 w-48 opacity-20 scale-x-[-1]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='80' viewBox='0 0 100 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20,40 Q30,20 40,40 T60,40 L60,45 Q50,25 40,45 T20,45 Z' fill='%23dc143c'/%3E%3Ccircle cx='40' cy='40' r='3' fill='%23daa520'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 80px',
          backgroundRepeat: 'repeat-x'
        }}></div>
        
        <nav className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between relative z-10">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl sm:text-3xl">🐉</span>
            <div>
              <div className="text-lg sm:text-xl font-bold text-primary tracking-tight">龍潭古董</div>
              <div className="text-xs text-muted-foreground -mt-0.5 hidden sm:block">Лун Тан</div>
            </div>
          </Link>
          
          <ul className="hidden lg:flex gap-8 text-sm font-medium text-foreground/80">
            <li><button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">Главная</button></li>
            <li><Link to="/catalog" className="text-primary font-semibold">Каталог</Link></li>
            <li><Link to="/reviews" className="hover:text-primary transition-colors">Отзывы</Link></li>
            <li><button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Контакты</button></li>
          </ul>

          <div className="flex items-center gap-3">
            <Button onClick={() => scrollToSection('contact')} size="default" className="hidden sm:flex bg-primary hover:bg-primary/90 text-primary-foreground">
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
                  <Link to="/" className="text-left text-lg font-medium hover:text-primary transition-colors py-2">Главная</Link>
                  <Link to="/catalog" className="text-left text-lg font-semibold text-primary py-2">Каталог</Link>
                  <Link to="/reviews" className="text-left text-lg font-medium hover:text-primary transition-colors py-2">Отзывы</Link>
                  <button onClick={() => scrollToSection('contact')} className="text-left text-lg font-medium hover:text-primary transition-colors py-2">Контакты</button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>

      <section className="py-12 sm:py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Полный каталог
              </h1>
              <p className="text-lg text-muted-foreground">Более 500 уникальных предметов китайского искусства</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 mb-8">
              <div className="flex-1">
                <Input
                  placeholder="Поиск по названию..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full lg:w-[200px]">
                  <SelectValue placeholder="Сортировка" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">По названию</SelectItem>
                  <SelectItem value="price-asc">Цена: по возрастанию</SelectItem>
                  <SelectItem value="price-desc">Цена: по убыванию</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
              <TabsList className="w-full flex flex-wrap justify-start gap-2 h-auto bg-transparent mb-8">
                {categories.map(cat => (
                  <TabsTrigger key={cat.id} value={cat.id} className="flex items-center gap-2">
                    <Icon name={cat.icon as any} size={16} />
                    {cat.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredItems.map(item => (
                  <Card key={item.id} className="border-0 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                    <div className="relative overflow-hidden aspect-square bg-muted">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg leading-tight">{item.name}</CardTitle>
                      <p className="text-xs text-muted-foreground mt-1">{item.period}</p>
                    </CardHeader>
                    <CardFooter className="flex justify-between items-center pt-0">
                      <div className="text-2xl font-bold text-primary">{item.price} ₽</div>
                      <Button size="sm" variant="outline">Подробнее</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </Tabs>

            {filteredItems.length === 0 && (
              <div className="text-center py-20">
                <p className="text-xl text-muted-foreground">Ничего не найдено</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Catalog;
