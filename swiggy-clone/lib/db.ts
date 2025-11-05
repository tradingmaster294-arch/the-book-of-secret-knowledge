import { User, Order } from '@/types';
import { hashPassword } from './auth';

// In-memory database simulation
let users: User[] = [];
let orders: Order[] = [];

export const db = {
  users: {
    findByEmail: (email: string): User | undefined => {
      return users.find(u => u.email === email);
    },
    findById: (id: string): User | undefined => {
      return users.find(u => u.id === id);
    },
    create: (userData: Omit<User, 'id' | 'createdAt'> & { password: string }): User => {
      const user: User = {
        id: Date.now().toString(),
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        addresses: userData.addresses || [],
        createdAt: new Date().toISOString()
      };
      users.push(user);
      // Store password separately (in real app, this would be in a separate table)
      (user as any).password = hashPassword(userData.password);
      return user;
    },
    update: (id: string, updates: Partial<User>): User | undefined => {
      const index = users.findIndex(u => u.id === id);
      if (index === -1) return undefined;
      users[index] = { ...users[index], ...updates };
      return users[index];
    },
    getPassword: (email: string): string | undefined => {
      const user = users.find(u => u.email === email) as any;
      return user?.password;
    }
  },
  orders: {
    findByUserId: (userId: string): Order[] => {
      return orders.filter(o => o.userId === userId).sort((a, b) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    },
    findById: (id: string): Order | undefined => {
      return orders.find(o => o.id === id);
    },
    create: (orderData: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>): Order => {
      const order: Order = {
        ...orderData,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      orders.push(order);
      return order;
    },
    updateStatus: (id: string, status: Order['status']): Order | undefined => {
      const index = orders.findIndex(o => o.id === id);
      if (index === -1) return undefined;
      orders[index].status = status;
      orders[index].updatedAt = new Date().toISOString();
      return orders[index];
    }
  }
};

// Initialize with a demo user
db.users.create({
  name: 'Demo User',
  email: 'demo@swiggy.com',
  phone: '1234567890',
  password: 'demo123',
  addresses: [
    {
      id: '1',
      label: 'Home',
      street: '123 Demo Street',
      city: 'Demo City',
      state: 'Demo State',
      zipCode: '123456',
      isDefault: true
    }
  ]
});
