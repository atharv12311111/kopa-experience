export const MALL_NAME = 'THE KOPA';
export const MALL_TAGLINE = 'The World\'s Most Ambitious Destination';
export const MALL_LOCATION = 'Pune';
export const MALL_DISTANCE = 'close to westin';

/* ── Navigation ────────────────────────────────────────────────── */
export const NAV_SECTIONS = [
  { id: 'hero',          label: 'Welcome',       shortLabel: '01' },
  { id: 'property',      label: 'The Property',  shortLabel: '02' },
  { id: 'retail',        label: 'Retail',        shortLabel: '03' },
  { id: 'luxury',        label: 'Luxury',        shortLabel: '04' },
  { id: 'dining',        label: 'Dining',        shortLabel: '05' },
  { id: 'entertainment', label: 'Entertainment', shortLabel: '06' },
  { id: 'events',        label: 'Events',        shortLabel: '07' },
  { id: 'contact',       label: 'Inquire',       shortLabel: '08' },
];

/* ── Hero Stats Strip ───────────────────────────────────────────── */
export const HERO_STATS = [
  { value: '3.5M',  label: 'Square Feet' },
  { value: '450+',  label: 'Brands' },
  { value: '40M+',  label: 'Annual Visitors' },
  { value: '5B+',  label: 'Total Investment' },
];

/* ── Property Stats (animated counters) ────────────────────────── */
export const PROPERTY_STATS = [
  {
    number: 3.5,
    suffix: 'M',
    unit: 'SQ FT',
    label: 'Total Property',
    description: 'The largest retail & entertainment complex in the Western Hemisphere',
    decimals: 1,
  },
  {
    number: 40,
    suffix: 'M+',
    unit: 'ANNUALLY',
    label: 'Visitors',
    description: 'Tens of millions drawn from across the tri-state region and beyond',
    decimals: 0,
  },
  {
    number: 20,
    suffix: 'M',
    unit: 'PEOPLE',
    label: 'Within 30 Min',
    description: 'An unrivaled catchment spanning the most affluent suburbs in Pune',
    decimals: 0,
  },
  {
    number: 3,
    suffix: 'B+',
    unit: 'INVESTED',
    label: 'Total Capital',
    prefix: 'rupees',
    description: 'The largest single retail development investment in history',
    decimals: 0,
  },
];

/* ── Catchment Demographics ─────────────────────────────────────── */
export const DEMOGRAPHICS = [
  { label: '10 Million', sub: 'within 30 minutes' },
  { label: '20 Million', sub: 'within 60 minutes' },
  { label: '102K+',     sub: 'avg. household income' },
  { label: '140M',       sub: 'Pune metro annual tourists' },
  { label: '18–45',      sub: 'primary visitor age range' },
  { label: '65%',        sub: 'return visitors' },
];

/* ── Retail Categories ──────────────────────────────────────────── */
export const RETAIL_CATEGORIES = [
  {
    id: 'fashion',
    label: 'Global Fashion',
    tenants: ['H&M', 'Zara', 'Uniqlo', 'Urban Outfitters', 'Express'],
    count: '12+',
    image: "/boss.jpg",
    description: 'International fast-fashion powerhouses and elevated everyday brands anchor the retail mix.',
  },
  {
    id: 'luxury',
    label: 'Luxury Maisons',
    tenants: ['Hermès', 'Louis Vuitton', 'Gucci', 'Bottega Veneta', 'Dior'],
    count: '4+',
    image: '/luxury.jpg',
    description: 'A curated luxury wing positioning THE KOPA alongside the world\'s finest retail addresses.',
  },
  {
    id: 'beauty',
    label: 'Beauty & Wellness',
    tenants: ['Sephora', 'Ulta Beauty', 'MAC', 'Kiehl\'s', 'Jo Malone'],
    count: '5+',
    image: '/beauty.jpg',
    description: 'Premium beauty, fragrance, and wellness brands serving the most style-conscious shoppers.',
  },
  {
    id: 'tech',
    label: 'Tech & Innovation',
    tenants: ['Apple', 'Samsung', 'Microsoft', 'Sony', 'Best Buy'],
    count: '8+',
    image: '/headphones.jpg',
    description: 'Flagship technology experiences and experiential retail at the intersection of commerce and discovery.',
  },
  {
    id: 'sport',
    label: 'Sport & Outdoor',
    tenants: ['Nike', 'Adidas', 'Lululemon', 'Under Armour', 'REI'],
    count: '9+',
    image: '/sports.jpg',
    description: 'Performance and lifestyle brands capturing the active consumer in one of sports\' most iconic markets.',
  },
  {
    id: 'popup',
    label: 'Pop-Up & Concepts',
    tenants: ['Rotating Activations', 'Brand Collabs', 'Artist Drops', 'Limited Editions', 'NFT Galleries'],
    count: '10+',
    image: '/coffee.jpg',
    description: 'Flexible, high-visibility pop-up environments for launches, drops, and limited-run brand activations.',
  },
];

