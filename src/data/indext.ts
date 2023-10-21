const user1: AjoUser = {
  created_at: new Date(),
  email: "user1@example.com",
  fname: "John",
  lname: "Doe",
  phoneNumber: "123-456-7890",
  isVerified: true,
  followerCount: 1000,
  followingCount: 500,
  photoRef: "user1-photo.jpg",
  productLiked: ["product1", "product2"],
  productInCart: ["product3", "product4"],
  purchased: [],
};

const user2: AjoUser = {
  created_at: new Date(),
  email: "user2@example.com",
  fname: "Alice",
  lname: "Smith",
  phoneNumber: "987-654-3210",
  isVerified: true,
  followerCount: 500,
  followingCount: 200,
  photoRef: "user2-photo.jpg",
  productLiked: ["product5", "product6"],
  productInCart: ["product7", "product8"],
  purchased: [],
};
let ajoProduct = [user1, user2];

const mockProductImages: AjoProductImage[] = [
  {
    id: 1,
    url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT4_gn7qKXEZaHMWvKhup1RFCZkWJf0g5jNNoek8ih5WitOiprKM0EinASeOfAD",
    alt: "Product 1 Image",
  },
  {
    id: 2,
    url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS0K1RRgdaYK-HQwG7XhKzk1LDOBE6ECHhbB87v4tumqhF8nz6Pyz6nNxqlP-WB",
    alt: "Product 2 Image",
  },
  {
    id: 3,
    url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSVG9oOxEhcIOQ2PIkcfByMm39R9e0SYYdZUhp5iOKxLJ95EqBYEtNYNkIuv2bY",
    alt: "Product 3 Image",
  },
  {
    id: 4,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIzS7TWVIkDscGOBp7Zv3_tTODD9cGvO3aJyi2F-Q2Pv6VMiefIIbljEe_fCQk",
    alt: "Product 4 Image",
  },
  {
    id: 5,
    url: "https://cdn.thewirecutter.com/wp-content/media/2023/05/running-shoes-2048px-9718.jpg",
    alt: "Product 5 Image",
  },
  {
    id: 6,
    url: "https://assets.adidas.com/images/w_600,f_auto,q_auto/4948095c2bd04bbcb5c2af1601154a02_9366/Stan_Smith_Lux_Shoes_White_HP2201_HM1.jpg",
    alt: "Product 6 Image",
  },
  {
    id: 7,
    url: "https://majestico.co.uk/cdn/shop/products/05A33714-DFDB-4C0D-8713-860E927CE9CB.png?v=1662312019",
    alt: "Product 7 Image",
  },
  {
    id: 8,
    url: "https://5.imimg.com/data5/SELLER/Default/2023/3/296636444/YW/TM/PQ/959716/kids-school-bag.png",
    alt: "Product 8 Image",
  },
  {
    id: 9,
    url: "https://www.craftingjeannie.com/wp-content/uploads/2020/10/school_note_craftingjeannie_1.jpg",
    alt: "Product 9 Image",
  },
  {
    id: 10,
    url: "https://images.squarespace-cdn.com/content/v1/5349ba13e4b095a3fb0ba65c/1632228569358-JEVXM375S82T9Y0HESOK/379BD224-E664-45F9-97D6-5888D3FBDC68_1_201_a.jpeg?format=1000w",
    alt: "Product 10 Image",
  },
];

//  ------------- Ajo product

