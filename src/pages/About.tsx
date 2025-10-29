import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';
import { Link, useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    navigate('/');
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
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
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl sm:text-3xl">🐉</span>
            <div>
              <div className="text-lg sm:text-xl font-bold text-primary tracking-tight">龍潭古董</div>
              <div className="text-xs text-muted-foreground -mt-0.5 hidden sm:block">Лун Тан</div>
            </div>
          </Link>
          
          <ul className="hidden lg:flex gap-8 text-sm font-medium text-foreground/80">
            <li><Link to="/" className="hover:text-primary transition-colors">Главная</Link></li>
            <li><Link to="/catalog" className="hover:text-primary transition-colors">Каталог</Link></li>
            <li><Link to="/reviews" className="hover:text-primary transition-colors">Отзывы</Link></li>
            <li><Link to="/about" className="text-primary font-semibold">О магазине</Link></li>
            <li><Link to="/contacts" className="hover:text-primary transition-colors">Контакты</Link></li>
          </ul>

          <div className="flex items-center gap-3">
            <Link to="/contacts">
              <Button size="default" className="hidden sm:flex bg-primary hover:bg-primary/90 text-primary-foreground">
                Связаться
              </Button>
            </Link>
            
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px]">
                <div className="flex flex-col gap-6 mt-8">
                  <Link to="/" className="text-left text-lg font-medium hover:text-primary transition-colors py-2">Главная</Link>
                  <Link to="/catalog" className="text-left text-lg font-medium hover:text-primary transition-colors py-2">Каталог</Link>
                  <Link to="/reviews" className="text-left text-lg font-medium hover:text-primary transition-colors py-2">Отзывы</Link>
                  <Link to="/about" className="text-left text-lg font-semibold text-primary py-2">О магазине</Link>
                  <Link to="/contacts" className="text-left text-lg font-medium hover:text-primary transition-colors py-2">Контакты</Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>

      <section className="py-12 sm:py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                О нашем магазине
              </h1>
              <p className="text-lg text-muted-foreground">15 лет экспертизы в мире китайского антиквариата</p>
            </div>

            <div className="space-y-12">
              <Card className="border-0 shadow-xl bg-card">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <Icon name="BookOpen" className="text-primary" size={28} />
                    История создания
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Магазин «Лун Тан» (龍潭古董) был основан в 2009 году группой энтузиастов и экспертов китайского искусства. Наше название переводится как «Пруд Дракона» — символ мудрости, благородства и глубокого знания традиций Поднебесной.
                  </p>
                  <p>
                    Всё началось с частной коллекции основателя, Чжан Вэя, который более 30 лет изучал историю династий Мин и Цин, путешествовал по провинциям Китая в поисках редких артефактов и устанавливал связи с хранителями семейных реликвий.
                  </p>
                  <p>
                    Сегодня «Лун Тан» — это признанный центр китайского антиквариата в России, где каждый предмет имеет подтверждённую историю происхождения и проходит тщательную экспертизу.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-card">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <Icon name="Award" className="text-secondary" size={28} />
                    Наш опыт работы
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Users" className="text-primary" size={24} />
                      </div>
                      <div>
                        <div className="font-semibold text-lg mb-1">1,200+ клиентов</div>
                        <p className="text-sm text-muted-foreground">Из России, Европы и Азии доверяют нам</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Package" className="text-secondary" size={24} />
                      </div>
                      <div>
                        <div className="font-semibold text-lg mb-1">3,500+ сделок</div>
                        <p className="text-sm text-muted-foreground">Успешно проведённых за 15 лет</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Globe" className="text-primary" size={24} />
                      </div>
                      <div>
                        <div className="font-semibold text-lg mb-1">12 стран</div>
                        <p className="text-sm text-muted-foreground">География наших клиентов</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Star" className="text-secondary" size={24} />
                      </div>
                      <div>
                        <div className="font-semibold text-lg mb-1">98% повторных</div>
                        <p className="text-sm text-muted-foreground">Клиенты возвращаются к нам снова</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-card">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <Icon name="Shield" className="text-primary" size={28} />
                    Наши преимущества
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-primary/5">
                    <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <div className="font-semibold mb-1">Экспертиза каждого предмета</div>
                      <p className="text-sm text-muted-foreground">Все артефакты проходят проверку у сертифицированных экспертов с выдачей заключения и сертификата подлинности.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/5">
                    <Icon name="FileCheck" className="text-secondary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <div className="font-semibold mb-1">Полная документация</div>
                      <p className="text-sm text-muted-foreground">К каждому предмету прилагается подробная история происхождения, фотофиксация, экспертное заключение и все необходимые таможенные документы.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-primary/5">
                    <Icon name="TruckIcon" className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <div className="font-semibold mb-1">Безопасная доставка</div>
                      <p className="text-sm text-muted-foreground">Специальная упаковка с учётом хрупкости предмета, полное страхование, доставка по всему миру с трекингом.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/5">
                    <Icon name="Headphones" className="text-secondary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <div className="font-semibold mb-1">Персональная поддержка</div>
                      <p className="text-sm text-muted-foreground">Консультации по выбору, оценке, уходу за предметами. Помогаем формировать коллекции мирового уровня.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-primary/10 to-secondary/10">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <Icon name="ShieldCheck" className="text-primary" size={28} />
                    Гарантии качества
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-foreground/80">
                  <p className="leading-relaxed">
                    <strong>Пожизненная гарантия подлинности.</strong> Мы настолько уверены в качестве наших предметов, что даём бессрочную гарантию. Если экспертиза покажет, что предмет не является подлинным антиквариатом заявленного периода, мы вернём полную стоимость покупки.
                  </p>
                  <p className="leading-relaxed">
                    <strong>Право возврата в течение 14 дней.</strong> Если предмет не соответствует вашим ожиданиям (при сохранении товарного вида и упаковки), мы принимаем возврат без объяснения причин.
                  </p>
                  <p className="leading-relaxed">
                    <strong>Бесплатная повторная экспертиза.</strong> Вы можете провести независимую экспертизу в любой момент. Если есть сомнения — мы организуем повторную проверку за свой счёт.
                  </p>
                  <p className="leading-relaxed">
                    <strong>Юридическая чистота сделки.</strong> Все наши предметы имеют легальное происхождение, соответствуют международным нормам и законам РФ о культурных ценностях.
                  </p>
                </CardContent>
              </Card>

              <div className="text-center py-8">
                <Link to="/contacts">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-12">
                    Связаться с нами
                    <Icon name="ArrowRight" className="ml-2" size={20} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
