import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const catalogItems = [
  {
    id: 1,
    name: 'Ваза с драконами династии Мин',
    description: 'Фарфоровая ваза с росписью синим кобальтом. Изображение драконов в облаках — символ императорской власти.',
    price: '128,000',
    image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/2e1518a1-eb0e-425b-a53d-829fd86ef1ea.jpg',
    period: 'XV век, династия Мин'
  },
  {
    id: 2,
    name: 'Нефритовый Будда',
    description: 'Статуя из цельного куска зелёного нефрита. Тончайшая резьба, проработка деталей одеяний и черт лица.',
    price: '245,000',
    image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/f50c2c77-6fd6-4a76-9c5e-54002a5c0e6b.jpg',
    period: 'XVIII век, династия Цин'
  },
  {
    id: 3,
    name: 'Бронзовая курильница с драконами',
    description: 'Курильница для благовоний с ручками в виде драконов. Благородная патина, сохранившая первозданный вид.',
    price: '89,500',
    image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/7c2996c3-1e7f-46e8-b5cd-ddca4f50d0a2.jpg',
    period: 'XVII век, династия Цин'
  },
  {
    id: 4,
    name: 'Свиток с горным пейзажем',
    description: 'Живопись тушью на шёлке. Классический пейзаж в стиле шань-шуй с горами, водопадом и павильоном.',
    price: '156,000',
    image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/2fef96fa-fca1-455d-ba2c-8c2872105bf6.jpg',
    period: 'XIX век'
  },
  {
    id: 5,
    name: 'Резная панель с фениксом',
    description: 'Деревянная панель с резьбой, покрытая красным лаком. Изображение феникса среди цветов пионов.',
    price: '67,000',
    image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/1dbb28f4-226a-440a-a46c-15f668473e02.jpg',
    period: 'XVIII век'
  },
  {
    id: 6,
    name: 'Перегородчатая эмаль клуазоне',
    description: 'Ваза с цветочным орнаментом, выполненная в технике перегородчатой эмали. Яркие краски сохранились идеально.',
    price: '112,000',
    image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/00584e49-4b26-4c52-868a-0a7a821999d7.jpg',
    period: 'XIX век, династия Цин'
  }
];

