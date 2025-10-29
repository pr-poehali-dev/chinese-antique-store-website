import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useNavigate } from 'react-router-dom';
import { Header } from '@/components/ui/header';
import { Footer } from '@/components/ui/footer';
import Icon from '@/components/ui/icon';
import { PageHero } from '@/components/shared';
import { ProductCard } from '@/components/shared';
import { catalogData, categories, getCategoryItems } from '@/data/catalog';

const Catalog = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCentury, setSelectedCentury] = useState('all');

  const filteredItems = getCategoryItems(selectedCategory)
    .filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCentury = selectedCentury === 'all' || item.period.includes(selectedCentury);
      return matchesSearch && matchesCentury;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return parseInt(a.price.replace(/ /g, '')) - parseInt(b.price.replace(/ /g, ''));
      if (sortBy === 'price-desc') return parseInt(b.price.replace(/ /g, '')) - parseInt(a.price.replace(/ /g, ''));
      return a.name.localeCompare(b.name);
    });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <PageHero 
        title="Полный каталог"
        description="Коллекция редчайших предметов китайского искусства"
      />

      <section className="py-16 container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="w-full flex-wrap h-auto justify-start gap-2 bg-muted/50 p-2 mb-8">
              {categories.map(category => (
                <TabsTrigger 
                  key={category.id}
                  value={category.id}
                  className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <Icon name={category.icon} className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span className="ml-1 text-xs opacity-70">
                    ({category.id === 'all' ? Object.values(catalogData).flat().length : (catalogData[category.id]?.length || 0)})
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="mb-8 flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Поиск по названию..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>
              <Select value={selectedCentury} onValueChange={setSelectedCentury}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Выбрать век" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все века</SelectItem>
                  <SelectItem value="XV">XV век</SelectItem>
                  <SelectItem value="XVI">XVI век</SelectItem>
                  <SelectItem value="XVII">XVII век</SelectItem>
                  <SelectItem value="XVIII">XVIII век</SelectItem>
                  <SelectItem value="XIX">XIX век</SelectItem>
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Сортировка" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">По названию</SelectItem>
                  <SelectItem value="price-asc">Цена: по возрастанию</SelectItem>
                  <SelectItem value="price-desc">Цена: по убыванию</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {categories.map(category => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                {filteredItems.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredItems.map(item => (
                      <ProductCard
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        period={item.period}
                        image={item.image}
                        onDetailsClick={() => navigate(`/product/${item.id}`)}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <Icon name="Search" className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-xl text-muted-foreground">
                      Ничего не найдено
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Попробуйте изменить параметры поиска или фильтры
                    </p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Catalog;
