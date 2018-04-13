const products = [
  {
    id: 1,
    name: 'Windforce',
    price: 100,
    image: '/weapons/windforce.jpg',
    theme: 'fantasy',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis sollicitudin ante, eu pretium justo semper vitae. Nulla nec purus nec elit faucibus laoreet aliquam non libero.'
  },
  {
    id: 2,
    name: 'Wand of Orcus',
    price: 700,
    image: '/weapons/wandoforcus.jpg',
    theme: 'fantasy',
    description: 'Nulla venenatis ex et ipsum sollicitudin, vitae placerat leo finibus. Nulla rhoncus suscipit finibus. Fusce sed mi nunc. Nullam non egestas nisi, non interdum est.'
  },
  {
    id: 3,
    name: 'Sting',
    price: 50,
    image: '/weapons/sting-sword.jpg',
    theme: 'fantasy',
    description: 'Fusce interdum felis a faucibus lobortis. Aenean turpis erat, accumsan et aliquam eget, consectetur ullamcorper arcu. Ut id elementum urna, et molestie ante.'
  },
  {
    id: 4,
    name: 'Sonic Screwdriver',
    price: 75,
    image: '/weapons/sonicscrewdriver.jpg',
    theme: 'science-fiction',
    description: 'Vivamus a nisi tincidunt, ultricies odio non, scelerisque diam. Maecenas laoreet diam at lorem rutrum, id condimentum sapien fringilla.'
  },
  {
    id: 5,
    name: 'Master Sword',
    price: 300,
    image: '/weapons/mastersword.jpg',
    theme: 'fantasy',
    description: 'Vivamus a nisi tincidunt, ultricies odio non, scelerisque diam. Maecenas laoreet diam at lorem rutrum, id condimentum sapien fringilla.'
  },
  {
    id: 6,
    name: 'Lightsaber',
    price: 800,
    image: '/weapons/lightsaber.jpg',
    theme: 'science-fiction',
    description: 'Vivamus a nisi tincidunt, ultricies odio non, scelerisque diam. Maecenas laoreet diam at lorem rutrum, id condimentum sapien fringilla.'
  },
  {
    id: 7,
    name: 'Elder Wand',
    price: 600,
    image: '/weapons/elderwand.jpg',
    theme: 'fantasy',
    description: 'Vivamus a nisi tincidunt, ultricies odio non, scelerisque diam. Maecenas laoreet diam at lorem rutrum, id condimentum sapien fringilla.'
  },
  {
    id: 8,
    name: "Batl'eth",
    price: 200,
    image: '/weapons/batleth.jpg',
    theme: 'science-fiction',
    description: 'Vivamus a nisi tincidunt, ultricies odio non, scelerisque diam. Maecenas laoreet diam at lorem rutrum, id condimentum sapien fringilla.'
  },
  {
    id: 9,
    name: 'Batarang',
    price: 50,
    image: '/weapons/batarang.jpg',
    theme: 'comic',
    description: 'Vivamus a nisi tincidunt, ultricies odio non, scelerisque diam. Maecenas laoreet diam at lorem rutrum, id condimentum sapien fringilla.'
  },
  {
    id: 10,
    name: 'Buster Sword',
    price: 300,
    image: '/weapons/buster-sword.jpg',
    theme: 'fantasy',
    description: 'Vivamus a nisi tincidunt, ultricies odio non, scelerisque diam. Maecenas laoreet diam at lorem rutrum, id condimentum sapien fringilla.'
  },
  {
    id: 11,
    name: "Captain's Shield",
    price: 400,
    image: '/weapons/Captain_America_Shield.png',
    theme: 'comic',
    description: 'Vivamus a nisi tincidunt, ultricies odio non, scelerisque diam. Maecenas laoreet diam at lorem rutrum, id condimentum sapien fringilla.'
  },
  {
    id: 12,
    name: 'Excalibur',
    price: 200,
    image: '/weapons/excalibur.jpg',
    theme: 'fantasy',
    description: 'Vivamus a nisi tincidunt, ultricies odio non, scelerisque diam. Maecenas laoreet diam at lorem rutrum, id condimentum sapien fringilla.'
  },
  {
    id: 13,
    name: 'Gravity Gun',
    price: 500,
    image: '/weapons/gravity-gun.jpg',
    theme: 'science-fiction',
    description: 'Vivamus a nisi tincidunt, ultricies odio non, scelerisque diam. Maecenas laoreet diam at lorem rutrum, id condimentum sapien fringilla.'
  },
  {
    id: 14,
    name: 'Green Power Ring',
    price: 1000,
    image: '/weapons/greenpowerring.png',
    theme: 'comic',
    description: 'Vivamus a nisi tincidunt, ultricies odio non, scelerisque diam. Maecenas laoreet diam at lorem rutrum, id condimentum sapien fringilla.'
  },
  {
    id: 15,
    name: 'Infinity Gauntlet',
    price: 10000,
    image: '/weapons/infinitygauntlet.jpg',
    theme: 'comic',
    description: 'Vivamus a nisi tincidunt, ultricies odio non, scelerisque diam. Maecenas laoreet diam at lorem rutrum, id condimentum sapien fringilla.'
  },
  {
    id: 16,
    name: 'Keyblade',
    price: 300,
    image: '/weapons/keyblade.jpg',
    theme: 'fantasy',
    description: 'Vivamus a nisi tincidunt, ultricies odio non, scelerisque diam. Maecenas laoreet diam at lorem rutrum, id condimentum sapien fringilla.'
  },
  {
    id: 17,
    name: 'Mjolnir',
    price: 1000,
    image: '/weapons/mjolnir.jpg',
    theme: 'comic',
    description: 'Vivamus a nisi tincidunt, ultricies odio non, scelerisque diam. Maecenas laoreet diam at lorem rutrum, id condimentum sapien fringilla.'
  },
  {
    id: 18,
    name: 'Needler',
    price: 500,
    image: '/weapons/needler.jpg',
    theme: 'science-fiction',
    description: 'Vivamus a nisi tincidunt, ultricies odio non, scelerisque diam. Maecenas laoreet diam at lorem rutrum, id condimentum sapien fringilla.'
  },
  {
    id: 19,
    name: 'Noisy Cricket',
    price: 700,
    image: '/weapons/noisycricket.jpg',
    theme: 'science-fiction',
    description: 'Vivamus a nisi tincidunt, ultricies odio non, scelerisque diam. Maecenas laoreet diam at lorem rutrum, id condimentum sapien fringilla.'
  }
]
