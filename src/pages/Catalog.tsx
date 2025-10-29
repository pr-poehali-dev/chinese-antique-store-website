import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useNavigate } from 'react-router-dom';
import { Header } from '@/components/ui/header';
import { Footer } from '@/components/ui/footer';
import Icon from '@/components/ui/icon';

const catalogData = {
  'porcelain': [
    { id: 1, name: 'Ваза с драконами династии Мин', price: '128 000', period: 'XV век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/7498533b-cd31-4299-a6ba-592871bafb18.jpg' },
    { id: 7, name: 'Чайный сервиз с пейзажем', price: '95 000', period: 'XVIII век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/095c3300-aad9-456a-8374-22dbae1c752c.jpg' },
    { id: 8, name: 'Тарелка с росписью кобальтом', price: '45 000', period: 'XVII век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/b40d466c-338e-4d8d-bbdc-5b6ca95af02a.jpg' },
    { id: 9, name: 'Ваза с пионами и птицами', price: '156 000', period: 'XVI век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/d7bc4d95-6725-4416-9867-878808c155f6.jpg' },
    { id: 19, name: 'Чаша для риса императорская', price: '78 000', period: 'XVIII век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/1f12afa5-21c4-4b4d-a751-e24f61ece79c.jpg' },
    { id: 20, name: 'Набор пиал с золотом', price: '134 000', period: 'XIX век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/0e0e0453-0c96-4b7e-b735-ee3d2e8b7715.jpg' },
  ],
  'jade': [
    { id: 2, name: 'Нефритовый Будда', price: '245 000', period: 'XVIII век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/3d3a6fc2-d1e9-48b5-9c0b-0e601fdde4ec.jpg' },
    { id: 10, name: 'Нефритовая подвеска Би', price: '67 000', period: 'XIX век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/13e63c2c-9382-477e-9754-345a242ac730.jpg' },
    { id: 11, name: 'Резная статуэтка дракона', price: '189 000', period: 'XVII век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/ec2ab15d-d20a-4ba3-829e-c7afa0f2052e.jpg' },
    { id: 21, name: 'Нефритовый браслет резной', price: '112 000', period: 'XVIII век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/6e92cdc0-44f4-4c0c-b0be-29a6441f72b5.jpg' },
    { id: 22, name: 'Печать из белого нефрита', price: '89 000', period: 'XIX век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/3d3a6fc2-d1e9-48b5-9c0b-0e601fdde4ec.jpg' },
  ],
  'bronze': [
    { id: 3, name: 'Бронзовая курильница с драконами', price: '89 500', period: 'XVII век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/934c9e8b-1f3f-4df6-b09f-69e666982422.jpg' },
    { id: 12, name: 'Бронзовый сосуд для вина', price: '134 000', period: 'XVI век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/5e727592-b5ef-477a-86a0-6db8f30e255b.jpg' },
    { id: 13, name: 'Бронзовое зеркало с узорами', price: '56 000', period: 'XVIII век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/ded56fca-5250-4e4e-b4b7-587c3814f34f.jpg' },
    { id: 23, name: 'Колокольчик ритуальный', price: '45 000', period: 'XVII век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/542568f1-867c-4d1a-a7b5-7288f3fe637f.jpg' },
    { id: 24, name: 'Статуя Гуаньинь бронзовая', price: '298 000', period: 'XVI век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/7529fb9b-5365-4f3b-a33c-9eb4150591b2.jpg' },
  ],
  'painting': [
    { id: 4, name: 'Свиток с горным пейзажем', price: '156 000', period: 'XIX век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/4bb1dc5b-a792-4501-a4c4-ce0e972071b1.jpg' },
    { id: 14, name: 'Каллиграфия мастера Чжао', price: '289 000', period: 'XVIII век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/f61dc847-8b47-4d45-b47b-843cd2b2af0a.jpg' },
    { id: 15, name: 'Свиток с цветами и птицами', price: '178 000', period: 'XIX век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/d59e3de5-f520-45ca-93b0-8a51ad09711d.jpg' },
    { id: 25, name: 'Веер с живописью тушью', price: '67 000', period: 'XIX век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/592416c5-4e24-4558-9d3d-9ff22681ae5f.jpg' },
    { id: 26, name: 'Парные свитки Времена года', price: '423 000', period: 'XVIII век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/7dbb0609-f2f1-415c-9d1d-5a09d6c5a5e5.jpg' },
  ],
  'wood': [
    { id: 5, name: 'Резная панель с фениксом', price: '67 000', period: 'XVIII век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/0f4c5e21-0675-4b56-ac42-3559fb3c0d9a.jpg' },
    { id: 16, name: 'Деревянная ширма с резьбой', price: '234 000', period: 'XVII век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/192283b6-c880-4d91-bec3-021cb7a9a6c5.jpg' },
    { id: 17, name: 'Столик для чайной церемонии', price: '145 000', period: 'XIX век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/b01738f5-2bbf-41f1-8941-fba7e6027b34.jpg' },
    { id: 27, name: 'Шкатулка с перламутром', price: '89 000', period: 'XVIII век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/28df5a15-296a-45a2-92c1-c3edf8a5d19c.jpg' },
    { id: 28, name: 'Подставка под благовония', price: '34 000', period: 'XIX век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/2ab6e103-7bda-41da-b762-80444d1e66b2.jpg' },
  ],
  'enamel': [
    { id: 6, name: 'Перегородчатая эмаль клуазоне', price: '112 000', period: 'XIX век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/8091596e-e2cc-4ba5-bc7f-2644ff30c664.jpg' },
    { id: 18, name: 'Ваза клуазоне с драконами', price: '198 000', period: 'XVIII век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/d0515dd2-eee0-4b0a-93b5-c8b92ec54bac.jpg' },
    { id: 29, name: 'Чайник эмалевый цветочный', price: '134 000', period: 'XIX век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/c0244849-78ff-45d1-be42-4c9b4108347b.jpg' },
    { id: 30, name: 'Блюдо клуазоне большое', price: '178 000', period: 'XVIII век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/d09dbf06-be51-4a6d-ae44-de0ea733a6b3.jpg' },
  ],
};

