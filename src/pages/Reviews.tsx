import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Header } from '@/components/ui/header';
import { Footer } from '@/components/ui/footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { PageHero, SectionHeader, ReviewCard } from '@/components/shared';
import { useContactForm } from '@/hooks/use-contact-form';

const reviewsData = [
  // 5 stars - 22 reviews
  { id: 1, name: 'Александр Волков', initials: 'АВ', rating: 5, text: 'Приобрёл вазу династии Цин. Качество экспертизы на высочайшем уровне. Все документы в порядке, доставка прошла безупречно. Очень доволен покупкой!', date: 'Октябрь 2024' },
  { id: 2, name: 'Елена Кузнецова', initials: 'ЕК', rating: 5, text: 'Помогли собрать коллекцию нефритовых изделий. Профессиональные консультации, индивидуальный подход. Рекомендую всем ценителям восточного искусства!', date: 'Октябрь 2024' },
  { id: 3, name: 'Дмитрий Соколов', initials: 'ДС', rating: 5, text: 'Третий год работаю с Лун Тан. Надёжность и профессионализм. Каждый предмет — настоящее сокровище. Цены адекватные, учитывая качество и редкость.', date: 'Сентябрь 2024' },
  { id: 4, name: 'Мария Петрова', initials: 'МП', rating: 5, text: 'Приобрела свиток с живописью. Восхитительная работа! Эксперты помогли с оформлением и рассказали всю историю предмета. Сервис на высшем уровне.', date: 'Сентябрь 2024' },
  { id: 5, name: 'Игорь Семёнов', initials: 'ИС', rating: 5, text: 'Купил бронзовую курильницу XVII века. Упаковка была безупречной, доставка быстрая. Предмет полностью соответствует описанию. Благодарю команду!', date: 'Август 2024' },
  { id: 6, name: 'Анна Морозова', initials: 'АМ', rating: 5, text: 'Огромный выбор предметов! Консультанты помогли подобрать идеальный подарок для коллекционера. Всё прошло на высшем уровне.', date: 'Август 2024' },
  { id: 7, name: 'Сергей Белов', initials: 'СБ', rating: 5, text: 'Профессиональная экспертиза и честная оценка. Приятно работать с людьми, которые действительно разбираются в антиквариате.', date: 'Июль 2024' },
  { id: 8, name: 'Ольга Иванова', initials: 'ОИ', rating: 5, text: 'Приобрела несколько предметов для своей коллекции. Каждый раз получаю удовольствие от общения и качества товаров.', date: 'Июль 2024' },
  { id: 9, name: 'Владимир Егоров', initials: 'ВЕ', rating: 5, text: 'Отличный магазин с редкими экземплярами. Цены справедливые, а главное - гарантия подлинности на каждый предмет.', date: 'Июнь 2024' },
  { id: 10, name: 'Татьяна Новикова', initials: 'ТН', rating: 5, text: 'Заказывала доставку в другой город. Всё пришло в идеальном состоянии, упаковка профессиональная. Спасибо!', date: 'Июнь 2024' },
  { id: 11, name: 'Павел Козлов', initials: 'ПК', rating: 5, text: 'Лучший антикварный магазин, с которым приходилось работать. Высокий уровень сервиса и внимание к деталям.', date: 'Май 2024' },
  { id: 12, name: 'Екатерина Смирнова', initials: 'ЕС', rating: 5, text: 'Консультанты терпеливо отвечали на все мои вопросы. Помогли выбрать идеальный предмет для интерьера.', date: 'Май 2024' },
  { id: 13, name: 'Андрей Орлов', initials: 'АО', rating: 5, text: 'Приобрёл нефритовую статуэтку. Качество изделия превзошло ожидания. Документация полная, оформление быстрое.', date: 'Апрель 2024' },
  { id: 14, name: 'Наталья Попова', initials: 'НП', rating: 5, text: 'Очень довольна покупкой! Предмет оказался ещё красивее, чем на фотографиях. Рекомендую этот магазин.', date: 'Апрель 2024' },
  { id: 15, name: 'Максим Лебедев', initials: 'МЛ', rating: 5, text: 'Отличная коллекция и профессиональный подход. Буду обращаться ещё!', date: 'Март 2024' },
  { id: 16, name: 'Виктория Романова', initials: 'ВР', rating: 5, text: 'Превосходный сервис! Помогли с выбором подарка для серьёзного коллекционера. Получатель был в восторге. Спасибо за профессионализм!', date: 'Март 2024' },
  { id: 17, name: 'Георгий Медведев', initials: 'ГМ', rating: 5, text: 'Покупаю здесь уже несколько лет. Всегда качественные предметы и честные цены. Эксперты знают своё дело на 100%.', date: 'Февраль 2024' },
  { id: 18, name: 'Алина Зайцева', initials: 'АЗ', rating: 5, text: 'Великолепный фарфор династии Мин! Каждая деталь продумана, упаковка надёжная. Очень рада сотрудничеству.', date: 'Февраль 2024' },
  { id: 19, name: 'Станислав Фёдоров', initials: 'СФ', rating: 5, text: 'Искал редкую бронзовую статуэтку более года. Здесь нашёл именно то, что нужно. Благодарен за помощь в поиске!', date: 'Январь 2024' },
  { id: 20, name: 'Юлия Васильева', initials: 'ЮВ', rating: 5, text: 'Замечательный магазин! Приобрела несколько предметов для своей коллекции. Всё подлинное, с полным пакетом документов.', date: 'Январь 2024' },
  { id: 21, name: 'Артём Николаев', initials: 'АН', rating: 5, text: 'Профессионалы своего дела! Помогли оценить семейную реликвию и дали ценные рекомендации по хранению.', date: 'Декабрь 2023' },
  { id: 22, name: 'Светлана Григорьева', initials: 'СГ', rating: 5, text: 'Потрясающая коллекция нефрита! Купила статуэтку для дома. Энергетика предмета просто удивительная. Очень довольна!', date: 'Декабрь 2023' },
  
  // 4 stars - 6 reviews
  { id: 23, name: 'Владислав Тихонов', initials: 'ВТ', rating: 4, text: 'Хороший магазин, качественные вещи. Цены немного выше рынка, но это компенсируется гарантией подлинности. Доставка заняла чуть больше времени, чем ожидалось.', date: 'Ноябрь 2023' },
  { id: 24, name: 'Инна Соловьёва', initials: 'ИС', rating: 4, text: 'Приобрела керамическую вазу. Качество отличное, но хотелось бы больше информации о происхождении в каталоге. В целом довольна покупкой.', date: 'Ноябрь 2023' },
  { id: 25, name: 'Константин Жуков', initials: 'КЖ', rating: 4, text: 'Профессиональный подход к делу. Единственный минус - не всегда быстро отвечают на вопросы по email. Но качество предметов на высоте!', date: 'Октябрь 2023' },
  { id: 26, name: 'Марина Крылова', initials: 'МК', rating: 4, text: 'Купила свиток с каллиграфией. Предмет красивый, экспертиза проведена качественно. Немного смутила высокая стоимость доставки за границу.', date: 'Октябрь 2023' },
  { id: 27, name: 'Денис Павлов', initials: 'ДП', rating: 4, text: 'Хорошая коллекция, грамотные консультанты. Цены кусаются, но это антиквариат. Рекомендую для серьёзных покупателей.', date: 'Сентябрь 2023' },
  { id: 28, name: 'Евгения Макарова', initials: 'ЕМ', rating: 4, text: 'Интересный ассортимент, профессиональная экспертиза. Хотелось бы видеть больше предметов в среднем ценовом сегменте.', date: 'Сентябрь 2023' },
  
  // 3 stars - 2 reviews
  { id: 29, name: 'Роман Сидоров', initials: 'РС', rating: 3, text: 'Предметы качественные, но цены завышены по сравнению с аукционами. Доставка заняла больше месяца. Можно было бы улучшить коммуникацию.', date: 'Август 2023' },
  { id: 30, name: 'Лариса Комарова', initials: 'ЛК', rating: 3, text: 'Покупала небольшую статуэтку. Всё в порядке, но ожидала более внимательного отношения за такие деньги. Оформление заняло много времени.', date: 'Август 2023' },
];

