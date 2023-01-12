import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Basir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'League of Legends 1',
      slug: 'league-of-legends-1',
      category: 'Moba',
      image: '/images/a1.jpg', // 679px × 829px
      price: 120,
      countInStock: 10,
      brand: 'Riot',
      rating: 4,
      numReviews: 7,
      description: 'high quality shirt',
    },
    {
      // _id: '2',
      name: 'League of Legends 2',
      slug: 'league-of-legends-2',
      category: 'Moba',
      image: '/images/a2.jpg',
      price: 250,
      countInStock: 0,
      brand: 'Riot',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // _id: '3',
      name: 'League of Legends 3',
      slug: 'league-of-legends-3',
      category: 'Moba',
      image: '/images/a3.jpg',
      price: 25,
      countInStock: 15,
      brand: 'Riot',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      // _id: '4',
      name: 'League of Legends 4',
      slug: 'league-of-legends-4',
      category: 'Moba',
      image: '/images/a4.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Riot',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
  ],
};
export default data;
