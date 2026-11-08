export type Category = {
  slug: string;
  title: string;
  coverImage: string;
  images: string[];
  description: string;
  basePrice: number;
};

export type Plant = {
  slug: string;
  name: string;
  category: string;
  image: string;
  price: number;
  maxPrice?: number;
  hideExampleActivity?: boolean;
  estimatedPrice?: boolean;
  originalImage?: string;
};

const numberedImages = (prefix: string, count: number, digits = 2) =>
  Array.from({ length: count }, (_, index) => `${prefix}${String(index + 1).padStart(digits, '0')}.webp`);
const namedImages = (prefix: string, ...names: string[]) =>
  names.map((name, index) => `${prefix}${String(index + 1).padStart(2, '0')}-${name}.webp`);
const localImages = (...files: string[]) => files.map((file) => `/plant-images/${file}`);

export const heroPhoto = '/hero-legacy-desktop.webp';
export const heroPhotoMobile = '/hero-rooftop-mobile.webp';

export const categories: Category[] = [
  {
    slug: 'indoor', title: 'Indoor plants', basePrice: 1200,
    images: localImages(...numberedImages('indoor-', 10, 3), ...namedImages('ornamental-', 'bird-of-paradise', 'cordyline', 'dracaena-marginata', 'coleus', 'caladium', 'fern'), 'ornamental-10-red-anthurium.webp'),
    coverImage: '', description: 'Leaf forms and easy care plants for rooms, offices and sheltered spaces.',
  },
  {
    slug: 'outdoor', title: 'Outdoor plants', basePrice: 1600,
    images: localImages(
      ...namedImages('outdoor-', 'bougainvillea', 'hibiscus-shrub', 'jasmine-shrub', 'gardenia-shrub', 'oleander-shrub', 'ixora-flowering-shrub', 'lantana-plant', 'ficus-benjamina', 'duranta-golden-shrub', 'croton-shrub'),
      ...namedImages('trees-', 'neem-tree', 'amaltas-golden-shower-tree', 'jacaranda-tree', 'gulmohar-flamboyant-tree', 'banyan-sapling', 'moringa-tree', 'ficus-tree', 'jamun-tree', 'peepal-tree', 'bottlebrush-tree'),
      ...namedImages('topiary-', 'deer-shaped-living-topiary', 'giraffe-shaped-living-topiary', 'elephant-shaped-living-topiary', 'peacock-shaped-living-topiary', 'rabbit-shaped-living-topiary', 'swan-shaped-living-topiary', 'spiral-topiary', 'cone-shaped-topiary', 'ball-shaped-topiary', 'tiered-cloud-shaped-topiary'),
    ),
    coverImage: '', description: 'Trees, shrubs and sculptural greenery for gardens and open air settings.',
  },
  {
    slug: 'fruit', title: 'Fruit plants', basePrice: 1800,
    images: localImages(...namedImages('fruit-', 'mango-sapling', 'guava-sapling', 'lemon-tree', 'orange-tree', 'pomegranate-tree', 'fig-tree', 'olive-tree', 'dragon-fruit-cactus', 'blueberry-bush', 'pineapple-plant')),
    coverImage: '', description: 'Fruit tree varieties and edible plants for home orchards and gardens.',
  },
  {
    slug: 'bonsai', title: 'Bonsai', basePrice: 4500,
    images: localImages(...namedImages('bonsai-', 'ficus-bonsai', 'juniper-bonsai', 'bougainvillea-bonsai', 'chinese-elm-bonsai', 'jade-bonsai', 'olive-bonsai', 'pomegranate-bonsai', 'ficus-banyan-bonsai', 'azalea-bonsai', 'carmona-bonsai')),
    coverImage: '', description: 'Small trees shaped over time for courtyards, terraces and considered interiors.',
  },
  {
    slug: 'cactus', title: 'Cactus plants', basePrice: 700,
    images: localImages(...namedImages('succulents-', 'aloe-vera', 'echeveria-rosette-succulent', 'haworthia-succulent', 'jade-plant', 'prickly-pear-cactus', 'golden-barrel-cactus', 'columnar-cactus', 'agave', 'burro-tail-succulent', 'sedum-succulent')),
    coverImage: '', description: 'Distinctive desert forms for bright windows, patios and rock gardens.',
  },
  {
    slug: 'flowering', title: 'Flowering plants', basePrice: 900,
    images: localImages(...namedImages('flowering-', 'red-rose', 'pink-rose', 'marigold', 'petunia', 'geranium', 'chrysanthemum', 'bougainvillea', 'plumeria', 'hibiscus', 'zinnia'), 'ornamental-07-ornamental-grass.webp', 'ornamental-08-canna-lily.webp', 'ornamental-09-tropical-heliconia.webp'),
    coverImage: '', description: 'Seasonal color and flowering shrubs for borders, pots and landscape plans.',
  },
  {
    slug: 'palms', title: 'Palms', basePrice: 2200,
    images: localImages(...namedImages('palms-', 'areca-palm', 'date-palm', 'foxtail-palm', 'bottle-palm', 'fan-palm', 'lady-palm', 'sago-palm', 'parlour-palm', 'majesty-palm', 'coconut-palm-sapling')),
    coverImage: '', description: 'Architectural palms for entranceways, terraces and larger gardens.',
  },
  {
    slug: 'trees', title: 'Trees', basePrice: 200,
    images: localImages('nursery-terminalia.webp'),
    coverImage: '', description: 'Trees for gardens, avenues and landscape projects.',
  },
];