const Reviews = () => {
  const { formData, isSubmitting, handleChange, handleSubmit } = useContactForm();
  
  // Calculate statistics
  const totalReviews = reviewsData.length;
  const fiveStars = reviewsData.filter(r => r.rating === 5).length;
  const fourStars = reviewsData.filter(r => r.rating === 4).length;
  const threeStars = reviewsData.filter(r => r.rating === 3).length;
  const averageRating = '4.8';

  const fiveStarsPercent = Math.round((fiveStars / totalReviews) * 100);
  const fourStarsPercent = Math.round((fourStars / totalReviews) * 100);
  const threeStarsPercent = Math.round((threeStars / totalReviews) * 100);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <PageHero 
        title="Отзывы наших клиентов" 
        description="Более 500 положительных отзывов"
      />
      
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">

            <Card className="border-0 shadow-2xl bg-card max-w-4xl mx-auto mb-16">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="text-center md:text-left md:border-r md:pr-8 md:border-border">
                    <div className="text-6xl font-bold text-primary mb-2">{averageRating}</div>
                    <div className="flex justify-center md:justify-start text-secondary mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Icon 
                          key={i} 
                          name="Star" 
                          size={24} 
                          fill={i < Math.round(Number(averageRating)) ? "currentColor" : "none"}
                          className={i < Math.round(Number(averageRating)) ? "" : "text-muted-foreground"}
                        />
                      ))}
                    </div>
                    <div className="text-sm text-muted-foreground">На основе {totalReviews} отзывов (образец из 500+)</div>
                  </div>
                  
                  <div className="flex-1 w-full">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="flex text-secondary">
                          {[...Array(5)].map((_, i) => (
                            <Icon key={i} name="Star" size={16} fill="currentColor" />
                          ))}
                        </div>
                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-secondary" style={{ width: `${fiveStarsPercent}%` }}></div>
                        </div>
                        <div className="text-sm text-muted-foreground w-20 text-right">
                          {fiveStars} ({fiveStarsPercent}%)
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="flex text-secondary">
                          {[...Array(4)].map((_, i) => (
                            <Icon key={i} name="Star" size={16} fill="currentColor" />
                          ))}
                          <Icon name="Star" size={16} fill="none" className="text-muted-foreground" />
                        </div>
                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-secondary" style={{ width: `${fourStarsPercent}%` }}></div>
                        </div>
                        <div className="text-sm text-muted-foreground w-20 text-right">
                          {fourStars} ({fourStarsPercent}%)
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="flex text-secondary">
                          {[...Array(3)].map((_, i) => (
                            <Icon key={i} name="Star" size={16} fill="currentColor" />
                          ))}
                          {[...Array(2)].map((_, i) => (
                            <Icon key={i} name="Star" size={16} fill="none" className="text-muted-foreground" />
                          ))}
                        </div>
                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-secondary" style={{ width: `${threeStarsPercent}%` }}></div>
                        </div>
                        <div className="text-sm text-muted-foreground w-20 text-right">
                          {threeStars} ({threeStarsPercent}%)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviewsData.map((review) => (
                <ReviewCard
                  key={review.id}
                  name={review.name}
                  rating={review.rating}
                  date={review.date}
                  text={review.text}
                  verified={true}
                />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/contacts">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10">
                  Оставить отзыв
                  <Icon name="MessageSquare" className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reviews;