const categories = [
  { id: 'all', name: 'Все предметы', icon: 'Grid3x3' },
  { id: 'porcelain', name: 'Фарфор', icon: 'Wine' },
  { id: 'jade', name: 'Нефрит', icon: 'Gem' },
  { id: 'bronze', name: 'Бронза', icon: 'Sparkles' },
  { id: 'painting', name: 'Живопись', icon: 'Image' },
  { id: 'wood', name: 'Дерево', icon: 'Trees' },
  { id: 'enamel', name: 'Эмаль', icon: 'Palette' },
];

const Catalog = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [searchQuery, setSearchQuery] = useState('');

  const getAllItems = () => {
    if (selectedCategory === 'all') {
      return Object.values(catalogData).flat();
    }
    return catalogData[selectedCategory as keyof typeof catalogData] || [];
  };

  const filteredItems = getAllItems()
    .filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'price-asc') return parseInt(a.price.replace(/ /g, '')) - parseInt(b.price.replace(/ /g, ''));
      if (sortBy === 'price-desc') return parseInt(b.price.replace(/ /g, '')) - parseInt(a.price.replace(/ /g, ''));
      return a.name.localeCompare(b.name);
    });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-12 sm:py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Полный каталог
              </h1>
              <p className="text-lg text-muted-foreground">Более 1500 уникальных предметов китайского искусства</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 mb-8">
              <div className="flex-1">
                <Input
                  placeholder="Поиск по названию..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full lg:w-[200px]">
                  <SelectValue placeholder="Сортировка" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">По названию</SelectItem>
                  <SelectItem value="price-asc">Цена: по возрастанию</SelectItem>
                  <SelectItem value="price-desc">Цена: по убыванию</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
              <TabsList className="w-full flex flex-wrap justify-start gap-2 h-auto bg-transparent mb-8">
                {categories.map(cat => (
                  <TabsTrigger key={cat.id} value={cat.id} className="flex items-center gap-2">
                    <Icon name={cat.icon as any} size={16} />
                    {cat.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredItems.map(item => (
                  <Card key={item.id} className="border-0 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                    <div className="relative overflow-hidden aspect-square bg-muted">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg leading-tight">{item.name}</CardTitle>
                      <p className="text-xs text-muted-foreground mt-1">{item.period}</p>
                    </CardHeader>
                    <CardFooter className="flex justify-between items-center pt-0">
                      <div className="text-2xl font-bold text-primary">{item.price} ₽</div>
                      <Button size="sm" variant="outline">Подробнее</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </Tabs>

            {filteredItems.length === 0 && (
              <div className="text-center py-20">
                <p className="text-xl text-muted-foreground">Ничего не найдено</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Catalog;