categories.forEach((category) => {
  category.coverImage = category.images[category.slug === 'outdoor' ? 20 : category.slug === 'cactus' ? 5 : 0];
});

const names: Record<string, string[]> = {
  indoor: [
    'Monstera Deliciosa', 'Monstera Adansonii', 'Philodendron Brasil', 'Heartleaf Philodendron', 'Golden Pothos',
    'Marble Queen Pothos', 'Snake Plant Laurentii', 'ZZ Plant', 'Peace Lily', 'Rubber Plant Burgundy',
    'Fiddle Leaf Fig', 'Areca Palm', 'Parlor Palm', 'Calathea Orbifolia', 'Calathea Medallion',
    'Aglaonema Red', 'Chinese Evergreen Silver Bay', 'Dracaena Marginata', 'Dracaena Fragrans', 'Lucky Bamboo',
    'Boston Fern', 'Bird of Paradise', 'Alocasia Polly', 'Syngonium Pink', 'Spider Plant',
    'Aloe Vera', 'English Ivy', 'Red Anthurium', 'Dieffenbachia', 'Hoya Carnosa',
  ],
  outdoor: [
    'Bougainvillea', 'Ficus Nitida', 'Ficus Benjamina', 'Murraya', 'Duranta Gold',
    'Ixora', 'Hibiscus', 'Plumeria', 'Croton', 'Thuja',
    'Cypress', 'Juniper', 'Ashoka Tree', 'Neem Tree', 'Sukh Chain Tree',
    'Amaltas', 'Gul Mohar', 'Bottlebrush Tree', 'Poinciana', 'Oleander',
    'Lantana', 'Jasmine', 'Star Jasmine', 'Schefflera', 'Agave',
    'Yucca', 'Clumping Bamboo', 'Podocarpus', 'Pittosporum', 'Gardenia',
  ],
  fruit: [
    'Anwar Ratol Mango', 'Chaunsa Mango', 'Sindhri Mango', 'Dusehri Mango', 'Langra Mango',
    'Sufaid Chaunsa Mango', 'Azeem Chaunsa Mango', 'Neelam Mango', 'Malda Mango', 'Fajri Mango',
    'Gola Guava', 'Allahabadi Surkha Guava', 'Sada Bahar Guava', 'Kinnow Mandarin', 'Mosambi Sweet Lime',
    'Kaghzi Lime', 'Malta Orange', 'Grapefruit', 'Falsa', 'Jamun',
    'Indian Jujube Ber', 'Loquat', 'Bhagwa Pomegranate', 'Black Mission Fig', 'Dwarf Cavendish Banana',
    'Red Lady Papaya', 'Dragon Fruit', 'Blueberry', 'Pineapple', 'Strawberry',
  ],
  bonsai: [
    'Ficus Retusa Bonsai', 'Ficus Microcarpa Bonsai', 'Ficus Ginseng Bonsai', 'Ficus Benjamina Bonsai', 'Banyan Bonsai',
    'Chinese Elm Bonsai', 'Japanese Juniper Bonsai', 'Chinese Juniper Bonsai', 'Bougainvillea Bonsai', 'Jade Bonsai',
    'Fukien Tea Bonsai', 'Pomegranate Bonsai', 'Olive Bonsai', 'Tamarind Bonsai', 'Dwarf Jade Bonsai',
    'Dwarf Umbrella Bonsai', 'Carmona Bonsai', 'Serissa Bonsai', 'Boxwood Bonsai', 'Privet Bonsai',
    'Japanese Maple Bonsai', 'Azalea Bonsai', 'Chinese Pine Bonsai', 'Cypress Bonsai', 'Brush Cherry Bonsai',
    'Pemphis Bonsai', 'Adenium Bonsai', 'Mulberry Bonsai', 'Trident Maple Bonsai', 'Black Pine Bonsai',
  ],
  cactus: [
    'Golden Barrel Cactus', 'Ladyfinger Cactus', 'Old Lady Cactus', 'Bunny Ears Cactus', 'Prickly Pear Cactus',
    'Peruvian Apple Cactus', 'Spiral Cereus Cactus', 'Easter Lily Cactus', 'Moon Cactus', 'Bishop Cap Cactus',
    'Monk Hood Cactus', 'Devil Tongue Cactus', 'Melon Cactus', 'Rebutia Cactus', 'Balloon Cactus',
    'Mexican Fence Post Cactus', 'Dragon Fruit Cactus', 'Old Man Cactus', 'Silver Torch Cactus', 'Night Blooming Cereus',
    'Mistletoe Cactus', 'Holiday Cactus', 'Blue Torch Cactus', 'Peanut Cactus', 'Feather Cactus',
    'Star Cactus', 'Paper Spine Cactus', 'Browningia Candelaris', 'Mexican Organ Pipe Cactus', 'Harrisia Cactus',
  ],
  flowering: [
    'Red Rose', 'Pink Rose', 'White Rose', 'Yellow Rose', 'Desi Rose',
    'Double Delight Rose', 'Iceberg Rose', 'Marigold', 'Petunia', 'Geranium',
    'Chrysanthemum', 'Bougainvillea', 'Plumeria', 'Hibiscus', 'Zinnia',
    'Dahlia', 'Gardenia', 'Jasmine', 'Mogra', 'Tuberose',
    'Canna Lily', 'Day Lily', 'Gladiolus', 'Carnation', 'Cosmos',
    'Vinca', 'Pentas', 'Portulaca', 'Pansy', 'Morning Glory',
  ],
  palms: [
    'Areca Palm', 'Royal Palm', 'Foxtail Palm', 'Bottle Palm', 'Bismarck Palm',
    'Date Palm', 'Canary Island Date Palm', 'Pygmy Date Palm', 'Chinese Fan Palm', 'Washingtonia Palm',
    'Mexican Fan Palm', 'Lady Palm', 'Bamboo Palm', 'Kentia Palm', 'Majesty Palm',
    'Raphis Palm', 'Fishtail Palm', 'Sabal Palm', 'Queen Palm', 'Pindo Palm',
    'Triangle Palm', 'Christmas Palm', 'Coconut Palm', 'Traveller Palm', 'Paurotis Palm',
    'Alexandra Palm', 'Carpentaria Palm', 'Spindle Palm', 'Licuala Palm', 'Ravenala Palm',
  ],
};

