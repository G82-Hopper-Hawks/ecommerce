const products = [
  {
    id: 1,
    name: 'Windforce',
    price: 4.99,
    image: '/weapons/windforce.png',
    theme: 'fantasy',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis sollicitudin ante, eu pretium justo semper vitae. Nulla nec purus nec elit faucibus laoreet aliquam non libero. Fusce laoreet nisl lacus, sed auctor velit scelerisque at. Etiam nulla justo, hendrerit non elementum vitae, condimentum sed turpis. Aliquam vulputate, massa cursus scelerisque sodales, dolor erat feugiat ipsum, eget pulvinar eros purus nec purus. Pellentesque sit amet pharetra lorem. Proin mattis feugiat dapibus. Fusce non lorem vestibulum, suscipit arcu id, interdum est. Quisque vitae magna libero. Sed hendrerit libero sapien, sed tempor ipsum mollis eu. Cras pellentesque velit vel sapien semper pulvinar. Sed ipsum ante, convallis eget varius nec, ullamcorper nec nulla. In ut metus tellus. Integer rhoncus dapibus neque, at aliquet diam varius elementum. Vivamus in leo tristique, suscipit sem eu, blandit risus.'
  },
  {
    id: 2,
    name: 'Wand of Orcus',
    price: 14.99,
    image: '/weapons/wandoforcus.jpg',
    theme: 'fantasy',
    description: 'Nulla venenatis ex et ipsum sollicitudin, vitae placerat leo finibus. Nulla rhoncus suscipit finibus. Fusce sed mi nunc. Nullam non egestas nisi, non interdum est. Ut elementum eu dui quis blandit. In cursus ipsum pharetra ultricies pharetra. Cras eu magna ipsum. Ut malesuada condimentum elementum. Vestibulum pretium porttitor leo vel ullamcorper.'
  },
  {
    id: 3,
    name: 'Sting',
    price: 41.99,
    image: '/weapons/sting-sword.jpg',
    theme: 'fantasy',
    description: 'Fusce interdum felis a faucibus lobortis. Aenean turpis erat, accumsan et aliquam eget, consectetur ullamcorper arcu. Ut id elementum urna, et molestie ante. Donec sed enim augue. Donec in pellentesque massa. Nulla mollis lacus et vehicula feugiat. Donec vitae sodales magna. Aenean egestas at quam vitae condimentum. Morbi ac pulvinar lacus, ac ullamcorper metus. Nam sapien nunc, dapibus ac arcu sit amet, lobortis finibus tellus. Duis sem turpis, viverra sit amet aliquet vel, suscipit in orci. Pellentesque vel diam sed ipsum consectetur egestas eu sit amet justo.'
  },
  {
    id: 4,
    name: 'Sonic Screwdriver',
    price: 2.99,
    image: '/weapons/sonicscrewdriver.jpg',
    theme: 'science-fiction',
    description: 'Vivamus a nisi tincidunt, ultricies odio non, scelerisque diam. Maecenas laoreet diam at lorem rutrum, id condimentum sapien fringilla. Aenean tristique urna tortor, nec dictum augue suscipit at. In diam neque, mattis quis turpis at, luctus commodo arcu. Suspendisse rhoncus est lorem, ac pharetra augue molestie sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque fringilla, risus id vulputate mollis, lectus dolor tempor erat, at vehicula turpis mauris non eros.'
  },
  {
    id: 5,
    name: 'Master Sword',
    price: 2.99,
    image: '/weapons/mastersword.jpg',
    theme: 'fantasy',
    description: 'Vivamus a nisi tincidunt, ultricies odio non, scelerisque diam. Maecenas laoreet diam at lorem rutrum, id condimentum sapien fringilla. Aenean tristique urna tortor, nec dictum augue suscipit at. In diam neque, mattis quis turpis at, luctus commodo arcu. Suspendisse rhoncus est lorem, ac pharetra augue molestie sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque fringilla, risus id vulputate mollis, lectus dolor tempor erat, at vehicula turpis mauris non eros.'
  },
  {
    id: 6,
    name: 'Lightsaber',
    price: 2.99,
    image: '/weapons/lightsaber.jpg',
    theme: 'science-fiction',
    description: 'Vivamus a nisi tincidunt, ultricies odio non, scelerisque diam. Maecenas laoreet diam at lorem rutrum, id condimentum sapien fringilla. Aenean tristique urna tortor, nec dictum augue suscipit at. In diam neque, mattis quis turpis at, luctus commodo arcu. Suspendisse rhoncus est lorem, ac pharetra augue molestie sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque fringilla, risus id vulputate mollis, lectus dolor tempor erat, at vehicula turpis mauris non eros.'
  },
  {
    id: 7,
    name: 'Elder Wand',
    price: 2.99,
    image: '/weapons/elderwand.jpg',
    theme: 'fantasy',
    description: 'Vivamus a nisi tincidunt, ultricies odio non, scelerisque diam. Maecenas laoreet diam at lorem rutrum, id condimentum sapien fringilla. Aenean tristique urna tortor, nec dictum augue suscipit at. In diam neque, mattis quis turpis at, luctus commodo arcu. Suspendisse rhoncus est lorem, ac pharetra augue molestie sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque fringilla, risus id vulputate mollis, lectus dolor tempor erat, at vehicula turpis mauris non eros.'
  },
  {
    id: 8,
    name: "Batl'eth",
    price: 2.99,
    image: '/weapons/batleth.jpg',
    theme: 'science-fiction',
    description: 'Vivamus a nisi tincidunt, ultricies odio non, scelerisque diam. Maecenas laoreet diam at lorem rutrum, id condimentum sapien fringilla. Aenean tristique urna tortor, nec dictum augue suscipit at. In diam neque, mattis quis turpis at, luctus commodo arcu. Suspendisse rhoncus est lorem, ac pharetra augue molestie sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque fringilla, risus id vulputate mollis, lectus dolor tempor erat, at vehicula turpis mauris non eros.'
  },
  {
    id: 9,
    name: 'Batarang',
    price: 2.99,
    image: '/weapons/batarang.jpg',
    theme: 'comic',
    description: 'Vivamus a nisi tincidunt, ultricies odio non, scelerisque diam. Maecenas laoreet diam at lorem rutrum, id condimentum sapien fringilla. Aenean tristique urna tortor, nec dictum augue suscipit at. In diam neque, mattis quis turpis at, luctus commodo arcu. Suspendisse rhoncus est lorem, ac pharetra augue molestie sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque fringilla, risus id vulputate mollis, lectus dolor tempor erat, at vehicula turpis mauris non eros.'
  },
  {
    id: 10,
    name: 'Buster Sword',
    price: 2.99,
    image: '/weapons/buster-sword.jpg',
    theme: 'fantasy',
    description: 'Vivamus a nisi tincidunt, ultricies odio non, scelerisque diam. Maecenas laoreet diam at lorem rutrum, id condimentum sapien fringilla. Aenean tristique urna tortor, nec dictum augue suscipit at. In diam neque, mattis quis turpis at, luctus commodo arcu. Suspendisse rhoncus est lorem, ac pharetra augue molestie sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque fringilla, risus id vulputate mollis, lectus dolor tempor erat, at vehicula turpis mauris non eros.'
  },
  {
    id: 11,
    name: "Captain's Shield",
    price: 2.99,
    image: '/weapons/Captain_America_Shield.png',
    theme: 'comic',
    description: 'Vivamus a nisi tincidunt, ultricies odio non, scelerisque diam. Maecenas laoreet diam at lorem rutrum, id condimentum sapien fringilla. Aenean tristique urna tortor, nec dictum augue suscipit at. In diam neque, mattis quis turpis at, luctus commodo arcu. Suspendisse rhoncus est lorem, ac pharetra augue molestie sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque fringilla, risus id vulputate mollis, lectus dolor tempor erat, at vehicula turpis mauris non eros.'
  },
  {
    id: 12,
    name: 'Excalibur',
    price: 2.99,
    image: '/weapons/excalibur.jpg',
    theme: 'fantasy',
    description: 'Vivamus a nisi tincidunt, ultricies odio non, scelerisque diam. Maecenas laoreet diam at lorem rutrum, id condimentum sapien fringilla. Aenean tristique urna tortor, nec dictum augue suscipit at. In diam neque, mattis quis turpis at, luctus commodo arcu. Suspendisse rhoncus est lorem, ac pharetra augue molestie sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque fringilla, risus id vulputate mollis, lectus dolor tempor erat, at vehicula turpis mauris non eros.'
  },
  {
    id: 13,
    name: 'Gravity Gun',
    price: 2.99,
    image: '/weapons/gravity-gun.jpg',
    theme: 'science-fiction',
    description: 'Vivamus a nisi tincidunt, ultricies odio non, scelerisque diam. Maecenas laoreet diam at lorem rutrum, id condimentum sapien fringilla. Aenean tristique urna tortor, nec dictum augue suscipit at. In diam neque, mattis quis turpis at, luctus commodo arcu. Suspendisse rhoncus est lorem, ac pharetra augue molestie sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque fringilla, risus id vulputate mollis, lectus dolor tempor erat, at vehicula turpis mauris non eros.'
  },
  {
    id: 14,
    name: 'Green Power Ring',
    price: 2.99,
    image: '/weapons/greenpowerring.png',
    theme: 'comic',
    description: 'Vivamus a nisi tincidunt, ultricies odio non, scelerisque diam. Maecenas laoreet diam at lorem rutrum, id condimentum sapien fringilla. Aenean tristique urna tortor, nec dictum augue suscipit at. In diam neque, mattis quis turpis at, luctus commodo arcu. Suspendisse rhoncus est lorem, ac pharetra augue molestie sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque fringilla, risus id vulputate mollis, lectus dolor tempor erat, at vehicula turpis mauris non eros.'
  },
  {
    id: 15,
    name: 'Infinity Gauntlet',
    price: 2.99,
    image: '/weapons/infinitygauntlet.jpg',
    theme: 'comic',
    description: 'Vivamus a nisi tincidunt, ultricies odio non, scelerisque diam. Maecenas laoreet diam at lorem rutrum, id condimentum sapien fringilla. Aenean tristique urna tortor, nec dictum augue suscipit at. In diam neque, mattis quis turpis at, luctus commodo arcu. Suspendisse rhoncus est lorem, ac pharetra augue molestie sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque fringilla, risus id vulputate mollis, lectus dolor tempor erat, at vehicula turpis mauris non eros.'
  },
  {
    id: 16,
    name: 'Keyblade',
    price: 2.99,
    image: '/weapons/keyblade.jpg',
    theme: 'fantasy',
    description: 'Vivamus a nisi tincidunt, ultricies odio non, scelerisque diam. Maecenas laoreet diam at lorem rutrum, id condimentum sapien fringilla. Aenean tristique urna tortor, nec dictum augue suscipit at. In diam neque, mattis quis turpis at, luctus commodo arcu. Suspendisse rhoncus est lorem, ac pharetra augue molestie sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque fringilla, risus id vulputate mollis, lectus dolor tempor erat, at vehicula turpis mauris non eros.'
  },
  {
    id: 17,
    name: 'Mjolnir',
    price: 2.99,
    image: '/weapons/mjolnir.jpg',
    theme: 'comic',
    description: 'Vivamus a nisi tincidunt, ultricies odio non, scelerisque diam. Maecenas laoreet diam at lorem rutrum, id condimentum sapien fringilla. Aenean tristique urna tortor, nec dictum augue suscipit at. In diam neque, mattis quis turpis at, luctus commodo arcu. Suspendisse rhoncus est lorem, ac pharetra augue molestie sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque fringilla, risus id vulputate mollis, lectus dolor tempor erat, at vehicula turpis mauris non eros.'
  },
  {
    id: 18,
    name: 'Needler',
    price: 2.99,
    image: '/weapons/needler.jpg',
    theme: 'science-fiction',
    description: 'Vivamus a nisi tincidunt, ultricies odio non, scelerisque diam. Maecenas laoreet diam at lorem rutrum, id condimentum sapien fringilla. Aenean tristique urna tortor, nec dictum augue suscipit at. In diam neque, mattis quis turpis at, luctus commodo arcu. Suspendisse rhoncus est lorem, ac pharetra augue molestie sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque fringilla, risus id vulputate mollis, lectus dolor tempor erat, at vehicula turpis mauris non eros.'
  },
  {
    id: 19,
    name: 'Noisy Cricket',
    price: 2.99,
    image: '/weapons/noisycricket.jpg',
    theme: 'science-fiction',
    description: 'Vivamus a nisi tincidunt, ultricies odio non, scelerisque diam. Maecenas laoreet diam at lorem rutrum, id condimentum sapien fringilla. Aenean tristique urna tortor, nec dictum augue suscipit at. In diam neque, mattis quis turpis at, luctus commodo arcu. Suspendisse rhoncus est lorem, ac pharetra augue molestie sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque fringilla, risus id vulputate mollis, lectus dolor tempor erat, at vehicula turpis mauris non eros.'
  }
]
