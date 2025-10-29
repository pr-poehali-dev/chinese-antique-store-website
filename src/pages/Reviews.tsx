import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';
import { Link, useNavigate } from 'react-router-dom';

const reviewsData = [
  { id: 1, name: 'Александр Волков', initials: 'АВ', rating: 5, text: 'Приобрёл вазу династии Цин. Качество экспертизы на высочайшем уровне. Все документы в порядке, доставка прошла безупречно. Очень доволен покупкой!', date: 'Октябрь 2024' },
  { id: 2, name: 'Елена Кузнецова', initials: 'ЕК', rating: 5, text: 'Помогли собрать коллекцию нефритовых изделий. Профессиональные консультации, индивидуальный подход. Рекомендую всем ценителям восточного искусства!', date: 'Сентябрь 2024' },
  { id: 3, name: 'Дмитрий Соколов', initials: 'ДС', rating: 5, text: 'Третий год работаю с Лун Тан. Надёжность и профессионализм. Каждый предмет — настоящее сокровище. Цены адекватные, учитывая качество и редкость.', date: 'Август 2024' },
  { id: 4, name: 'Мария Петрова', initials: 'МП', rating: 5, text: 'Приобрела свиток с живописью. Восхитительная работа! Эксперты помогли с оформлением и рассказали всю историю предмета. Сервис на высшем уровне.', date: 'Октябрь 2024' },
  { id: 5, name: 'Игорь Семёнов', initials: 'ИС', rating: 5, text: 'Купил бронзовую курильницу XVII века. Упаковка была безупречной, доставка быстрая. Предмет полностью соответствует описанию. Благодарю команду!', date: 'Июль 2024' },
  { id: 6, name: 'Анна Морозова', initials: 'АМ', rating: 5, text: 'Огромный выбор предметов! Консультанты помогли подобрать идеальный подарок для коллекционера. Всё прошло на высшем уровне.', date: 'Июнь 2024' },
  { id: 7, name: 'Сергей Белов', initials: 'СБ', rating: 5, text: 'Профессиональная экспертиза и честная оценка. Приятно работать с людьми, которые действительно разбираются в антиквариате.', date: 'Май 2024' },
  { id: 8, name: 'Ольга Иванова', initials: 'ОИ', rating: 5, text: 'Приобрела несколько предметов для своей коллекции. Каждый раз получаю удовольствие от общения и качества товаров.', date: 'Апрель 2024' },
  { id: 9, name: 'Владимир Егоров', initials: 'ВЕ', rating: 5, text: 'Отличный магазин с редкими экземплярами. Цены справедливые, а главное - гарантия подлинности на каждый предмет.', date: 'Март 2024' },
  { id: 10, name: 'Татьяна Новикова', initials: 'ТН', rating: 5, text: 'Заказывала доставку в другой город. Всё пришло в идеальном состоянии, упаковка профессиональная. Спасибо!', date: 'Февраль 2024' },
  { id: 11, name: 'Павел Козлов', initials: 'ПК', rating: 5, text: 'Лучший антикварный магазин, с которым приходилось работать. Высокий уровень сервиса и внимание к деталям.', date: 'Январь 2024' },
  { id: 12, name: 'Екатерина Смирнова', initials: 'ЕС', rating: 5, text: 'Консультанты терпеливо отвечали на все мои вопросы. Помогли выбрать идеальный предмет для интерьера.', date: 'Декабрь 2023' },
  { id: 13, name: 'Андрей Орлов', initials: 'АО', rating: 5, text: 'Приобрёл нефритовую статуэтку. Качество изделия превзошло ожидания. Документация полная, оформление быстрое.', date: 'Ноябрь 2023' },
  { id: 14, name: 'Наталья Попова', initials: 'НП', rating: 5, text: 'Очень довольна покупкой! Предмет оказался ещё красивее, чем на фотографиях. Рекомендую этот магазин.', date: 'Октябрь 2023' },
  { id: 15, name: 'Максим Лебедев', initials: 'МЛ', rating: 5, text: 'Отличная коллекция и профессиональный подход. Буду обращаться ещё!', date: 'Сентябрь 2023' },
];

const Reviews = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            <li><Link to="/catalog" className="hover:text-primary transition-colors">Каталог</Link></li>
            <li><Link to="/reviews" className="text-primary font-semibold">Отзывы</Link></li>
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
                  <Link to="/catalog" className="text-left text-lg font-medium hover:text-primary transition-colors py-2">Каталог</Link>
                  <Link to="/reviews" className="text-left text-lg font-semibold text-primary py-2">Отзывы</Link>
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
                Отзывы наших клиентов
              </h1>
              <p className="text-lg text-muted-foreground">Более 15 лет доверия и благодарных отзывов</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
              <Card className="border-0 shadow-xl bg-card text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">1,200+</div>
                  <div className="text-muted-foreground">Довольных клиентов</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-xl bg-card text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">4.9</div>
                  <div className="text-muted-foreground">Средняя оценка</div>
                  <div className="flex justify-center mt-2 text-secondary">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} fill="currentColor" />
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-xl bg-card text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <div className="text-muted-foreground">Повторных обращений</div>
                </CardContent>
              </Card>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviewsData.map(review => (
                <Card key={review.id} className="border-0 shadow-xl bg-card hover:shadow-2xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
                        {review.initials}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{review.name}</CardTitle>
                        <div className="flex text-secondary mt-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Icon key={i} name="Star" size={16} fill="currentColor" />
                          ))}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{review.date}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">"{review.text}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
