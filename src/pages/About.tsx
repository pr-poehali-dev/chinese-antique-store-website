import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Header } from '@/components/ui/header';
import { Footer } from '@/components/ui/footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                    <Icon name="Truck" className="text-primary flex-shrink-0 mt-1" size={24} />
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

      <Footer />
    </div>
  );
};

export default About;