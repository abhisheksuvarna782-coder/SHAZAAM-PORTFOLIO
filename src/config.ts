// Site configuration — edit this file to update content, links, and metadata

export const siteConfig = {
  name: 'Shazaaam',
  wordmark: 'SHAZAAM.',
  tagline: 'NOT JUST CONTENT. A WHOLE DIFFERENT ENERGY.',
  description: 'Creator. Digital Culture. Technology. Entertainment.',
  bio: [
    'I\'m Shazaaam — a digital creator at the intersection of technology, culture, and entertainment.',
    'My content is built around curiosity: what\'s new, what\'s next, and what actually matters in the world of tech and digital culture.',
    'Every video, post, and story is crafted with purpose — to inform, entertain, and connect with people who want more than just surface-level content.',
  ],
  bioIntro: 'The creator bringing tech, culture, and raw energy to your feed.',
  instagram: 'https://instagram.com/callmeshazzam',
  instagramHandle: '@callmeshazzam',
  // Add your business email here when verified
  businessEmail: 'business@shazaaam.com', // ← REPLACE with your verified business email
  copyright: new Date().getFullYear(),
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Content', href: '#content' },
  { label: 'Videos', href: '#videos' },
  { label: 'Collaborate', href: '#collaborate' },
]

export const contentCategories = [
  {
    id: 1,
    label: 'Tech & Gadgets',
    title: 'The Latest. The Greatest.',
    description: 'Deep dives into the newest tech, gadgets, and gear that are genuinely worth your attention.',
    tag: 'TECHNOLOGY',
    color: '#B6FF00',
    image: 'tech',
  },
  {
    id: 2,
    label: 'Unboxing & Reviews',
    title: 'First Look. Real Talk.',
    description: 'Unfiltered unboxings and honest reviews — no sponsored bias, just the real experience.',
    tag: 'REVIEWS',
    color: '#7CFF6B',
    image: 'unboxing',
  },
  {
    id: 3,
    label: 'Digital Culture',
    title: 'What\'s Shaping the Internet.',
    description: 'Exploring the trends, moments, and movements defining our digital world right now.',
    tag: 'CULTURE',
    color: '#B6FF00',
    image: 'culture',
  },
  {
    id: 4,
    label: 'Entertainment & Lifestyle',
    title: 'Beyond the Algorithm.',
    description: 'The side of content that goes beyond specs and bytes — life, entertainment, and everything in between.',
    tag: 'LIFESTYLE',
    color: '#7CFF6B',
    image: 'lifestyle',
  },
]

// Featured videos — replace with actual YouTube video IDs when available
export const featuredVideos = [
  {
    id: 'featured',
    title: 'Featured Video',
    description: 'Latest drop from the feed',
    tag: 'FEATURED',
    // Replace with actual YouTube video ID
    youtubeId: null as string | null,
    youtubeUrl: 'https://youtube.com/@callmeshazzam',
    thumbnail: 'featured',
  },
  {
    id: 'v2',
    title: 'Tech Review',
    description: 'Honest take, no filter',
    tag: 'TECH',
    youtubeId: null as string | null,
    youtubeUrl: 'https://youtube.com/@callmeshazzam',
    thumbnail: 'review',
  },
  {
    id: 'v3',
    title: 'Unboxing',
    description: 'First impressions, live',
    tag: 'UNBOXING',
    youtubeId: null as string | null,
    youtubeUrl: 'https://youtube.com/@callmeshazzam',
    thumbnail: 'unbox',
  },
  {
    id: 'v4',
    title: 'Digital Culture',
    description: 'What\'s trending and why it matters',
    tag: 'CULTURE',
    youtubeId: null as string | null,
    youtubeUrl: 'https://youtube.com/@callmeshazzam',
    thumbnail: 'culture',
  },
]

export const socialLinks = [
  {
    platform: 'Instagram',
    handle: '@callmeshazzam',
    url: 'https://instagram.com/callmeshazzam',
    cta: 'FOLLOW THE JOURNEY ↗',
  },
]
