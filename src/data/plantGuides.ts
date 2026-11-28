export interface PlantGuide { description: string; light: string; water: string; source: string; botanical?: string; }
// General growing guidance, not measurements or identification of the individual nursery plant.
const guides: Record<string, PlantGuide> = {
  bamboo: {description: 'Lucky bamboo is a tropical foliage plant often trained into decorative shapes. Its upright stems make it a distinctive choice for an indoor space.', light: 'Bright, indirect light', water: 'Keep the growing medium lightly moist and avoid waterlogged roots.', source: 'https://plants.ces.ncsu.edu/plants/dracaena-sanderiana/', botanical: 'Dracaena, species to confirm'},
  anthurium: {description: 'Anthuriums are tropical foliage plants valued for their glossy leaves and colourful, long lasting spathes.', light: 'Bright, indirect light', water: 'Water when the top layer of potting mix feels dry. Allow excess water to drain.', source: 'https://plants.ces.ncsu.edu/plants/anthurium-andraeanum/', botanical: 'Anthurium'},
  peace: {description: 'Peace lilies are tropical foliage plants recognised for their deep green leaves and white, sail like spathes.', light: 'Indirect light or partial shade', water: 'Keep the mix lightly moist, allowing it to dry between waterings. Avoid soggy soil.', source: 'https://plants.ces.ncsu.edu/plants/spathiphyllum/', botanical: 'Spathiphyllum'},
  money: {description: 'The money tree is a tropical tree often grown indoors with a braided trunk and glossy, divided leaves.', light: 'Bright, indirect light', water: 'Use a well drained mix and avoid leaving the pot in standing water.', source: 'https://plants.ces.ncsu.edu/plants/pachira-aquatica/', botanical: 'Pachira aquatica'},
  aglaonema: {description: 'Aglaonema is a tropical foliage plant appreciated for its colourful patterned leaves and compact growth.', light: 'Good indirect light', water: 'Allow the growing medium to dry between waterings and avoid overwatering.', source: 'https://plants.ces.ncsu.edu/plants/aglaonema/', botanical: 'Aglaonema'},
  calathea: {description: 'Calathea ornata, also known as pinstripe plant, is a tropical foliage plant with fine pale stripes across dark green leaves.', light: 'Bright, indirect light', water: 'Keep the mix evenly moist but well drained. The plant appreciates humidity.', source: 'https://plants.ces.ncsu.edu/plants/goeppertia-ornata/', botanical: 'Goeppertia ornata'},
};
const extraGuides: Record<string, PlantGuide> = {
  buxus: { description: 'Buxus is an evergreen shrub often clipped into formal shapes and topiary.', light: 'Partial shade or sun', water: 'Use well drained soil and water during long dry periods, particularly while establishing.', source: 'https://plants.ces.ncsu.edu/plants/buxus/', botanical: 'Buxus' },
  citrus: { description: 'Citrus is a group of evergreen fruit trees grown for fragrant flowers and fruit.', light: 'Full sun', water: 'Use a fertile, moist and well drained growing medium.', source: 'https://plants.ces.ncsu.edu/plants/citrus/', botanical: 'Citrus' },
  pineapple: { description: 'Pineapple is a tropical perennial with a rosette of long leaves and fruit that develops from its central flowering stem.', light: 'Bright, indirect light', water: 'Keep the mix moist and well drained, avoiding prolonged wet conditions.', source: 'https://plants.ces.ncsu.edu/plants/ananas-comosus/', botanical: 'Ananas comosus' },
  loquat: { description: 'Loquat is an evergreen fruit tree with large, textured leaves and clusters of fruit in suitable conditions.', light: 'Full sun or partial shade', water: 'Grow in moist, well drained soil.', source: 'https://plants.ces.ncsu.edu/plants/eriobotrya-japonica/', botanical: 'Eriobotrya japonica' },
  fig: { description: 'Fig is a fruiting tree grown for its distinctive lobed foliage and edible fruit.', light: 'Full sun', water: 'Grow in well drained soil and water during dry periods.', source: 'https://plants.ces.ncsu.edu/plants/ficus-carica/', botanical: 'Ficus carica' },
  peach: { description: 'Peach is a deciduous fruit tree in the rose family, available in many cultivars.', light: 'Full sun', water: 'Provide well drained soil and water during dry periods.', source: 'https://plants.ces.ncsu.edu/plants/prunus-persica/', botanical: 'Prunus persica' },
  mango: { description: 'Mango is a tropical evergreen fruit tree with glossy foliage and many cultivated varieties.', light: 'Full sun', water: 'Provide ample moisture and fertile, well drained soil.', source: 'https://edis.ifas.ufl.edu/publication/ST404', botanical: 'Mangifera indica' },
  jackfruit: { description: 'Jackfruit is a tropical fruit tree with glossy leaves and large fruit that can grow along its trunk.', light: 'Sunny location', water: 'Plant in flood free, well drained soil.', source: 'https://edis.ifas.ufl.edu/publication/MG373', botanical: 'Artocarpus heterophyllus' },
  persimmon: { description: 'Japanese persimmon is a deciduous fruit tree valued for its colourful fruit and autumn foliage.', light: 'Full sun', water: 'Grow in moist but well drained soil.', source: 'https://plants.ces.ncsu.edu/plants/diospyros-kaki/', botanical: 'Diospyros kaki' },
  avocado: { description: 'Avocado is an evergreen fruit tree with glossy foliage, grown in warm climates.', light: 'Full sun', water: 'Provide well drained soil and avoid standing water around roots.', source: 'https://plants.ces.ncsu.edu/plants/persea-americana/', botanical: 'Persea americana' },
};
export function guideFor(slug: string): PlantGuide | undefined {
  if (['topiary-surahi-4ft', 'topiary-cone', 'topiary-spiral'].includes(slug)) return extraGuides.buxus;
  if (['fruit-kinnow-mandarin', 'fruit-grafted-citrus', 'fruit-china-lemon', 'fruit-persian-lemon'].includes(slug)) return extraGuides.citrus;
  if (slug === 'fruit-pineapple') return extraGuides.pineapple;
  if (slug === 'fruit-loquat') return extraGuides.loquat;
  if (slug === 'fruit-fig') return extraGuides.fig;
  if (['fruit-florida-king-peach', 'fruit-early-grand-peach'].includes(slug)) return extraGuides.peach;
  if (slug === 'fruit-avocado') return extraGuides.avocado;
  if (slug === 'fruit-sensation-jumbo-mango') return extraGuides.mango;
  if (slug === 'fruit-jackfruit') return extraGuides.jackfruit;
  if (slug === 'fruit-persimmon') return extraGuides.persimmon;
  if (!slug.startsWith('indoor-nursery-')) return undefined;
  const key = slug.slice('indoor-nursery-'.length);
  if (['tower', 'variegated', 'cage', 'surahi'].includes(key)) return guides.bamboo;
  if (key.includes('anthurium')) return guides.anthurium;
  if (key === 'peace-lily') return guides.peace;
  if (key === 'money-tree') return guides.money;
  if (key === 'aglaonema') return guides.aglaonema;
  if (key === 'calathea') return guides.calathea;
}
