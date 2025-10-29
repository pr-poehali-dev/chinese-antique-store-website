import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Header } from '@/components/ui/header';
import { Footer } from '@/components/ui/footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { PageHero, SectionHeader, FeatureCard, StatCard } from '@/components/shared';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <PageHero 
        title="О нашем магазине" 
        description="15 лет экспертизы в мире китайского антиквариата"
      />
      
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
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
                    <FeatureCard
                      icon="Users"
                      title="1,200+ клиентов"
                      description="Из России, Европы и Азии доверяют нам"
                      iconColor="text-primary"
                    />
                    <FeatureCard
                      icon="Package"
                      title="3,500+ сделок"
                      description="Успешно проведённых за 15 лет"
                      iconColor="text-secondary"
                    />
                    <FeatureCard
                      icon="Globe"
                      title="12 стран"
                      description="География наших клиентов"
                      iconColor="text-primary"
                    />
                    <FeatureCard
                      icon="Star"
                      title="98% повторных"
                      description="Клиенты возвращаются к нам снова"
                      iconColor="text-secondary"
                    />
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
                  <FeatureCard
                    icon="CheckCircle"
                    title="Экспертиза каждого предмета"
                    description="Все артефакты проходят проверку у сертифицированных экспертов с выдачей заключения и сертификата подлинности."
                    iconColor="text-primary"
                    className="p-4 rounded-xl bg-primary/5"
                  />
                  <FeatureCard
                    icon="FileCheck"
                    title="Полная документация"
                    description="К каждому предмету прилагается подробная история происхождения, фотофиксация, экспертное заключение и все необходимые таможенные документы."
                    iconColor="text-secondary"
                    className="p-4 rounded-xl bg-secondary/5"
                  />
                  <FeatureCard
                    icon="Truck"
                    title="Безопасная доставка"
                    description="Специальная упаковка с учётом хрупкости предмета, полное страхование, доставка по всему миру с трекингом."
                    iconColor="text-primary"
                    className="p-4 rounded-xl bg-primary/5"
                  />
                  <FeatureCard
                    icon="Headphones"
                    title="Персональная поддержка"
                    description="Консультации по выбору, оценке, уходу за предметами. Помогаем формировать коллекции мирового уровня."
                    iconColor="text-secondary"
                    className="p-4 rounded-xl bg-secondary/5"
                  />
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