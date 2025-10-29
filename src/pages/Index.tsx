import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

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
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-primary/20">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
              龍
            </div>
            <span className="text-xl font-bold text-primary">Лун Тан</span>
          </div>
          <ul className="hidden md:flex gap-8 text-sm font-medium">
            <li><button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">О нас</button></li>
            <li><button onClick={() => scrollToSection('benefits')} className="hover:text-primary transition-colors">Преимущества</button></li>
            <li><button onClick={() => scrollToSection('pricing')} className="hover:text-primary transition-colors">Тарифы</button></li>
            <li><button onClick={() => scrollToSection('reviews')} className="hover:text-primary transition-colors">Отзывы</button></li>
            <li><button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Контакты</button></li>
          </ul>
          <Button onClick={() => scrollToSection('contact')} className="bg-primary hover:bg-primary/90">
            Оставить заявку
          </Button>
        </nav>
      </header>

      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-muted to-background">
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIGZpbGw9IiMwMDAiLz48L2c+PC9zdmc+')] bg-repeat"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
              Аутентичные сокровища <span className="text-primary">Поднебесной</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Прикоснитесь к истории через подлинные предметы китайского искусства. Каждое изделие — свидетельство мастерства династий и хранитель древних традиций.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection('pricing')} className="bg-primary hover:bg-primary/90 text-base">
                Выбрать антиквариат
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('about')} className="text-base border-primary/30">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">
                Эксклюзивная коллекция <span className="text-primary">подлинных артефактов</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Мы специализируемся на поиске и продаже редких предметов китайского антиквариата: фарфора династий Мин и Цин, нефритовых изделий, старинной каллиграфии и живописи.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Каждый экспонат проходит строгую экспертизу и сопровождается сертификатом подлинности. Мы помогаем коллекционерам и ценителям искусства обрести настоящие сокровища Востока.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/53997063-5d3a-499c-a44e-85486d7ffa71.jpg" 
                alt="Китайская ваза" 
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Почему выбирают <span className="text-primary">нас</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-primary/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Shield" className="text-primary" size={28} />
                </div>
                <CardTitle className="text-2xl">Гарантия подлинности</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Каждый предмет проверен экспертами и имеет сертификат аутентичности с полной историей происхождения.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-14 h-14 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Gem" className="text-secondary" size={28} />
                </div>
                <CardTitle className="text-2xl">Редкие экземпляры</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  В нашей коллекции — уникальные артефакты, которые редко появляются на открытом рынке антиквариата.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Users" className="text-primary" size={28} />
                </div>
                <CardTitle className="text-2xl">Экспертная поддержка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Консультируем по выбору, оценке и уходу за антикварными предметами. Помогаем формировать коллекции.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-14 h-14 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                  <Icon name="PackageCheck" className="text-secondary" size={28} />
                </div>
                <CardTitle className="text-2xl">Безопасная доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Специальная упаковка и страхование при транспортировке. Доставляем по всему миру с полным сопровождением.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="ScrollText" className="text-primary" size={28} />
                </div>
                <CardTitle className="text-2xl">Полная документация</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Предоставляем подробное описание предмета, его историю и все необходимые документы для таможни.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-14 h-14 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Sparkles" className="text-secondary" size={28} />
                </div>
                <CardTitle className="text-2xl">Инвестиционная ценность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Китайский антиквариат стабильно растёт в цене. Помогаем подобрать предметы с высоким потенциалом.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">
          Категории и <span className="text-primary">тарифы</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Мы предлагаем различные варианты сотрудничества для частных коллекционеров и профессионалов
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Для начинающих</CardTitle>
              <CardDescription className="text-base">Первые шаги в коллекционировании</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-4xl font-bold text-primary">от $500</div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={18} />
                  <span>Небольшие фарфоровые изделия</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={18} />
                  <span>Чайная утварь и аксессуары</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={18} />
                  <span>Сертификат подлинности</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={18} />
                  <span>Консультация эксперта</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full border-primary/30" onClick={() => scrollToSection('contact')}>
                Оставить заявку
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-primary shadow-lg scale-105 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
              Популярно
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">Для коллекционеров</CardTitle>
              <CardDescription className="text-base">Ценные экспонаты для коллекции</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-4xl font-bold text-primary">от $5,000</div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={18} />
                  <span>Фарфор династий Мин и Цин</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={18} />
                  <span>Нефритовые изделия и скульптуры</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={18} />
                  <span>Полный пакет документов</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={18} />
                  <span>Персональное сопровождение</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={18} />
                  <span>Помощь в формировании коллекции</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-primary hover:bg-primary/90" onClick={() => scrollToSection('contact')}>
                Оставить заявку
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Премиум</CardTitle>
              <CardDescription className="text-base">Музейные экспонаты</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-4xl font-bold text-primary">от $50,000</div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={18} />
                  <span>Императорский фарфор и артефакты</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={18} />
                  <span>Старинная живопись и каллиграфия</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={18} />
                  <span>Уникальные музейные предметы</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={18} />
                  <span>VIP-консультации и оценка</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={18} />
                  <span>Эксклюзивный доступ к аукционам</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full border-primary/30" onClick={() => scrollToSection('contact')}>
                Оставить заявку
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Отзывы <span className="text-primary">клиентов</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                    АВ
                  </div>
                  <div>
                    <CardTitle className="text-lg">Александр Волков</CardTitle>
                    <div className="flex text-secondary">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "Приобрёл вазу династии Цин. Качество экспертизы на высочайшем уровне. Все документы в порядке, доставка прошла безупречно. Очень доволен покупкой!"
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                    ЕК
                  </div>
                  <div>
                    <CardTitle className="text-lg">Елена Кузнецова</CardTitle>
                    <div className="flex text-secondary">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "Помогли собрать коллекцию нефритовых изделий. Профессиональные консультации, индивидуальный подход. Рекомендую всем ценителям восточного искусства!"
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                    ДС
                  </div>
                  <div>
                    <CardTitle className="text-lg">Дмитрий Соколов</CardTitle>
                    <div className="flex text-secondary">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "Третий год работаю с Лун Тан. Надёжность и профессионализм. Каждый предмет — настоящее сокровище. Цены адекватные, учитывая качество и редкость."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Оставьте <span className="text-primary">заявку</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Свяжитесь с нами, и наши эксперты помогут подобрать идеальный предмет для вашей коллекции
            </p>
          </div>
          <Card className="border-primary/20">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Ваше имя</label>
                  <Input 
                    placeholder="Иван Петров" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input 
                    type="email" 
                    placeholder="ivan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите, какие предметы вас интересуют..." 
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Часто задаваемые <span className="text-primary">вопросы</span>
          </h2>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="item-1" className="border-primary/20">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Как проверяется подлинность предметов?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Каждый предмет проходит многоступенчатую экспертизу. Мы работаем с сертифицированными специалистами по китайскому антиквариату, используем термолюминесцентный анализ для керамики и фарфора, проводим исследование пигментов для живописи. К каждому изделию прилагается подробное заключение эксперта и сертификат подлинности.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-primary/20">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Какие гарантии вы предоставляете?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Мы предоставляем пожизненную гарантию подлинности на все проданные предметы. Если в будущем обнаружится, что предмет не соответствует заявленным характеристикам, мы вернём полную стоимость покупки. Также предоставляем страхование при транспортировке и гарантию возврата в течение 14 дней.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-primary/20">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Как происходит доставка и сколько она стоит?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Мы организуем доставку по всему миру через проверенные компании, специализирующиеся на транспортировке ценностей. Каждый предмет упаковывается в специальную защитную тару и страхуется на полную стоимость. Стоимость доставки рассчитывается индивидуально в зависимости от размера, веса и страны назначения. Для покупок от $10,000 доставка по России бесплатная.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-primary/20">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Можно ли приобрести предмет в рассрочку?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Да, для покупок от $5,000 мы предлагаем программу рассрочки без процентов на срок до 12 месяцев. Также возможно оформление специальных условий для постоянных клиентов и при формировании больших коллекций. Свяжитесь с нашими менеджерами для обсуждения индивидуальных условий.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-primary/20">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Помогаете ли вы с оценкой существующей коллекции?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                Да, мы предоставляем услуги по оценке и экспертизе предметов китайского антиквариата. Наши специалисты проведут детальный анализ, определят подлинность, датировку и рыночную стоимость. Первичная консультация для клиентов бесплатна. Также помогаем с продажей предметов из частных коллекций.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                  龍
                </div>
                <span className="text-xl font-bold">Лун Тан</span>
              </div>
              <p className="text-sm opacity-80">
                Эксклюзивный антиквариат из Поднебесной
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Навигация</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li><button onClick={() => scrollToSection('about')} className="hover:opacity-100 transition-opacity">О нас</button></li>
                <li><button onClick={() => scrollToSection('benefits')} className="hover:opacity-100 transition-opacity">Преимущества</button></li>
                <li><button onClick={() => scrollToSection('pricing')} className="hover:opacity-100 transition-opacity">Тарифы</button></li>
                <li><button onClick={() => scrollToSection('reviews')} className="hover:opacity-100 transition-opacity">Отзывы</button></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@luntan.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, ул. Арбат, 12
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Социальные сети</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors">
                  <Icon name="MessageCircle" size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-background/20 pt-8 text-center text-sm opacity-80">
            <p>&copy; 2024 Лун Тан. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