// Client-supplied prices and AI-edited reference photos; confirm availability before launch.
const nurseryPalms: Plant[] = ([
  ['Royal Palm', 'royal-palm', 15000],
  ['Copernicia Alba Palm', 'copernicia-alba-palm', 40000],
  ['Sylvester Palm', 'sylvester-palm', 60000],
  ['Kangi Palm', 'kangi-palm', 5000],
  ['Ponytail Palm', 'ponytail-palm', 5000],
  ['Alexandra Palm', 'alexandra-palm', 5000],
] as [string, string, number][]).map(([name, slug, price]) => ({
  name, slug: `palms-${slug}`, category: 'palms',
  image: `/plant-images/nursery-${slug}.webp`, price, hideExampleActivity: true,
}));

// Species for the sixth tree remains unconfirmed; images are AI edited from client photos.
const nurseryTrees: Plant[] = ([
  ['Terminalia', 'terminalia'],
  ['China Doll', 'china-doll'],
  ['Jamun Fruit Tree', 'jamun'],
  ['Amstel King Ficus', 'amstel-king-ficus'],
  ['Pink Tabebuia', 'pink-tabebuia'],
  ['Nursery Tree', 'tree-six'],
] as [string, string][]).map(([name, slug]) => ({
  name, slug: `trees-${slug}`, category: 'trees', image: `/plant-images/nursery-${slug}.webp`,
  price: 200, maxPrice: 5000, hideExampleActivity: true,
}));

