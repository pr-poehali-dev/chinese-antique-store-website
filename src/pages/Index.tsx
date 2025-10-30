import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';
import { Header } from '@/components/ui/header';
import { Footer } from '@/components/ui/footer';
import { AnimatedSection, SectionHeader, FeatureCard, StatCard } from '@/components/shared';
import { useParallax } from '@/hooks/use-parallax';

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
    image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/147ce539-7acd-403e-aca8-9cd9d8178956.jpg',
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
    image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/fdee163c-93c9-44b1-a9d9-9ccc4be74355.jpg',
    period: 'XIX век'
  }
];

const reviews = [
  { name: 'Александр Волков', rating: 5, text: 'Приобрёл вазу династии Цин. Качество экспертизы на высочайшем уровне. Все документы в порядке, доставка прошла безупречно. Очень доволен покупкой!' },
  { name: 'Елена Кузнецова', rating: 5, text: 'Помогли собрать коллекцию нефритовых изделий. Профессиональные консультации, индивидуальный подход. Рекомендую всем ценителям восточного искусства!' },
  { name: 'Дмитрий Соколов', rating: 5, text: 'Третий год работаю с Лун Тан. Надёжность и профессионализм. Каждый предмет — настоящее сокровище. Цены адекватные, учитывая качество и редкость.' },
  { name: 'Мария Петрова', rating: 5, text: 'Приобрела свиток с живописью. Восхитительная работа! Эксперты помогли с оформлением и рассказали всю историю предмета. Сервис на высшем уровне.' }
];

const Index = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { toast } = useToast();
  const parallaxOffset = useParallax(0.3);

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
      <Header />

      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(139, 0, 0, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(218, 165, 32, 0.03) 0%, transparent 50%)',
            transform: `translateY(${parallaxOffset}px)`
          }}
        ></div>
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l5 15h15l-12 9 5 15-13-9-13 9 5-15-12-9h15z' fill='%23dc143c' fill-opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '120px 120px',
            transform: `translateY(${parallaxOffset * 1.5}px)`
          }}
        ></div>
        
        <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-32 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <AnimatedSection animation="fade-in-up">
              <div className="mb-6 sm:mb-8 inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 bg-primary/5 border border-primary/20 rounded-full text-xs sm:text-sm font-medium text-primary">
                <span>✦</span>
                <span>Аутентичные сокровища Китая</span>
                <span>✦</span>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-up" delay={100}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 leading-tight px-2">
                <span className="bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent inline-block">
                  Императорский антиквариат
                </span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-up" delay={200}>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/60 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed font-light px-4">
                Редчайшие артефакты династий Мин и Цин с подтверждённой историей и сертификатами подлинности
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-up" delay={300}>
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
            </AnimatedSection>
          </div>
        </div>
        
        {/* Stats bar */}
        <div className="border-t border-primary/10 bg-card/50 backdrop-blur">
          <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
            <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto">
              <AnimatedSection animation="scale-in" delay={400}>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2">1500+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Уникальных предметов</div>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="scale-in" delay={500} className="border-x border-primary/10">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2">15 лет</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Опыт на рынке</div>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="scale-in" delay={600}>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2">100%</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Гарантия подлинности</div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <AnimatedSection animation="slide-in-left">
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                    <FeatureCard 
                      icon="Award" 
                      title="Экспертиза" 
                      description="Проверка подлинности"
                      delay={100}
                    />
                    <FeatureCard 
                      icon="Globe" 
                      title="Доставка" 
                      description="По всему миру"
                      delay={200}
                    />
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-in-right">
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
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection animation="fade-in-up">
            <SectionHeader 
              subtitle="Преимущества"
              title="Почему выбирают нас"
              align="center"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureCard 
              icon="Shield" 
              title="Гарантия подлинности" 
              description="Сертификаты и документы на каждый предмет. Экспертиза ведущих специалистов."
              delay={100}
            />
            <FeatureCard 
              icon="Award" 
              title="Уникальная коллекция" 
              description="Более 1500 редчайших предметов императорского уровня из династий Мин и Цин."
              delay={200}
            />
            <FeatureCard 
              icon="Users" 
              title="Персональный подход" 
              description="Индивидуальные консультации, помощь в формировании коллекций."
              delay={300}
            />
            <FeatureCard 
              icon="Truck" 
              title="Доставка по миру" 
              description="Специальная упаковка и страхование. Доставка в любую точку мира."
              delay={400}
            />
            <FeatureCard 
              icon="FileCheck" 
              title="Полная документация" 
              description="Все предметы сопровождаются экспертными заключениями и сертификатами."
              delay={500}
            />
            <FeatureCard 
              icon="HeartHandshake" 
              title="Послепродажная поддержка" 
              description="Помощь в оценке, реставрации и консультации по коллекционированию."
              delay={600}
            />
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection animation="fade-in-up">
            <SectionHeader 
              subtitle="Каталог"
              title="Избранные шедевры"
              description="Наиболее ценные и востребованные предметы из нашей коллекции"
              align="center"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
            {catalogItems.map((item, index) => (
              <AnimatedSection key={item.id} animation="fade-in-up" delay={index * 100}>
                <Card className="border-0 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group bg-card h-full">
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
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-in-up" delay={700}>
            <div className="text-center mt-16">
              <Link to="/catalog">
                <Button size="lg" variant="outline" className="px-10">
                  Смотреть весь каталог
                  <Icon name="ArrowRight" className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection animation="fade-in-up">
            <SectionHeader 
              subtitle="Отзывы"
              title="Что говорят наши клиенты"
              align="center"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {reviews.map((review, index) => (
              <AnimatedSection key={index} animation="fade-in-up" delay={index * 100}>
                <Card className="border-0 shadow-xl bg-card h-full">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
                        {review.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{review.name}</CardTitle>
                        <div className="flex text-secondary mt-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Icon key={i} name="Star" size={16} className="fill-secondary" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {review.text}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-in-up" delay={500}>
            <div className="text-center mt-12">
              <Link to="/reviews">
                <Button variant="outline" size="lg" className="group">
                  Смотреть все отзывы
                  <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection animation="fade-in-up">
              <SectionHeader 
                subtitle="Контакты"
                title="Свяжитесь с нами"
                description="Наши эксперты помогут подобрать идеальный предмет для вашей коллекции"
                align="center"
              />
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={200}>
              <Card className="border-0 shadow-2xl">
                <CardContent className="p-6 sm:p-10">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Ваше имя
                      </label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Иван Иванов"
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="ivan@example.com"
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Сообщение
                      </label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Расскажите, что вас интересует..."
                        required
                        rows={5}
                        className="w-full resize-none"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Отправить сообщение
                      <Icon name="Send" className="ml-2" size={18} />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-in-up">
              <SectionHeader 
                subtitle="FAQ"
                title="Часто задаваемые вопросы"
                align="center"
              />
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={200}>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border-0 rounded-2xl px-4 sm:px-6 lg:px-8 py-2 bg-card shadow-lg">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    Как проверяется подлинность предметов?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2">
                    Каждый предмет проходит многоступенчатую экспертизу ведущими специалистами по китайскому антиквариату. Мы используем современные методы датировки и предоставляем сертификаты подлинности с полной документацией о происхождении предмета.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-0 rounded-2xl px-4 sm:px-6 lg:px-8 py-2 bg-card shadow-lg">
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                    Какие гарантии вы предоставляете?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2">
                    Мы предоставляем пожизненную гарантию подлинности на каждый проданный предмет. В случае если независимая экспертиза выявит несоответствие, мы вернём полную стоимость покупки. Все предметы застрахованы при доставке.
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
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