/* ── Luxury Tenants ─────────────────────────────────────────────── */
export const LUXURY_HIGHLIGHTS = [
  { name: 'PRADA', category: 'Leather Goods & Fashion' },
  { name: 'YSL', category: 'Fashion & Accessories' },
  { name: 'Gucci', category: 'Fashion & Lifestyle' },
  { name: 'Bottega Veneta', category: 'Leather Goods' },
  { name: 'ZARA', category: 'Haute Couture' },
  { name: 'Balenciaga', category: 'Ready-to-Wear' },
  { name: 'H&M', category: 'Fashion & Accessories' },
  { name: 'Valentino', category: 'Luxury Fashion' },
];

/* ── Dining ─────────────────────────────────────────────────────── */
export const DINING_CATEGORIES = [
  {
    label: 'Fine Dining',
    description: 'Michelin-caliber chefs and destination restaurants that make THE KOPA a culinary landmark.',
    icon: '✦',
    examples: ['Chef\'s Table', 'Omakase Bar', 'Steakhouse'],
    image: '/public/marcus.png',
  },
  {
    label: 'Immersive F&B',
    description: 'Branded dining experiences, concept restaurants, and multi-sensory food environments.',
    icon: '✦',
    examples: ['Immersive Dining', 'Theme Concepts', 'Chef Collabs'],
    image: '/public/yard.png',
  },
  {
    label: 'Global Food Hall',
    description: 'A world-class international food hall celebrating cuisine from every corner of the globe.',
    icon: '✦',
    examples: ['Japanese Ramen', 'Mexican Street Food', 'Mediterranean'],
    image: '/public/italy.png',
  },
  {
    label: 'Cafés & Dessert',
    description: 'Artisan coffee roasters, dessert destinations, and specialty beverage concepts.',
    icon: '✦',
    examples: ['Artisan Coffee', 'Gelato', 'Patisserie'],
    image: '/public/vinatica.png',
  },
];

export const DINING_STATS = [
  { value: '100+', label: 'Dining Options' },
  { value: '25+',  label: 'Cuisines Represented' },
  { value: '15K',  label: 'Daily F&B Covers' },
];

/* ── Entertainment ──────────────────────────────────────────────── */
export const ENTERTAINMENT_ANCHORS = [
  {
    id: 'directors cut',
    name: 'PVR Directors Cut',
    tagline: 'movie in luxury',
    description: 'watch all the movie with greatest luxury .',
    highlights: ['Movies', 'Better Seats ', 'World-Exclusive Coasters', 'Character Experiences'],
    image: '/pvr.png',
    color: '#c4973a',
  },
  {
    id: 'hamleys',
    name: 'Hamleys Play World',
    tagline: 'A joy palace for the young once',
    description: 'A getway place for the younger once were they can have their gala time.',
    highlights: ['40+ games', 'Play area', 'Ball Pits', 'Trampuline Park'],
    image: '/hamleys.png',
    color: '#c4973a',
  },
  {
    id: 'shott',
    name: 'Shott',
    tagline: 'Bowl to Sprowl',
    description: 'A experience were you and your mates can have a gala time.',
    highlights: ['Real Thrill. Always.', 'Year-Round Bowling', 'Lessons Available', 'Equipment Rentals'],
    image: '/shott.png',
    color: '#c4973a',
  },
  {
    id: 'Go Kart',
    name: 'The Ring',
    tagline: 'all in the mart we have go kart ',
    description: 'A adrenaline rush will run through your body.',
    highlights: ['Rental Karts', 'Gears Available', '15 mins', 'Winners Award'],
    image: '/go kart.png',
    color: '#c4973a',
  },
];


export const EVENT_TYPES = [
  {
    id: 'concerts',
    label: 'Live Concerts',
    description: 'A world-class performing arts center hosting headline artists, touring shows, and exclusive residencies.',
    capacity: '5,000',
    icon: 'music',
    image: '/concert.jpg',
  },
  {
    id: 'brand',
    label: 'Brand Activations',
    description: 'High-footfall indoor activations reaching millions of engaged visitors across 3.5M sq ft of dynamic space.',
    capacity: 'Unlimited Reach',
    icon: 'star',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
  },
  {
    id: 'corporate',
    label: 'Corporate Events',
    description: 'Convention-grade facilities for conferences, product launches, shareholder meetings, and corporate retreats.',
    capacity: '10,000',
    icon: 'briefcase',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
  },
  {
    id: 'expo',
    label: 'Expositions & Trade Shows',
    description: 'Flexible exhibition halls and convention-center-grade spaces adjacent to New York\'s media universe.',
    capacity: '200K SQ FT',
    icon: 'grid',
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80',
  },
];

