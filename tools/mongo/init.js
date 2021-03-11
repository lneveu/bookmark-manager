/**
 * Create a user for the "bookmark-manager" db.
 * Seed the "bookmarks" collection.
 */
db.createUser({
  user: "default",
  pwd: "password",
  roles: [
    {
      role: "readWrite",
      db: "bookmark-manager",
    },
  ],
});

db.bookmarks.insertMany([
  {
    type: "photo",
    tags: ["paysage", "suisse", "chateau"],
    provider: "flickr",
    url: "https://www.flickr.com/photos/somabiswas/50975160573/",
    title: "Chillon Castle (Château de Chillon) at sunset",
    author: "somabiswas",
    width: 1024,
    height: 683,
    createdAt: "2021-03-09T17:25:55.261Z",
    updatedAt: "2021-03-09T17:25:55.261Z",
  },
  {
    type: "photo",
    tags: ["paysage", "coucher de soleil"],
    provider: "flickr",
    url: "https://www.flickr.com/photos/136327125@N04/25166403253/",
    title: "If this evening was The last",
    author: "gcarabin",
    width: 1024,
    height: 576,
    createdAt: "2021-03-09T17:26:35.503Z",
    updatedAt: "2021-03-09T17:26:35.503Z",
  },
  {
    type: "photo",
    tags: ["nature"],
    provider: "flickr",
    url: "https://www.flickr.com/photos/ploeckl/30872775781/",
    title: "Painted by Nature",
    author: "hploeckl",
    width: 1024,
    height: 684,
    createdAt: "2021-03-09T17:28:44.883Z",
    updatedAt: "2021-03-09T17:28:44.883Z",
  },
  {
    type: "photo",
    tags: ["street"],
    provider: "flickr",
    url: "https://www.flickr.com/photos/1stbase/21974387751/",
    title: "The Blue Street",
    author: "D Budd",
    width: 678,
    height: 1024,
    createdAt: "2021-03-09T17:29:30.828Z",
    updatedAt: "2021-03-09T17:29:30.828Z",
  },
  {
    type: "photo",
    tags: ["street", "toronto"],
    provider: "flickr",
    url: "https://www.flickr.com/photos/gregumiecki/33901527098/",
    title: "Queen St. W.,Toronto",
    author: "sonicgregu",
    width: 1024,
    height: 684,
    createdAt: "2021-03-09T17:29:43.822Z",
    updatedAt: "2021-03-09T17:29:43.822Z",
  },
  {
    type: "photo",
    tags: ["bw"],
    provider: "flickr",
    url: "https://www.flickr.com/photos/ljsilver71/32224111020/",
    title: "BW Tunnel View",
    author: "Riccardo Maria Mantero",
    width: 1024,
    height: 665,
    createdAt: "2021-03-09T17:30:50.938Z",
    updatedAt: "2021-03-09T17:30:50.938Z",
  },
  {
    type: "photo",
    tags: ["bw"],
    provider: "flickr",
    url: "https://www.flickr.com/photos/mfahad/26663296133/",
    title: "Beautiful structure",
    author: "Mubarak Fahad",
    width: 1024,
    height: 768,
    createdAt: "2021-03-09T17:30:57.267Z",
    updatedAt: "2021-03-09T17:30:57.267Z",
  },
  {
    type: "photo",
    tags: ["bw"],
    provider: "flickr",
    url: "https://www.flickr.com/photos/132334520@N03/25903154662/",
    title: "point of view",
    author: "fhenkemeyer",
    width: 1024,
    height: 683,
    createdAt: "2021-03-09T17:31:04.673Z",
    updatedAt: "2021-03-09T17:31:04.673Z",
  },
  {
    type: "photo",
    tags: ["spacex"],
    provider: "flickr",
    url: "https://www.flickr.com/photos/thom_astro/50220609828/",
    title: "Cockput training",
    author: "Thomas Pesquet",
    width: 1024,
    height: 630,
    createdAt: "2021-03-09T17:32:08.098Z",
    updatedAt: "2021-03-09T17:32:08.098Z",
  },
  {
    type: "photo",
    tags: ["spacex"],
    provider: "flickr",
    url: "https://www.flickr.com/photos/summerwind/40268516453/",
    title: "SpaceX Headquarters",
    author: "summerwind",
    width: 1024,
    height: 683,
    createdAt: "2021-03-09T17:32:16.340Z",
    updatedAt: "2021-03-09T17:32:16.340Z",
  },
  {
    type: "photo",
    tags: ["spacex", "crew2", "pesquet"],
    provider: "flickr",
    url: "https://www.flickr.com/photos/thom_astro/50890107502/",
    title: "Crew-2 training",
    author: "Thomas Pesquet",
    width: 1024,
    height: 576,
    createdAt: "2021-03-09T17:33:33.997Z",
    updatedAt: "2021-03-09T17:33:33.997Z",
  },
  {
    type: "photo",
    tags: ["spacex", "crew2", "pesquet"],
    provider: "flickr",
    url: "https://www.flickr.com/photos/thom_astro/50932890457/",
    title: "Expedition 64 offical portrait",
    author: "Thomas Pesquet",
    width: 1024,
    height: 819,
    createdAt: "2021-03-09T17:34:04.501Z",
    updatedAt: "2021-03-09T17:34:04.501Z",
  },
  {
    type: "photo",
    tags: [],
    provider: "flickr",
    url: "https://www.flickr.com/photos/49448072@N07/37801728036",
    title: "Tree Tunnel",
    author: "Glenn 07",
    width: 1024,
    height: 683,
    createdAt: "2021-03-09T17:35:08.095Z",
    updatedAt: "2021-03-09T17:35:08.095Z",
  },
  {
    type: "video",
    tags: [],
    provider: "vimeo",
    url: "https://vimeo.com/24107860",
    title: "Battles | Wall Street | A Take Away Show",
    author: "La Blogotheque",
    width: 480,
    height: 270,
    duration: 618,
    createdAt: "2021-03-09T17:36:22.978Z",
    updatedAt: "2021-03-09T17:36:22.978Z",
  },
  {
    type: "video",
    tags: ["voyage"],
    provider: "vimeo",
    url: "https://vimeo.com/45901503",
    title: "Road Trip USA",
    author: "Menassier Gabriel ///mg image",
    width: 480,
    height: 214,
    duration: 226,
    createdAt: "2021-03-09T17:36:39.235Z",
    updatedAt: "2021-03-09T17:36:39.235Z",
  },
  {
    type: "video",
    tags: ["voyage"],
    provider: "vimeo",
    url: "https://vimeo.com/143512551",
    title: "LANDS OF WIND",
    author: "Baptiste Lanne",
    width: 480,
    height: 270,
    duration: 276,
    createdAt: "2021-03-09T17:36:52.639Z",
    updatedAt: "2021-03-09T17:36:52.639Z",
  },
  {
    type: "video",
    tags: ["sport"],
    provider: "vimeo",
    url: "https://vimeo.com/275506930",
    title: "RJ Ripper",
    author: "Joey Schusler",
    width: 426,
    height: 180,
    duration: 1166,
    createdAt: "2021-03-09T17:37:23.409Z",
    updatedAt: "2021-03-09T17:37:23.409Z",
  },
  {
    type: "video",
    tags: ["sport"],
    provider: "vimeo",
    url: "https://vimeo.com/232302919",
    title: "ALPHA",
    author: "Öctagon",
    width: 426,
    height: 240,
    duration: 271,
    createdAt: "2021-03-09T17:37:43.545Z",
    updatedAt: "2021-03-09T17:37:43.545Z",
  },
  {
    type: "video",
    tags: [],
    provider: "vimeo",
    url: "https://vimeo.com/87452228",
    title: "ALAIN DUCASSE Le chocolat",
    author: "Simon Pénochet",
    width: 480,
    height: 270,
    duration: 212,
    createdAt: "2021-03-09T17:37:57.245Z",
    updatedAt: "2021-03-09T17:37:57.245Z",
  },
  {
    type: "video",
    tags: ["docu"],
    provider: "vimeo",
    url: "https://vimeo.com/54596361",
    title: "History of Nintendo",
    author: "Anthony Veloso",
    width: 480,
    height: 270,
    duration: 132,
    createdAt: "2021-03-09T17:38:21.482Z",
    updatedAt: "2021-03-09T17:38:21.482Z",
  },
  {
    type: "photo",
    tags: [],
    provider: "flickr",
    url:
      "https://www.flickr.com/photos/49448072@N07/24709942838/in/photostream/",
    title: "Regent Street Christmas Lights",
    author: "Glenn 07",
    width: 1024,
    height: 683,
    createdAt: "2021-03-09T17:50:17.184Z",
    updatedAt: "2021-03-09T17:50:17.184Z",
  },
]);