const mockAjoProducts: AjoProduct[] = [
  {
    objectId: "product1",
    brandId: "1",
    description: "Product 1 Description",
    imageSrc: [mockProductImages[0]],
    imageAlt: "Product 1",
    href: "https://example.com/product1",
    name: "Product 1",
    rating: [
      { rate: 4.5, productId: "product1" },
      { rate: 4.5, productId: "product1" },
    ],
    reviewCount: 50,
    price: 99.99,
  },
  {
    brandId: "2",
    description: "Product 2 Description",
    imageSrc: [mockProductImages[1]],
    imageAlt: "Product 2",
    href: "https://example.com/product2",
    name: "Product 2",
    rating: [
      { rate: 4.5, productId: "product2" },
      { rate: 4.5, productId: "product2" },
    ],
    reviewCount: 35,
    price: 79.99,
  },
  {
    brandId: "3",
    description: "Product 3 Description",
    imageSrc: [mockProductImages[2]],
    imageAlt: "Product 3",
    href: "https://example.com/product3",
    name: "Product 3",
    rating: [
      { rate: 4.5, productId: "product3" },
      { rate: 4.5, productId: "product3" },
    ],
    reviewCount: 65,
    price: 129.99,
  },
  {
    brandId: "4",
    description: "Product 4 Description",
    imageSrc: [mockProductImages[3]],
    imageAlt: "Product 4",
    href: "https://example.com/product4",
    name: "Product 4",
    rating: [
      { rate: 4.5, productId: "product4" },
      { rate: 4.5, productId: "product4" },
    ],
    reviewCount: 28,
    price: 59.99,
  },
  {
    brandId: "5",
    description: "Product 5 Description",
    imageSrc: [mockProductImages[4]],
    imageAlt: "Product 5",
    href: "https://example.com/product5",
    name: "Product 5",
    rating: [
      { rate: 4.5, productId: "product5" },
      { rate: 4.5, productId: "product5" },
    ],
    reviewCount: 42,
    price: 89.99,
  },
  {
    brandId: "6",
    description: "Product 6 Description",
    imageSrc: [mockProductImages[5]],
    imageAlt: "Product 6",
    href: "https://example.com/product6",
    name: "Product 6",
    rating: [
      { rate: 4.5, productId: "product6" },
      { rate: 4.5, productId: "product6" },
    ],
    reviewCount: 55,
    price: 109.99,
  },
  {
    brandId: "7",
    description: "Product 7 Description",
    imageSrc: [mockProductImages[6]],
    imageAlt: "Product 7",
    href: "https://example.com/product7",
    name: "Product 7",
    rating: [
      { rate: 4.5, productId: "product7" },
      { rate: 4.5, productId: "product7" },
    ],
    reviewCount: 48,
    price: 94.99,
  },
  {
    brandId: "8",
    description: "Product 8 Description",
    imageSrc: [mockProductImages[7]],
    imageAlt: "Product 8",
    href: "https://example.com/product8",
    name: "Product 8",
    rating: [
      { rate: 4.5, productId: "product8" },
      { rate: 4.5, productId: "product8" },
    ],
    reviewCount: 72,
    price: 149.99,
  },
  {
    brandId: "9",
    description: "Product 9 Description",
    imageSrc: [mockProductImages[8]],
    imageAlt: "Product 9",
    href: "https://example.com/product9",
    name: "Product 9",
    rating: [
      { rate: 4.5, productId: "product9" },
      { rate: 4.5, productId: "product9" },
    ],
    reviewCount: 40,
    price: 69.99,
  },
  {
    brandId: "10",
    description: "Product 10 Description",
    imageSrc: [mockProductImages[9]],
    imageAlt: "Product 10",
    href: "https://example.com/product10",
    name: "Product 10",
    rating: [
      { rate: 4.5, productId: "product10" },
      { rate: 4.5, productId: "product10" },
    ],
    reviewCount: 60,
    price: 119.99,
  },
];

// ------------- testimonial

const testimonial1: TestimonialType = {
  id: "testimonial1",
  attribution: "Customer 1",
  quote: "This product is amazing!",
  img: "customer1-photo.jpg",
  name: "Customer 1",
};

const testimonial2: TestimonialType = {
  id: "testimonial2",
  attribution: "Customer 2",
  quote: "I love this brand!",
  img: "customer2-photo.jpg",
  name: "Customer 2",
};

const mockAjoTestimonials = [testimonial1, testimonial2];

// ---------- product reviews

const review1: ProductReviewType = {
  id: "review1",
  by: "User1",
  byImgRef: "user1-photo.jpg",
  quote: "Great product! I highly recommend it.",
  productId: "product1",
};

const review2: ProductReviewType = {
  id: "review2",
  by: "User2",
  byImgRef: "user2-photo.jpg",
  quote: "Not bad, but could be improved.",
  productId: "product2",
};
const mockAjoProductsReview = [review1, review2];

// ----------- brand
const brand1: Brand = {
  created_at: new Date(),
  brandName: "Brand 1",
  description: "A description of Brand 1",
  followerCount: 10000,
  followingCount: 500,
  owner: {
    created_at: new Date(),
    imageSrc: "brand1-owner.jpg",
    ownersName: "Brand Owner 1",
    ownersId: "brand1-owner",
    type: "brand",
  },
  associateOwners: [
    {
      created_at: new Date(),
      imageSrc: "associate-owner1.jpg",
      ownersName: "Associate Owner 1",
      ownersId: "associate-owner1",
      type: "brand",
    },
    {
      created_at: new Date(),
      imageSrc: "associate-owner2.jpg",
      ownersName: "Associate Owner 2",
      ownersId: "associate-owner2",
      type: "brand",
    },
  ],
};

const brand2: Brand = {
  created_at: new Date(),
  brandName: "Brand 2",
  description: "An updated description of Brand 2",
  followerCount: 8500,
  followingCount: 700,
  owner: {
    created_at: new Date(),
    imageSrc: "brand2-owner-updated.jpg",
    ownersName: "Updated Brand Owner 2",
    ownersId: "brand2-owner",
    type: "brand",
  },
  associateOwners: [
    {
      created_at: new Date(),
      imageSrc: "associate-owner2-1-updated.jpg",
      ownersName: "Updated Associate Owner 2-1",
      ownersId: "associate-owner2-1",
      type: "brand",
    },
    {
      created_at: new Date(),
      imageSrc: "associate-owner2-2-updated.jpg",
      ownersName: "Updated Associate Owner 2-2",
      ownersId: "associate-owner2-2",
      type: "brand",
    },
  ],
};

