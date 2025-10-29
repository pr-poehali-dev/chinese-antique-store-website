import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

const catalogItems = [
  {
    id: 1,
    name: 'Ваза с драконами династии Мин',
    description: 'Фарфоровая ваза с росписью синим кобальтом. Изображение драконов в облаках — символ императорской власти.',
    price: '128 000',
    image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/7498533b-cd31-4299-a6ba-592871bafb18.jpg',
    period: 'XV век'
  },
  {
    id: 2,
    name: 'Нефритовый Будда',
    description: 'Статуя из цельного куска зелёного нефрита. Тончайшая резьба, проработка деталей одеяний и черт лица.',
    price: '245 000',
    image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/3d3a6fc2-d1e9-48b5-9c0b-0e601fdde4ec.jpg',
    period: 'XVIII век'
  },
  {
    id: 3,
    name: 'Бронзовая курильница с драконами',
    description: 'Курильница для благовоний с ручками в виде драконов. Благородная патина, сохранившая первозданный вид.',
    price: '89 500',
    image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/934c9e8b-1f3f-4df6-b09f-69e666982422.jpg',
    period: 'XVII век'
  },
  {
    id: 4,
    name: 'Свиток с горным пейзажем',
    description: 'Живопись тушью на шёлке. Классический пейзаж в стиле шань-шуй с горами, водопадом и павильоном.',
    price: '156 000',
    image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/4bb1dc5b-a792-4501-a4c4-ce0e972071b1.jpg',
    period: 'XIX век'
  },
  {
    id: 5,
    name: 'Резная панель с фениксом',
    description: 'Деревянная панель с резьбой, покрытая красным лаком. Изображение феникса среди цветов пионов.',
    price: '67 000',
    image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/0f4c5e21-0675-4b56-ac42-3559fb3c0d9a.jpg',
    period: 'XVIII век'
  },
  {
    id: 6,
    name: 'Перегородчатая эмаль клуазоне',
    description: 'Ваза с цветочным орнаментом, выполненная в технике перегородчатой эмали. Яркие краски сохранились идеально.',
    price: '112 000',
    image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/8091596e-e2cc-4ba5-bc7f-2644ff30c664.jpg',
    period: 'XIX век'
  }
];