export const PERFORMING_ARTS = {
  name: 'THE KOPA Performing Arts Center',
  capacity: 5000,
  description: 'A state-of-the-art venue with flexible configurations, world-class acoustics, and unmatched production infrastructure — positioned as the premier event destination in the Pune metropolitan area.',
  specs: [
    { label: 'Main Hall Capacity', value: '5,000 seats' },
    { label: 'Flexible Black Box', value: '500–1,200 seats' },
    { label: 'Outdoor Plaza', value: '15,000+ standing' },
    { label: 'Loading Docks', value: '8 dedicated' },
    { label: 'Green Rooms', value: '12 private suites' },
    { label: 'Production Booth', value: 'State-of-the-art' },
  ],
};

/* ── Sponsorship Tiers ──────────────────────────────────────────── */
export const SPONSORSHIP_TIERS = [
  {
    name: 'Presenting Partner',
    label: 'TITLE TIER',
    price: 'Custom',
    description: 'Category-exclusive naming rights, cross-property dominance, and first-right integration into all major programming.',
    perks: [
      'Category exclusivity across all channels',
      'Naming rights on key venue or destination',
      'Priority position at all major events',
      'Dedicated brand experience zones',
      'Executive access and VIP hospitality',
      'Custom co-branded campaigns',
    ],
    color: '#C4973A',
  },
  {
    name: 'Premier Partner',
    label: 'PLATINUM TIER',
    price: 'From 2M',
    description: 'Signature-level visibility across entertainment, retail, and events with robust digital and physical integration.',
    perks: [
      'High-visibility digital signage placements',
      'Activation rights at 3 major events/year',
      'Social media co-creation program',
      'Seasonal campaign integration',
      'Data and insights reporting',
    ],
    color: '#E8E8E8',
  },
  {
    name: 'Select Partner',
    label: 'GOLD TIER',
    price: 'From 500K',
    description: 'Strategic presence in targeted sections of the property with measurable audience engagement.',
    perks: [
      'Section-specific signage rights',
      'Activation rights at 1 major event/year',
      'Digital touchpoint integration',
      'Quarterly performance reporting',
    ],
    color: '#A07A3A',
  },
];

/* ── Leasing Paths ──────────────────────────────────────────────── */
export const LEASING_PATHS = [
  {
    id: 'luxury-flagship',
    label: 'Luxury Flagship',
    tagline: 'The address that defines your brand',
    description: 'Position your brand at the pinnacle of one of the most visited luxury retail environments in Pune. Adjacent to flagship maisons and visited by the most affluent consumers in the west.',
    minSize: '2,500 SF',
    location: 'Luxury Wing — Level 2',
    demographics: '150K+ avg. HHI within 5-mile radius',
    cta: 'Request Luxury Leasing Info',
    color: '#C4973A',
  },
  {
    id: 'retail',
    label: 'Standard Retail',
    tagline: 'Scale into the largest market in Pune',
    description: 'Join 450+ global brands reaching 40M+ annual visitors. Flexible sizing, high-footfall corridors, and a proven track record of driving retail performance.',
    minSize: '500 SF',
    location: 'All Levels — Multiple Corridors',
    demographics: '$95K avg. HHI',
    cta: 'Request Retail Leasing Info',
    color: '#fff',
  },
  {
    id: 'fnb',
    label: 'F&B & Hospitality',
    tagline: 'Feed the destination',
    description: 'From intimate fine dining to global food hall concepts. High-dwell-time environments and an audience that treats dining as a destination in itself.',
    minSize: '300 SF',
    location: 'Dining District & Food Hall',
    demographics: '15,000+ daily covers across the property',
    cta: 'Request F&B Leasing Info',
    color: '#E8A87C',
  },
  {
    id: 'popup',
    label: 'Pop-Up & Brand Lab',
    tagline: 'Launch. Test. Activate.',
    description: 'Short-term, high-impact retail and activation spaces for product launches, limited-edition drops, and brand experiments at scale.',
    minSize: '150 SF',
    location: 'Flexible Zones — All Levels',
    demographics: '40M+ annual visitors reached',
    cta: 'Request Pop-Up Info',
    color: '#A78BFA',
  },
];