const brand3: Brand = {
  created_at: new Date(),
  brandName: "Brand 3",
  description: "A description of Brand 3",
  followerCount: 7500,
  followingCount: 600,
  owner: {
    created_at: new Date(),
    imageSrc: "brand3-owner.jpg",
    ownersName: "Brand Owner 3",
    ownersId: "brand3-owner",
    type: "brand",
  },
  associateOwners: [
    {
      created_at: new Date(),
      imageSrc: "associate-owner3-1.jpg",
      ownersName: "Associate Owner 3-1",
      ownersId: "associate-owner3-1",
      type: "brand",
    },
    {
      created_at: new Date(),
      imageSrc: "associate-owner3-2.jpg",
      ownersName: "Associate Owner 3-2",
      ownersId: "associate-owner3-2",
      type: "brand",
    },
  ],
};

const brand4: Brand = {
  created_at: new Date(),
  brandName: "Brand 4",
  description: "A description of Brand 4",
  followerCount: 9200,
  followingCount: 400,
  owner: {
    created_at: new Date(),
    imageSrc: "brand4-owner.jpg",
    ownersName: "Brand Owner 4",
    ownersId: "brand4-owner",
    type: "brand",
  },
  associateOwners: [
    {
      created_at: new Date(),
      imageSrc: "associate-owner4-1.jpg",
      ownersName: "Associate Owner 4-1",
      ownersId: "associate-owner4-1",
      type: "brand",
    },
    {
      created_at: new Date(),
      imageSrc: "associate-owner4-2.jpg",
      ownersName: "Associate Owner 4-2",
      ownersId: "associate-owner4-2",
      type: "brand",
    },
  ],
};

const mockAjoBrands = [brand1, brand2, brand3, brand4];

// ------------------ posts

const post1: Post = {
  created_at: new Date(),
  media: [
    {
      created_at: new Date(),
      url: "post1-media.jpg",
      thumbnail: "post1-media-thumb.jpg",
      type: "image",
    },
  ],

  caption: "Check out this amazing post!",
  contentText: "This is the content of the post.",
  usersId: "user1",

  aliasesReferences: [],
};

const post2: Post = {
  created_at: new Date(),
  media: [
    {
      created_at: new Date(),
      url: "post2-media.jpg",
      thumbnail: "post2-media-thumb.jpg",
      type: "image",
    },
    {
      created_at: new Date(),
      url: "post2-video.mp4",
      thumbnail: "post2-video-thumb.jpg",
      type: "video",
    },
  ],
  caption: "Another great post for you!",
  contentText: "More content in this post.",
  usersId: "user2",

  aliasesReferences: [],
};
const post3: Post = {
  created_at: new Date(),
  media: [
    {
      created_at: new Date(),
      url: "post3-media.jpg",
      thumbnail: "post3-media-thumb.jpg",
      type: "image",
    },
  ],
  caption: "Enjoying a beautiful day in the park!",
  contentText: "Spent the day outdoors and had a great time.",
  usersId: "user3",
  aliasesReferences: [],
};

const post4: Post = {
  created_at: new Date(),
  media: [
    {
      created_at: new Date(),
      url: "post4-media.jpg",
      thumbnail: "post4-media-thumb.jpg",
      type: "image",
    },
  ],
  caption: "Delicious food from my favorite restaurant!",
  contentText: "Tried some amazing dishes and loved them all.",
  usersId: "user4",
  aliasesReferences: [],
};

const post5: Post = {
  created_at: new Date(),
  media: [
    {
      created_at: new Date(),
      url: "post5-media.jpg",
      thumbnail: "post5-media-thumb.jpg",
      type: "image",
    },
  ],
  caption: "Exploring a new hiking trail today!",
  contentText: "The views are breathtaking, and the weather is perfect.",
  usersId: "user5",
  aliasesReferences: [],
};

const post6: Post = {
  created_at: new Date(),
  media: [
    {
      created_at: new Date(),
      url: "post6-media.jpg",
      thumbnail: "post6-media-thumb.jpg",
      type: "image",
    },
  ],
  caption: "Friday night movie marathon!",
  contentText: "Enjoying a cozy evening with some classic films.",
  usersId: "user6",
  aliasesReferences: [],
};

const post7: Post = {
  created_at: new Date(),
  media: [
    {
      created_at: new Date(),
      url: "post7-media.jpg",
      thumbnail: "post7-media-thumb.jpg",
      type: "image",
    },
  ],
  caption: "A productive day at the office!",
  contentText: "Getting work done and feeling accomplished.",
  usersId: "user7",
  aliasesReferences: [],
};

const mockAjoPosts = [post1, post2, post3, post4, post5, post6, post7];

export {
  mockAjoProducts,
  mockAjoPosts,
  mockAjoBrands,
  mockAjoProductsReview,
  mockAjoTestimonials,
  ajoProduct,
};