const Index = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-primary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-card/95"></div>
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-96 opacity-[0.08]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='80' viewBox='0 0 200 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23dc143c'%3E%3Cpath d='M100,15 L105,25 L115,25 L107,32 L110,42 L100,35 L90,42 L93,32 L85,25 L95,25 Z'/%3E%3Cpath d='M70,40 Q75,30 80,40 T90,40' fill='none' stroke='%23dc143c' stroke-width='1.5'/%3E%3Cpath d='M110,40 Q115,30 120,40 T130,40' fill='none' stroke='%23dc143c' stroke-width='1.5'/%3E%3Ccircle cx='65' cy='40' r='4' fill='%23daa520'/%3E%3Ccircle cx='135' cy='40' r='4' fill='%23daa520'/%3E%3Cpath d='M95,55 L97,60 L102,60 L98,63 L100,68 L95,65 L90,68 L92,63 L88,60 L93,60 Z' fill='%23daa520' opacity='0.6'/%3E%3Cpath d='M105,55 L107,60 L112,60 L108,63 L110,68 L105,65 L100,68 L102,63 L98,60 L103,60 Z' fill='%23daa520' opacity='0.6'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '200px 80px',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}></div>
        
        <nav className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between relative z-10">
          <button onClick={() => scrollToSection('hero')} className="flex items-center gap-2">
            <span className="text-2xl sm:text-3xl">🐉</span>
            <div>
              <div className="text-lg sm:text-xl font-bold text-primary tracking-tight">龍潭古董</div>
              <div className="text-xs text-muted-foreground -mt-0.5 hidden sm:block">Лун Тан</div>
            </div>
          </button>
          
          <ul className="hidden lg:flex gap-8 text-sm font-medium text-foreground/80">
            <li><Link to="/about" className="hover:text-primary transition-colors">О магазине</Link></li>
            <li><Link to="/catalog" className="hover:text-primary transition-colors">Каталог</Link></li>
            <li><Link to="/reviews" className="hover:text-primary transition-colors">Отзывы</Link></li>
            <li><Link to="/contacts" className="hover:text-primary transition-colors">Контакты</Link></li>
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
                  <Link to="/about" className="text-left text-lg font-medium hover:text-primary transition-colors py-2">
                    О магазине
                  </Link>
                  <Link to="/catalog" className="text-left text-lg font-medium hover:text-primary transition-colors py-2">
                    Каталог
                  </Link>
                  <Link to="/reviews" className="text-left text-lg font-medium hover:text-primary transition-colors py-2">
                    Отзывы
                  </Link>
                  <Link to="/contacts" className="text-left text-lg font-medium hover:text-primary transition-colors py-2">
                    Контакты
                  </Link>
                  <Button onClick={() => scrollToSection('contact')} className="bg-primary hover:bg-primary/90 text-primary-foreground w-full mt-4">
                    Связаться
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>

      <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(139, 0, 0, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(218, 165, 32, 0.03) 0%, transparent 50%)',
        }}></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l5 15h15l-12 9 5 15-13-9-13 9 5-15-12-9h15z' fill='%23dc143c' fill-opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px'
        }}></div>
        
        <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-32 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-6 sm:mb-8 inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 bg-primary/5 border border-primary/20 rounded-full text-xs sm:text-sm font-medium text-primary">
              <span>✦</span>
              <span>Аутентичные сокровища Китая</span>
              <span>✦</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 leading-tight px-2">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent inline-block">
                Императорский антиквариат
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/60 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed font-light px-4">
              Редчайшие артефакты династий Мин и Цин с подтверждённой историей и сертификатами подлинности
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center px-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('catalog')} 
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-7 shadow-xl w-full sm:w-auto"
              >
                Смотреть коллекцию
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => scrollToSection('about')} 
                className="text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-7 border-2 hover:bg-primary/5 w-full sm:w-auto"
              >
                О магазине
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary/10 bg-card/50 backdrop-blur">
          <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
            <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2">500+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Уникальных предметов</div>
              </div>
              <div className="text-center border-x border-primary/10">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2">15 лет</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Опыт на рынке</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2">100%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Гарантия подлинности</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-12 sm:py-16 lg:py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="space-y-8">
                <div>
                  <div className="inline-block text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
                    О магазине
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                    Коллекция мирового уровня
                  </h2>
                  <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                </div>
                
                <div className="space-y-6 text-lg text-foreground/70 leading-relaxed">
                  <p>
                    Мы специализируемся на поиске и продаже редчайших предметов китайского антиквариата императорского уровня. В нашей коллекции представлены фарфор династий Мин и Цин, нефритовые изделия высочайшего качества, старинная каллиграфия и живопись.
                  </p>
                  <p>
                    Каждый экспонат проходит строгую многоступенчатую экспертизу и сопровождается полным пакетом документов, подтверждающих его подлинность и историческую ценность.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Award" className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Экспертиза</div>
                      <div className="text-sm text-muted-foreground">Проверка подлинности</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Globe" className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Доставка</div>
                      <div className="text-sm text-muted-foreground">По всему миру</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/d064df74-8098-4e2f-955a-2d35418908d3.jpg" 
                    alt="Интерьер магазина" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -z-10"></div>
                <div className="absolute -top-8 -left-8 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-block text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
              Преимущества
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Почему выбирают нас
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Card className="border-0 shadow-xl bg-card hover:shadow-2xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-5">
                  <Icon name="ShieldCheck" className="text-primary" size={32} />
                </div>
                <CardTitle className="text-2xl mb-3">Гарантия подлинности</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Пожизненная гарантия на каждый предмет. Полная проверка экспертами с сертификатом и историей происхождения.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-card hover:shadow-2xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center mb-5">
                  <Icon name="Gem" className="text-secondary" size={32} />
                </div>
                <CardTitle className="text-2xl mb-3">Редкие экземпляры</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Уникальные артефакты музейного уровня, которые редко появляются на открытом рынке антиквариата.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-card hover:shadow-2xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-5">
                  <Icon name="Users" className="text-primary" size={32} />
                </div>
                <CardTitle className="text-2xl mb-3">Экспертная поддержка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Персональные консультации по выбору, оценке и уходу. Помогаем формировать коллекции мирового класса.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-card hover:shadow-2xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center mb-5">
                  <Icon name="TruckIcon" className="text-secondary" size={32} />
                </div>
                <CardTitle className="text-2xl mb-3">Безопасная доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Специальная упаковка и полное страхование. Доставка по всему миру с профессиональным сопровождением.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-card hover:shadow-2xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-5">
                  <Icon name="FileText" className="text-primary" size={32} />
                </div>
                <CardTitle className="text-2xl mb-3">Полная документация</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Подробная история предмета, экспертные заключения и все документы для таможни.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-card hover:shadow-2xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center mb-5">
                  <Icon name="TrendingUp" className="text-secondary" size={32} />
                </div>
                <CardTitle className="text-2xl mb-3">Инвестиционная ценность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Стабильный рост стоимости. Помогаем выбрать предметы с максимальным инвестиционным потенциалом.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-12 sm:py-16 lg:py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-20">
            <div className="inline-block text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
              Каталог
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Избранные шедевры
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Наиболее ценные и востребованные предметы из нашей коллекции
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
            {catalogItems.map((item) => (
              <Card key={item.id} className="border-0 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group bg-card">
                <div className="relative overflow-hidden aspect-square bg-muted">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur text-primary-foreground px-4 py-2 rounded-xl text-xs font-semibold shadow-lg">
                    {item.period}
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl leading-tight">{item.name}</CardTitle>
                </CardHeader>
                <CardContent className="pb-4">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {item.description}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-primary">{item.price} ₽</span>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button 
                    variant="outline" 
                    className="w-full hover:bg-primary hover:text-primary-foreground transition-all"
                    onClick={() => scrollToSection('contact')}
                  >
                    Запросить информацию
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/catalog">
              <Button size="lg" variant="outline" className="px-10">
                Смотреть весь каталог
                <Icon name="ArrowRight" className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-20">
            <div className="inline-block text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
              Отзывы
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Что говорят наши клиенты
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <Card className="border-0 shadow-xl bg-card">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
                    АВ
                  </div>
                  <div>
                    <CardTitle className="text-lg">Александр Волков</CardTitle>
                    <div className="flex text-secondary mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  "Приобрёл вазу династии Цин. Качество экспертизы на высочайшем уровне. Все документы в порядке, доставка прошла безупречно. Очень доволен покупкой!"
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-card">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
                    ЕК
                  </div>
                  <div>
                    <CardTitle className="text-lg">Елена Кузнецова</CardTitle>
                    <div className="flex text-secondary mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  "Помогли собрать коллекцию нефритовых изделий. Профессиональные консультации, индивидуальный подход. Рекомендую всем ценителям восточного искусства!"
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-card">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
                    ДС
                  </div>
                  <div>
                    <CardTitle className="text-lg">Дмитрий Соколов</CardTitle>
                    <div className="flex text-secondary mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  "Третий год работаю с Лун Тан. Надёжность и профессионализм. Каждый предмет — настоящее сокровище. Цены адекватные, учитывая качество и редкость."
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-card">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
                    МП
                  </div>
                  <div>
                    <CardTitle className="text-lg">Мария Петрова</CardTitle>
                    <div className="flex text-secondary mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  "Приобрела свиток с живописью. Восхитительная работа! Эксперты помогли с оформлением и рассказали всю историю предмета. Сервис на высшем уровне."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
                Контакты
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Свяжитесь с нами
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6"></div>
              <p className="text-xl text-muted-foreground">
                Наши эксперты помогут подобрать идеальный предмет для вашей коллекции
              </p>
            </div>

            <Card className="border-0 shadow-2xl bg-card">
              <CardContent className="p-6 sm:p-8 lg:p-10">
                <form onSubmit={handleSubmit} className="space-y-7">
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-foreground">Ваше имя</label>
                    <Input 
                      placeholder="Иван Петров" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="h-12 text-base"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-foreground">Email</label>
                    <Input 
                      type="email" 
                      placeholder="ivan@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="h-12 text-base"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-foreground">Сообщение</label>
                    <Textarea 
                      placeholder="Расскажите, какие предметы вас интересуют..." 
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                      className="text-base resize-none"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 h-14 text-base font-semibold shadow-xl" 
                  >
                    Отправить заявку
                    <Icon name="Send" className="ml-2" size={18} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
              FAQ
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Часто задаваемые вопросы
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
          </div>

          <Accordion type="single" collapsible className="max-w-3xl mx-auto space-y-4">
            <AccordionItem value="item-1" className="border-0 rounded-2xl px-4 sm:px-6 lg:px-8 py-2 bg-card shadow-lg">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Как проверяется подлинность предметов?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2">
                Каждый предмет проходит многоступенчатую экспертизу сертифицированными специалистами. Используем термолюминесцентный анализ для керамики и фарфора, исследование пигментов для живописи. К каждому изделию прилагается подробное заключение и сертификат подлинности.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-0 rounded-2xl px-4 sm:px-6 lg:px-8 py-2 bg-card shadow-lg">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Какие гарантии вы предоставляете?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2">
                Пожизненная гарантия подлинности на все проданные предметы. Если обнаружится несоответствие заявленным характеристикам, вернём полную стоимость. Также страхование при транспортировке и гарантия возврата в течение 14 дней.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-0 rounded-2xl px-4 sm:px-6 lg:px-8 py-2 bg-card shadow-lg">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Как происходит доставка?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2">
                Доставка по всему миру через проверенные компании. Специальная защитная упаковка и страхование на полную стоимость. Стоимость рассчитывается индивидуально. Для покупок от $10,000 доставка по России бесплатная.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-0 rounded-2xl px-4 sm:px-6 lg:px-8 py-2 bg-card shadow-lg">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Можно ли купить в рассрочку?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2">
                Да, для покупок от $5,000 предлагаем рассрочку без процентов до 12 месяцев. Возможны специальные условия для постоянных клиентов и при формировании больших коллекций.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-0 rounded-2xl px-4 sm:px-6 lg:px-8 py-2 bg-card shadow-lg">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Помогаете ли с оценкой коллекции?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2">
                Да, предоставляем услуги оценки и экспертизы китайского антиквариата. Детальный анализ, определение подлинности, датировки и рыночной стоимости. Первичная консультация бесплатна.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

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
                <li><button onClick={() => scrollToSection('about')} className="hover:opacity-100 hover:text-secondary transition-all">О магазине</button></li>
                <li><button onClick={() => scrollToSection('catalog')} className="hover:opacity-100 hover:text-secondary transition-all">Каталог</button></li>
                <li><button onClick={() => scrollToSection('reviews')} className="hover:opacity-100 hover:text-secondary transition-all">Отзывы</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:opacity-100 hover:text-secondary transition-all">Контакты</button></li>
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
    </div>
  );
};

export default Index;