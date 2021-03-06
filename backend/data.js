import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Achraf',
      email: 'achrafsallemsfaxiano@gmail.com',
      password: bcrypt.hashSync('azepoiwxcnbv1'),
      isAdmin: true,
    },
    {
      name: 'MedAmin',
      email: 'medamin@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Raf Station : Ryzen 9 5950X - RTX 3090 - SSD 1To - RAM 32Go',
      slug: 'Raf Station : Ryzen 9 5950X - RTX 3090 - SSD 1To - RAM 32Go',
      category: 'Superior PC',
      image: '/images/p1.jpg', // 679px × 829px
      price: 5099,
      countInStock: 10,
      brand: 'Rayzen',
      rating: 4.5,
      numReviews: 10,
      description: 'PROCESSEUR AMD Ryzen 9 5950X AM4 - Carte Graphique Palit GeForce RTX 3090 GameRock - CARTE MERE ASUS TUF GAMING X570-PLUS (WI-FI) - WATERCOOLING Cooler Master ML240L RGB - SSD Samsung 980 PRO PCle 4.0 NVM M.2 - RAM TEAMGROUP ELITE DDR4 32 GB (16x2) 3200 MHZ - Alimentation MWE Gold V2 FM 750W A/EU Cable - BOITIER COOLERMASTER MASTERCASE H500P ARGB',
    },
    {
      // _id: '2',
      name: 'Raf Station I9-12900KF - RTX 3090 Ti - SSD 1To - RAM 32Go',
      slug: 'Raf Station I9-12900KF - RTX 3090 Ti - SSD 1To - RAM 32Go',
      category: 'Superior PC',
      image: '/images/p2.jpg',
      price: 5299,
      countInStock: 0,
      brand: 'Intel',
      rating: 4.0,
      numReviews: 10,
      description: 'PROCESSEUR INTEL i9-12900KF - CARTE GRAPHIQUE PALIT GeForce RTX 3090 Ti GameRock - Carte mère ASUS PRIME Z690M-PLUS - Refroidisseur processeur MASTERLIQUID ML360 ILLUSION - Disque Dur Interne SSD 980 PRO PCle 4.0 NVM M.2 - BARRETTE MÉMOIRE TEAM GROUP ELITE DDR4 32 (16x2) GB 3200 MHZ - ALIMENTATION MWE Gold V2 FM 850W A/EU Cable - Boîtier Cooler Master COSMOS C700P Black Edition',
    },
    {
      // _id: '3',
      name: 'PC PORTABLE MSI GF65THIN 15.6" - I7-10750H - 16Go 512Go SSD - RTX 3060',
      slug: 'PC PORTABLE MSI GF65THIN 15.6" - I7-10750H - 16Go 512Go SSD - RTX 3060',
      category: 'Laptop',
      image: '/images/p3.jpg',
      price: 1299,
      countInStock: 15,
      brand: 'MSI',
      rating: 4.5,
      numReviews: 14,
      description: 'Ecran 15.6" Full HD 144 Hz - Processeur Intel Core i7-10750H, up to 5 GHz, 12 Mo de mémoire cache - Mémoire 16 Go </br> Disque 512 Go SSD M.2 - Carte graphique Nvidia GeForce RTX 3060, 6 Go de mémoire dédiée - Clavier rétroéclairé </br> Wifi - Bluetooth - USB 3.2 Type-C - 3x USB 3.2 - HDMI - RJ45 - Webcam HD +  -  Casque MSI H991 Offerte',
    },
    {
      // _id: '4',
      name: 'PROCESSEUR INTEL I9-12900KF',
      slug: 'PROCESSEUR INTEL I9-12900KF',
      category: 'Precossor',
      image: '/images/p5.jpg',
      price: 999,
      countInStock: 5,
      brand: 'Intel',
      rating: 4.5,
      numReviews: 10,
      description: 'Processeur 16 Cores / 24 Threads 8 Performance-Cores (3.2 GHz - 5.2 GHz) + 8 Efficient-Cores (2.4 GHz - 3.9 GHz) Cache L3 30 Mo + Cache L2 14 Mo Unlocked (coéfficient multiplicateur débloqué pour l"overclocking) IGP : Aucun Contrôleur mémoire : DDR4 / DDR5 Compatible PCI-E 5.0 TDP : 125W TDP max. (Turbo Power) : 241W',
    },
    {
      // _id: '5',
      name: 'PROCESSEUR AMD Ryzen 9 5950X AM4',
      slug: 'PROCESSEUR AMD Ryzen 9 5950X AM4',
      category: 'Processor',
      image: '/images/p6.jpg',
      price: 1099,
      countInStock: 5,
      brand: 'Rayzen',
      rating: 4.5,
      numReviews: 10,
      description: 'Nb de cœurs du CPU 16 Nb de threads 32 Fréquence de base 3.4GHz Fréquence Boost maximale Jusqu`à 4.9GHz Total cache L2 8MB / Total cache L3 64MB nveloppe thermique (TDP) nominale/TDP 105',
    },
  ],
};
export default data;
