export interface CatalogItem {
  id: number;
  name: string;
  price: string;
  period: string;
  image: string;
}

export interface CategoryInfo {
  id: string;
  name: string;
  icon: string;
}

export const catalogData: Record<string, CatalogItem[]> = {
  porcelain: [
    { id: 1, name: 'Ваза с драконами династии Мин', price: '128 000', period: 'XV век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/7498533b-cd31-4299-a6ba-592871bafb18.jpg' },
    { id: 7, name: 'Чайный сервиз с пейзажем', price: '95 000', period: 'XVIII век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/095c3300-aad9-456a-8374-22dbae1c752c.jpg' },
    { id: 8, name: 'Тарелка с росписью кобальтом', price: '45 000', period: 'XVII век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/b40d466c-338e-4d8d-bbdc-5b6ca95af02a.jpg' },
    { id: 9, name: 'Ваза с пионами и птицами', price: '156 000', period: 'XVI век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/d7bc4d95-6725-4416-9867-878808c155f6.jpg' },
    { id: 19, name: 'Чаша для риса императорская', price: '78 000', period: 'XVIII век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/1f12afa5-21c4-4b4d-a751-e24f61ece79c.jpg' },
    { id: 20, name: 'Набор пиал с золотом', price: '134 000', period: 'XIX век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/0e0e0453-0c96-4b7e-b735-ee3d2e8b7715.jpg' },
  ],
  jade: [
    { id: 2, name: 'Нефритовый Будда', price: '245 000', period: 'XVIII век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/3d3a6fc2-d1e9-48b5-9c0b-0e601fdde4ec.jpg' },
    { id: 10, name: 'Нефритовая подвеска Би', price: '67 000', period: 'XIX век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/13e63c2c-9382-477e-9754-345a242ac730.jpg' },
    { id: 11, name: 'Резная статуэтка дракона', price: '189 000', period: 'XVII век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/ec2ab15d-d20a-4ba3-829e-c7afa0f2052e.jpg' },
    { id: 21, name: 'Нефритовый браслет резной', price: '112 000', period: 'XVIII век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/6e92cdc0-44f4-4c0c-b0be-29a6441f72b5.jpg' },
    { id: 22, name: 'Печать из белого нефрита', price: '89 000', period: 'XIX век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/3d3a6fc2-d1e9-48b5-9c0b-0e601fdde4ec.jpg' },
  ],
  bronze: [
    { id: 3, name: 'Бронзовая курильница с драконами', price: '89 500', period: 'XVII век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/934c9e8b-1f3f-4df6-b09f-69e666982422.jpg' },
    { id: 12, name: 'Бронзовый сосуд для вина', price: '134 000', period: 'XVI век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/5e727592-b5ef-477a-86a0-6db8f30e255b.jpg' },
    { id: 13, name: 'Бронзовое зеркало с узорами', price: '56 000', period: 'XVIII век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/ded56fca-5250-4e4e-b4b7-587c3814f34f.jpg' },
    { id: 23, name: 'Колокольчик ритуальный', price: '45 000', period: 'XVII век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/542568f1-867c-4d1a-a7b5-7288f3fe637f.jpg' },
    { id: 24, name: 'Статуя Гуаньинь бронзовая', price: '298 000', period: 'XVI век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/7529fb9b-5365-4f3b-a33c-9eb4150591b2.jpg' },
  ],
  painting: [
    { id: 4, name: 'Свиток с горным пейзажем', price: '156 000', period: 'XIX век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/147ce539-7acd-403e-aca8-9cd9d8178956.jpg' },
    { id: 14, name: 'Каллиграфия мастера Чжао', price: '289 000', period: 'XVIII век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/f61dc847-8b47-4d45-b47b-843cd2b2af0a.jpg' },
    { id: 15, name: 'Свиток с цветами и птицами', price: '178 000', period: 'XIX век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/d59e3de5-f520-45ca-93b0-8a51ad09711d.jpg' },
    { id: 25, name: 'Веер с живописью тушью', price: '67 000', period: 'XIX век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/592416c5-4e24-4558-9d3d-9ff22681ae5f.jpg' },
    { id: 26, name: 'Парные свитки Времена года', price: '423 000', period: 'XVIII век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/7dbb0609-f2f1-415c-9d1d-5a09d6c5a5e5.jpg' },
  ],
  wood: [
    { id: 5, name: 'Резная панель с фениксом', price: '67 000', period: 'XVIII век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/0f4c5e21-0675-4b56-ac42-3559fb3c0d9a.jpg' },
    { id: 16, name: 'Деревянная ширма с резьбой', price: '234 000', period: 'XVII век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/192283b6-c880-4d91-bec3-021cb7a9a6c5.jpg' },
    { id: 17, name: 'Столик для чайной церемонии', price: '145 000', period: 'XIX век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/b01738f5-2bbf-41f1-8941-fba7e6027b34.jpg' },
    { id: 27, name: 'Шкатулка с перламутром', price: '89 000', period: 'XVIII век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/28df5a15-296a-45a2-92c1-c3edf8a5d19c.jpg' },
    { id: 28, name: 'Подставка под благовония', price: '34 000', period: 'XIX век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/2ab6e103-7bda-41da-b762-80444d1e66b2.jpg' },
  ],
  enamel: [
    { id: 6, name: 'Перегородчатая эмаль клуазоне', price: '112 000', period: 'XIX век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/fdee163c-93c9-44b1-a9d9-9ccc4be74355.jpg' },
    { id: 18, name: 'Ваза клуазоне с драконами', price: '198 000', period: 'XVIII век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/d0515dd2-eee0-4b0a-93b5-c8b92ec54bac.jpg' },
    { id: 29, name: 'Чайник эмалевый цветочный', price: '134 000', period: 'XIX век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/c0244849-78ff-45d1-be42-4c9b4108347b.jpg' },
    { id: 30, name: 'Блюдо клуазоне большое', price: '178 000', period: 'XVIII век', image: 'https://cdn.poehali.dev/projects/9fc24e61-f6b1-43ae-a70d-315abb9e00ff/files/1a4e28be-5561-4580-bfbe-efd35e77563d.jpg' },
  ],
};

export const categories: CategoryInfo[] = [
  { id: 'all', name: 'Все предметы', icon: 'Grid3x3' },
  { id: 'porcelain', name: 'Фарфор', icon: 'Wine' },
  { id: 'jade', name: 'Нефрит', icon: 'Gem' },
  { id: 'bronze', name: 'Бронза', icon: 'Sparkles' },
  { id: 'painting', name: 'Живопись', icon: 'Image' },
  { id: 'wood', name: 'Дерево', icon: 'Trees' },
  { id: 'enamel', name: 'Эмаль', icon: 'Palette' },
];

export const getAllCatalogItems = (): CatalogItem[] => {
  return Object.values(catalogData).flat();
};

export const getCategoryItems = (categoryId: string): CatalogItem[] => {
  if (categoryId === 'all') {
    return getAllCatalogItems();
  }
  return catalogData[categoryId] || [];
};