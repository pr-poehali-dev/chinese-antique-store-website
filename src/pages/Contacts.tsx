import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import { Header } from '@/components/ui/header';
import { Footer } from '@/components/ui/footer';

const Contacts = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-12 sm:py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Контакты
              </h1>
              <p className="text-lg text-muted-foreground">Будем рады ответить на ваши вопросы</p>
            </div>

            <div className="space-y-12">
              <section>
                <h2 className="text-3xl font-bold mb-8 text-center">Часто задаваемые вопросы</h2>
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
                      Можно ли приобрести предмет в рассрочку?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2">
                      Да, для наших постоянных клиентов доступна рассрочка на срок до 6 месяцев без процентов. Для покупок свыше $50,000 условия обсуждаются индивидуально. Первый взнос составляет 30% от стоимости предмета.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" className="border-0 rounded-2xl px-4 sm:px-6 lg:px-8 py-2 bg-card shadow-lg">
                    <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                      Принимаете ли вы предметы на оценку?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2">
                      Да, наши эксперты проводят профессиональную оценку китайского антиквариата. Первичная консультация по фотографиям бесплатная. Экспертиза с выездом специалиста и составлением официального заключения оплачивается отдельно.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6" className="border-0 rounded-2xl px-4 sm:px-6 lg:px-8 py-2 bg-card shadow-lg">
                    <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                      Работаете ли вы с музеями и галереями?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2">
                      Да, у нас есть опыт работы с музеями, частными галереями и коллекционерами по всему миру. Предоставляем полный пакет документов для музейного учёта. Возможна организация временных выставок из нашей коллекции.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-7" className="border-0 rounded-2xl px-4 sm:px-6 lg:px-8 py-2 bg-card shadow-lg">
                    <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                      Как часто обновляется каталог?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2">
                      Наш каталог обновляется еженедельно. Новые поступления публикуются каждую среду. Можем уведомлять по email о появлении предметов, соответствующих вашим интересам. Для VIP-клиентов доступ к новым предметам за 48 часов до публикации.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-8" className="border-0 rounded-2xl px-4 sm:px-6 lg:px-8 py-2 bg-card shadow-lg">
                    <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                      Возможен ли осмотр предметов перед покупкой?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2">
                      Да, приглашаем вас в наш шоурум в Москве для личного осмотра предметов. Осмотр возможен по предварительной записи в будние дни с 11:00 до 19:00 и по субботам с 12:00 до 17:00. Для иногородних клиентов организуем детальную видео-презентацию.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-9" className="border-0 rounded-2xl px-4 sm:px-6 lg:px-8 py-2 bg-card shadow-lg">
                    <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                      Как формируется цена на предметы?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2">
                      Цена формируется на основе редкости предмета, его исторической ценности, состояния сохранности и текущей рыночной конъюнктуры. Мы регулярно отслеживаем результаты крупнейших аукционов и корректируем цены в соответствии с реальным положением рынка.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-10" className="border-0 rounded-2xl px-4 sm:px-6 lg:px-8 py-2 bg-card shadow-lg">
                    <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                      Помогаете ли вы с таможенным оформлением?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2">
                      Да, мы полностью берём на себя оформление всей необходимой документации для экспорта и импорта антикварных предметов. Имеем опыт работы с таможенными службами разных стран. Все разрешительные документы подготавливаются нашими специалистами.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </section>

              <section>
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <Card className="border-0 shadow-xl bg-card">
                    <CardHeader>
                      <CardTitle className="text-2xl flex items-center gap-3">
                        <Icon name="MapPin" className="text-primary" size={28} />
                        Контактная информация
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon name="Home" className="text-primary" size={24} />
                        </div>
                        <div>
                          <div className="font-semibold mb-1">Адрес шоурума</div>
                          <p className="text-sm text-muted-foreground">Москва, ул. Петровка, д. 24, стр. 1<br/>Метро: Театральная, Охотный ряд</p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                          <Icon name="Phone" className="text-secondary" size={24} />
                        </div>
                        <div>
                          <div className="font-semibold mb-1">Телефон</div>
                          <p className="text-sm text-muted-foreground">+7 (495) 123-45-67<br/>+7 (925) 888-99-00</p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon name="Mail" className="text-primary" size={24} />
                        </div>
                        <div>
                          <div className="font-semibold mb-1">Email</div>
                          <p className="text-sm text-muted-foreground">info@luntan-antiques.ru<br/>expert@luntan-antiques.ru</p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                          <Icon name="Clock" className="text-secondary" size={24} />
                        </div>
                        <div>
                          <div className="font-semibold mb-1">Время работы</div>
                          <p className="text-sm text-muted-foreground">Пн-Пт: 11:00 - 19:00<br/>Сб: 12:00 - 17:00<br/>Вс: по предварительной записи</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-xl bg-card">
                    <CardContent className="p-6 sm:p-8">
                      <h3 className="text-2xl font-bold mb-6">Форма обратной связи</h3>
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-foreground">Ваше имя</label>
                          <Input 
                            placeholder="Иван Петров" 
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            required
                            className="h-12 text-base"
                          />
                        </div>
                        <div className="space-y-2">
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
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-foreground">Телефон</label>
                          <Input 
                            type="tel" 
                            placeholder="+7 (999) 123-45-67"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            required
                            className="h-12 text-base"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-foreground">Сообщение</label>
                          <Textarea 
                            placeholder="Ваш вопрос или пожелание..." 
                            rows={5}
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            required
                            className="text-base resize-none"
                          />
                        </div>
                        <Button 
                          type="submit" 
                          className="w-full bg-primary hover:bg-primary/90 h-12 text-base font-semibold" 
                        >
                          Отправить
                          <Icon name="Send" className="ml-2" size={18} />
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section>
                <Card className="border-0 shadow-xl bg-card max-w-5xl mx-auto">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-3">
                      <Icon name="FileText" className="text-primary" size={28} />
                      Юридическая информация
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <div className="font-semibold text-foreground mb-2">Полное наименование</div>
                        <p>Общество с ограниченной ответственностью "Лун Тан Антиквариат"</p>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground mb-2">Сокращённое наименование</div>
                        <p>ООО "Лун Тан Антиквариат"</p>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground mb-2">ИНН</div>
                        <p>7704123456</p>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground mb-2">ОГРН</div>
                        <p>1097746543210</p>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground mb-2">КПП</div>
                        <p>770401001</p>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground mb-2">ОКПО</div>
                        <p>12345678</p>
                      </div>
                    </div>
                    <div className="pt-4 border-t">
                      <div className="font-semibold text-foreground mb-2">Юридический адрес</div>
                      <p>125009, г. Москва, ул. Петровка, д. 24, стр. 1</p>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-2">Генеральный директор</div>
                      <p>Чжан Вэй</p>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-2">Банковские реквизиты</div>
                      <p>ПАО "Сбербанк России"<br/>
                      Р/с: 40702810400000123456<br/>
                      К/с: 30101810400000000225<br/>
                      БИК: 044525225</p>
                    </div>
                  </CardContent>
                </Card>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacts;