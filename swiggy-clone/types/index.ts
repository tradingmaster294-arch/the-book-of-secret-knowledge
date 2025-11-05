export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  addresses: Address[];
  createdAt: string;
}

export interface Address {
  id: string;
  label: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  isDefault: boolean;
}

export interface Restaurant {
  id: string;
  name: string;
  description: string;
  cuisine: string[];
  rating: number;
  deliveryTime: string;
  priceForTwo: number;
  image: string;
  isOpen: boolean;
  address: string;
}

export interface MenuItem {
  id: string;
  restaurantId: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isVeg: boolean;
  isAvailable: boolean;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  restaurant: Restaurant;
}

export interface Order {
  id: string;
  userId: string;
  restaurant: Restaurant;
  items: OrderItem[];
  totalAmount: number;
  deliveryAddress: Address;
  status: OrderStatus;
  createdAt: string;
  updatedAt: string;
}

export interface OrderItem {
  menuItem: MenuItem;
  quantity: number;
  price: number;
}

export type OrderStatus = 'placed' | 'preparing' | 'out_for_delivery' | 'delivered' | 'cancelled';

export interface AuthResponse {
  success: boolean;
  token?: string;
  user?: User;
  message?: string;
}