const Index = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
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
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b-2 border-primary/30 shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground font-bold text-2xl shadow-lg">
              龍
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">Лун Тан</div>
              <div className="text-xs text-muted-foreground">龍潭古董</div>
            </div>
          </div>
          <ul className="hidden md:flex gap-8 text-sm font-medium">
            <li><button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">О нас</button></li>
            <li><button onClick={() => scrollToSection('benefits')} className="hover:text-primary transition-colors">Преимущества</button></li>
            <li><button onClick={() => scrollToSection('catalog')} className="hover:text-primary transition-colors">Каталог</button></li>
            <li><button onClick={() => scrollToSection('reviews')} className="hover:text-primary transition-colors">Отзывы</button></li>
            <li><button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Контакты</button></li>
          </ul>
          <Button onClick={() => scrollToSection('contact')} className="bg-primary hover:bg-primary/90 shadow-md">
            Оставить заявку
          </Button>
        </nav>
      </header>

      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/10">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 10 L60 30 L80 30 L65 42 L70 60 L50 48 L30 60 L35 42 L20 30 L40 30 Z' fill='%23DC2626' opacity='0.3'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}></div>
        
        <div className="absolute top-20 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-secondary/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-6 px-6 py-2 bg-primary/10 border-2 border-primary/30 rounded-full">
                <span className="text-primary font-semibold">✦ Подлинные сокровища Востока ✦</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold mb-6 text-balance leading-tight">
                Аутентичный<br/>
                <span className="text-primary">китайский антиквариат</span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground/70 mb-10 max-w-3xl mx-auto leading-relaxed">
                Редчайшие артефакты династий Мин и Цин. Каждый предмет — окно в тысячелетнюю историю Поднебесной империи
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" onClick={() => scrollToSection('catalog')} className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 shadow-lg">
                  <Icon name="Sparkles" className="mr-2" />
                  Смотреть каталог
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('about')} className="text-lg px-8 py-6 border-2 border-primary/40 hover:bg-primary/5">
                  Узнать больше
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto mt-16">
              <div className="text-center p-4 bg-background/60 backdrop-blur rounded-xl border border-primary/20">
                <div className="text-3xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Редких экспонатов</div>
              </div>
              <div className="text-center p-4 bg-background/60 backdrop-blur rounded-xl border border-primary/20">
                <div className="text-3xl font-bold text-primary mb-1">15</div>
                <div className="text-sm text-muted-foreground">Лет на рынке</div>
              </div>
              <div className="text-center p-4 bg-background/60 backdrop-blur rounded-xl border border-primary/20">
                <div className="text-3xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Подлинность</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 container mx-auto px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-2">
                О магазине
              </div>
              <h2 className="text-5xl font-bold leading-tight">
                Эксклюзивная коллекция <span className="text-primary">императорских артефактов</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary"></div>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Мы специализируемся на поиске и продаже редчайших предметов китайского антиквариата: императорского фарфора династий Мин и Цин, нефритовых изделий высочайшего качества, старинной каллиграфии и живописи мастеров.
              </p>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Каждый экспонат проходит многоступенчатую экспертизу ведущими специалистами и сопровождается полным пакетом документов, подтверждающих его подлинность и происхождение.
              </p>
              <div className="flex gap-4 pt-4">
                <div className="flex items-center gap-2 text-primary">
                  <Icon name="BadgeCheck" size={24} />
                  <span className="font-semibold">Сертификаты подлинности</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-full h-full border-4 border-primary/20 rounded-2xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/53997063-5d3a-499c-a44e-85486d7ffa71.jpg" 
                alt="Китайская ваза" 
                className="rounded-2xl shadow-2xl w-full relative z-10"
              />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-secondary/30 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-4">
              Преимущества
            </div>
            <h2 className="text-5xl font-bold mb-4">
              Почему выбирают <span className="text-primary">нас</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-primary/20 hover:shadow-2xl hover:border-primary/40 transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <Icon name="Shield" className="text-primary-foreground" size={32} />
                </div>
                <CardTitle className="text-2xl">Гарантия подлинности</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Каждый предмет проверен сертифицированными экспертами. Пожизненная гарантия подлинности с полной историей происхождения артефакта.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:shadow-2xl hover:border-primary/40 transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/70 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <Icon name="Gem" className="text-foreground" size={32} />
                </div>
                <CardTitle className="text-2xl">Редкие экземпляры</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Уникальные артефакты музейного уровня, которые крайне редко появляются на открытом рынке антиквариата.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:shadow-2xl hover:border-primary/40 transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <Icon name="Users" className="text-primary-foreground" size={32} />
                </div>
                <CardTitle className="text-2xl">Экспертная поддержка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Персональные консультации по выбору, оценке и уходу за предметами. Помогаем формировать коллекции мирового уровня.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:shadow-2xl hover:border-primary/40 transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/70 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <Icon name="PackageCheck" className="text-foreground" size={32} />
                </div>
                <CardTitle className="text-2xl">Безопасная доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Специализированная упаковка и полное страхование при транспортировке. Доставляем по всему миру с сопровождением.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:shadow-2xl hover:border-primary/40 transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <Icon name="ScrollText" className="text-primary-foreground" size={32} />
                </div>
                <CardTitle className="text-2xl">Полная документация</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Подробная история предмета, экспертные заключения и все необходимые документы для таможенного оформления.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:shadow-2xl hover:border-primary/40 transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/70 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <Icon name="TrendingUp" className="text-foreground" size={32} />
                </div>
                <CardTitle className="text-2xl">Инвестиционная ценность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Китайский антиквариат демонстрирует стабильный рост стоимости. Помогаем выбрать предметы с максимальным потенциалом.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-24 container mx-auto px-4 bg-background">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-4">
            Популярные лоты
          </div>
          <h2 className="text-5xl font-bold mb-4">
            Избранные <span className="text-primary">шедевры</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Наиболее ценные и востребованные предметы из нашей коллекции
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {catalogItems.map((item) => (
            <Card key={item.id} className="border-2 border-primary/20 hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden group">
              <div className="relative overflow-hidden bg-muted">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  {item.period}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold text-primary">${item.price}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="outline" 
                  className="w-full border-2 border-primary/30 hover:bg-primary hover:text-primary-foreground transition-colors"
                  onClick={() => scrollToSection('contact')}
                >
                  <Icon name="MessageSquare" className="mr-2" size={18} />
                  Запросить информацию
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-2 border-primary/30 hover:bg-primary/5">
            <Icon name="Grid3x3" className="mr-2" />
            Смотреть полный каталог
          </Button>
        </div>
      </section>

      <section id="reviews" className="py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-4">
              Отзывы
            </div>
            <h2 className="text-5xl font-bold mb-4">
              Отзывы наших <span className="text-primary">клиентов</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
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

            <Card className="border-2 border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
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

            <Card className="border-2 border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
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
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 container mx-auto px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-4">
              Связаться с нами
            </div>
            <h2 className="text-5xl font-bold mb-4">
              Оставьте <span className="text-primary">заявку</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg">
              Свяжитесь с нами, и наши эксперты помогут подобрать идеальный предмет для вашей коллекции
            </p>
          </div>
          <Card className="border-2 border-primary/20 shadow-xl">
            <CardContent className="pt-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Ваше имя</label>
                  <Input 
                    placeholder="Иван Петров" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="border-2"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Email</label>
                  <Input 
                    type="email" 
                    placeholder="ivan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="border-2"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите, какие предметы вас интересуют..." 
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    className="border-2"
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 shadow-lg" size="lg">
                  <Icon name="Send" className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-4">
              FAQ
            </div>
            <h2 className="text-5xl font-bold mb-4">
              Часто задаваемые <span className="text-primary">вопросы</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </div>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="item-1" className="border-2 border-primary/20 mb-4 rounded-lg px-6 bg-background">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary py-6">
                Как проверяется подлинность предметов?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                Каждый предмет проходит многоступенчатую экспертизу. Мы работаем с сертифицированными специалистами по китайскому антиквариату, используем термолюминесцентный анализ для керамики и фарфора, проводим исследование пигментов для живописи. К каждому изделию прилагается подробное заключение эксперта и сертификат подлинности.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-2 border-primary/20 mb-4 rounded-lg px-6 bg-background">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary py-6">
                Какие гарантии вы предоставляете?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                Мы предоставляем пожизненную гарантию подлинности на все проданные предметы. Если в будущем обнаружится, что предмет не соответствует заявленным характеристикам, мы вернём полную стоимость покупки. Также предоставляем страхование при транспортировке и гарантию возврата в течение 14 дней.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-2 border-primary/20 mb-4 rounded-lg px-6 bg-background">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary py-6">
                Как происходит доставка и сколько она стоит?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                Мы организуем доставку по всему миру через проверенные компании, специализирующиеся на транспортировке ценностей. Каждый предмет упаковывается в специальную защитную тару и страхуется на полную стоимость. Стоимость доставки рассчитывается индивидуально в зависимости от размера, веса и страны назначения. Для покупок от $10,000 доставка по России бесплатная.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-2 border-primary/20 mb-4 rounded-lg px-6 bg-background">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary py-6">
                Можно ли приобрести предмет в рассрочку?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                Да, для покупок от $5,000 мы предлагаем программу рассрочки без процентов на срок до 12 месяцев. Также возможно оформление специальных условий для постоянных клиентов и при формировании больших коллекций. Свяжитесь с нашими менеджерами для обсуждения индивидуальных условий.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-2 border-primary/20 rounded-lg px-6 bg-background">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary py-6">
                Помогаете ли вы с оценкой существующей коллекции?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                Да, мы предоставляем услуги по оценке и экспертизе предметов китайского антиквариата. Наши специалисты проведут детальный анализ, определят подлинность, датировку и рыночную стоимость. Первичная консультация для клиентов бесплатна. Также помогаем с продажей предметов из частных коллекций.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <footer className="bg-gradient-to-b from-foreground to-foreground/95 text-background py-16 border-t-4 border-primary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground font-bold text-2xl shadow-lg">
                  龍
                </div>
                <div>
                  <div className="text-2xl font-bold">Лун Тан</div>
                  <div className="text-xs opacity-70">龍潭古董</div>
                </div>
              </div>
              <p className="text-sm opacity-80 leading-relaxed">
                Эксклюзивный антиквариат из Поднебесной. Подлинные сокровища династий.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4 text-secondary">Навигация</h3>
              <ul className="space-y-3 text-sm opacity-80">
                <li><button onClick={() => scrollToSection('about')} className="hover:opacity-100 hover:text-secondary transition-all">О нас</button></li>
                <li><button onClick={() => scrollToSection('benefits')} className="hover:opacity-100 hover:text-secondary transition-all">Преимущества</button></li>
                <li><button onClick={() => scrollToSection('catalog')} className="hover:opacity-100 hover:text-secondary transition-all">Каталог</button></li>
                <li><button onClick={() => scrollToSection('reviews')} className="hover:opacity-100 hover:text-secondary transition-all">Отзывы</button></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-secondary">Контакты</h3>
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
              <h3 className="font-bold text-lg mb-4 text-secondary">Социальные сети</h3>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all">
                  <Icon name="MessageCircle" size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-background/20 pt-8 text-center text-sm opacity-70">
            <p>&copy; 2024 Лун Тан. Все права защищены. Эксклюзивный китайский антиквариат.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