// Estimated from comparable Pakistani nursery listings, not confirmed nursery prices.
const clientPlants: Plant[] = ([
  ['Grafted Kinnow', 'fruit-kinnow-mandarin', 'kinnow', 1500],
  ['Grafted Citrus Varieties', 'fruit-grafted-citrus', 'citrus', 1500],
  ['Pineapple', 'fruit-pineapple', 'pineapple', 1200],
  ['Grafted China Lemon', 'fruit-china-lemon', 'china-lemon', 1500],
  ['Grafted Loquat', 'fruit-loquat', 'loquat', 1100],
  ['Avocado', 'fruit-avocado', 'avocado', 1200],
  ['Jackfruit', 'fruit-jackfruit', 'jackfruit', 1500],
  ['Sensation Jumbo Mango', 'fruit-sensation-jumbo-mango', 'sensation-jumbo-mango', 950],
  ['Florida King Peach', 'fruit-florida-king-peach', 'florida-king-peach', 950],
  ['Grafted Badami Plum', 'fruit-badami-plum', 'badami-plum', 950],
  ['Apricot and Plum', 'fruit-apricot-plum', 'apricot-plum', 950],
  ['Grafted Anna Apple', 'fruit-anna-apple', 'anna-apple', 950],
  ['Japanese Persimmon', 'fruit-persimmon', 'persimmon', 950],
  ['Black and White Fig', 'fruit-fig', 'fig', 950],
  ['Green Rose Apple', 'fruit-green-rose-apple', 'green-rose-apple', 7999],
  ['Gola and Surahi Lychee', 'fruit-lychee', 'lychee', 1200],
  ['Persian Lemon', 'fruit-persian-lemon', 'persian-lemon', 1500],
  ['Early Grand Peach', 'fruit-early-grand-peach', 'early-grand-peach', 950],
  ['Gul e Nishtar', 'trees-gul-e-nishtar', 'gul-e-nishtar', 350],
  ['Pine Tree', 'trees-pine', 'pine', 3570],
] as [string, string, string, number][]).map(([name, slug, photo, price]) => ({
  name, slug, category: slug.startsWith('trees-') ? 'trees' : 'fruit',
  image: `/plant-images/client-enhanced-${photo}.webp`,
  originalImage: `/plant-images/client-original-${photo}.webp`,
  price, estimatedPrice: true, hideExampleActivity: true,
}));

export const plants: Plant[] = categories.flatMap((category) => {
  if (category.slug === 'trees') return [...clientPlants.filter((plant) => plant.category === 'trees'), ...nurseryTrees];
  const collection = names[category.slug];
  if (!collection || collection.length !== 30) throw new Error(`The ${category.slug} collection must contain 30 listings.`);
  const generated = collection.map((name, index) => ({
    slug: `${category.slug}-${name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`,
    name,
    category: category.slug,
    image: category.images[index % category.images.length],
    price: category.basePrice + ((index * 347) % (category.basePrice * 3)),
  }));
  const supplied = category.slug === 'palms' ? nurseryPalms : clientPlants.filter((plant) => plant.category === category.slug);
  return [...supplied, ...generated.filter((plant) => !supplied.some((item) => item.slug === plant.slug))];
});

export const categoryFor = (slug: string) => categories.find((category) => category.slug === slug);
export const plantsFor = (slug: string) => plants.filter((plant) => plant.category === slug);
export const priceLabel = (amount: number, maxPrice?: number) => 'Rs ' + new Intl.NumberFormat('en-PK').format(amount) + (maxPrice ? ' to Rs ' + new Intl.NumberFormat('en-PK').format(maxPrice) : '');
