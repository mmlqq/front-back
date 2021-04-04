const mock = [
  {
    sectionName: 'SNOWBOARDS',
    products: [
      { id: 1, name: 'Сноуборд BURTON', price: 15000, brand: 'BURTON', sex: 'female', description: 'Сноуборд BURTON отличная доска для начинающих.', category: 'SNOWBOARDS', weight: 152 },
      { id: 2, name: 'Сноуборд LIB TECH', price: 18000, sex: 'male', brand: 'LIB TECH', description: 'Сноуборд LIB TECH для высокоскоростного джиббинга и фристайла в сноу-парке.', category: 'SNOWBOARDS', weight: 150 },
      { id: 3, name: 'Сноуборд FURBERG POW', price: 15000, sex: 'male', brand: 'FURBERG POW', description: 'Сноуборд FURBERG POW создавался только с одной целью: превзойти любой другой сноуборд для паудера.', category: 'SNOWBOARDS', weight: 154 },
    ],
  },
  {
    sectionName: 'SKIING',
    products: [
      { id: 4, name: 'Salomon N XDR', price: 20000, brand: 'SALOMON', sex: 'unisex', description: 'универсальные лыжи, созданные для опытных райдеров.', category: 'SKIES', weight: 186 },
      { id: 5, name: 'Горные лыжи BLACK CROWS ORB BIRDIE', price: 30000, brand: 'BLACK CROWS', sex: 'female', description: 'Black Crows Orb Birdie - это более легкая женская версия лыж.', category: 'SKIES', weight: 159 },
      { id: 6, name: 'Горные лыжи FACTION CANDIDE', price: 15000, brand: 'FACTION CANDIDE', sex: 'unisex', description: 'Горные лыжи FACTION CANDIDE 0.5 были созданы для тех подрастающих райдеров, которые бросаются вниз по склону с гораздо большим энтузиазмом, чем большинство из нас.', category: 'SKIES', weight: 125 },
    ],
  },
  {
    sectionName: 'CLOTHES',
    products: [
      { id: 7, name: 'Куртка BURTON', price: 25000, brand: 'BURTON', sex: 'female', description: 'Куртка Burton удобная.', category: 'CLOTHES', weight: 'XL' },
      { id: 8, name: 'Штаны BURTON', price: 17000, sex: 'male', brand: 'DC', description: 'Штаны DC топ ебац.', category: 'CLOTHES', clothesPart: 'Штаны', weight: 'XS' },
      { id: 9, name: 'Перчатки DAINESE', price: 15000, sex: 'male', brand: 'DAINESE', description: 'DAINESE перчи +1488 к ловкости.', category: 'CLOTHES', weight: 'S' },
      { id: 10, name: 'Крепления Burton', price: 9000, sex: 'male', brand: 'BURTON', description: 'Крепы Burton подходят для мажоров', category: 'CLOTHES', weight: 'XS' },
      { id: 11, name: 'Маска ELECTRIC KLEVELAND', price: 8500, sex: 'unixes', brand: 'ELECTRIC KLEVELAND', description: 'Маска ELECTRIC KLEVELAND +10 к интеллекту.', category: 'CLOTHES', weight: 'onesize' },
      { id: 12, name: 'Ботинки DC', price: 8999, sex: 'male', brand: 'DC', description: 'Ботинки DC снимают эффекты обездвиживания и замедления.', category: 'CLOTHES', weight: '39' },
    ],
  },
];

export default mock;
