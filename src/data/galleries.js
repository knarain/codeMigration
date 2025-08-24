const galleries = [
  {
    id: 'olivia-and-liam',
    title: 'Olivia & Liam',
    date: 'October 2024',
    location: 'Brooklyn, NY',
    password: 'love',
  coverImage: process.env.PUBLIC_URL + '/images/_90A0225.JPG',
    images: [
      { src: 'https://images.unsplash.com/photo-1519741497674-611481863552', alt: 'Bride and groom kissing under a floral archway' },
      { src: 'https://images.unsplash.com/photo-1511285560921-4c92727bAD92', alt: 'Bride holding her bouquet' },
      { src: 'https://images.unsplash.com/photo-1543843194-521798319698', alt: 'Close-up of wedding dress details' },
      { src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8', alt: 'Couple walking on a beach' },
      { src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf', alt: 'Wedding cake with floral decorations' },
      { src: 'https://images.unsplash.com/photo-1550005809-91ad75fb315f', alt: 'Groom adjusting his bowtie' },
      { src: 'https://images.unsplash.com/photo-1595872018818-97555653a011', alt: 'Couple on a city rooftop at dusk' },
      { src: 'https://images.unsplash.com/photo-1513278974582-3e28c085a2a6', alt: 'Guests celebrating at the reception' },
    ],
  },
  {
    id: 'ava-and-noah',
    title: 'Ava & Noah',
    date: 'September 2024',
    location: 'Napa Valley, CA',
    password: 'wine',
  coverImage: process.env.PUBLIC_URL + '/images/_90A0225.JPG',
    images: [
      { src: 'https://images.unsplash.com/photo-1509610782354-321790381858', alt: 'Couple in a vineyard' },
      { src: 'https://images.unsplash.com/photo-1567684139246-c1a30403a436', alt: 'Bride and groom toasting with wine' },
      { src: 'https://images.unsplash.com/photo-1551651071-b4c06a3a69b3', alt: 'Outdoor wedding ceremony setup' },
      { src: 'https://images.unsplash.com/photo-1522008282246-054b651aa40c', alt: 'Close-up of wedding rings on a wine cork' },
      { src: 'https://images.unsplash.com/photo-1532702803836-4a626a454347', alt: 'Couple dancing under string lights' },
      { src: 'https://images.unsplash.com/photo-1569488231252-2a3894aa3a3b', alt: 'Bride laughing with her bridesmaids' },
    ],
  },
  {
    id: 'isabella-and-james',
    title: 'Isabella & James',
    date: 'August 2024',
    location: 'Santorini, Greece',
    password: 'sun',
  coverImage: process.env.PUBLIC_URL + '/images/_90A0225.JPG',
    images: [
      { src: 'https://images.unsplash.com/photo-1529933363985-8d9936a4a3a2', alt: 'Couple overlooking the Santorini caldera' },
      { src: 'https://images.unsplash.com/photo-1560895514-8691354a411d', alt: 'Bride in a flowing dress against a blue dome' },
      { src: 'https://images.unsplash.com/photo-1597380373445-aeea357633a3', alt: 'Intimate dinner setup with ocean view' },
      { src: 'https://images.unsplash.com/photo-1597380373445-aeea357633a3', alt: 'Close-up of the bride\'s bouquet with local flowers' },
      { src: 'https://images.unsplash.com/photo-1597380373445-aeea357633a3', alt: 'Couple walking through the narrow streets of Oia' },
    ],
  },
];

export const getGalleries = () => {
  const storedGalleries = localStorage.getItem('galleries');
  if (storedGalleries) {
    return JSON.parse(storedGalleries);
  }
  localStorage.setItem('galleries', JSON.stringify(galleries));
  return galleries;
};

export const getGalleryById = (id) => {
  const allGalleries = getGalleries();
  return allGalleries.find((gallery) => gallery.id === id);
};