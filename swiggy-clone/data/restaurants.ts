import { Restaurant, MenuItem } from '@/types';

export const restaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Pizza Paradise',
    description: 'Authentic Italian pizzas with fresh ingredients',
    cuisine: ['Italian', 'Pizza'],
    rating: 4.5,
    deliveryTime: '30-40 mins',
    priceForTwo: 600,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=600&fit=crop',
    isOpen: true,
    address: '123 Main Street, Downtown'
  },
  {
    id: '2',
    name: 'Burger Hub',
    description: 'Juicy burgers and crispy fries',
    cuisine: ['American', 'Fast Food'],
    rating: 4.2,
    deliveryTime: '25-35 mins',
    priceForTwo: 400,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop',
    isOpen: true,
    address: '456 Oak Avenue, City Center'
  },
  {
    id: '3',
    name: 'Spice Garden',
    description: 'Traditional Indian cuisine with authentic spices',
    cuisine: ['Indian', 'North Indian'],
    rating: 4.7,
    deliveryTime: '35-45 mins',
    priceForTwo: 500,
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=600&fit=crop',
    isOpen: true,
    address: '789 Spice Lane, Old Town'
  },
  {
    id: '4',
    name: 'Sushi Station',
    description: 'Fresh sushi and Japanese delicacies',
    cuisine: ['Japanese', 'Sushi'],
    rating: 4.6,
    deliveryTime: '40-50 mins',
    priceForTwo: 800,
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&h=600&fit=crop',
    isOpen: true,
    address: '321 Sakura Street, East Side'
  },
  {
    id: '5',
    name: 'Taco Fiesta',
    description: 'Authentic Mexican street food',
    cuisine: ['Mexican', 'Tacos'],
    rating: 4.3,
    deliveryTime: '20-30 mins',
    priceForTwo: 350,
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&h=600&fit=crop',
    isOpen: true,
    address: '654 Fiesta Boulevard, West End'
  },
  {
    id: '6',
    name: 'Noodle House',
    description: 'Asian noodles and stir-fry specialties',
    cuisine: ['Chinese', 'Asian'],
    rating: 4.4,
    deliveryTime: '30-40 mins',
    priceForTwo: 450,
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop',
    isOpen: true,
    address: '987 Dragon Road, Chinatown'
  }
];

export const menuItems: MenuItem[] = [
  // Pizza Paradise
  {
    id: 'm1',
    restaurantId: '1',
    name: 'Margherita Pizza',
    description: 'Classic pizza with tomato sauce, mozzarella, and fresh basil',
    price: 299,
    category: 'Pizza',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop',
    isVeg: true,
    isAvailable: true
  },
  {
    id: 'm2',
    restaurantId: '1',
    name: 'Pepperoni Pizza',
    description: 'Loaded with pepperoni and extra cheese',
    price: 399,
    category: 'Pizza',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop',
    isVeg: false,
    isAvailable: true
  },
  {
    id: 'm3',
    restaurantId: '1',
    name: 'Garlic Bread',
    description: 'Crispy bread with garlic butter and herbs',
    price: 149,
    category: 'Sides',
    image: 'https://images.unsplash.com/photo-1573140401552-388e3ead0b5e?w=400&h=300&fit=crop',
    isVeg: true,
    isAvailable: true
  },
  // Burger Hub
  {
    id: 'm4',
    restaurantId: '2',
    name: 'Classic Beef Burger',
    description: 'Juicy beef patty with lettuce, tomato, and special sauce',
    price: 249,
    category: 'Burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
    isVeg: false,
    isAvailable: true
  },
  {
    id: 'm5',
    restaurantId: '2',
    name: 'Veggie Burger',
    description: 'Plant-based patty with fresh vegetables',
    price: 199,
    category: 'Burgers',
    image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400&h=300&fit=crop',
    isVeg: true,
    isAvailable: true
  },
  {
    id: 'm6',
    restaurantId: '2',
    name: 'French Fries',
    description: 'Crispy golden fries with seasoning',
    price: 99,
    category: 'Sides',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop',
    isVeg: true,
    isAvailable: true
  },
  // Spice Garden
  {
    id: 'm7',
    restaurantId: '3',
    name: 'Butter Chicken',
    description: 'Creamy tomato-based curry with tender chicken',
    price: 349,
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop',
    isVeg: false,
    isAvailable: true
  },
  {
    id: 'm8',
    restaurantId: '3',
    name: 'Paneer Tikka Masala',
    description: 'Grilled cottage cheese in spicy gravy',
    price: 299,
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop',
    isVeg: true,
    isAvailable: true
  },
  {
    id: 'm9',
    restaurantId: '3',
    name: 'Garlic Naan',
    description: 'Soft bread with garlic and butter',
    price: 49,
    category: 'Breads',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop',
    isVeg: true,
    isAvailable: true
  },
  // Sushi Station
  {
    id: 'm10',
    restaurantId: '4',
    name: 'California Roll',
    description: 'Crab, avocado, and cucumber roll',
    price: 399,
    category: 'Rolls',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop',
    isVeg: false,
    isAvailable: true
  },
  {
    id: 'm11',
    restaurantId: '4',
    name: 'Vegetable Tempura',
    description: 'Crispy fried vegetables with dipping sauce',
    price: 299,
    category: 'Appetizers',
    image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?w=400&h=300&fit=crop',
    isVeg: true,
    isAvailable: true
  },
  // Taco Fiesta
  {
    id: 'm12',
    restaurantId: '5',
    name: 'Chicken Tacos',
    description: 'Three soft tacos with grilled chicken and salsa',
    price: 249,
    category: 'Tacos',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop',
    isVeg: false,
    isAvailable: true
  },
  {
    id: 'm13',
    restaurantId: '5',
    name: 'Veggie Burrito',
    description: 'Large burrito with beans, rice, and vegetables',
    price: 199,
    category: 'Burritos',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop',
    isVeg: true,
    isAvailable: true
  },
  // Noodle House
  {
    id: 'm14',
    restaurantId: '6',
    name: 'Hakka Noodles',
    description: 'Stir-fried noodles with vegetables',
    price: 199,
    category: 'Noodles',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop',
    isVeg: true,
    isAvailable: true
  },
  {
    id: 'm15',
    restaurantId: '6',
    name: 'Chicken Fried Rice',
    description: 'Wok-tossed rice with chicken and vegetables',
    price: 249,
    category: 'Rice',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop',
    isVeg: false,
    isAvailable: true
  }
];
